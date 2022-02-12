import { Link, Nav } from './Navigation.styled';

export const Navigation = () => (
  <Nav>
    <Link to="/">Главная</Link>
    <Link to="/movies">Фильмы</Link>
  </Nav>
);
