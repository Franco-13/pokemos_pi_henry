import styled from "styled-components";

export const Loading = styled.div`
display: flex;
justify-content: center;
align-items: center;
position: fixed;
width: 100vw;
height: 100%;
background: radial-gradient(circle,rgba(98,98,98,1) 0%,rgba(65,66,68,1) 30%,rgba(27,27,27,1) 100%);
img{
  height: 9.2rem;
  box-shadow: inset 0px 0px 7px 8px;
  background-color: #64a8e2b8;
  padding: 1rem 1rem;
  border-radius: 50%;
}
`