import { useState } from "react";
import NewNote from "./pages/newNote";
import Notes from "./pages/notes";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Notes />,
    errorElement: <div className="">oopsie ..... page not found</div>,
  },
  {
    path: "/newNote",
    element: <NewNote />,
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
      {/* {" "}
       */}
      {/* <h1 className="text-3xl font-bold underline">Hello worldmknklkkn!</h1> */}
    </>
  );
}

export default App;
