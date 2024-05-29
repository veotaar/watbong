import categories from '../data/categories';
import PageContent from '../components/PageContent';
import DrinksReferrerButtons from '../components/DrinksReferrerButtons';
import MenuItemList from '../components/MenuItemsList';

function MacAndCheese() {
  return (
    <>
      <PageContent title="Mac & Cheese" category={categories.MACANDCHEESE} />
      <h1 className="mb-2 text-center text-2xl font-bold underline underline-offset-8">Extras</h1>
      <MenuItemList category={categories.EXTRAS_1} />
      <MenuItemList category={categories.EXTRAS_2} />
      <MenuItemList category={categories.EXTRAS_3} />
      <DrinksReferrerButtons refName="Mac & Cheese" referrer="/macandcheese" />
    </>
  );
}

export default MacAndCheese;
