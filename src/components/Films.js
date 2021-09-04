import React, { useEffect, useState } from "react";
import { useFilms } from "../query/films";
import Buttons from "./Buttons";
import "./Planets.css";

const Films = () => {
  const [page, setPage] = useState(1);
  const [hasNext, setHasNext] = useState(true);

  const { data, status } = useFilms(page);
  console.log("data", data);

  useEffect(() => {
    if (data && data.data && !data.data.next) setHasNext(false);
  }, [data, setHasNext]);

  return (
    <div className="people__main">
      <div className="page__heading">
        <h2>Films</h2>
        <Buttons currentPage={page} onClick={setPage} hasNext={hasNext} />
      </div>
      {status === "loading" && <div>Loading Data...</div>}
      {status === "success" && (
        <>
          {data.data.results.map((film, index) => (
            <div className="card" key={index}>
              <h3>{film.title}</h3>
              <p>Director: {film.director}</p>
              <p>Producer: {film.producer}</p>
              <p>Release Date: {film.relesase_date}</p>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Films;
