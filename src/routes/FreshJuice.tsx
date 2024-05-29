import categories from '../data/categories';
import PageContent from '../components/PageContent';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { SlArrowLeft } from 'react-icons/sl';

function FreshJuice() {
  const { state } = useLocation();

  return (
    <>
      <PageContent title="Fresh Juice" category={categories.JUICES} />
      {state && (
        <Link className="btn btn-accent" to={state.referrer}>
          <SlArrowLeft />
          <p>Go Back to {state.refName}</p>
        </Link>
      )}
    </>
  );
}

export default FreshJuice;
