const NavLink = ({ linkText, linkHref }) => {
  return (
    <li className="nav-item me-3">
      <a className="nav-link" aria-current="page" href={linkHref}>
        {linkText}
      </a>
    </li>
  );
};

export default NavLink;
