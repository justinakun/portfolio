import PropTypes from "prop-types";
import Topbar from "../components/Topbar/Topbar";
import "./Layout.scss";

const UnauthenticatedLayout = ({ children }) => {
  return (
    <div className="unauthenticated-layout-container">
      <Topbar className="top-bar" />
      {children}
    </div>
  );
};

UnauthenticatedLayout.propTypes = {
  children: PropTypes.node,
};

export default UnauthenticatedLayout;
