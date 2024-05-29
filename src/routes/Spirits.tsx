import categories from '../data/categories';
import PageContent from '../components/PageContent';

function Spirits() {
  return (
    <>
      <PageContent title="Spirits" category={categories.SPIRITS} hasImages={false} />
    </>
  );
}

export default Spirits;
