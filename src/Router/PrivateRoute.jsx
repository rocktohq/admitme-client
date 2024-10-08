import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Loader from "../components/Loader/Loader";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  //   If user is not logged in
  if (loading) return <Loader />;
  if (!user) return <Navigate state={location.pathname} to={"/signin"} />;

  return children;
};

export default PrivateRoute;
