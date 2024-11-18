import React from "react";
import { useNotes } from "../context/NotesContext";
import BackButton from "../components/BackButton";
import NoteCard from "../components/NoteCard";

function Favorites() {
  const { notes } = useNotes();

  const faves = notes.filter((note) => note.favorite === true);

  return (
    <div>
      <BackButton />
      {faves.length > 0 ? (
        <NoteCard notes={faves} />
      ) : (
        <span>Add favorites</span>
      )}
    </div>
  );
}

export default Favorites;
