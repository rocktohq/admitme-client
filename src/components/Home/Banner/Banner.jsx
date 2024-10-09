import Title from "../../shared/Title/Title";
import bannerImage from "../../../assets/images/banner-image.jpg";
import { Link } from "react-router-dom";
import Button from "../../shared/Button/Button";
import PropTypes from "prop-types";
import Container from "../../shared/Container/Container";

const Banner = ({ centeredTitle, user }) => {
  return (
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-24">
        {/* Banner Description */}
        <div className={`${centeredTitle && "flex flex-col justify-center"}`}>
          <Title
            centered={false}
            title={"Study Abroad"}
            heading={"Your Path to Global Education Starts Here!"}
            subheading={`Looking to study abroad? We make university applications easy! Explore top universities worldwide, get personalized guidance, and apply with confidence. Let us help you turn your dream into reality.`}
          />
          <div className="mt-10">
            <Link to={user?.email ? "/dashboard" : "/signin"}>
              <Button text={"Apply Now"} primary />
            </Link>
          </div>
        </div>

        {/* Banner Image */}
        <figure className="bg-neutral-200 p-5">
          <img className="w-full h-full" src={bannerImage} alt="Banner Image" />
        </figure>
      </div>
    </Container>
  );
};

export default Banner;

Banner.propTypes = {
  centeredTitle: PropTypes.bool,
};
