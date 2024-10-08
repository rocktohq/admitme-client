import { Link } from "react-router-dom";
import logo from "../../../assets/icons/applyhere.png";
import Button from "../Button/Button";
import navLinks from "./NavLinks";
import useAuth from "../../../hooks/useAuth";
import defaultAvatar from "../../../assets/images/signImage.png";
import toast from "react-hot-toast";
import { MdDashboard } from "react-icons/md";
import { FaSignOutAlt } from "react-icons/fa";

const Navbar = () => {
  const { user, signOutUser, loading } = useAuth();

  const handleSignOut = async () => {
    const toastId = toast.loading("Signing out...");
    try {
      await signOutUser();
      toast.success("Sign out successful", { id: toastId });
    } catch (error) {
      console.log(error.message);
      toast.error("Error signing out user", { id: toastId });
    }
  };
  return (
    <>
      <nav className="navbar">
        <div className="navbar-start">
          <div className="dropdown dropdown-start">
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
              className="menu menu-md dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded w-80 uppercase font-medium space-y-2 relative"
            >
            <span className="w-4 h-4 rotate-45 bg-base-100 absolute -top-2 left-1"></span>
              {navLinks}
            </ul>
          </div>
          <Link to="/">
            <img src={logo} alt="Logo" className="w-10 h-10" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex items-center gap-3 text-md text-black uppercase">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end space-x-2">
          {user?.email ? (
            <>
              <div className="dropdown dropdown-end">
                <button className="button button-primary button-sm rounded-full">
                  <img
                    src={user?.photoURL || defaultAvatar}
                    alt="Avatar"
                    className="w-8 h-8 rounded-full"
                  />
                </button>
                <ul className="menu menu-md dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded w-52 h-fit">
                  <li>
                    <Link to="/dashboard">
                      <MdDashboard /> Dashboard
                    </Link>
                  </li>
                  <li>
                    <button onClick={handleSignOut}>
                      <FaSignOutAlt />
                      Sign Out
                    </button>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <Link to="/signin">
              <Button text={"Apply Now"} primary />
            </Link>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
