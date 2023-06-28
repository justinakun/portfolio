import Logo from "../Logo/Logo";
import Burger from "../Burger/Burger";
import "./Topbar.scss";
import PropTypes from "prop-types";

const Topbar = ({ className }) => {
  return (
    <div className={`topbar-container ${className}`}>
      <Logo title="justina"></Logo>
      <Burger></Burger>
    </div>
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
};

export default Topbar;
