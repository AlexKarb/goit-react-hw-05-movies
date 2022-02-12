import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const useFetchFilmInfo = (functionForApi, prop = null) => {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  useEffect(() => {
    setStatus('loading');
    functionForApi(prop)
      .then(setData)
      .catch(setError)
      .finally(setStatus('resolve'));
  }, [functionForApi, prop]);
  return { data, status, error };
};

useFetchFilmInfo.propTypes = {
  functionForApi: PropTypes.func.isRequired,
  prop: PropTypes.string,
};
