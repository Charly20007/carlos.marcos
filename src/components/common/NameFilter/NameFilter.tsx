import { useState } from 'react';
import { NameFilterProps } from '../../interface/interface';

const NameFilter: React.FC<NameFilterProps> = ({ onFilterByName, onClearFilters }) => {
  const [name, setName] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onFilterByName(name);
  };

  const handleClear = () => {
    setName('');
    onClearFilters(); 
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-xl font-bold mb-4">Buscar por Nombre</h2>
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
        <input
          type="text"
          placeholder="Nombre de la película"
          value={name}
          onChange={handleChange}
          className="px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 text-black"
        />
        <div className="flex">
          <button 
            type="submit"
            className="px-4 py-2 bg-black text-white rounded-lg shadow hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-red-500" 
          >
            Buscar
          </button>
          <button
            type="button"
            onClick={handleClear}
            className="px-4 py-2 bg-black text-white rounded-lg shadow hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-red-500 ml-2" 
          >
            Limpiar
          </button>
        </div>
      </form>
    </div>
  );
};

export default NameFilter;





