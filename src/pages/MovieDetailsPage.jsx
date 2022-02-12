import { Suspense, useRef } from 'react';
import { useParams, Outlet, Link, useLocation } from 'react-router-dom';
import { useFetchFilmInfo } from 'helpers/useFetchFilmInfo';
import { getPublicationsOneFilm } from 'service/FilmAPI';
import { FilmDetails } from 'components/FilmDetails/FilmDetails';
import { MoreInfoNavigation } from 'components/NavMoreInfo/MoreInfoNavigation';
import { Button, Spiner } from 'components/Utils';

export const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const { data } = useFetchFilmInfo(getPublicationsOneFilm, movieId);
  const location = useLocation();
  const backToPage = useRef(location?.state?.from ?? '/');

  return (
    <>
      <Button type="button" styling={'margin: 3px 132px;'}>
        <Link to={backToPage.current}>Назад</Link>
      </Button>

      {data && (
        <>
          <FilmDetails film={data} />
          <MoreInfoNavigation id={movieId} />
          <Suspense fallback={<Spiner />}>
            <Outlet />
          </Suspense>
        </>
      )}
    </>
  );
};
