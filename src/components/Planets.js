import React, { useEffect, useState } from "react";
import { usePlanets } from "../query/planet";
import Buttons from "./Buttons";
import "./Planets.css";

const Planets = () => {
  const [page, setPage] = useState(1);
  const [hasNext, setHasNext] = useState(true);
  const { data, status } = usePlanets(page);
  useEffect(() => {
    if (status === "success") setHasNext(data.data.next);
  }, [setHasNext, status, data]);
  return (
    <div className="planets__main">
      <div className="page__heading">
        <h2 style={{ marginLeft: "15px" }}>Planets</h2>
        <Buttons currentPage={page} onClick={setPage} hasNext={hasNext} />
      </div>
      {status === "loading" && <div>Loading Details</div>}
      {status === "success" && (
        <>
          {data.data.results.map((planet, index) => (
            <div className="card" key={index}>
              <h3>{planet.name}</h3>
              <p>
                Terrain:{" "}
                {planet.terrain[0].toUpperCase() + planet.terrain.substr(1)}
              </p>
              <p>Population: {planet.population}</p>
              <p>
                Climate:{" "}
                {planet.climate[0].toUpperCase() + planet.climate.substr(1)}
              </p>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Planets;
