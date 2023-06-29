import PropTypes from "prop-types";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import "./Button.scss";

const Button = ({ title, type, onClick }) => {
  return (
    <button className="styled-button" type={type} onClick={onClick}>
      {title.toUpperCase()}
      <HiOutlineArrowNarrowRight className="right-arrow" />
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
