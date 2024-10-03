import documentSafety from "../../../assets/images/document-safety.jpg";
import Container from "../../shared/Container/Container";
import Title from "../../shared/Title/Title";
import PropTypes from "prop-types";

const DocumentSafety = ({ centeredTitle }) => {
  return (
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-24">
        {/* Payment Image */}
        <figure className="bg-neutral-300 p-5">
          <img src={documentSafety} alt="Banner Image" />
        </figure>

        {/* Payment Description */}
        <div className={`${centeredTitle && "flex flex-col justify-center"}`}>
          <Title
            centered={false}
            title={"Documents Safety"}
            heading={"Your documents are safe with privacy."}
            subheading={`Documents Safety is our privacy policy regarding documents safety and privacy policies for documentation safety and privacy policies for documentation safety and privacy policies for documentation safety and privacy.`}
          />
        </div>
      </div>
    </Container>
  );
};

export default DocumentSafety;

DocumentSafety.propTypes = {
  centeredTitle: PropTypes.bool,
};
