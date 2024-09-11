import { useState } from "react";
import * as XLSX from "xlsx";

const ExcelUploader = () => {
  const [data, setData] = useState([]);

  // دالة لمعالجة الملف المرفوع
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const binaryStr = e.target.result;
      const workbook = XLSX.read(binaryStr, { type: "binary" });
      const sheetName = workbook.SheetNames[0]; // اختر أول شيت
      const sheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 }); // تحويل البيانات إلى JSON مع الصفوف كأعمدة
      const formattedData = jsonData.slice(1).map((row) => ({
        depth: row[0], // العمق
        inclination: row[1], // الميل
        azimuth: row[2], // زاوية الأفق
      }));
      setData(formattedData); // تخزين البيانات
    };

    reader.readAsBinaryString(file);
  };

  return (
    <div>
      <h2>Upload Well Data</h2>
      <input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} />

      {data.length > 0 && (
        <div className="mt-4">
          <h3>Preview Data</h3>
          <table className="table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2">Depth</th>
                <th className="px-4 py-2">Inclination</th>
                <th className="px-4 py-2">Azimuth</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{row.depth}</td>
                  <td className="border px-4 py-2">{row.inclination}</td>
                  <td className="border px-4 py-2">{row.azimuth}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ExcelUploader;
