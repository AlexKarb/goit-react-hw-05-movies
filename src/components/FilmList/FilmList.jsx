import { Card, List, Title, PosterLink } from './FIlmList.slyled';
import { Image } from 'components/Utils/ImageApi';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

export const FilmList = ({ films }) => {
  const location = useLocation();

  return (
    <List>
      {films.map(({ id, title, poster_path }) => (
        <Card key={id}>
          <PosterLink to={`/movies/${id}`} state={{ from: location }}>
            <Image src={poster_path} alt={title} />
          </PosterLink>
          <Title> {title}</Title>
        </Card>
      ))}
    </List>
  );
};

FilmList.propTypes = {
  actors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      poster_path: PropTypes.string,
    })
  ),
};
