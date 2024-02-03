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
const BaseInput = styled.input`
  height: 2rem;
  padding: 0.6rem;
  font-size: 1.4rem;
  font-weight: bold;
  color: ${({theme}) => theme["gray-300"]};
  background: transparent;
  border: none;
  border-bottom: 2px solid ${({theme}) => theme["gray-500"]};
  transition: border-bottom 0.2s;

  &::placeholder{
    color: ${({theme}) => theme["gray-500"]};
  }
  &:hover{
    border-bottom: 2px solid ${({theme}) => theme["green-500"]};
  }
padding: 1.1rem .5rem;
`

export const TaskInput = styled(BaseInput)`
  flex: 1;
  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`

export const MinutesAmountInput = styled(BaseInput)`
  width: 5rem;
`

export const FormContainer = styled.div`
  display: flex;
  gap: .6rem;
  width: 100%;
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