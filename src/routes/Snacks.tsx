import { Link } from 'react-router-dom';

function Snacks() {
  return (
    <div>
      <Link to="/menu">Go back to main menu</Link>
      <p>Snacks route</p>
    </div>
  );
}

export default Snacks;
