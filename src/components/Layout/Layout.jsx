import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import styles from './Layout.module.css';
import { Spinner } from 'components/Spinner/Spinner';

export const Layout = () => {
  return (
    <>
      <nav className={styles.navigation}>
        <ul className={styles.navList}>
          <li>
            <NavLink to="/" className={styles.navLink}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/movies" className={styles.navLink}>
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
      <Suspense fallback={<Spinner />}>
        <Outlet />
      </Suspense>
    </>
  );
};
