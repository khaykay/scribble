import React from "react";
import { useNotes } from "../context/NotesContext";

function Favorites() {
  const { notes } = useNotes();

  const faves = notes.filter((note) => note.favorite === true);

  if (faves.length > 0) {
    return (
      <div>
        {faves.map((note) => (
          <div key={note.id}>
            <span>{note.title}</span>
            <span>{note.content}</span>
          </div>
        ))}
      </div>
    );
  }

  return <div>Add favorites</div>;
}

export default Favorites;
