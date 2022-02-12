import axios from 'axios';
import { createApiConfiguration } from 'helpers/createApiConfig';
import { getErrorFromLength } from 'helpers/getErrorFromLength';
import PropTypes from 'prop-types';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const DATA_FETCH = {
  api_key: '7b5bc84100d595f56fff5f28d8089376',
  language: 'ru',
};
const textError =
  'К сожалению, поиск по сайту не дал никаких результатов. Попробуйте изменить или сократить Ваш запрос.';
const config = createApiConfiguration(DATA_FETCH);

export const getPublication = async (
  request,
  { return: whatNeedReturn, error = false } = {}
) => {
  const response = await axios.get(request);
  const data = whatNeedReturn
    ? await response.data[whatNeedReturn]
    : await response.data;

  if (error) getErrorFromLength(data, textError);
  return data;
};

export const getPublicationsDay = () =>
  getPublication(`/trending/movie/day?${config}`, { return: 'results' });

export const getPublicationsSearch = async value =>
  value
    ? getPublication(`/search/movie?query=${value}&${config}`, {
        return: 'results',
        error: true,
      })
    : undefined;

export const getPublicationsOneFilm = async id =>
  getPublication(`movie/${id}?${config}`);

export const getActors = async id =>
  getPublication(`movie/${id}/credits?${config}`, { return: 'cast' });

export const getRewiews = async id =>
  getPublication(`movie/${id}/reviews?api_key=${DATA_FETCH.api_key}`, {
    return: 'results',
  });

getPublication.propType = {
  request: PropTypes.func.isRequired,
};
