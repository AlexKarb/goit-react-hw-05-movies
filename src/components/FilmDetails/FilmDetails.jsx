import { Image, Title, SectionContainer } from 'components/Utils';
import { FilmInfo } from './FilmDetails.styled';
import PropTypes from 'prop-types';

export const FilmDetails = ({ film }) => {
  const {
    poster_path,
    title = 'Заголовок  отсутствует',
    vote_average,
    overview,
    genres = ['информация отсутствует'],
  } = film;
  const percentageScore = `${vote_average * 10}%`;

  return (
    <SectionContainer display="flex">
      <Image
        src={poster_path}
        alt={title}
        styling={'flex-shrink: 0; width: 170px; height: 100%;'}
      />

      <FilmInfo>
        <Title> {title}</Title>
        <p>
          Оценка пользователя : {percentageScore ?? 'информация отсутствует'}
        </p>
        <h2>Обзор</h2>
        <p>{overview || 'информация отсутствует'}</p>
        <h2>Жанры</h2>
        <p>{genres.map(({ name }) => name).join(' ')}</p>
      </FilmInfo>
    </SectionContainer>
  );
};

FilmDetails.propTypes = {
  film: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.array,
  }),
};
