import React, { useState, useEffect } from "react";
import { useNotes } from "../context/NotesContext";
import Nav from "../components/Nav";
import { Link } from "react-router-dom";

const Notes = () => {
  const { notes, handleCreateFolderDragNDrop } = useNotes();
  const [draggedNote, setDraggedNote] = useState();
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
    <div className="px-4 flex flex-col gap-y-6 md:grid md:grid-cols-[110px_1fr] md:grid-rows-1 md: gap-x-5 md:gap-y-0">
      <header className="text-6xl md:col-start-2">My Notes</header>
      <nav className="list-none flex gap-2 md:flex-col md:border-r-2 md:border-solid md:border-gray-300 ">
        <Nav />
      </nav>
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
                <div className="h-14 w-14 rounded-full transparent flex justify-center items-center">
                  <span class="material-symbols-outlined text-gray-400">
                    favorite
                  </span>
                </div>
              </div>
              <p>{note.content}</p>
              <small>{new Date(note.createdAt).toLocaleString()}</small>
            </Link>
          </>
        ))}
      </div>
    </div>
  );
};

export default Notes;
