import { useState } from "react";
import Input from "@components/Input";

import Table from "../components/Table";


const Edit = () => {
  const [formData, setFormData] = useState({
    MD: "",
    INC: "",
    AZI: "",
  });
  const [data, setData] = useState([]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setData([...data, formData]);
  };

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-6">Edit Data</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <Input
          label="MD"
          name="MD"
          value={formData.MD}
          onChange={handleChange}
        />
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
        <button
          type="submit"
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Add Data
        </button>
      </form>
      <Table data={data} />
    </div>
  );
};

export default Edit;
