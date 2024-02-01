import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.2rem 2rem;
  nav {
    display: flex;
    gap: 1rem;
    a {
      width: 3rem;
      height: 3rem;
      color: ${({theme}) =>theme["gray-300"]};
    }
    a{
      display: flex;
      align-items: center;
      justify-content: center;
      width:3rem ;
      height : 3rem;
      border-bottom: 3px solid transparent;
      border-top: 3px solid transparent;
      transition: border-bottom 0.2s;
      &:hover{
        border-bottom:3px solid ${({theme}) => theme["green-500"]};
      }
      &.active {
        
          color: ${({theme}) => theme["green-500"]};
        
      }
    }
  }
`