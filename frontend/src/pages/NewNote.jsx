import React, { useEffect, useState } from "react";
import { useNotes } from "../context/NotesContext";

const NewNote = () => {
  const [note, setNote] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [noteId, setNoteId] = useState(null); // New state to track note ID
  const { handleSaveNote } = useNotes();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (note.trim()) {
        const newNote = {
          id: noteId || new Date().getTime(), // Use existing ID or create new one
          title: extractTitle(note),
          content: extractContent(note),
          createdAt: noteId ? new Date(noteId) : new Date(), // Use same creation time if editing
        };
        handleSaveNote(newNote);
        setNoteId(newNote.id); // Keep track of the note's ID
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [note]);

  const handleInput = (e) => {
    setNote(e.target.innerText);
  };

  const handleEditing = () => {
    setIsEditing(!isEditing);
  };

  const extractTitle = (text) => {
    const firstLine = text.split("\n")[0];
    return firstLine ? firstLine.trim() : "Untitled Note";
  };

  const extractContent = (text) => {
    return text.split("\n").slice(1).join("\n").trim();
  };

  return (
    <div
      contentEditable="true"
      suppressContentEditableWarning={true}
      onInput={handleInput}
      onFocus={handleEditing}
      onBlur={handleEditing}
    >
      {note === "" && !isEditing && (
        <span className="placeholder">Scribble it! Scribe......</span>
      )}
    </div>
  );
};

export default NewNote;
