import React, { useEffect, useState } from "react";
import { useStarships } from "../query/starships";
import Buttons from "./Buttons";
import "./Planets.css";

const Starships = () => {
  const [page, setPage] = useState(1);
  const [hasNext, setHasNext] = useState(true);

  const { data, status } = useStarships(page);
  console.log("data", data);

  useEffect(() => {
    if (data && data.data && !data.data.next) setHasNext(false);
  }, [data, setHasNext]);

  return (
    <div className="people__main">
      <div className="page__heading">
        <h2>Starships</h2>
        <Buttons currentPage={page} onClick={setPage} hasNext={hasNext} />
      </div>
      {status === "loading" && <div>Loading Data...</div>}
      {status === "success" && (
        <>
          {data.data.results.map((starship, index) => (
            <div className="card" key={index}>
              <h3>{starship.name}</h3>
              <p>Model: {starship.model}</p>
              <p>Passengers: {starship.passengers}</p>
              <p>Capacity: {starship.cargo_capacity}</p>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Starships;
