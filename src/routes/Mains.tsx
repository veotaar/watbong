import { Link } from 'react-router-dom';
import MenuItemList from '../components/MenuItemsList';
import categories from '../data/categories';

function Mains() {
  return (
    <div>
      <Link to="/menu" className="btn btn-primary">
        Go back to main menu
      </Link>
      <p>Tap on images to enlarge / minimize.</p>
      <h1 className="text-center text-xl">Mains</h1>
      <hr />
      <MenuItemList category={categories.MAINS} />
    </div>
  );
}

export default Mains;
