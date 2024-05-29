import { useEffect, useState } from 'react';
import CategoryFilter from '../CategoryFilter/CategoryFilter';
import NameFilter from '../NameFilter/NameFilter';
import PremiereCard from '../../UI/Card';
import { Premiere } from '../../interface/interface';
import { fetchPremieres } from '../../../services/premiereService';

const HomePremiere: React.FC = () => {
  const [premieres, setPremieres] = useState<Premiere[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [filteredName, setFilteredName] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const premieresData = await fetchPremieres();
        setPremieres(premieresData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching premieres:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filterByCategory = (category: string | null) => {
    setSelectedCategory(category);
  };

  const filterByName = (name: string) => {
    setFilteredName(name);
  };

  const clearFilters = () => {
    setSelectedCategory(null);
    setFilteredName('');
  };

  const filteredPremieresByName = filteredName
    ? premieres.filter(premiere => premiere.description.toLowerCase().includes(filteredName.toLowerCase()))
    : premieres;

  const filteredPremieresByCategory = selectedCategory
    ? filteredPremieresByName.filter(premiere => premiere.category === selectedCategory)
    : filteredPremieresByName;

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Todas las Películas</h2>
      {loading ? ( 
        <div className="text-center">Cargando...</div>
      ) : (
        <>
          <div className="flex flex-col gap-5 md:flex-row items-center justify-between mb-4 bg-red-500 rounded-lg p-4 md:items-stretch md:space-x-4 md:p-6">
            <CategoryFilter
              categories={['Accion', 'Crimen', 'Drama']}
              selectedCategory={selectedCategory}
              onSelectCategory={filterByCategory}
            />
            <NameFilter onFilterByName={filterByName} onClearFilters={clearFilters} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredPremieresByCategory.map((premiere, index) => (
              <PremiereCard key={index} premiere={premiere} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default HomePremiere;








