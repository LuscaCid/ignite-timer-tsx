import styled from "styled-components";
import { TaskStatusType } from "../../@types/styled"; 
export const HistoryContainer = styled.div`
  flex: 1;
  padding: 3.5rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  h1 {
    font-size: 3rem;
  }
`

export const HistoryList = styled.div`

  overflow-x: auto;
  
  table {
    font-size: 1.7rem;
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;
    thead th{
      line-height: 1.6rem;
      color: ${({theme}) => theme["gray-100"]};
      padding: 2rem;
      background: ${({theme}) => theme["gray-600"]};
      &:first-child{
        border-radius: 6px 0 0 0 ;
      }
      &:last-child{
        border-radius: 0 6px 0 0;
      }
    }
    thead tr{
      border-radius: 5px;
      
      text-align: left;      
    }
    tbody{
      overflow-y: auto;
    }
    
  }
  
`
export interface StatusProps { 
  variant : TaskStatusType
}


