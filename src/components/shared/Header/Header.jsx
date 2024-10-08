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
      className={`w-full fixed top-0 shadow-md transition-all duration-500 z-20 ${
        color ? "bg-black backdrop-blur-sm bg-opacity-20" : "bg-gradient-to-b from-slate-400 to-white"
      }`}
    >
      <ContainerFluid>
        <Navbar />
      </ContainerFluid>
    </div>
  );
};

export default Header;
