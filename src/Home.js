import React from "react";
import { useLocation } from "react-router-dom";
import Planets from "./components/Planets";
import People from "./components/People";
import Navbar from "./Navbar";
import "./App.css";
import Starships from "./components/Starships";
import Films from "./components/Films";

const Home = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <>
      <h1 className="app__heading">Star Wars Info</h1>
      <Navbar />
      {pathname === "/planets" && <Planets />}
      {pathname === "/people" && <People />}
      {pathname === "/starships" && <Starships />}
      {pathname === "/films" && <Films />}
    </>
  );
};

export default Home;
