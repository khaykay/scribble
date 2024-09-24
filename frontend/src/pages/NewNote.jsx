import React, { useEffect, useState } from "react";

const NewNote = ({ handleSaveNote }) => {
  const [note, setNote] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  useEffect(() => {
    console.log(note);
  }, [note]);
  const handleInput = (e) => {
    setNote(e.target.innerText);
  };
  const handleEditing = () => {
    setIsEditing(!isEditing);
  };
  //Auto save
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

  //get title
  const extractTitle = (text) => {
    const firstLine = text.split("\n")[0];
    return firstLine ? firstLine.trim() : "Untitled Note";
  };
  //get content
  const extractContent = (text) => {
    return text.split("\n").slice(1).join("\n").trim();
  };
  return (
    <>
      <div
        contentEditable="true"
        suppressContentEditableWarning={true}
        onInput={handleInput}
        onFocus={handleEditing}
        onBlur={handleEditing}
        // placeholder="srcibble it! Scribe....."
      >
        {note === "" && !isEditing && (
          <span className="placeholder">srcibble it! Scribe......</span>
        )}
      </div>
    </>
  );
};

export default NewNote;
