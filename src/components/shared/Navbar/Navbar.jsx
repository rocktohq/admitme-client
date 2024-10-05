import { Link } from "react-router-dom";
import logo from "../../../assets/icons/applyhere.png";
import Button from "../Button/Button";
import navLinks from "./NavLinks";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="lg:hidden mr-1 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 h-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>

            <ul
              tabIndex={0}
              className="menu menu-md dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex items-center gap-3 text-lg text-black">{navLinks}</ul>
        </div>
        <div className="navbar-end space-x-2">
          <Link to="/signin">
            <Button text={"Apply Now"} primary />
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
