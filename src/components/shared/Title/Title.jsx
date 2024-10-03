import PropTypes from "prop-types";

const Title = ({ title, heading, subheading, centered }) => {
  return (
    <div className={`max-w-screen-sm space-y-4 ${centered ? "text-center" : "text-left"}`}>
      <p className="text-neutral-400 font-semibold uppercase">
        {title && title}
      </p>
      <h1 className="text__gradient text-2xl md:text-3xl lg:text-4xl font-bold">
        {heading && heading}
      </h1>
      <p className="text-neutral-600">{subheading && subheading}</p>
    </div>
  );
};

export default Title;

Title.propTypes = {
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  centered: PropTypes.bool,
};
