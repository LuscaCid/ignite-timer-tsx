import styled from 'styled-components'
export const CountdownContainer = styled.div`

  font-family: 'Roboto Mono', monospace;
  color: ${({theme}) => theme["gray-100"]};
  display: flex;
  gap: 1.5rem;
  
  span {
    font-size: 17rem;
    align-items: center;
    display: flex;
    justify-content: center;
    background: ${({theme}) => theme["gray-700"]};
    padding: 0 2rem;
    border-radius: 8px;
  }
`
export const Separator = styled.div`
  padding: 2rem 0;
  color: ${({theme}) => theme["green-500"]};
  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
  font-size: 17rem;
`