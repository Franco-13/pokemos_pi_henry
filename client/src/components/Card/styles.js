import styled from "styled-components";
import { COLOR_RED, SMOOTH_WHITE_POKEBALL } from "../../styles/global";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${SMOOTH_WHITE_POKEBALL};
  margin: 1.5rem;
  width: 425px;
  height: 425px;
  border-radius:50%;
  border: 8px ridge black;
  position: relative;
  box-shadow: inset 20px 11px 45px 27px black;
  //padding: 1rem;
  &::before{
    content: "";
    top: 0;
    height: 212.5px;
    width: 425px;
    background: ${COLOR_RED};
    border-radius: 212.5px 212.5px 0 0;
    position: absolute;
    box-shadow: inset 20px 19px 78px 12px black;
  }
  .line{
    top: 0;
    position: absolute;
    width: 425.5px;
    height: 15px;
    margin-top: 212.5px;
    background: black;
  }
  .line::before{
    content: "";
    width: 100px;
    height: 100px;
    background: black;
    border-radius: 50%;
    position: absolute;
    margin-top: -43px;
    margin-left: 162.5px;
  }
  .line::after{
    content: "";
    width: 70px;
    height: 70px;
    background: ${SMOOTH_WHITE_POKEBALL};
    border-radius: 50%;
    position: absolute;
    margin-left: 177.5px;
    margin-top: -28px;
  }
  img{
    z-index:100;
    width: 15rem;
    height: 15rem;
  }
  a{
    z-index: 5;
    font-weight: bolder;
    color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  h1{
    //margin: 0;
    font-size: 1.25rem;
    z-index: 5;
    font-weight: bolder;
    color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  `
export const SpanContainer = styled.section`
  display: flex;
  span{
    margin-top: 1rem;
    font-size: 1rem;
    color: black;
    padding: .5rem;
    font-weight: bolder;
    text-align: center;
  }
`