import { PremiereCardProps } from "../interface/interface";

const PremiereCard: React.FC<PremiereCardProps> = ({ premiere }) => {
  return (
    <div className="relative rounded-lg overflow-hidden group">
      <img
        src={premiere.image}
        alt={premiere.description}
        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
        style={{ maxHeight: '300px' }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <h3 className="text-lg font-semibold text-white mb-2">{premiere.description}</h3>
        <p className="text-gray-300">Categoría: {premiere.category}</p>
      </div>
    </div>
  );
};

export default PremiereCard;
