import React, { useState } from "react";
import { useNotes } from "../context/NotesContext";
import BackButton from "../components/BackButton";
import CreateFolderButton from "../components/CreateFolderButton";
import folderImg from "../assets/folderImg.png";
import NoteCard from "../components/NoteCard";

function Folders() {
  const { folders } = useNotes();
  const [openFolderId, setOpenFolderId] = useState(null); // Track which folder is open

  const handleClickToOpenFolder = (folderId) => {
    setOpenFolderId(openFolderId === folderId ? null : folderId); // Toggle folder open/close
  };

  return (
    <div className="bg-slate-50 h-screen">
      <BackButton />
      <div className="flex flex-wrap gap-x-2 gap-y-3 p-4">
        {folders?.length !== 0 ? (
          folders?.map((folder) => (
            <div
              key={folder.id}
              className="h-56 w-[calc(50%-4px)] md:w-64 bg-slate-500 p-4 rounded-lg cursor-pointer"
              onClick={() => handleClickToOpenFolder(folder.id)}
            >
              {folder.notes.length > 0 && (
                <img src={folderImg} alt="" srcset="" />
              )}
              <h3 className="font-bold">
                {typeof folder.name === "string"
                  ? folder.name
                  : folder.name.title}
              </h3>

              {openFolderId === folder.id && (
                <ul className="mt-2 bg-white p-2 rounded">
                  {folder?.notes?.length !== 0 ? (
                    <NoteCard notes={folder.notes} />
                  ) : (
                    <div>empty folder</div>
                  )}
                </ul>
              )}
            </div>
          ))
        ) : (
          <h3>No folders yet. Add one?</h3>
        )}
      </div>

      <div className="fixed bottom-4 right-4 h-32">
        <CreateFolderButton />
      </div>
    </div>
  );
}

export default Folders;
