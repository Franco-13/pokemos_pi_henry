import styled from "styled-components";
import { COLOR_RED, SMOOTH_WHITE_POKEBALL } from "../../styles/global";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${SMOOTH_WHITE_POKEBALL};
  margin: 1.5rem;
  width: 300px;
  height: 300px;
  border-radius:50%;
  border: 4px ridge black;
  position: relative;
  box-shadow: inset 20px 11px 45px 27px black;
  //padding: 1rem;
  &::before{
    content: "";
    top: 0;
    height: 150px;
    width: 300px;
    background: ${COLOR_RED};
    border-radius: 150px 150px 0 0;
    position: absolute;
    box-shadow: inset 20px 19px 78px 12px black;
  }
  .line{
    top: 0;
    position: absolute;
    width: 300px;
    height: 15px;
    margin-top: 150px;
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
    margin-left: 100px;
  }
  .line::after{
    content: "";
    width: 70px;
    height: 70px;
    background: ${SMOOTH_WHITE_POKEBALL};
    border-radius: 50%;
    position: absolute;
    margin-left: 115px;
    margin-top: -28px;
  }
  img{
    z-index:100;
    width: 10rem;
    height: 10rem;
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
  transition: transform .4s;
  &:hover{
    transform: scale(1.1)
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