import bg from "./icons/bg.svg";
import MercedesCar from "./images/MercedesCar.png";
const Hero = () => {
  return (
    <section className="container-flex hero">
      <div className="row">
        <div className="col-lg-6 col-md-12 d-flex heroSection">
          <div className="container row justify-content-sm-start align-self-center p-5 sewaCopy">
            <h1 className="mb-3 sewaText ">
              {"Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)"}
            </h1>
            <p className="mb-3">
              {
                "Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani               kebutuhanmu untuk sewa mobil selama 24 jam."
              }
            </p>
          </div>

          <img src={bg} alt="Round Illustration" id="sewaText-bg" />
        </div>
        <div className="col-lg-6 col-md-12 sm-remove">
          <img src={MercedesCar} alt="Round Illustration" id="hero-fg" />
          <img src={bg} alt="Round Illustration" id="hero-bg" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
