import styled from 'styled-components';
import { Hearts } from 'react-loader-spinner';

const Wrapper = styled.div`
  margin: 0 auto;
  width: 100px;
`;

export const Spiner = () => (
  <Wrapper>
    <Hearts color="black" />
  </Wrapper>
);
