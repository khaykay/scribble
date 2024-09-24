import React, { useEffect, useState } from "react";
import { useNotes } from "../context/NotesContext";

const NewNote = () => {
  const [note, setNote] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const { handleSaveNote } = useNotes();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (note.trim()) {
        handleSaveNote({
          title: extractTitle(note),
          content: extractContent(note),
          createdAt: new Date(),
        });
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
