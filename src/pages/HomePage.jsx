import { useFetchFilmInfo } from 'helpers/useFetchFilmInfo';
import { getPublicationsDay } from 'service/FilmAPI';
import { FilmList } from 'components/FilmList/FilmList';
import { Title, Spiner, SectionContainer } from 'components/Utils';

export const HomePage = () => {
  const { data, status } = useFetchFilmInfo(getPublicationsDay);

  return (
    <>
      {status === 'loading' && <Spiner />}
      {status === 'resolve' && data && (
        <SectionContainer>
          <Title padding="0 0 20px 80px">Популярные фильмы дня</Title>
          <FilmList films={data} />
        </SectionContainer>
      )}
    </>
  );
};
