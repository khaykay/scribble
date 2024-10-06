import React, { createContext, useState, useContext } from "react";

// Create a context
const NotesContext = createContext();

// Create a provider component
export const NotesProvider = ({ children }) => {
  // state to handle notes
  const [notes, setNotes] = useState(() => {
    // Load from localStorage on initial render
    const storedNotes = localStorage.getItem("notes");
    return storedNotes ? JSON.parse(storedNotes) : [];
  });
  // state to handle folder
  const [folders, setFolders] = useState(() => {
    const storedFolders = localStorage.getItem("folders");
    return storedFolders ? JSON.parse(storedFolders) : [];
  });

  //function to save notes
  const handleSaveNote = (newNote) => {
    setNotes((prevNotes) => {
      const existingNoteIndex = prevNotes.findIndex(
        (note) => note.id === newNote.id
      );
      if (existingNoteIndex !== -1) {
        // Update the existing note
        const updatedNotes = [...prevNotes];
        updatedNotes[existingNoteIndex] = newNote;
        localStorage.setItem("notes", JSON.stringify(updatedNotes));
        return updatedNotes;
      } else {
        // Add new note
        const updatedNotes = [newNote, ...prevNotes];
        localStorage.setItem("notes", JSON.stringify(updatedNotes));
        return updatedNotes;
      }
    });
  };

  //function to create new folders
  const handleCreateFolder = (folderName, notesToInclude) => {
    const newFolder = {
      id: new Date().getTime(),
      name: folderName,
      notes: notesToInclude,
    };

    // Add the new folder to the folders array
    setFolders((prevFolders) => {
      const updatedFolders = [newFolder, ...prevFolders];
      localStorage.setItem("folders", JSON.stringify(updatedFolders));
      return updatedFolders;
    });
  };

  return (
    <NotesContext.Provider
      value={{ notes, handleSaveNote, folders, handleCreateFolder }}
    >
      {children}
    </NotesContext.Provider>
  );
};

// Create a custom hook for consuming the context
export const useNotes = () => {
  return useContext(NotesContext);
};
