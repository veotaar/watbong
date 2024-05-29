import categories from '../data/categories';
import PageContent from '../components/PageContent';

function Cocktails() {
  return (
    <>
      <PageContent title="Cocktails" category={categories.COCKTAILS} hasImages={false} />
    </>
  );
}

export default Cocktails;
