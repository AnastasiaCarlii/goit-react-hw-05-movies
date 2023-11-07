import Loader from 'components/Loader/Loader';
import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to={'/'}>Home</NavLink>
        </li>
        <li>
          <NavLink to={'/movies'}>Movies</NavLink>
        </li>
      </ul>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
