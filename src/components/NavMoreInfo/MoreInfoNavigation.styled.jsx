import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Section = styled.div`
  border-bottom: 2px solid #aeacac;
  border-top: 2px solid #aeacac;
`;
export const Title = styled.h3`
  margin: 10px;
`;

export const Li = styled.li`
  list-style: circle;
  color: black;
  margin-left: 40px;
  margin-bottom: 5px;
`;

export const SuperLink = styled(Link)`
  text-decoration: none;
  text-transform: capitalize;
  color: black;
`;
