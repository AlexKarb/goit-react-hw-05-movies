import { ActorsList } from 'components/ActorsList/ActorsList';
import { SectionContainer } from 'components/Utils/SectionContainer';
import { useFetchFilmInfo } from 'helpers/useFetchFilmInfo';
import { useParams } from 'react-router-dom';
import { getActors } from 'service/FilmAPI';

export const Cast = () => {
  const { movieId } = useParams();
  const { data } = useFetchFilmInfo(getActors, movieId);

  return (
    <SectionContainer>{data && <ActorsList actors={data} />}</SectionContainer>
  );
};
