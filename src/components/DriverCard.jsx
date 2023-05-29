import React from "react";
function DriverCard(props) {
  let roundedRating = Math.round(props.rating);
  let starsRating;
  if (roundedRating === 0) {
    starsRating = <div className="Rating">☆☆☆☆☆</div>;
  }
  if (roundedRating === 1) {
    starsRating = <div className="Rating">★☆☆☆☆</div>;
  }
  if (roundedRating === 2) {
    starsRating = <div className="Rating">★★☆☆☆</div>;
  }
  if (roundedRating === 3) {
    starsRating = <div className="Rating">★★★☆☆</div>;
  }
  if (roundedRating === 4) {
    starsRating = <div className="Rating">★★★★☆</div>;
  }
  if (roundedRating === 5) {
    starsRating = <div className="Rating">★★★★★</div>;
  }

  return (
    <div className="DriverCard">
      <img className="left" src={props.img} alt={props.name} />
      <div className="right">
        <h2>{props.name}</h2>
        <div className="Rating">{starsRating}</div>
        <p>
          {props.car.model} - {props.car.licensePlate}
        </p>
      </div>
    </div>
  );
}

export default DriverCard;
