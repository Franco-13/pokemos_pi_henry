import styled from "styled-components";


export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #b81613a6;
  margin: 1.5rem;
  width: 425px;
  height: 425px;
  border-radius:50%;
  padding: 1rem;
  img{
    width: 65%;
  }
  a, h1{
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  `
export const SpanContainer = styled.section`
  display: flex;
  span{
    font-size: 1.5rem;
    color: white;
    padding: .5rem;
    text-align: center;
  }

`