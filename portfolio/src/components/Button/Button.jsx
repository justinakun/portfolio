import PropTypes from "prop-types";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import "./Button.scss";

const Button = ({ title }) => {
  return (
    <div className="styled-button-container">
      <button className="styled-button">{title.toUpperCase()}</button>
      <HiOutlineArrowNarrowRight className="right-arrow"></HiOutlineArrowNarrowRight>
    </div>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Button;
