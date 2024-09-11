import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-6">Welcome to VOS Software</h1>
      <div className="space-x-4">
        <Link to="/upload">
          <button className="px-4 py-2 bg-blue-500 text-white rounded">
            Upload Data
          </button>
        </Link>
        <Link to="/edit">
          <button className="px-4 py-2 bg-green-500 text-white rounded">
            Edit Data
          </button>
        </Link>
        <Link to="/results">
          <button className="px-4 py-2 bg-yellow-500 text-white rounded">
            View Results
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
