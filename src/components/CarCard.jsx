import React from "react";

const CarCard = ({ car }) => {
  return (
    <div className="card" style={{ height: "100%" }}>
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={car.image} alt={car.name} />
        </figure>
      </div>
      <div className="card-content">
        <p className="title is-5">{car.name}</p>
        <p>{car.fuel} | ₹{car.price}/day</p>
      </div>
    </div>
  );
};

export default CarCard;
