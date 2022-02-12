import styled from 'styled-components';
import { FaUserAlt } from 'react-icons/fa';

export const UserIcon = styled(FaUserAlt)`
  margin: 0 15px;
  width: 20px;
  height: 20px;
`;

export const Name = styled.p`
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

export const Comment = styled.p`
 overflow-y: auto;
    min-height: 50px;
    max-height: 100px;
        font-family: cursive;
    color: #393939;
}
`;

export const Item = styled.li`
  border: 1px solid;
  padding: 20px 30px;
  list-style: none;
  margin-bottom: 30px;
`;
