import styled from 'styled-components'
export const CountdownContainer = styled.div`

  font-family: 'Roboto Mono', monospace;
  color: ${({theme}) => theme["gray-100"]};
  display: flex;
  align-items: center;
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

  @media(max-width: 46em){
    gap: .9rem;
      span {
        font-size: 10rem;
        padding: 1rem 1rem;
      }
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
  @media(max-width: 46em){
      
        font-size: 8rem;
      
    }
`