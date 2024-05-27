import { Link } from 'react-router-dom';

function Burgers() {
  return (
    <div>
      <Link to="/menu">Go back to main menu</Link>
      <p>Burgers route</p>
      <h2>Related:</h2>
      <Link to="/softdrinks" state={{ referrer: '/burgers', refName: 'Burgers' }}>
        Soft Drinks
      </Link>
    </div>
  );
}

export default Burgers;
