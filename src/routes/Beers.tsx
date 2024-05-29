import categories from '../data/categories';
import PageContent from '../components/PageContent';

function Beers() {
  return (
    <>
      <PageContent title="Beers" category={categories.BEERS} />
    </>
  );
}

export default Beers;
