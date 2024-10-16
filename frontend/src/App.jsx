import { useState } from "react";
import NewNote from "./pages/newNote";
import Notes from "./pages/notes";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./pages/NotFound";
import { NotesProvider } from "./context/NotesContext";
import Folders from "./pages/Folders";

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
]);
function App() {
  return (
    <NotesProvider>
      <RouterProvider router={router} />
    </NotesProvider>
  );
}

export default App;
