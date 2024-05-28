import MenuItem from './MenuItem';
import data from '../data/data';

interface MenuItemListProps {
  category: string;
}

function MenuItemList({ category }: MenuItemListProps) {
  return (
    <div className="flex flex-col gap-2 sm:gap-3">
      {data
        .filter((item) => item.category === category)
        .map((item) => (
          <MenuItem
            id={item.id}
            image={item.image ? item.image : ''}
            itemName={item.itemName}
            description={item.description ? item.description : ''}
            price={item.price ? item.price : 0}
          />
        ))}
    </div>
  );
}

export default MenuItemList;
