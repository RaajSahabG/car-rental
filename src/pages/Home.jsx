import React, { useEffect, useState } from "react";
import Filters from "../components/Filters";
import SearchBar from "../components/SearchBar";
import CarCard from "../components/CarCard";
import SkeletonCard from "../components/SkeletonCard";
import { useLocalStorage } from "../hooks/useLocalStorage";
import carData from "../../public/carsData.json";

const Home = () => {
  const [cars, setCars] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useLocalStorage("filters", { price: 10000, fuel: "" });

  useEffect(() => {
    setTimeout(() => {
      setCars(carData);
    }, 1000);
  }, []);

  const filteredCars = cars.filter(
    (car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filters.fuel === "" || car.fuel === filters.fuel) &&
      car.price <= filters.price
  );

  return (
    <div className="container mt-5">
      <div className="columns">
        <div className="column is-one-quarter">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <Filters filters={filters} setFilters={setFilters} />
        </div>
        <div className="column">
          <div className="columns is-multiline">
            {cars.length === 0
              ? Array.from({ length: 6 }).map((_, i) => (
                  <div className="column is-one-third" key={i}>
                    <SkeletonCard />
                  </div>
                ))
              : filteredCars.map((car, i) => (
                  <div className="column is-one-third" key={i}>
                    <CarCard car={car} />
                  </div>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
