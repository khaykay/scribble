import React from "react";
import { useNotes } from "../context/NotesContext";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import NoteCard from "../components/NoteCard";

const Folder = () => {
  const { folderId } = useParams();
  const { folders } = useNotes();
  const folder = folders.find((folder) => folder.id === Number(folderId));
  if (!folder) {
    return <div>Folder not found!</div>;
  }
  return (
    <div>
      <BackButton />
      <ul className="mt-2 bg-white p-2 rounded">
        {folder?.notes?.length !== 0 ? (
          <NoteCard notes={folder.notes} />
        ) : (
          <div>empty folder</div>
        )}
      </ul>
    </div>
  );
};

export default Folder;
