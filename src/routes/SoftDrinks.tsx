import { Link, useLocation } from 'react-router-dom';

function SoftDrinks() {
  const { state } = useLocation();
  return (
    <div>
      <Link to="/menu">Go back to main menu</Link>
      <p>SoftDrinks route</p>
      {state && <Link to={state.referrer}>Go back to {state.refName}</Link>}
    </div>
  );
}

export default SoftDrinks;
