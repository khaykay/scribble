import React, { useState } from "react";
import { useNotes } from "../context/NotesContext";
import NewNote from "./newNote";
import AddNote from "../components/AddNote";

const Notes = () => {
  const { notes } = useNotes();
  return (
    <div className="px-4 flex flex-col gap-y-6 md:grid md:grid-cols-[200px_minmax(900px,_1fr)] md:grid-rows-1 md: gap-x-5 md:gap-y-0">
      <header className="text-6xl md:col-start-2">My Notes</header>
      <nav className="list-none flex gap-2 md:flex-col ">
        <li className="border border-solid border-slate-700 rounded-3xl p-3 ">
          All{" "}
          <span className="border border-solid border-slate-700 rounded-full h-7 w-7 inline-block text-center bg-slate-700 text-slate-300 ">
            {notes.length}
          </span>
        </li>
        <li className="border border-solid border-slate-700 rounded-3xl p-3 ">
          Important
        </li>
        <li className="border border-solid border-slate-700 rounded-3xl p-3 ">
          Folders
        </li>
      </nav>

      <div className="flex gap-4 md:col-start-2">
        {notes.map((note, index) => (
          <div
            key={index}
            className={`bg-slate-300 ${
              index % 2 === 0
                ? "rounded-tl-none rounded-tr-3xl rounded-b-3xl"
                : "rounded-t-3xl rounded-bl-3xl rounded-br-none"
            } p-3 basis-1/2  h-56 `}
          >
            <h3>title: {note.title}</h3>
            <p>content: {note.content}</p>
            <small>{note.createdAt.toLocaleString()}</small>
          </div>
        ))}
      </div>
      <AddNote />
    </div>
  );
};

export default Notes;
