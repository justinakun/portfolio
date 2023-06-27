import PropTypes from "prop-types";
import "./Layout.css";

const UnauthenticatedLayout = ({ children }) => {
  return <div>{children}</div>;
};

UnauthenticatedLayout.propTypes = {
  children: PropTypes.node,
};

export default UnauthenticatedLayout;
