import styled from "styled-components";

export const HomeContainer = styled.main`
  width: 100%;
  height: 100%;
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




const BaseFormButton = styled.button`
  width: 100%;
  
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
 
  &:disabled{
    opacity: 0.7;
    cursor: not-allowed;
  }

`

export const StartCountdownButton = styled(BaseFormButton)`
  background: ${({theme}) => theme["green-500"]};
   
  &:not(:disabled):hover{
    background: ${({theme}) => theme["green-700"]};
  }
`

export const StopCountdownButton = styled(BaseFormButton)`
  background: ${({theme}) => theme["red-500"]};
  &:not(:disabled):hover{
    background: ${({theme}) => theme["red-700"]};
  }
`