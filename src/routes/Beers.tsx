import { Link } from 'react-router-dom';

function Beers() {
  return (
    <div>
      <Link to="/menu">Go back to main menu</Link>
      <p>Beers route</p>
    </div>
  );
}

export default Beers;
