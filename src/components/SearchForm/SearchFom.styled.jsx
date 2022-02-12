import styled from 'styled-components';
import { Form, Field } from 'formik';

export const SuperForm = styled(Form)`
  padding: 40px;
  display: flex;
  width: 400px;
  margin: 0 auto;
`;

export const Input = styled(Field)`
  height: 35px;
  width: 350px;
  padding: 2px 10px;
  transition: all 500ms linear, transform 500ms ease-in-out;

  &:focus ~ label {
    transform: translateY(-35px);
  }

  &:not(: placeholder-shown) ~ label {
    transform: translateY(-35px);
  }
`;

export const Wrapper = styled.div`
  position: relative;
  margin-right: 17px;
`;

export const Label = styled.label`
  position: absolute;
  top: 7px;
  left: 20px;
  color: grey;
`;

export const Error = styled.div`
  padding: 5px 20px;
  color: red;
  font-size: 12px;
`;
