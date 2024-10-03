import PropTypes from "prop-types";

const Separator = ({ children, bg }) => {
  return (
    <div className={`${bg ? "bg-gradient-to-r from-indigo-100 to-blue-600" : "bg-gradient-to-l from-white to-gray-300"} py-12 md:py-20 lg:py-24`}>
      {children}
    </div>
  );
};

export default Separator;

Separator.propTypes = {
  children: PropTypes.node,
  bg: PropTypes.bool,
};
