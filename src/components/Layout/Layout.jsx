import Loader from 'components/Loader/Loader';
import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';

import styles from './Layout.module.css';

const Layout = () => {
  return (
    <div className={styles.layoutContainer}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <NavLink to={'/'}>Home</NavLink>
        </li>
        <li className={styles.navItem}>
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
