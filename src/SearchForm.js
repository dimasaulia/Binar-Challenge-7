import arr_up from "./icons/icon_arr_up.svg";
import calender from "./icons/icon_calender.png";
import clock from "./icons/icon_clock.svg";
import capacity from "./icons/icon_capacity.svg";
import close from "./icons/icon_close.svg"
import {useState} from "react"
const SearchForm = () => {

  const [driverOption, setDriverOption] = useState(""); // state untuk membuka UI menu
  const [driverIcon, setDriverIcon] = useState(arr_up); // state untuk mengubah Icon
  const [fillDriverOption, setFillDriverOption] = useState(""); // state untuk mengisi form

  const [pickUpTime, setPickUpTime] = useState(""); // state untuk membuka UI menu
  const [pickUpTimeIcon, setPickUpTimeIcon] = useState(clock); // state untuk mengubah Icon
  const [fillPickUpTime, setFillPickUpTime] = useState(""); // state untuk mengisi form

  const openDriverOption = () => {
    setDriverOption("form-active");
    setDriverIcon(close);
  }

  const closeDriverOption = () => {
    setDriverOption("");
    setDriverIcon(arr_up);
  }

  const changeDriverOption = () => {
    if (driverOption === "") {
      openDriverOption()
    }else{
      closeDriverOption()
    }
  }

  const fillDriverForm = (data) => {
    setFillDriverOption(data);
    setDriverOption("");
    closeDriverOption();
  }

  const openPickUpTime = () => {
    setPickUpTime("form-active");
    setPickUpTimeIcon(close);
  }

  const closePickUpTime = () => {
    setPickUpTime("");
    setPickUpTimeIcon(clock);
  }

  const changePickUpTime = () => {
    if (pickUpTime === "") {
      openPickUpTime()
    }else{
      closePickUpTime()
    }
  }

  const fillPickUpForm = (data) => {
    setFillPickUpTime(data);
    closePickUpTime();
  }

  return (
    <section className="cars-service">
      <div className="container cars-form bg-white rounded rounded-3">
        <form className="d-flex flex-wrap align-items-end justify-content-between">
          <div className="p-2 form-item">
            <label for="tipe" className="form-label">
              Tipe Driver
            </label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                id="tipe"
                aria-describedby="emailHelp"
                value={fillDriverOption}
                onClick = {()=>changeDriverOption()}
              />
              <span className="input-group-text">
                <img src={driverIcon} alt="Panah" className="inp-arr" onClick = {()=> changeDriverOption() }/>
              </span>

              <div className={`input-option bg-white ${driverOption}`}id="tipe_driver--option">
                <p className="fs-6 p-2 mb-2 input-item" onClick={()=> fillDriverForm("Dengan Sopir") }>Dengan Sopir</p>
                <p className="fs-6 p-2 input-item" onClick={()=> fillDriverForm("Tanpa Sopir") }>Tanpa Sopir</p>
              </div>
            </div>
          </div>

          <div className="p-2 form-item">
            <label for="tanggal" className="form-label">
              Tanggal
            </label>
            <div className="input-group">
              <input
                type="date"
                className="form-control"
                id="tanggal"
                aria-describedby="emailHelp"
              />
              <span className="input-group-text">
                <img src={calender} alt="Icon Kalender" />
              </span>
            </div>
          </div>

          <div className="p-2 form-item">
            <label for="waktu" className="form-label">
              Waktu Jemput/Ambil
            </label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                id="waktu"
                autoComplete="off"
                onClick={()=> changePickUpTime() }
                value={fillPickUpTime}
              />
              <span className="input-group-text">
                <img src={pickUpTimeIcon} alt="Icon Jam" className="clock" onClick={()=> changePickUpTime() } />
              </span>

              <div
                className={`input-option bg-white waktu-form ${pickUpTime}`}
                id="tipe_waktu--option"
              >
                <p className="fs-6 p-2 mb-2 waktu-item" onClick={()=>fillPickUpForm("01:00")} >01:00 WIB</p>
                <p className="fs-6 p-2 mb-2 waktu-item" onClick={()=>fillPickUpForm("02:00")} >02:00 WIB</p>
                <p className="fs-6 p-2 mb-2 waktu-item" onClick={()=>fillPickUpForm("03:00")} >03:00 WIB</p>
                <p className="fs-6 p-2 mb-2 waktu-item" onClick={()=>fillPickUpForm("04:00")} >04:00 WIB</p>
                <p className="fs-6 p-2 mb-2 waktu-item" onClick={()=>fillPickUpForm("05:00")} >05:00 WIB</p>
                <p className="fs-6 p-2 mb-2 waktu-item" onClick={()=>fillPickUpForm("06:00")} >06:00 WIB</p>
                <p className="fs-6 p-2 mb-2 waktu-item" onClick={()=>fillPickUpForm("07:00")} >07:00 WIB</p>
                <p className="fs-6 p-2 mb-2 waktu-item" onClick={()=>fillPickUpForm("08:00")} >08:00 WIB</p>
                <p className="fs-6 p-2 mb-2 waktu-item" onClick={()=>fillPickUpForm("09:00")} >09:00 WIB</p>
                <p className="fs-6 p-2 mb-2 waktu-item" onClick={()=>fillPickUpForm("10:00")} >10:00 WIB</p>
                <p className="fs-6 p-2 mb-2 waktu-item" onClick={()=>fillPickUpForm("15:00")} >15:00 WIB</p>
              </div>
            </div>
          </div>

          <div className="p-2 form-item">
            <label for="jumlah" className="form-label">
              Jumlah Penumpang
            </label>
            <div className="input-group">
              <input
                type="number"
                className="form-control"
                id="jumlah"
                autoComplete="off"
                min="1"
                max="9"
              />
              <span className="input-group-text">
                <img src={capacity} alt="Icon Penumpang" />
              </span>
            </div>
          </div>

          <div className="p-2 form-item">
            <button type="button" className="btn btn-submit" id="cari">
              Cari
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SearchForm;
