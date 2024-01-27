import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Contacts from "./components/Contacts";
import About from "./Components/About";

function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/contacts" element={<Contacts />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </>
  );
}

export default AllRoutes;