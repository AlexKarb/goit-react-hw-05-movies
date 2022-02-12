import PropTypes from 'prop-types';

export const createApiConfiguration = (obj = {}) => {
  return Object.entries(obj)
    .map(type => type.join('='))
    .join('&');
};

createApiConfiguration.propTypes = {
  obj: PropTypes.object,
};
