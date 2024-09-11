import PropTypes from "prop-types";
import clsx from "clsx";

const Button = ({ children, onClick, type, variant, disabled }) => {
  const baseStyles =
    "px-4 py-2 rounded focus:outline-none transition duration-300";
  const variants = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(
        baseStyles,
        variants[variant],
        disabled && "opacity-50 cursor-not-allowed"
      )}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  variant: PropTypes.oneOf(["primary", "secondary", "danger"]),
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  type: "button",
  variant: "primary",
  disabled: false,
};

export default Button;
