import PropTypes from "prop-types";
import "./Alert.scss";

const Alert = ({ alertMessage }) => {
  return <div>{alertMessage}</div>;
};

Alert.propTypes = {
  alertMessage: PropTypes.string.isRequired,
};

export default Alert;
