import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="max-w-md w-full space-y-8 bg-black p-8 rounded-lg shadow-lg">
        <h1 className="mt-6 text-center text-3xl font-extrabold text-red-600">App Movie</h1>
        <p className="text-center text-white">Conoce las películas más vistas</p>
        <Link to="/peliculas" className="block w-full py-2 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 text-center">
          Ver películas
        </Link>
      </div>
    </div>
  );
};

export default Home;

