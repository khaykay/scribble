import React, { useState, useEffect } from "react";
import { useNotes } from "../context/NotesContext";
import Nav from "../components/Nav";
import { Link } from "react-router-dom";
import NoteCard from "../components/NoteCard";

const Notes = () => {
  const { notes, handleCreateFolderDragNDrop, setNotes } = useNotes();

  return (
    <div className="px-4 flex flex-col gap-y-6 md:grid md:grid-cols-[110px_1fr] md:grid-rows-1 md: gap-x-5 md:gap-y-0">
      <header className="text-6xl md:col-start-2">My Notes</header>
      <nav className="list-none flex gap-2 md:flex-col md:border-r-2 md:border-solid md:border-gray-300 ">
        <Nav />
      </nav>
      <NoteCard notes={notes} />
    </div>
  );
};

export default Notes;
