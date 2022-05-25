import axios from "axios";
import CarList from "./CarList";
import { useEffect, useState } from "react";
const carsList = [
  {
    id: "6e2bc663-5197-441a-957b-bc75e4a2da7c",
    plate: "DBH-3491",
    manufacture: "Ford",
    model: "F150",
    image: "images-storages/car01.min.jpg",
    rentPerDay: 200000,
    capacity: 2,
    description:
      " Brake assist. Leather-wrapped shift knob. Glove box lamp. Air conditioning w/in-cabin microfilter.",
    availableAt: "2022-03-23T15:49:05",
    transmission: "Automatic",
    available: true,
    type: "Sedan",
    year: 2022,
    options: [
      "Cruise Control",
      "Tinted Glass",
      "Tinted Glass",
      "Tinted Glass",
      "AM/FM Stereo",
    ],
    specs: [
      "Brake assist",
      "Leather-wrapped shift knob",
      "Glove box lamp",
      "Air conditioning w/in-cabin microfilter",
      "Body color folding remote-controlled pwr mirrors",
      "Dual-stage front airbags w/occupant classification system",
    ],
  },
  {
    id: "9ff03bbc-b18c-4ba7-8f3a-4c4b5c2f6c77",
    plate: "WXB-3984",
    manufacture: "BMW",
    model: "X5",
    image: "images-storages/car02.min.jpg",
    rentPerDay: 800000,
    capacity: 6,
    description:
      " Rear passenger map pockets. Electrochromic rearview mirror. Dual chrome exhaust tips. Locking glove box.",
    availableAt: "2022-03-23T15:49:05",
    transmission: "Automatic",
    available: false,
    type: "Convertible",
    year: 2019,
    options: [
      "Keyless Entry",
      "Power Windows",
      "MP3 (Single Disc)",
      "CD (Multi Disc)",
      "Navigation",
    ],
    specs: [
      "Rear passenger map pockets",
      "Electrochromic rearview mirror",
      "Dual chrome exhaust tips",
      "Locking glove box",
      "Pwr front vented disc/rear drum brakes",
    ],
  },
  {
    id: "bf6b5c43-1377-4ae0-8908-310c64266f81",
    plate: "OSL-4224",
    manufacture: "Lincoln",
    model: "MKZ",
    image: "images-storages/car03.min.jpg",
    rentPerDay: 900000,
    capacity: 6,
    description:
      " Driver & front passenger map pockets. Direct-type tire pressure monitor system. Cargo area lamp. Glove box lamp.",
    availableAt: "2022-03-23T15:49:05",
    transmission: "Automanual",
    available: true,
    type: "Sedan",
    year: 2021,
    options: [
      "Bucket Seats",
      "Airbag: Passenger",
      "Airbag: Driver",
      "Power Seats",
      "Airbag: Side",
      "Antilock Brakes",
      "CD (Multi Disc)",
    ],
    specs: [
      "Driver & front passenger map pockets",
      "Direct-type tire pressure monitor system",
      "Cargo area lamp",
      "Glove box lamp",
      "Silver finish interior door handles",
      "Driver & front passenger advanced multistage airbags w/occupant sensors",
      "Silver accent IP trim finisher -inc: silver shifter finisher",
      "Fasten seat belt warning light/chime",
    ],
  },
];
const CarBucket = () => {
  const [cars, setCars] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [color, setColor] = useState("text-danger");
  const changeColor = () => {
    setColor("text-warning");
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/cars")
      .then((res) => {
        return JSON.parse(JSON.stringify(res.data));
      })
      .then((data) => {
        setIsLoading(false);
        setCars(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <section className="cars-service">
      <div className="container cars-avail pb-4 pt-4">
        <h1 className={`${color}`} id="target" onClick={() => changeColor()}>
          Change Color
        </h1>
        {isLoading && "Loading..."}
        {cars && <CarList cars={cars} />}
      </div>
    </section>
  );
};

export default CarBucket;
