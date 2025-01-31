import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreateUser from "./CreateUser";
import Navbar from "./Navbar";
import ReadUser from "./ReadUser";
import Help from "./Help";

const router = createBrowserRouter([

  {
    path: "/",
    element: <CreateUser />,
  },
  {
    path: "/User",
    element: (
      <Help>
        <Navbar />
      </Help>
    ),
  },
  {
    path: "/User/:id",
    element: (
      <Help>
        <ReadUser />
      </Help>
    ),
  },
]);

function NewAxios() {
  return <RouterProvider router={router} />;
}

export default NewAxios;
