import styled from 'styled-components'
import { StatusProps } from '../styles' 


export const TableDataContainer = styled.td`
    &:first-child{
    width: 50%;
    }
    padding: 2rem;
    background: ${({theme}) => theme["gray-700"]};
    border-top: 4px solid ${({theme}) => theme["gray-800"]};
`

export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  &::before {
    content: '';
    border-radius: 999px;
    background: ${({theme, variant}) => theme[variant]};
    width: 0.7rem;
    height: 0.7rem;
  }
`