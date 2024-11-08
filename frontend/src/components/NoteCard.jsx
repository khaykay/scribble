import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNotes } from "../context/NotesContext";

function NoteCard({ notes }) {
  const { handleCreateFolderDragNDrop, setNotes } = useNotes();
  const [draggedNote, setDraggedNote] = useState();

  useEffect(() => {
    console.log(notes);
  }, [notes]);
  const handleFavorite = (event, id) => {
    event.preventDefault();
    event.stopPropagation();
    setNotes((notes) =>
      notes.map((note) =>
        note.id === id ? { ...note, favorite: !note.favorite } : note
      )
    );
  };
  const handleDragStart = (note) => {
    setDraggedNote(note);
  };

  const handleDrop = (targetNote) => {
    if (draggedNote && draggedNote.id !== targetNote.id) {
      // Create a new folder with the dragged and target notes as children
      const newFolder = {
        id: new Date().getTime(),
        title: `Folder ${new Date().toLocaleString()}`,
        notes: [draggedNote, targetNote],
        createdAt: new Date(),
      };
      let notesToInclude = newFolder.notes;
      let folderName = newFolder.title;
      handleCreateFolderDragNDrop(folderName, notesToInclude);
      setDraggedNote(null);
    }
  };
  const colors = [
    "bg-yellow-200",
    "bg-green-200",
    "bg-blue-200",
    "bg-pink-200",
    "bg-purple-200",
    "bg-red-200",
  ];
  return (
    <div className="flex flex-wrap gap-y-4 gap-x-2 w-full  md:w-[100%]  md:col-start-2  md:px-8 md:pt-8">
      {notes.map((note, index) => (
        <>
          <Link
            key={note.id}
            to={`/note/${note.id}`}
            draggable
            onDragStart={() => handleDragStart(note)}
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => handleDrop(note)}
            className={`${colors[index % colors.length]} ${
              index % 2 === 0
                ? "rounded-tl-none rounded-tr-3xl rounded-b-3xl"
                : "rounded-t-3xl rounded-bl-3xl rounded-br-none"
            } p-3  h-56 w-[calc(50%-4px)] md:w-64`}
          >
            <div className="flex  justify-between">
              <h3 className="break-words font-semibold text-lg w-20 md:w-[calc(100%-70px)] truncate-two-lines">
                {note.title}
              </h3>
              <button
                className={`h-14 w-14 rounded-full transparent flex justify-center items-center`}
                onClick={(e) => {
                  handleFavorite(e, note.id);
                }}
              >
                <span
                  class={`material-symbols-outlined ${
                    note.favorite ? "text-red-600" : "text-gray-400"
                  }`}
                >
                  favorite
                </span>
              </button>
            </div>
            <p>{note.content}</p>
            <small>{new Date(note.createdAt).toLocaleString()}</small>
          </Link>
        </>
      ))}
    </div>
  );
}

export default NoteCard;
