import { useState } from "react";
const Upload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = () => {
    // معالجة رفع الملف وتحليله
    alert(`File uploaded: ${file.name}`);
  };

  return (
    <div className=" h-full flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-6">Upload Your Data</h1>
      <input type="file" onChange={handleFileChange} className="mb-4" />
      <button
        onClick={handleSubmit}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Submit
      </button>
    </div>
  );
};

export default Upload;
