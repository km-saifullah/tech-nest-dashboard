import React from "react";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";

// / All Routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Route>
      <Route>
        <Route path="/" element={<Home />} />
      </Route>
    </>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
