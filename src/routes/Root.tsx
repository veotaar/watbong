import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Root() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/menu');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="grid h-64 w-full place-content-center overflow-hidden bg-neutral-900 shadow-md">
        <img src="/images/68-wat-bong-logo.png" alt="wat bong logo" className="h-80 object-cover" />
      </div>
      <Outlet />
    </>
  );
}

export default Root;
