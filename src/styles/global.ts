import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 16px;
    vertical-align: baseline;
  }

  html, body{
    height: 100%;

  }
  body{
    line-height: 1.5;
    font-family: sans-serif, 'Arial';
    transition: background-color 300ms ease-in-out;
    background-color: ${({ theme }) => theme.background};
    
  }

  
`;

export const Container = styled.section`
  max-width: 640px;
  margin: 20px auto;
  background: #fff;
  padding: 20px;
  text-align: center;
  border-radius: 15px;
`;
