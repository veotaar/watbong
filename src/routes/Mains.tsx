import categories from '../data/categories';
import PageContent from '../components/PageContent';
import DrinksReferrerButtons from '../components/DrinksReferrerButtons';

function Mains() {
  return (
    <>
      <PageContent title="Mains" category={categories.MAINS} />
      <DrinksReferrerButtons refName="Mains" referrer="/mains" />
    </>
  );
}

export default Mains;
