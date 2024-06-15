import CreateProject from "./components/CreateProject";
import AddProject from "./components/AddProject";
import Project from "./components/Project";
import { useState, useRef } from "react";

function App() {
  const [myState, setMyState] = useState({
    createNewProject: false,
    showProjectDesc: false,
    showAddProject: true,
  });

  const tasksList = useRef({});
  const projectsList = useRef([]);

  function handleDeleteProject(tittle) {
    tasksList.current[tittle] = [];
    projectsList.current = projectsList.current.filter((project) => project.tittle !== tittle);
    setMyState((prvState) => ({
      ...prvState,
      createNewProject: false,
      showProjectDesc: false,
      showAddProject: true,
    }));
  }

  function handleCreateNewProject() {
    setMyState((prvState) => ({
      ...prvState,
      createNewProject: true,
      showProjectDesc: false,
      showAddProject: false,
    }));
  }

  function handleCancelCreateNewProject() {
    setMyState((prvState) => ({
      ...prvState,
      createNewProject: false,
      showProjectDesc: false,
      showAddProject: true,
    }));
  }

  function handleProject(tittle, desc, dueDate) {
    setMyState((prvState) => ({
      ...prvState,
      createNewProject: false,
      showProjectDesc: { tittle: tittle, desc: desc, dueDate: dueDate },
      showAddProject: false,
    }));
  }

  function handleFormSubmit(tittle, desc, dueDate) {
    setMyState((prvState) => ({
      ...prvState,
      createNewProject: false,
      showProjectDesc: { tittle: tittle, desc: desc, dueDate: dueDate },
      showAddProject: false,
    }));
    projectsList.current.push({ tittle: tittle, desc: desc, dueDate: dueDate });
  }

  return (
    <div className="flex min-h-[100vh] overflow-y-auto">
      <section className="w-[35%] max-w-[800px] bg-stone-950 min-h-[100vh] rounded-se-[1rem] rounded-ee-[1rem] p-7">
        <h2 className="text-white text-[1.5rem] uppercase">your projects</h2>
        <button
          className="my-10 text-white bg-stone-800 py-[10px] px-[20px] rounded-md"
          onClick={handleCreateNewProject}
        >
          Add Projects
        </button>
        {/* dynamic content to show list of projects */}
        {projectsList.current.map((project, index) => {
          let classes = "text-white hover:bg-stone-900 px-2 py-1 my-1";
          if (project.tittle === myState.showProjectDesc.tittle)
            classes += " bg-stone-900";
          return (
            <ul key={index}>
              <li className={classes}>
                <button
                  className="text-white"
                  onClick={() =>
                    handleProject(project.tittle, project.desc, project.dueDate)
                  }
                >
                  {project.tittle}
                </button>
              </li>
            </ul>
          );
        })}
      </section>

      <aside className="flex-1 min-h-[100vh] flex flex-col gap-2 pt-[25vh] pb-5 items-center">
        {myState.createNewProject && (
          <CreateProject
            handleFormSubmit={handleFormSubmit}
            handleCancelCreateNewProject={handleCancelCreateNewProject}
          />
        )}

        {myState.showAddProject && (
          <AddProject handleCreateNewProject={handleCreateNewProject} />
        )}

        {myState.showProjectDesc && (
          <Project
            handleDeleteProject={handleDeleteProject}
            ref={tasksList}
            tittle={myState.showProjectDesc.tittle}
            description={myState.showProjectDesc.desc}
            dueDate={myState.showProjectDesc.dueDate}
          />
        )}
      </aside>
    </div>
  );
}

export default App;
