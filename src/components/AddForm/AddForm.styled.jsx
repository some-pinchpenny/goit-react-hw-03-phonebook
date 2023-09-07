import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const PhoneForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Input = styled(Field)`
  padding: 4px 8px;
  border: 0.5px solid #c5dbe0;
  border-radius: 6px;
  font-size: 24px;
`;

export const ErrorNotif = styled(ErrorMessage)`
  font-size: 14px;
  color: red;
`;

export const ContactsBtn = styled.button`
  background-color: #ffffff;
  border: 0.5px solid #c5dbe0;
  border-radius: 6px;
  font-size: 24px;
  color: #646b74;
  padding: 4px;
`;
