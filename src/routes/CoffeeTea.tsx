import { Link } from 'react-router-dom';

function CoffeeTea() {
  return (
    <div>
      <Link to="/menu">Go back to main menu</Link>
      <p>CoffeeTea route</p>
    </div>
  );
}

export default CoffeeTea;
