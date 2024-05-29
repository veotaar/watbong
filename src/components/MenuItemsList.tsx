import MenuItem from './MenuItem';
import data from '../data/data';
import categories from '../data/categories';

interface MenuItemListProps {
  category: string;
}

const textOnlyLists = [
  categories.COCKTAILS,
  categories.SPIRITS,
  categories.EXTRAS_1,
  categories.EXTRAS_2,
  categories.EXTRAS_3,
  categories.EXTRAS_4,
];

function MenuItemList({ category }: MenuItemListProps) {
  return (
    <div className="mb-8 flex flex-col gap-2 sm:gap-3">
      {data
        .filter((item) => item.category === category)
        .map((item) => (
          <MenuItem
            id={item.id}
            image={item.image ? item.image : ''}
            itemName={item.itemName}
            description={item.description ? item.description : ''}
            price={item.price ? item.price : 0}
            addYMargins={!textOnlyLists.includes(category)}
          />
        ))}
    </div>
  );
}

export default MenuItemList;
