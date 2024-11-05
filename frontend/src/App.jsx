import { useState } from "react";
import NewNote from "./pages/newNote";
import Notes from "./pages/notes";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./pages/NotFound";
import { NotesProvider } from "./context/NotesContext";
import Folders from "./pages/Folders";
import Note from "./pages/Note";
import Ball from "./pages/Ball";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Notes />,
    errorElement: <NotFound />,
  },
  {
    path: "/newNote",
    element: <NewNote />,
  },
  {
    path: "/folders",
    element: <Folders />,
  },
  {
    path: "/note/:noteId",
    element: <Note />,
  },
  {
    path: "/ball",
    element: <Ball />,
  },
]);
function App() {
  return (
    <NotesProvider>
      <RouterProvider router={router} />
    </NotesProvider>
  );
}

export default App;
