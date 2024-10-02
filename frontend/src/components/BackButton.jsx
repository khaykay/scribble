import React from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();
  function handleBack() {
    navigate(-1);
  }
  const style = "bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600";
  return (
    <Button onClick={handleBack} style={style}>
      back
    </Button>
  );
}

export default BackButton;
