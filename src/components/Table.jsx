import PropTypes from "prop-types"; // استيراد PropTypes

const Table = ({ data }) => {
  if (!data || data.length === 0) {
    return <p>No data available</p>;
  }

  return (
    <table className="table-auto">
      <thead>
        <tr>
          {Object.keys(data[0]).map((key) => (
            <th key={key}>{key}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {Object.keys(row).map((key) => (
              <td key={key}>{row[key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

// إضافة التحقق من الأنواع
Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired, // تحقق أن data عبارة عن مصفوفة من الكائنات
};

export default Table;
