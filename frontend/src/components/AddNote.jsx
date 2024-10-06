import React from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

function AddNote() {
  const navigate = useNavigate();
  function handleAddNewNote() {
    navigate("./NewNote");
  }
  const style =
    "fixed bottom-4 right-4 bg-blue-500 text-white rounded-full shadow-lg z-10 md:relative md:h-14 md:w-14 md:bg-slate-200 md:bottom-0 md:right-0";
  return (
    <Button onClick={handleAddNewNote} style={style}>
      <span class="material-symbols-outlined text-4xl transparent p-3 rounded-full md:p-1">
        add
      </span>
    </Button>
  );
}

export default AddNote;
