import PropTypes from "prop-types";
import "./Logo.scss";

const Logo = ({ title }) => {
  return (
    <div className="logo-container">
      <h1>{title}</h1>
    </div>
  );
};

Logo.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Logo;
