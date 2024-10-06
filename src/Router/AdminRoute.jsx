import { Navigate } from "react-router-dom";
import Loader from "../components/Loader/Loader";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const { isAdmin, isAdminLoading } = useAdmin();

  //   If Loading
  if (loading || isAdminLoading) return <Loader />;
  //   If user is an Admin
  if (user && isAdmin) return children;

  //   If use is not an Admin
  return <Navigate to={"/"} replace />;
};

export default AdminRoute;
