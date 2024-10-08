import Loader from "../../../components/Loader/Loader";
import useAdmin from "../../../hooks/useAdmin";
import AdminHome from "../AdminHome/AdminHome";
import UserHome from "../UserHome/UserHome";

const DashboardHome = () => {
  const { isAdmin, isAdminLoading } = useAdmin();

  if (isAdminLoading) return <Loader />;
  if (isAdmin) return <AdminHome />;
  return <UserHome />;
};

export default DashboardHome;
