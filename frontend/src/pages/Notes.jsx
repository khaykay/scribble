import React, { useState } from "react";
import { useNotes } from "../context/NotesContext";
import NewNote from "./newNote";
import AddNote from "../components/AddNote";
import CreateFolderButton from "../components/CreateFolderButton";

const Notes = () => {
  const { notes } = useNotes();
  const colors = [
    "bg-yellow-200",
    "bg-green-200",
    "bg-blue-200",
    "bg-pink-200",
    "bg-purple-200",
    "bg-red-200",
  ];
  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.slice(0, maxLength) + " ..." : text;
  };
  return (
    <div className="px-4 flex flex-col gap-y-6 md:grid md:grid-cols-[110px_1fr] md:grid-rows-1 md: gap-x-5 md:gap-y-0">
      <header className="text-6xl md:col-start-2">My Notes</header>
      <nav className="list-none flex gap-2 md:flex-col md:border-r-2 md:border-solid md:border-gray-300 ">
        <AddNote />
        <li className="border border-solid border-slate-700 rounded-3xl p-3 md:h-14 md:w-14">
          <span className="md:hidden"> All </span>
          <span class="material-symbols-outlined hidden md:inline-block">
            text_snippet
          </span>
          <span className="border border-solid border-slate-700 rounded-full h-7 w-7 inline-block text-center bg-slate-700 text-slate-300 ">
            {notes.length}
          </span>
        </li>
        <li className="border border-solid border-slate-700 rounded-3xl p-3 md:h-14 md:w-14 ">
          <span className="md:hidden">Folders</span>
          <span class="material-symbols-outlined hidden md:inline-block">
            folder
          </span>
        </li>
        <li className="border border-solid border-slate-700 rounded-3xl p-3 md:h-14 md:w-14 ">
          <span className="md:hidden">Favorite</span>
          <span class="material-symbols-outlined text-gray-400 hidden md:inline-block">
            favorite
          </span>
        </li>
        <CreateFolderButton />
      </nav>
      <div className="flex flex-wrap gap-y-4 gap-x-2 w-full  md:w-[100%]  md:col-start-2 md:justify-between  md:px-8 md:pt-8">
        {notes.map((note, index) => (
          <div
            key={index}
            className={`${colors[index % colors.length]} ${
              index % 2 === 0
                ? "rounded-tl-none rounded-tr-3xl rounded-b-3xl"
                : "rounded-t-3xl rounded-bl-3xl rounded-br-none"
            } p-3  h-56 w-[calc(50%-4px)] md:w-64`}
          >
            <div className="flex  justify-between">
              <h3 className="break-words font-semibold text-lg w-20 md:w-[calc(100%-70px)] truncate-two-lines">
                {note.title}
              </h3>
              <div className="h-14 w-14 rounded-full transparent flex justify-center items-center">
                <span class="material-symbols-outlined text-gray-400">
                  favorite
                </span>
              </div>
            </div>
            <p>{note.content}</p>
            <small>{note.createdAt.toLocaleString()}</small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notes;
