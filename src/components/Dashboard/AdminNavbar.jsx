import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { MdDashboard } from "react-icons/md";
import { FaHome, FaSignOutAlt } from "react-icons/fa";
import toast from "react-hot-toast";

const AdminNavbar = () => {
  const { user, signOutUser } = useAuth();
  const handleSignOut = async () => {
    await signOutUser().then(() => {
      toast.success("Sign out successful");
    });
  };

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link to="/">
          <h1 className="text-xl text-gray-800 flex justify-center items-center gap-1"><FaHome/> Home</h1>
        </Link>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto rounded focus:outline-none"
          />
        </div>
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
      </div>
    </div>
  );
};

export default AdminNavbar;
