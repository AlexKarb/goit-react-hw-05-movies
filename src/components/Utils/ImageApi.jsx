import styled from 'styled-components';
import { IoMdImages } from 'react-icons/io';
import PropTypes from 'prop-types';

const Icon = styled(IoMdImages)`
  width: 100%;
  height: 100%;
  ${prop => prop.styling}
`;

const StyledImage = styled.img`
  ${prop => prop.styling}
`;

export const Image = ({ src, alt = 'poster', styling }) =>
  src ? (
    <StyledImage
      styling={styling}
      src={`https://image.tmdb.org/t/p/w500${src}`}
      alt={alt}
    />
  ) : (
    <Icon styling={styling} />
  );

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  styling: PropTypes.string,
};
