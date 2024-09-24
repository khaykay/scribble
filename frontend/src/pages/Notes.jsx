import React, { useState } from "react";
import NewNote from "./newNote";

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const handleSaveNote = (newNote) => {
    setNotes([newNote, ...notes]);
  };
  console.log(notes);
  return (
    <div>
      {/* <NewNote handleSaveNote={handleSaveNote} /> */}

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
