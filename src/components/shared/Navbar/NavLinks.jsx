import { NavLink } from "react-router-dom";

const navLinks = (
  <>
    <li>
      <NavLink
        className="hover:text-primary hover:underline duration-300"
        to="/"
      >
        Home
      </NavLink>
    </li>
    <li>
      <NavLink
        className="hover:text-primary hover:underline duration-300"
        to="/about"
      >
        About
      </NavLink>
    </li>
    <li>
      <NavLink
        className="hover:text-primary hover:underline duration-300"
        to="/services"
      >
        Services
      </NavLink>
    </li>
    <li>
      <NavLink
        className="hover:text-primary hover:underline duration-300"
        to="/pricing"
      >
        Pricing
      </NavLink>
    </li>
  </>
);

export default navLinks;
