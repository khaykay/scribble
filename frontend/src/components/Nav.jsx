import React from "react";
import AddNote from "../components/AddNote";
import CreateFolderButton from "../components/CreateFolderButton";
import { useNotes } from "../context/NotesContext";
import { useNavigate } from "react-router-dom";

function Nav() {
  const { notes } = useNotes();
  const navigate = useNavigate();
  const handleNavigateFoldersPage = () => {
    navigate("./folders");
  };
  return (
    <>
      <AddNote />
      <div className="border border-solid border-slate-700 rounded-3xl p-3 md:h-14 md:w-14">
        <span className="md:hidden"> All </span>
        <span class="material-symbols-outlined hidden md:inline-block">
          text_snippet
        </span>
        <span className="border border-solid border-slate-700 rounded-full h-7 w-7 inline-block text-center bg-slate-700 text-slate-300 ">
          {notes.length}
        </span>
      </div>
      <div
        className="border border-solid border-slate-700 rounded-3xl p-3 md:h-14 md:w-14 "
        onClick={handleNavigateFoldersPage}
      >
        <span className="md:hidden">Folders</span>
        <span class="material-symbols-outlined hidden md:inline-block">
          folder
        </span>
      </div>
      <div className="border border-solid border-slate-700 rounded-3xl p-3 md:h-14 md:w-14 ">
        <span className="md:hidden">Favorite</span>
        <span class="material-symbols-outlined text-gray-400 hidden md:inline-block">
          favorite
        </span>
      </div>
      <CreateFolderButton />
    </>
  );
}

export default Nav;
