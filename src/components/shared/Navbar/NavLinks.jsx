import { NavLink } from "react-router-dom";

const navLinks = (
  <>
    <li>
      <NavLink
        className="hover:underline duration-300"
        to="/"
      >
        Home
      </NavLink>
    </li>
    <li>
      <NavLink
        className="hover:underline duration-300"
        to="/about"
      >
        About
      </NavLink>
    </li>
    <li>
      <NavLink
        className="hover:underline duration-300"
        to="/services"
      >
        Services
      </NavLink>
    </li>
    <li>
      <NavLink
        className="hover:underline duration-300"
        to="/universities"
      >
        Universities
      </NavLink>
    </li>
    <li>
      <NavLink
        className="hover:underline duration-300"
        to="/contact"
      >
        Contact Us
      </NavLink>
    </li>
  </>
);

export default navLinks;
