import { useState } from "react";
import ContainerFluid from "../ContainerFluid/ContainerFluid";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  // OnScroll BG Color
  const [color, setColor] = useState(false);

  // Color Changer
  const changeColor = () => {
    if (window.scrollY > 200) {
      setColor(true);
    } else setColor(false);
  };

  // Trigger the changeColor Function
  window.addEventListener("scroll", changeColor);

  return (
    <div
      className={`w-full  ${
        color
          ? "fixed top-0 bg-black shadow-md transition-all duration-300 bg-opacity-20 backdrop-blur-sm"
          : "bg-gray-100"
      }`}
    >
      <ContainerFluid>
        <Navbar />
      </ContainerFluid>
    </div>
  );
};

export default Header;
