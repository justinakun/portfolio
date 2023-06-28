import PropTypes from "prop-types";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import "./Button.scss";

const Button = ({ title, type, onClick }) => {
  return (
    <div className="styled-button-container" onClick={onClick}>
      <button className="styled-button" type={type}>
        {title.toUpperCase()}
      </button>
      <HiOutlineArrowNarrowRight className="right-arrow"></HiOutlineArrowNarrowRight>
    </div>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
