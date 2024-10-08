import { Outlet } from "react-router-dom";
import Footer from "../components/shared/Footer/Footer";
import Header from "../components/shared/Header/Header";

const Main = () => {
  return (
    <>
      <Header />
      <div className="mt-16 md:mt-16 lg:mt-16 bg-transparent">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Main;
