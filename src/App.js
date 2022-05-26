import Navbar from "./Navbar";
import Hero from "./Hero";
import SearchForm from "./SearchForm";
import CarBucket from "./CarBusket";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [cars, setCars] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const renderCar = async () => {
    const carsData = await axios.get("http://localhost:8080/cars");
    setCars(carsData.data);
    setIsLoading(false);
  };

  const searchCar = async (option) => {
    const filterDate = new Date(`${option.date}T${option.time}`);
    console.log(filterDate);
    const carsData = await axios.get("http://localhost:8080/cars");
    const filterdCard = carsData.data.filter(
      (car) =>
        new Date(car.availableAt).getTime() === filterDate.getTime() &&
        car.capacity >= Number(option.capacity) &&
        car.available === true
    );
    setCars(filterdCard);
    setIsLoading(false);
  };

  useEffect(() => renderCar, []);

  return (
    <div className="App">
      <Navbar />

      <Hero />

      <SearchForm searchCar={searchCar} />

      <CarBucket isLoading={isLoading} cars={cars} />
    </div>
  );
}

export default App;
