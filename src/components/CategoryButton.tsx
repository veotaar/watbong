import { Link } from 'react-router-dom';

interface CategoryButtonProps {
  name: string;
  image?: string;
  target: string;
  description?: string;
}

const CategoryButton = ({ name, image, target, description }: CategoryButtonProps) => {
  return (
    <Link to={target}>
      <div className="relative mb-3 h-full w-full overflow-hidden rounded-md bg-secondary shadow-md">
        {image && <img src={`.${image}`} alt={name} className="absolute inset-0 h-full w-full object-cover" />}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-60">
          <p className="pointer-events-none text-3xl font-bold text-white">{name}</p>
          {description && <p className="text-md pointer-events-none font-semibold italic text-white">{description}</p>}
        </div>
      </div>
    </Link>
  );
};

export default CategoryButton;
