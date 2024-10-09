import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/shared/Footer/Footer";
import Header from "../components/shared/Header/Header";

const Main = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <>
      {!(location.pathname.startsWith("/signin") ||
        location.pathname.startsWith("/signup")) && <Header />}
      <div
        className={
          location.pathname.startsWith("/signin" || "/signup")
            ? "py-4 md:py-12 lg:py-20"
            : "mt-16 md:mt-16 lg:mt-16 bg-transparent"
        }
      >
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Main;
