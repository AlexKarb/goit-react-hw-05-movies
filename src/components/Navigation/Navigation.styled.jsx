import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  width: 200px;
  display: flex;
  justify-content: space-between;
`;

export const Link = styled(NavLink)`
  font-size: 20px;
  text-decoration: none;
  padding: 3px;
  color: black;

  &:hover,
  &:focus,
  &.active {
    color: red;
  }
`;
