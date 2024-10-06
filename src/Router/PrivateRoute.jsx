import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Loader from "../components/Loader/Loader";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  //   If user is not logged in
  if (!user) return <Navigate state={location.pathname} to={"/signin"} />;
  if (loading) return <Loader />;

  return children;
};

export default PrivateRoute;
