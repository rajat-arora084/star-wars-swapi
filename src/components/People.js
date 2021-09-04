import React, { useEffect, useState } from "react";
import { usePeople } from "../query/people";
import Buttons from "./Buttons";
import "./Planets.css";

const People = () => {
  const [page, setPage] = useState(1);
  const [hasNext, setHasNext] = useState(true);

  const { data, status } = usePeople(page);

  useEffect(() => {
    if (data && data.data && !data.data.next) setHasNext(false);
  }, [data, setHasNext]);

  return (
    <div className="people__main">
      <div className="page__heading">
        <h2>People</h2>
        <Buttons currentPage={page} onClick={setPage} hasNext={hasNext} />
      </div>
      {status === "loading" && <div>Loading Data...</div>}
      {status === "success" && (
        <>
          {data.data.results.map((people, index) => (
            <div className="card" key={index}>
              <h3>{people.name}</h3>
              <p>
                Gender:{" "}
                {people.gender[0].toUpperCase() + people.gender.substr(1)}
              </p>
              <p>Weight: {people.mass}</p>
              <p>Height: {people.height}</p>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default People;
