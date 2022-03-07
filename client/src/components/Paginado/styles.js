import styled from "styled-components";
import { COLOR_RED, SMOOTH_WHITE_POKEBALL } from "../../styles/global";

export const Navigation = styled.nav`
position: fixed;
right: 0;
top: 25%;
z-index:1000;
  ul{
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0;
    li{
      //position: relative;
      list-style:none;
      margin: 1rem ;
      button{
        position: relative;
        background: ${SMOOTH_WHITE_POKEBALL};
        border: 1px ridge black; 
        width: 50px;
        height: 50px;
        box-shadow: inset 1px 1px 10px 0.25px black;
        &::before{
        content: "";
        top: -.25px;
        left: -.25px;
        height: 24.25px;
        width: 48.5px;
        background: ${COLOR_RED};
        border-radius: 25px 25px 0 0;
        position: absolute;
        box-shadow: inset 1px 1px 10px 0.25px black;
      }
    }
    h4{
      z-index:5;
      position: absolute;
      margin: 0;
      top: 14px;
      text-shadow: -2px 2px 8px black;
    }
  }
`