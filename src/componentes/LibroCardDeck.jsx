import React from "react";
import LibroCard from "./LibroCard";


export default function LibroCardDeck({ libros }) {
  return (
    <>
      <div className="row" style={{ justifyContent: "center" }}>
        {libros.map((item) => {
          return (
            <div
              className="card-deck  justify-content-center col-12 col-sm-6 col-md-4 col-lg-3 mb-5 mt-4 mr-1 pr-1 d-flex"
              key={item.id}
            >
              <LibroCard libro={item} />
            </div>
          );
        })}
      </div>
    </>
  );
}
