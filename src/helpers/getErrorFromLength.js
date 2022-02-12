import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

export const getErrorFromLength = (data, text, config) => {
  if (data?.length === 0) {
    toast.error(text, { config });
  }
};

getErrorFromLength.propType = {
  data: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
  config: PropTypes.object,
};
