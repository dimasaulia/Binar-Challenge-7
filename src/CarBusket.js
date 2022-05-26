import CarList from "./CarList";

const CarBucket = ({ isLoading, cars }) => {
  return (
    <section className="cars-service">
      <div className="container cars-avail pb-4 pt-4">
        {isLoading && "Loading..."}
        {cars && <CarList cars={cars} />}
      </div>
    </section>
  );
};

export default CarBucket;
