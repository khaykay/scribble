// import React, { Fragment, useEffect, useState } from "react";
// import { useNotes } from "../context/NotesContext";
// import AddNote from "../components/AddNote";
// import BackButton from "../components/BackButton";

// const NewNote = () => {
//   const [note, setNote] = useState("");
//   const [isEditing, setIsEditing] = useState(false);
//   const [noteId, setNoteId] = useState(null); // New state to track note ID
//   const { handleSaveNote } = useNotes();

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       if (note.trim()) {
//         const newNote = {
//           id: noteId || new Date().getTime(), // Use existing ID or create new one
//           title: extractTitle(note),
//           content: extractContent(note),
//           createdAt: noteId ? new Date(noteId) : new Date(), // Use same creation time if editing
//         };
//         handleSaveNote(newNote);
//         setNoteId(newNote.id); // Keep track of the note's ID
//       }
//     }, 1000);
//     return () => clearTimeout(timer);
//   }, [note]);

//   const handleInput = (e) => {
//     setNote(e.target.innerText);
//   };

//   const handleEditing = () => {
//     setIsEditing(!isEditing);
//   };

//   const extractTitle = (text) => {
//     const firstLine = text.split("\n")[0];
//     return firstLine ? firstLine.trim() : "Untitled Note";
//   };

//   const extractContent = (text) => {
//     return text.split("\n").slice(1).join("\n").trim();
//   };

//   return (
//     <div className="p-4">
//       <BackButton />
//       <div
//         contentEditable="true"
//         suppressContentEditableWarning={true}
//         onInput={handleInput}
//         onFocus={handleEditing}
//         onBlur={handleEditing}
//         className="mt-4"
//       >
//         {note === "" && !isEditing && (
//           <span className="placeholder">Scribble it! Scribe......</span>
//         )}
//       </div>
//       <AddNote />
//     </div>
//   );
// };

// export default NewNote;

import React, { Fragment, useEffect, useState, useRef } from "react";
import { useNotes } from "../context/NotesContext";
import AddNote from "../components/AddNote";
import BackButton from "../components/BackButton";

const NewNote = () => {
  const [note, setNote] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [noteId, setNoteId] = useState(null); // New state to track note ID
  const { handleSaveNote } = useNotes();
  const contentRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (note.trim()) {
        const newNote = {
          id: noteId || new Date().getTime(), // Use existing ID or create new one
          title: extractTitle(note),
          content: extractContent(note),
          createdAt: noteId ? new Date(noteId) : new Date(), // Use same creation time if editing
        };
        handleSaveNote(newNote);
        setNoteId(newNote.id); // Keep track of the note's ID
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [note]);

  useEffect(() => {
    // Set focus to the contentEditable div on component mount
    contentRef.current.focus();
  }, []);

  const handleInput = (e) => {
    setNote(e.target.innerText);
  };

  const handleEditing = () => {
    setIsEditing(!isEditing);
  };

  const extractTitle = (text) => {
    const firstLine = text.split("\n")[0];
    return firstLine ? firstLine.trim() : "Untitled Note";
  };

  const extractContent = (text) => {
    return text.split("\n").slice(1).join("\n").trim();
  };

  return (
    <div className="p-4">
      <BackButton />
      <div
        contentEditable="true"
        ref={contentRef}
        suppressContentEditableWarning={true}
        onInput={handleInput}
        onFocus={handleEditing}
        onBlur={handleEditing}
        className="mt-4 outline-none"
      >
        {note === "" && !isEditing && (
          <span className="placeholder">Scribble it! Scribe......</span>
        )}
        {/* <h3 className="font-bold text-xl">{extractTitle(note)}</h3>
        <p>{extractContent(note)}</p> */}
      </div>
      <div className="md:fixed md:bottom-4 md:right-4">
        <AddNote />
      </div>
    </div>
  );
};

export default NewNote;
