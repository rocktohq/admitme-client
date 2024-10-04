import { Outlet } from "react-router-dom";
import Sidebar from "../components/Dashboard/Sidebar";
import Header from "../components/shared/Header/Header";
import AdminNavbar from "../components/Dashboard/AdminNavbar";
import LeftSidebar from "../components/Dashboard/LeftSidebar";

const Dashboard = () => {
  return (
    <>
      {/* <AdminNavbar /> */}
      <div className="flex">
        <LeftSidebar />
        <div className="flex-1">
          <AdminNavbar />
          <div className="px-2 md:px-4 lg:px-8 xl:px-12">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
