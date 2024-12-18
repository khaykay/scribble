import React, { createContext, useState, useContext, useEffect } from "react";

// Create a context
const NotesContext = createContext();

// Create a provider component
export const NotesProvider = ({ children }) => {
  // state to handle notes

  //all notes
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
  // useEffect(() => {
  //   console.log(notes);
  // }, [notes]);
  // useEffect(() => {
  //   console.log(folders);
  // }, [folders]);

  // Sync `notes` to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  // Sync `folders` to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("folders", JSON.stringify(folders));
  }, [folders]);

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

        return updatedNotes;
      } else {
        // Add new note
        const updatedNotes = [newNote, ...prevNotes];
        return updatedNotes;
      }
    });
  };

  //function to create new foldersDragNDrop
  const handleCreateFolderDragNDrop = (folderName, notesToInclude) => {
    const newFolder = {
      id: new Date().getTime(),
      name: folderName,
      notes: notesToInclude,
    };

    // Add the new folder to the folders array
    setFolders((prevFolders) => [newFolder, ...prevFolders]);
  };

  // Function to create a new folder
  const handleCreateFolder = (folderName) => {
    const newFolder = {
      id: new Date().getTime(),
      name: folderName,
      notes: [],
    };
    setFolders((prevFolders) => [...prevFolders, newFolder]);
  };

  return (
    <NotesContext.Provider
      value={{
        setNotes,
        notes,
        handleSaveNote,
        folders,
        handleCreateFolder,
        handleCreateFolderDragNDrop,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};

// Create a custom hook for consuming the context
export const useNotes = () => {
  return useContext(NotesContext);
};
