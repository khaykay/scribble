import React, { createContext, useState, useContext } from "react";

// Create a context
const NotesContext = createContext();

// Create a provider component
export const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState(() => {
    // Load from localStorage on initial render
    const storedNotes = localStorage.getItem("notes");
    return storedNotes ? JSON.parse(storedNotes) : [];
  });

  const handleSaveNote = (newNote) => {
    const updatedNotes = [newNote, ...notes];
    setNotes(updatedNotes);
    // Save to localStorage
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  };
  return (
    <NotesContext.Provider value={{ notes, handleSaveNote }}>
      {children}
    </NotesContext.Provider>
  );
};

// Create a custom hook for consuming the context
export const useNotes = () => {
  return useContext(NotesContext);
};
