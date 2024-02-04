import styled from 'styled-components'
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