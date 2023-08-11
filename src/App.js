import React from 'react';
import './App.css';
import {createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from './Register.js';
import Login from './Login.js';
import PlanSelect from './PlanSelection.js';
import ErrorPage from "./errorpage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Register />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/plans",
    element: <PlanSelect />,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}


export default App;
