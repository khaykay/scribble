import React, { useState } from "react";

const NewNote = () => {
  const [note, setNote] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const handleInput = (e) => {
    setNote(e.target.innerText);
  };
  const handleEditing = () => {
    setIsEditing(true);
  };
  return (
    <div
      contentEditable="true"
      suppressContentEditableWarning={true}
      onInput={handleInput}
      onFocus={handleEditing}
      onBlur={() => setIsEditing(false)}
      placeholder="srcibble it! Scribe....."
    >
      {note === "" && !isEditing && (
        <span className="placeholder">srcibble it! Scribe.....</span>
      )}
    </div>
  );
};

export default NewNote;
