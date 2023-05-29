import React from "react";
function Rating(props) {
    const starsRating = Math.round(props.rating);
    // crear funcion que hace el redondeo y despues se debe cumplir una funcion abajo con condiciones
    if (starsRating === 0) {
        return <div className="Rating">☆☆☆☆☆</div>
    }
    if (starsRating === 1) {
        return <div className="Rating">★☆☆☆☆</div>
    }
    if (starsRating === 2) {
        return <div className="Rating">★★☆☆☆</div>
    }
    if (starsRating === 3) {
        return <div className="Rating">★★★☆☆</div>
    }
    if (starsRating === 4) {
        return <div className="Rating">★★★★☆</div>
    }
    if (starsRating === 5) {
        return <div className="Rating">★★★★★</div>
    }
}
export default Rating;
