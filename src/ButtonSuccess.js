const ButtonSuccess = ({ linkText, linkHref }) => {
  return (
    <li className="nav-item ms-lg-0 me-lg-0 ms-3 me-3">
      <a className="nav-link btn btn-success border-0 text-light btn-register">
        {linkText}
      </a>
    </li>
  );
};

export default ButtonSuccess;
