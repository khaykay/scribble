import React, { useState } from "react";
import Button from "./Button";
import { useNotes } from "../context/NotesContext";

function CreateFolderButton() {
  const [showModal, setShowModal] = useState(false);
  const [folderName, setFolderName] = useState();
  const { handleCreateFolder } = useNotes();

  const openModal = () => {
    setShowModal(true);
    setFolderName("New Folder");
  };
  const closeModal = () => {
    setShowModal(false);
  };
  const saveFolder = () => {
    if (folderName.trim()) {
      handleCreateFolder(folderName);
      closeModal();
    }
  };
  const handleFolderNameInputChange = (e) => {
    setFolderName(e.target.value);
  };
  const style =
    "fixed bottom-4 right-4 bg-blue-500 text-white rounded-full shadow-lg z-10 md:relative md:h-14 md:w-14 md:bg-slate-200 md:bottom-0 md:right-0";
  return (
    <div className="">
      <Button onClick={openModal} style={style}>
        create Folder
      </Button>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20">
          <div className="bg-white p-6 rounded-lg w-80">
            <h2 className="text-lg font-bold mb-4">Create New Folder</h2>
            <input
              type="text"
              value={folderName}
              onChange={handleFolderNameInputChange}
              className="border border-gray-300 rounded w-full p-2"
              autoFocus
              onFocus={(e) => e.target.select()} // Highlight the initial value
            />
            <div className="flex justify-end mt-4">
              <button
                onClick={closeModal}
                className="bg-gray-300 text-black px-4 py-2 rounded mr-2"
              >
                Cancel
              </button>
              <button
                onClick={saveFolder}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CreateFolderButton;
