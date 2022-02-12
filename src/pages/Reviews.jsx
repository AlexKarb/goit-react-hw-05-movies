import { CommentList } from 'components/CommentsList/CommentsList';
import { SectionContainer } from 'components/Utils/SectionContainer';
import { useFetchFilmInfo } from 'helpers/useFetchFilmInfo';
import { useParams } from 'react-router-dom';
import { getRewiews } from 'service/FilmAPI';

export const Reviews = () => {
  const { movieId } = useParams();
  const { data } = useFetchFilmInfo(getRewiews, movieId);

  return (
    <SectionContainer>
      {data && <CommentList comments={data} />}
    </SectionContainer>
  );
};
