import React from "react";
import Tour from "./Tour";

const Tours = ({ tours, removeTour }) => {
  return (
    <div className="section">
      <div className="title">
        <h1>Our Tours</h1>
        <div className="underline"></div>
      </div>
      {tours.map((tour) => {
        return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
      })}
    </div>
  );
};

export default Tours;
