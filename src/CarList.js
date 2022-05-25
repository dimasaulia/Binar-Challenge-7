import calender from "./icons/icon_calender.png";
import capacity from "./icons/icon_capacity.svg";
import transmission from "./icons/icon_transmission.svg";

const CarList = ({ cars }) => {
  return (
    <div className="car-container row gx-lg-5 px-0 gy-4">
      {cars.map((car) => (
        <div className="col-12 col-lg-4" key={car.id}>
          <div className="card">
            <img src={car.image} className="rounded-3" alt="Pilihan Mobil" />
            <div className="card-body">
              <p className="mb-2">
                <strong>{car.manufacture + " " + car.model}</strong>
              </p>
              <h5 className="card-title fw-bolder mb-3">
                {" "}
                Rp {car.rentPerDay} / hari{" "}
              </h5>
              <p className="card-text mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="mb-3">
                <img
                  src={capacity}
                  className="d-inline me-2"
                  alt="Ikon Kapasitas"
                  srcSet=""
                />
                <p className="d-inline">{car.capacity} Orang</p>
              </div>
              <div className="mb-3">
                <img
                  src={transmission}
                  className="d-inline me-2"
                  alt="Ikon Transmisi"
                  srcSet=""
                />
                <p className="d-inline">{car.transmission}</p>
              </div>
              <div className="mb-3">
                <img
                  src={calender}
                  className="d-inline me-2"
                  alt="Ikon Kapasitas"
                  srcSet=""
                />
                <p className="d-inline">{car.year}</p>
              </div>
              <a href="#" className="btn btn-submit d-block">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CarList;
