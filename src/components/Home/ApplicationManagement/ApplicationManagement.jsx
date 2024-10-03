import PropTypes from "prop-types";
import Title from "../../shared/Title/Title";
import applicationManagementImage from "../../../assets/images/applicationManagement.jpg";
import Container from "../../shared/Container/Container";

const ApplicationManagement = ({ centeredTitle }) => {
  return (
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-24">
        {/* Client Management Image */}
        <figure className="bg-neutral-300 p-5">
          <img src={applicationManagementImage} alt="Banner Image" />
        </figure>

        {/* Client Management Description */}
        <div className={`${centeredTitle && "flex flex-col justify-center"}`}>
          <Title
            centered={false}
            title={"Application Management"}
            heading={"Stay organized and connected with us."}
            subheading={`From start to finish, we take care of every detail of your university application. Stay stress-free while we handle the paperwork, deadlines, and updates. Your academic journey is in expert hands!`}
          />
        </div>
      </div>
    </Container>
  );
};

export default ApplicationManagement;

ApplicationManagement.propTypes = {
  centeredTitle: PropTypes.bool,
};
