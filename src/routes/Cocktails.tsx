import { Link } from 'react-router-dom';

function Cocktails() {
  return (
    <div>
      <Link to="/menu">Go back to main menu</Link>
      <p>Cocktails route</p>
    </div>
  );
}

export default Cocktails;
