import { Link } from 'react-router-dom';

function Desserts() {
  return (
    <div>
      <Link to="/menu">Go back to main menu</Link>
      <p>Desserts route</p>
    </div>
  );
}

export default Desserts;
