import styled from "styled-components";
import { COLOR_RED, COLOR_RED_TRANSPARENT, MOVILE_L, SMOOTH_WHITE_POKEBALL } from "../../styles/global";

export const Container = styled.div`
  height: 100vh;
`
export const HeaderDetail = styled.header`     
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 7%;
  background-color: ${COLOR_RED_TRANSPARENT};
  button{
    height: 2.5rem;
    cursor: pointer;
  }
`
export const DeatilContainer = styled.section`
  background-image: url("https://wallpapercave.com/wp/wp8053695.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 93%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1{
    font-size: 4rem;
    margin: 0;
    color: ${SMOOTH_WHITE_POKEBALL};
  }
  h2{
    margin: .75rem 0;
    color: black;
    font-size: 1.25rem;
    padding-left: 2rem
  }
  span{
    color: ${SMOOTH_WHITE_POKEBALL};
  }
`
export const DetailSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-columns: 1rem;
  justify-items: center;
  width: 60%;
  margin: 2rem auto;
  box-shadow: inset 0 0 25px 20px black;
  background: #ffffffb5;
  border-radius: 0.5rem;
  .imgPoke{  
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
    box-shadow: inset 20px 19px 78px 12px black;
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
      position: absolute;
      width: 425.5px;
      height: 10px;
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
      width: 18rem;
      height: 18rem;
      z-index: 100;
    }
  }
`
export const SectionStatsAndType = styled.section`
  padding: 1rem 0rem 1rem 3rem;
  @media only screen and (max-width:${MOVILE_L}){
    padding: 0;
  }
`
export const Type = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  h2{
    padding: 0 1rem;
  }
`
export const Stats = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  width: 80%;
  h2{
    display: block;
    width: 14rem;
    white-space: nowrap;
    height: 1.5rem;
    animation: typing 2s /* steps(12) */, blink .5s infinite step-end alternate;
    overflow: hidden;
    padding-left: 0;
  }
  @keyframes typing{
    from {width:0;}
  }
  @keyframes blink {
    50% {border-color: transparent;}
  }
  .h2-types{
    padding-left: 5rem;
    width: 14rem;
    white-space: nowrap;
    height: 1.5rem;
    animation: typing1 2s /* steps(12) */, blink1 .5s infinite step-end alternate;
    overflow: hidden;
  }
  @keyframes typing1{
    from {width:0;}
  }
  @keyframes blink1 {
    50% {border-color: transparent;}
  }
`
export const ImageLoading = styled.section`
  display: flex;
  justify-content: center;
  img{
    border-radius:50%;
    margin: 10rem auto;
    width: 21rem;
    box-shadow: inset 0px 0px 7px 8px;
    background-color: #64a8e2b8;
    padding: 1rem 1rem;
  }
`