import React from "react";
import { useHistory } from "react-router-dom";

const Navbar = () => {
  const history = useHistory();

  return (
    <>
      <button onClick={() => history.push("/planets")}>Planets</button>
      <button onClick={() => history.push("/people")}>People</button>
      <button onClick={() => history.push("/starships")}>Starships</button>
      <button onClick={() => history.push("/films")}>Films</button>
    </>
  );
};

export default Navbar;
