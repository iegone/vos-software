import PropTypes from "prop-types";

const Input = ({ label, type, name, value, onChange, placeholder, error }) => {
  return (
    <div className="mb-4">
      {label && (
        <label className="block text-sm font-medium mb-1">{label}</label>
      )}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  error: PropTypes.string,
};

Input.defaultProps = {
  type: "text",
  placeholder: "",
  error: "",
};

export default Input;
