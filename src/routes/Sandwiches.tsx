import categories from '../data/categories';
import PageContent from '../components/PageContent';
import DrinksReferrerButtons from '../components/DrinksReferrerButtons';
import MenuItemList from '../components/MenuItemsList';

function Sandwiches() {
  return (
    <>
      <PageContent title="Sandwiches" category={categories.SANDWICHES} />
      <h1 className="mb-2 text-center text-2xl font-bold underline underline-offset-8">Extras</h1>
      <MenuItemList category={categories.EXTRAS_2} />
      <MenuItemList category={categories.EXTRAS_3} />
      <DrinksReferrerButtons refName="Sandwiches" referrer="/sandwiches" />
    </>
  );
}

export default Sandwiches;
