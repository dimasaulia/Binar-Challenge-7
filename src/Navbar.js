import "./bootstrap.css";
import NavLink from "./NavLink";
import ButtonSuccess from "./ButtonSuccess";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">
          <h2>Binar Car</h2>
          {/* <img src="assets/images/binar.png" alt="Logo Perusahaan" class="logoPerusahaan"> */}
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <NavLink linkText={"Our Service"} linkHref={"#service"} />

            <NavLink linkText={"Why Us"} linkHref={"#whyUs"} />

            <NavLink linkText={"Testimonial"} linkHref={"#testimonial"} />

            <NavLink linkText={"FAQ"} linkHref={"#faq"} />

            <NavLink linkText={"Cars"} linkHref={"cars.html"} />

            <NavLink linkText={"Register"} linkHref={"#faq"} />

            <ButtonSuccess linkText={"Register"} linkHref={"#"} />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
