import React from "react";

const SkeletonCard = () => {
  return (
    <div className="card" style={{ height: "100%" }}>
      <div
        className="card-image has-background-grey-lighter"
        style={{ height: "200px" }}
      ></div>
      <div className="card-content">
        <div className="has-background-grey-lighter" style={{ height: "20px", width: "60%" }}></div>
        <div className="has-background-grey-lighter mt-2" style={{ height: "15px", width: "40%" }}></div>
      </div>
    </div>
  );
};

export default SkeletonCard;
