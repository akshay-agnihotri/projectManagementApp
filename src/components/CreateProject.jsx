import { useRef } from "react";
import Modal from "./Modal";

function CreateProject({ handleFormSubmit, handleCancelCreateNewProject}) {
  const tittle = useRef();
  const description = useRef();
  const dueDate = useRef();
  const modal = useRef();

  function handleSubmit() {
    if (
      tittle.current.value.trim() === "" ||
      description.current.value.trim() === "" ||
      dueDate.current.value === ""
    ) {
      modal.current.open();
      return;
    }

    handleFormSubmit(
      tittle.current.value,
      description.current.value,
      dueDate.current.value
    );
  }

  return (
    <>
      <Modal ref={modal}>
        <h2 className="text-stone-700 text-[1.5rem] uppercase my-4">Wrong Credentials</h2>
        <p className="text-stone-700 my-4" >OOPS!...looks like you have forgotten to fill every inputs.</p>
        <p className="text-stone-700 my-4">Make Sure to fill each and every input field.</p>
      </Modal>

      <div className="px-5 w-full max-w-[650px] flex flex-col gap-4">
        <menu className="flex justify-end gap-2">
          <button
            onClick={handleCancelCreateNewProject}
            className="font-bold  text-bg-stone-800  py-[10px] px-[20px] rounded-md"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            type="submit"
            className="font-bold  text-white bg-stone-800 py-[10px] px-[20px] rounded-md"
          >
            Save
          </button>
        </menu>

        <div className="flex gap-2 flex-col ">
          <label htmlFor="tittle" className="uppercase">
            Title
          </label>
          <input
            id="tittle"
            ref={tittle}
            required
            type="text"
            className="px-1 bg-stone-200 h-8 outline-none border-b-4 border-stone-400 focus:border-stone-600 rounded-sm"
          />
        </div>

        <div className="flex gap-2 flex-col">
          <label htmlFor="desc" className="uppercase">
            Description
          </label>
          <textarea
            id="desc"
            ref={description}
            required
            className="px-1 bg-stone-200 h-20 outline-none border-b-4 border-stone-400 focus:border-stone-600  rounded-sm"
          />
        </div>

        <div className="flex gap-2 flex-col">
          <label htmlFor="date" className="uppercase">
            due date
          </label>
          <input
            id="date"
            ref={dueDate}
            required
            type="date"
            className="px-1 bg-stone-200 h-8  outline-none border-b-4 border-stone-400 focus:border-stone-600  rounded-sm"
          />
        </div>
      </div>
    </>
  );
}
export default CreateProject;
