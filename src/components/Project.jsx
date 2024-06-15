import { useState, useRef, forwardRef } from "react";

const Project = forwardRef(function Project(
  { tittle, description, dueDate, handleDeleteProject },
  ref
) {
  const [listOfTasks, setListOfTasks] = useState([]);
  const taskTittle = useRef();

  function handleAddingTasks(event) {
    event.preventDefault();
    ref.current = {
      ...ref.current,
      [tittle]: [...(ref.current[tittle] || []), taskTittle.current.value],
    };
    setListOfTasks([...listOfTasks, taskTittle.current.value]);
    taskTittle.current.value = "";
  }

  function handleDeleteTask(taskToDelete){
    ref.current = {
      ...ref.current,
      [tittle]: [...(ref.current[tittle].filter((task)=>taskToDelete!==task))],
    };
    setListOfTasks([...(listOfTasks.filter((task)=> task!==taskToDelete))]);
  }

  return (
    <>
      <div className="px-8 w-full flex flex-col gap-4">
        <div className="w-full flex justify-between items-center">
          <h2 className="font-bold text-[2rem]">{tittle}</h2>
          <button onClick={()=>handleDeleteProject(tittle)} className="font-semibold text-stone-600 text-[1.25rem] hover:text-red-600">
            Delete
          </button>
        </div>
        <p className="text-stone-400">{dueDate}</p>
        <p className="text-[1.25rem] text-stone-700">{description}</p>
        <div className="w-full h-[3px] bg-stone-400"></div> {/* line */}
        {/* Tasks */}
        <h3 className="font-bold text-[2rem] flex-">Tasks</h3>
        <form onSubmit={handleAddingTasks}>
          <input
            id="task"
            required
            ref={taskTittle}
            type="text"
            className="max-w-[300px] w-[45%] px-1 bg-stone-200 h-8 outline-none border-b-4 rounded-sm focus:outline-2 focus:outline-blue-600"
          />
          <label htmlFor="task">
            <button type="submit" className="font-semibold text-stone-600 mx-5">
              Add Task
            </button>
          </label>
        </form>
        {/* dynamic content to show list of tasks */}
        <ul className="bg-stone-100 w-full py-6 px-4">
          {(ref.current[tittle] || []).map((task, index) => (
            <li key={index} className="flex justify-between my-3">
              <p className="font-medium">{task}</p>
              <button onClick={()=>handleDeleteTask(task)} className="font-semibold text-stone-600 hover:text-red-600">
                Clear
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
});

export default Project;
