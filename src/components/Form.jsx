import { useState } from "react";
import Input from "@components/Input";
import Button from "@components/Button";
import PropTypes from "prop-types";



const Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    MD: "",
    INC: "",
    AZI: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <Input label="MD" name="MD" value={formData.MD} onChange={handleChange} />
      <Input
        label="INC"
        name="INC"
        value={formData.INC}
        onChange={handleChange}
      />
      <Input
        label="AZI"
        name="AZI"
        value={formData.AZI}
        onChange={handleChange}
      />
      <Button type="submit" variant="primary">
        Submit
      </Button>
    </form>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
