import { Link } from 'react-router-dom';
import { SlArrowRight } from 'react-icons/sl';
import categories from '../data/categories';
import PageContent from '../components/PageContent';

function Desserts() {
  return (
    <>
      <PageContent title="Desserts" category={categories.DESSERTS} />
      <Link className="btn btn-accent" to="/coffeetea" state={{ referrer: '/desserts', refName: 'Desserts' }}>
        <p>Coffee & Tea</p>
        <SlArrowRight />
      </Link>
    </>
  );
}

export default Desserts;
