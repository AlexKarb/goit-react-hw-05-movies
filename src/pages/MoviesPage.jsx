import { useSearchParams } from 'react-router-dom';
import { useFetchFilmInfo } from 'helpers/useFetchFilmInfo';
import { getPublicationsSearch } from 'service/FilmAPI';
import { FilmList } from 'components/FilmList/FilmList';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { SectionContainer, Spiner } from 'components/Utils';

export const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { data, status } = useFetchFilmInfo(
    getPublicationsSearch,
    searchParams.get('query')
  );

  return (
    <SectionContainer>
      <SearchForm onSubmit={setSearchParams} />
      {status === 'loading' && <Spiner />}
      {status === 'resolve' && data && <FilmList films={data} />}
    </SectionContainer>
  );
};
