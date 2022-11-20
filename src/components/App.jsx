import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';

const Home = lazy(() => import('../pages/Home/Home'));
const FilmCast = lazy(() => import('../components/FilmCast/FilmCast'));
const FilmRewiev = lazy(() => import('./FilmRewiev/FilmReview'));
const MovieItem = lazy(() => import('../pages/MovieItem/MovieItem'));
const Movies = lazy(() => import('../pages/Movies/Movies'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieItem />}>
            <Route path="cast" element={<FilmCast />} />
            <Route path="reviews" element={<FilmRewiev />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
