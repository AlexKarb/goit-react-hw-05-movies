import { Routes, Route, Navigate } from 'react-router-dom';
import { App } from 'components/App';
import { lazyLoaderForPage } from 'service/lazyLoader';

const HomePage = lazyLoaderForPage('HomePage');
const MoviesPage = lazyLoaderForPage('MoviesPage');
const MovieDetailsPage = lazyLoaderForPage('MovieDetailsPage');
const Cast = lazyLoaderForPage('Cast');
const Reviews = lazyLoaderForPage('Reviews');

export const Layout = () => (
  <Routes>
    <Route path="/" element={<App />}>
      <Route index element={<HomePage />} />
      <Route path="movies" element={<MoviesPage />} />
      <Route path="movies/:movieId" element={<MovieDetailsPage />}>
        <Route path="cast" element={<Cast />} />
        <Route path="reviews" element={<Reviews />} />
      </Route>
    </Route>
    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
);
