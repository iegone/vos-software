
import PropTypes from "prop-types";

Alert.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

const Alert = ({ message, type = "error" }) => {
  const alertStyles = {
    error: "bg-red-100 text-red-700",
    success: "bg-green-100 text-green-700",
  };

  return (
    <div className={`p-4 rounded mb-4 ${alertStyles[type]}`}>{message}</div>
  );
};

export default Alert;
