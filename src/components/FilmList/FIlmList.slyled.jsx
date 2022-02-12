import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: -20px;
  justify-content: space-between;
`;

export const Card = styled.li`
  width: calc((100% / 4) - 10px);
  margin-bottom: 20px;
  background-color: #ececec;
  list-style: none;
  cursor: pointer;
`;

export const PosterLink = styled(Link)`
  display: block;
  padding: 0px 20px;
  height: 300px;
  color: black;
`;

export const Title = styled.p`
  text-align: center;
  padding: 20px 5px;
`;
