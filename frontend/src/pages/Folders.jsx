import React from "react";
import { useNotes } from "../context/NotesContext";

function Folders() {
  const { folders } = useNotes();
  return (
    <div>
      {folders ? (
        folders.map((folder) => (
          <div key={folder.id}>
            {typeof folder.name === "string" ? folder.name : folder.name.title}
          </div>
        ))
      ) : (
        <h3>No folders yet, Add one?</h3>
      )}
    </div>
  );
}

export default Folders;
