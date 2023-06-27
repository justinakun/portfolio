import PropTypes from "prop-types";
import "./Layout.scss";

const UnauthenticatedLayout = ({ children }) => {
  return <div className="unauthenticated-layout-container">{children}</div>;
};

UnauthenticatedLayout.propTypes = {
  children: PropTypes.node,
};

export default UnauthenticatedLayout;
