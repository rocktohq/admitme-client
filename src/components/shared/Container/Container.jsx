import PropTypes from "prop-types";

const Container = ({ children }) => {
  return (
    <div className="max-w-screen-xl mx-auto px-3 md:px-8 lg:px-12">{children}</div>
  );
};

export default Container;

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
