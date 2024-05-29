import categories from '../data/categories';
import PageContent from '../components/PageContent';
import DrinksReferrerButtons from '../components/DrinksReferrerButtons';
import MenuItemList from '../components/MenuItemsList';

function Burgers() {
  return (
    <>
      <PageContent title="Step 1: Choose Your Burger" category={categories.BURGERS} />
      <h1 className="mb-2 text-center text-2xl font-bold">Step 2: Choose Your Patty</h1>
      <div className="mb-4 text-center text-lg">
        <p>House Seasoned Beef</p>
        <p>{`100% Wagyu (+3.50$)`}</p>
        <p>Chicken Schnitzel</p>
        <p>Homemade Mushroom & Bean Patty</p>
        <p>{`Omnimeat Kebab (V) (+2$)`}</p>
      </div>
      <h1 className="mb-2 text-center text-2xl font-bold">Step 3: Choose Your Side</h1>
      <div className="mb-4 text-center text-lg">
        <p>{`French Fries (V)`}</p>
        <p>{`Onion Rings (+0.50$)`}</p>
        <p>{`Sweet Potato Fries (V) (+1$)`}</p>
        <p>Asian Slaw</p>
      </div>
      <h1 className="mb-2 text-center text-2xl font-bold underline underline-offset-8">Extras</h1>
      <MenuItemList category={categories.EXTRAS_2} />
      <MenuItemList category={categories.EXTRAS_3} />
      <DrinksReferrerButtons refName="Burgers" referrer="/burgers" />
    </>
  );
}

export default Burgers;
