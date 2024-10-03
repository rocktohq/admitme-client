import PropTypes from "prop-types";

const Button = ({ text, primary, secondary, outlined }) => {
  return (
    <button
      className={`btn rounded-none text-white uppercase ${
        primary && "btn-primary"
      } ${secondary && "btn-secondary"} ${
        outlined && "btn-primary btn-outline"
      }`}
    >
      {text}
    </button>
  );
};

export default Button;

Button.propTypes = {
  text: PropTypes.string,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  outlined: PropTypes.bool,
};
