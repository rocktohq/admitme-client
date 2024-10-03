import PropTypes from "prop-types";
import yourWish from "../../../assets/images/your-wish.jpg";
import Title from "../../shared/Title/Title";
import Container from "../../shared/Container/Container";

const JustRelax = ({ centeredTitle }) => {
  return (
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-24">
        {/* Sessions Description */}
        <div className={`${centeredTitle && "flex flex-col justify-center"}`}>
          <Title
            centered={false}
            title={"Just Relax"}
            heading={"Your wish is our task"}
            subheading={`Tell us your dream destination, and we’ll handle the rest. From selecting universities to completing your application, we've got you covered!`}
          />
        </div>
        {/* Sessions Image */}
        <figure className="bg-neutral-300 p-5">
          <img src={yourWish} alt="Banner Image" />
        </figure>
      </div>
    </Container>
  );
};

export default JustRelax;

JustRelax.propTypes = {
  centeredTitle: PropTypes.bool,
};
