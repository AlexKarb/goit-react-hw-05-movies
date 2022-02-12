import styled from 'styled-components';
import PropTypes from 'prop-types';

const Text = styled.h1`
  padding: ${prop => prop.padding};
`;

export const Title = ({ children, padding }) => (
  <Text padding={padding}>{children}</Text>
);

Title.propTypes = {
  children: PropTypes.node,
  padding: PropTypes.string,
};
