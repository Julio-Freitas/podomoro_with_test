import styled from 'styled-components';
import { PropsButtonStyle } from './types';

export const Button = styled.button.attrs<PropsButtonStyle>(props => ({
  color: props.textColor || '#000',
  backgroundColor: 'red',
}))<PropsButtonStyle>`
  width: 150px;
  height: 50px;
  font-weight: bold;
  cursor: pointer;
  border: none;
  padding: 15px 32px;
  transition: all 0.5s;
  border-radius: 5px;
  color: ${({ textColor }) => textColor};
  background-color: ${({ theme }) => theme.background};

  &:hover {
    background-color: ${({ hoverColor }) => hoverColor};
  }

  &:focus {
    box-shadow: 2px 2px 9px -2px #000000;
  }
`;
