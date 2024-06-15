import Img from "../assets/no-projects.png";

export default function AddProject({handleCreateNewProject}) {
  return (
    <>
      <img src={Img} alt="" className="w-20 max-w-20" />
      <p className="font-semibold ">Select a project or start with a new one.</p>
      <button className="font-bold   text-white  bg-stone-800 py-[10px] px-[20px] rounded-md" onClick={handleCreateNewProject}>
        Create new project
      </button>
    </>
  );
}
