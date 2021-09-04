import React from "react";

const Buttons = ({ currentPage, onClick, hasNext }) => {
  return (
    <>
      <button
        className="buttons__btn"
        onClick={() => onClick((prev) => (prev === 1 ? 1 : prev - 1))}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <span className="buttons__currentPage">{currentPage}</span>
      <button
        className="buttons__btn"
        onClick={() => onClick((prev) => prev + 1)}
        disabled={!hasNext}
      >
        Next
      </button>
    </>
  );
};

export default Buttons;
