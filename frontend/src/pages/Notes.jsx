import React, { useState } from "react";
import { useNotes } from "../context/NotesContext";
import NewNote from "./newNote";

const Notes = () => {
  const { notes } = useNotes();
  return (
    <div className="px-4">
      <header>My Notes</header>
      <nav className="list-none flex  ">
        <li className="border border-solid border-slate-700 rounded-3xl p-3 basis-1/4 ">
          All
        </li>
        <li className="border border-solid border-slate-700 rounded-3xl p-3 basis-1/4">
          Important
        </li>
        <li className="border border-solid border-slate-700 rounded-3xl p-3 basis-1/4">
          Folders
        </li>
      </nav>

      <div className="flex h-56 basis-1/2 gap-4 ">
        {notes.map((note, index) => (
          <div
            key={index}
            className={`bg-slate-300 ${
              index % 2 === 0
                ? "rounded-tl-none rounded-tr-3xl rounded-b-3xl"
                : "rounded-t-3xl rounded-bl-3xl rounded-br-none"
            } p-3`}
          >
            <h3>title: {note.title}</h3>
            <p>content: {note.content}</p>
            <small>{note.createdAt.toLocaleString()}</small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notes;
