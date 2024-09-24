import React, { useState } from "react";
import { useNotes } from "../context/NotesContext";
import NewNote from "./newNote";

const Notes = () => {
  const { notes } = useNotes();
  return (
    <div>
      {/* <NewNote /> */}
      {notes.map((note) => (
        <div key={note.createdAt}>
          <h3>title: {note.title}</h3>
          <p>content: {note.content}</p>
          <small>{note.createdAt.toLocaleString()}</small>
        </div>
      ))}
    </div>
  );
};

export default Notes;
