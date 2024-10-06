import { useState } from "react";
import Banner from "../../components/Home/Banner/Banner";
import ApplicationManagement from "../../components/Home/ApplicationManagement/ApplicationManagement";
import GetStarted from "../../components/Home/GetStarted/GetStarted";
import DocumentSafety from "../../components/Home/DocumentSafety/DocumentSafety";
import Separator from "../../components/shared/Separator/Separator";
import Stats from "../../components/Home/Stats/Stats";
import Partners from "../../components/Home/Partners/Partners";
import JustRelax from "../../components/Home/JustRelax/JustRelax";

const Home = () => {
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
    <main className={color ? "mt-10 md:mt-16 lg:mt-20" : ""}>
      {/* Banner */}
      <Separator bg>
        <Banner centeredTitle={false} />
      </Separator>

      {/* TODO: Counter */}

      {/* TODO: Support Sessions*/}

      {/* TODO: Document Safety */}
      <Separator>
        <DocumentSafety centeredTitle={true} />
      </Separator>

      {/* TODO: Our Efforts */}
      <Separator bg>
        <JustRelax centeredTitle={true} />
      </Separator>

      {/* TODO: Client Management */}
      <Separator>
        <ApplicationManagement centeredTitle={true} />
      </Separator>

      {/* TODO: Customer Reviews */}

      {/* Get Started */}
      <Separator bg>
        <GetStarted />
      </Separator>
      {/* Stats */}
      <Separator>
        <Stats />
      </Separator>
      {/* Partners */}
      <Separator bg>
        <Partners />
      </Separator>
    </main>
  );
};

export default Home;
