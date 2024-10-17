import React from "react";
import { useNotes } from "../context/NotesContext";
import BackButton from "../components/BackButton";
import CreateFolderButton from "../components/CreateFolderButton";

function Folders() {
  const { folders } = useNotes();
  return (
    <div>
      <BackButton />
      <div className="flex flex-wrap gap-3">
        {folders ? (
          folders.map((folder) => (
            <div
              key={folder.id}
              className="h-56 w-[calc(50%-4px)] md:w-64 bg-slate-500 "
            >
              <h3>
                {" "}
                {typeof folder.name === "string"
                  ? folder.name
                  : folder.name.title}
              </h3>
            </div>
          ))
        ) : (
          <h3>No folders yet, Add one?</h3>
        )}
      </div>
      <CreateFolderButton />
    </div>
  );
}

export default Folders;
