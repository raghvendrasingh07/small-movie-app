import React from "react";

function Card(props) {
  function getClassByRate(vote) {
    if (vote >= 8) {
      return "green";
    } else if (vote >= 5) {
      return "orange";
    } else {
      return "red";
    }
  }

  return (
    <div className="movie">
      <img src={props.imglink} alt={props.title} />
      <div className="movie-info">
        <h3>{props.title}</h3>
        <span className={getClassByRate(props.vote)}>{props.vote}</span>
        <div className="overview">
          <h3>Overview</h3>
          {props.overview}
        </div>
      </div>
    </div>
  );
}

export default Card;
