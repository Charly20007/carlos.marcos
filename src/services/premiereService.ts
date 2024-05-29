import axios from 'axios';
import { Premiere } from '../components/interface/interface';

export const fetchPremieres = async (): Promise<Premiere[]> => {
  const response = await axios.get('https://cp-staging.onrender.com/v1/premieres');
  return response.data.premieres.map((premiere: Premiere) => ({
    ...premiere,
    category: getRandomCategory(),
  }));
};

const getRandomCategory = () => {
  const categories = ['Accion', 'Crimen', 'Drama'];
  const randomIndex = Math.floor(Math.random() * categories.length);
  return categories[randomIndex];
};
