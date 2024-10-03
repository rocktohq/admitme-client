import PropTypes from "prop-types";

const ContainerFluid = ({ children }) => {
  return (
    <div className="max-w-screen-2xl mx-auto px-3 md:px-8 lg:px-12">
      {children}
    </div>
  );
};

export default ContainerFluid;

ContainerFluid.propTypes = {
  children: PropTypes.node.isRequired,
};
