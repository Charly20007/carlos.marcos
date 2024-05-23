import { NavLink, useNavigate } from "react-router-dom";

const Menu: React.FC = () => {
  const navigation = useNavigate();

  const handleLogout = (): void => {
    localStorage.removeItem("token");
    navigation("/login");
  };

  return (
      <nav className="bg-black py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between">
            <div className="flex space-x-4">
              <div className="flex items-center">
                <NavLink to="/" className="text-red-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Inicio
                </NavLink>
              </div>
              <div className="flex items-center">
                <NavLink to="/peliculas" className="text-red-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Películas
                </NavLink>
              </div>
            </div>
            <div className="flex items-center">
              <a onClick={handleLogout} className="cursor-pointer text-red-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Cerrar sesión
              </a>
            </div>
          </div>
        </div>
        <hr className="border-white border-t" />
      </nav>
  );
};

export default Menu;

