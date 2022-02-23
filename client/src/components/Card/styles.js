import styled from "styled-components";
import { COLOR_RED_TRANSPARENT } from "../../styles/global";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${COLOR_RED_TRANSPARENT};
  margin: 1.5rem;
  width: 425px;
  height: 425px;
  border-radius:50%;
  padding: 1rem;
  img{
    width: 15rem;
    height: 15rem;
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