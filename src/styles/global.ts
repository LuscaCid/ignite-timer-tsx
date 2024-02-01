import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 }
 :root {
  font-size: 62.5%;
 }
 :focus {
  outline: 0;
  box-shadow: ${(props) => props.theme['green-500']};
 }
 body {
  -webkit-font-smoothing: antialiased;
  background-color: ${({ theme }) => theme['gray-900']};
  color: ${({ theme }) => theme['gray-300']};
 }
 body, input-security, textarea, button{
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 2rem;
 }
`
