import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ScrollRestoration } from 'react-router-dom';

function Root() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/menu');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <ScrollRestoration
        getKey={(location, _matches) => {
          return location.pathname;
        }}
      />
      <div className="grid h-64 w-full place-content-center overflow-hidden bg-neutral-900 shadow-md">
        <img src="/images/68-wat-bong-logo.png" alt="wat bong logo" className="h-80 object-cover" />
      </div>
      <Outlet />

      <footer className="footer bg-base-200 p-10 text-base text-base-content sm:text-lg">
        <section className="flex w-full justify-center gap-4">
          <div>
            <img src="/images/68-wat-bong-logo.png" alt="wat bong logo" className="h-64 w-40 object-cover" />
          </div>
          {/* prettier-ignore */}
          <nav>
            <h6 className="footer-title">Menu</h6>
            <p>
              <Link to="/menu" className="link-hover link">Main Menu</Link>
            </p>
            <p>
              <Link to="/burgers" className="link-hover link">Burgers</Link>
            </p>
            <p>
              <Link to="/sandwiches" className="link-hover link">Sandwiches</Link>
            </p>
            <p>
              <Link to="/macandcheese" className="link-hover link">Mac & Cheese</Link>
            </p>
            <p>
              <Link to="/mains" className="link-hover link">Mains</Link>
            </p>
            <p>
              <Link to="/snacks" className="link-hover link">Snacks</Link>
            </p>
            <p>
              <Link to="/soups" className="link-hover link">Soups</Link>
            </p>
            <p>
              <Link to="/desserts" className="link-hover link">Desserts</Link>
            </p>
          </nav>
          {/* prettier-ignore */}
          <nav>
            <h6 className="footer-title">Drinks</h6>
            <p>
              <Link to="/softdrinks" className="link-hover link">Soft Drinks</Link>
            </p>
            <p>
              <Link to="/juices" className="link-hover link">Fresh Juice</Link>
            </p>
            <p>
              <Link to="/shakes" className="link-hover link">Shakes</Link>
            </p>
            <p>
              <Link to="/coffeetea" className="link-hover link">Coffee & Tea</Link>
            </p>
            <p>
              <Link to="/beers" className="link-hover link">Beers</Link>
            </p>
            <p>
              <Link to="/spirits" className="link-hover link">Spirits</Link>
            </p>
            <p>
              <Link to="/wines" className="link-hover link">Wines</Link>
            </p>
            <p>
              <Link to="/cocktails" className="link-hover link">Cocktails</Link>
            </p>
          </nav>
        </section>
      </footer>
    </>
  );
}

export default Root;
