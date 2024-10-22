import React from "react";
import { useParams } from "react-router-dom";
import { useNotes } from "../context/NotesContext";
import BackButton from "../components/BackButton";

function Note() {
  const { noteId } = useParams();
  const { notes } = useNotes();
  const note = notes.find((note) => note.id === Number(noteId));
  if (!note) {
    return <div>Note not found!</div>;
  }

  return (
    <div className="p-4">
      <BackButton />
      <h2 className="text-4xl font-bold mb-4">{note.title}</h2>
      <p className="text-lg">{note.content}</p>
      <small className="text-sm text-gray-500">
        Created at: {new Date(note.createdAt).toLocaleString()}
      </small>
    </div>
  );
}

export default Note;
