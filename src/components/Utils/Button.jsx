import styled from 'styled-components';
import PropTypes from 'prop-types';

const Btn = styled.button`
  background-color: transparent;
  border: 1px solid #e7e7e7;
  padding: 6px 20px;
  min-width: 40px;
  height: 35px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  ${prop => prop.styling};

  &:hover,
  &:focus {
    background-color: #eeeeee;
  }
`;

export const Button = ({
  type = 'submit',
  onClick,
  text = null,
  icon = false,
  disabled = false,
  children,
  styling,
}) => (
  <Btn type={type} styling={styling} onClick={onClick} disabled={disabled}>
    {text || icon || children}
  </Btn>
);

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  text: PropTypes.string,
  icon: PropTypes.element,
  disabled: PropTypes.bool,
  children: PropTypes.node,
  styling: PropTypes.string,
};
