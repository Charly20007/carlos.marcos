import axios from "axios";
import { useState, FormEvent, ChangeEvent } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { User } from "../../interface/interface";

const Login = () => {
  const navigate = useNavigate();
  
  const [user, setUser] = useState<User>({ email: "", password: "" });
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState<string | undefined>();

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCargando(true);
    setError(undefined);
    axios.post<{ token: string }>(`https://reqres.in/api/login`, user)
      .then(response => {
        setCargando(false);
        localStorage.setItem("token", response.data.token);
        navigate("/");
      })
      .catch(error => {
        setCargando(false);
        console.table(error);
        setError(error.response?.data.error);
      });
  };

  if (localStorage.getItem("token")) {
    return <Navigate to="/" />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="max-w-md w-full space-y-8 bg-black p-8 rounded-lg shadow-lg border-2 border-red-600">
        <h1 className="mt-6 text-center text-3xl font-extrabold text-red-600">Iniciar sesión</h1>
        <form className="mt-8 space-y-6" onSubmit={submit}>
          <div className="space-y-6">
            <div>
              <label htmlFor="email" className="sr-only">Correo Electrónico</label>
              <input 
                id="email" 
                name="email" 
                type="email" 
                required 
                className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-700 bg-gray-800 placeholder-gray-500 text-white focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm" 
                placeholder="Correo electrónico" 
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setUser(prev => ({ ...prev, email: e.target.value }));
                }} 
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Contraseña</label>
              <input 
                id="password" 
                name="password" 
                type="password" 
                required 
                className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-700 bg-gray-800 placeholder-gray-500 text-white focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm" 
                placeholder="Contraseña" 
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setUser(prev => ({ ...prev, password: e.target.value }));
                }} 
              />
            </div>
          </div>

          <div>
            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
              {cargando ? "Cargando..." : "Ingresar"}
            </button>
          </div>
        </form>
        {error && <p className="mt-2 text-center text-sm text-red-500">{error}</p>}
      </div>
    </div>
  );
};

export default Login;
