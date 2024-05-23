import { CategoryFilterProps } from '../../interface/interface';

const CategoryFilter: React.FC<CategoryFilterProps> = ({ categories, selectedCategory, onSelectCategory }) => {
  const showAll = () => {
    onSelectCategory(null);
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-bold mb-4">Categoría</h2>
      <div className="flex flex-wrap justify-center gap-4 overflow-x-auto" style={{ maxWidth: '100%' }}>
        <button
          onClick={showAll}
          className={`px-4 py-2 rounded-lg shadow focus:outline-none ${
            selectedCategory === null
              ? 'bg-red-700 text-white border-4 border-black'
              : 'bg-white text-red-700 border border-red-700 hover:border-black'
          }`}
          style={{ minWidth: '100px', transition: 'background-color 0.3s, color 0.3s, border-color 0.3s' }}
        >
          Mostrar Todo
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`px-4 py-2 rounded-lg shadow focus:outline-none ${
              selectedCategory === category
                ? 'bg-red-700 text-white border-4 border-black'
                : 'bg-white text-red-700 border border-red-700 hover:border-black'
            }`}
            style={{ minWidth: '100px', transition: 'background-color 0.3s, color 0.3s, border-color 0.3s' }}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;






