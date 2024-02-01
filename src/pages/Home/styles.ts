import styled from "styled-components";

export const HomeContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  form {
    display: flex;
    flex-direction: column;
    gap: 5.6rem;
    
    align-items: center;
    
  }
`

export const FormContainer = styled.div`
  display: flex;
  gap: .6rem;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  color: ${({theme}) => theme["gray-100"]};
  font-size: 2rem;
  font-weight: bold;

`
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
export const StartCountdownButton = styled.button`
  width: 100%;
  background: ${({theme}) => theme["green-500"]};
  border: none;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  color: ${({theme}) => theme["gray-100"]};
  gap: .7rem;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.12s;
  &:not(:disabled):hover{
    background: ${({theme}) => theme["green-700"]};
  }
  &:disabled{
    opacity: 0.7;
    cursor: not-allowed;
  }
`