import categories from '../data/categories';
import PageContent from '../components/PageContent';
function Snacks() {
  return (
    <>
      <PageContent title="Snacks" category={categories.SNACKS} />
    </>
  );
}

export default Snacks;
