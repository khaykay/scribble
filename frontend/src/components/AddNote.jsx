import React from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

function AddNote() {
  const navigate = useNavigate();
  function handleAddNewNote() {
    navigate("./NewNote");
  }
  return <Button onClick={handleAddNewNote}>Add Note</Button>;
}

export default AddNote;
