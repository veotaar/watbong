import { Link } from 'react-router-dom';

function Sandwiches() {
  return (
    <div>
      <Link to="/menu">Go back to main menu</Link>
      <p>Sandwiches route</p>
      <Link to="/softdrinks" state={{ referrer: '/sandwiches', refName: 'Sandwiches' }}>
        Soft Drinks
      </Link>
    </div>
  );
}

export default Sandwiches;
