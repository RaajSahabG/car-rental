import React from "react";

const Filters = ({ filters, setFilters }) => {
  return (
    <div className="box">
      <h4 className="title is-5">Filters</h4>

      <div className="field">
        <label className="label">Price Range</label>
        <div className="control">
          <input
            type="range"
            min="1000"
            max="10000"
            value={filters.price}
            onChange={(e) => setFilters({ ...filters, price: e.target.value })}
          />
          <p>Up to ₹{filters.price}</p>
        </div>
      </div>

      <div className="field">
        <label className="label">Fuel Type</label>
        <div className="control">
          <div className="select">
            <select
              value={filters.fuel}
              onChange={(e) => setFilters({ ...filters, fuel: e.target.value })}
            >
              <option value="">All</option>
              <option value="Petrol">Petrol</option>
              <option value="Diesel">Diesel</option>
              <option value="Electric">Electric</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
