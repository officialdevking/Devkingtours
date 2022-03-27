import React from "react";
import { useState } from "react";

const Tour = ({ id, name, info, image, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <div className="tour">
      <img src={image} alt={name} />
      <div className="tour-info">
        <div className="tour-name">
          <h4>{name}</h4>
          <h4>${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}... `}
          <a onClick={() => setReadMore(!readMore)}>
            {readMore ? " show less" : "  read more"}
          </a>
        </p>
        <button className="btn" onClick={() => removeTour(id)}>
          Not Interested
        </button>
      </div>
    </div>
  );
};

export default Tour;
