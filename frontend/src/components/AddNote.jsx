import React from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

function AddNote() {
  const navigate = useNavigate();
  function handleAddNewNote() {
    navigate("./NewNote");
  }
  const style =
    "fixed bottom-4 right-4 p-3 bg-blue-500 text-white rounded-full shadow-lg";
  return (
    <Button onClick={handleAddNewNote} style={style}>
      <span class="material-symbols-outlined ">add</span>
    </Button>
  );
}

export default AddNote;
