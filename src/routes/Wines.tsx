import { Link } from 'react-router-dom';

function Wines() {
  return (
    <div>
      <Link to="/menu">Go back to main menu</Link>
      <p>Wines route</p>
    </div>
  );
}

export default Wines;
