import categories from '../data/categories';
import PageContent from '../components/PageContent';

function Wines() {
  return (
    <>
      <PageContent title="Wines" category={categories.WINES} hasImages={false} />
    </>
  );
}

export default Wines;
