import styled from "styled-components";
import { COLOR_RED, COLOR_RED_TRANSPARENT, LAPTOP, MOVILE_L, MOVILE_S, SMOOTH_WHITE_POKEBALL, TABLET } from "../../styles/global";

export const Container = styled.div`
/*   background-image: url("https://wallpapercave.com/wp/wp8053695.jpg");
  background-repeat: no-repeat;
  background-size: cover; */
  //height: 100vh;
`
export const HeaderDetail = styled.header`     
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 3.5rem;
  background-color: ${COLOR_RED_TRANSPARENT};
  button{
    height: 2.5rem;
    cursor: pointer;
  }
  @media only screen and (max-width:${LAPTOP}){
    button{
      font-size: .6rem;
    }
  }
`
export const DeatilContainer = styled.section`
  background-image: url("https://wallpapercave.com/wp/wp8053695.jpg");
  background-repeat: no-repeat;
  background-size: cover;

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
  @media only screen and (max-width:${LAPTOP}){
    background-position: center;
  }
  @media only screen and (max-width:${TABLET}){
    background-position: center;
    background-color: black;
    background-size: contain;
    h1{
      font-size: 2rem;
    }
    span{
      font-size: .5rem;
    }
    h2{
      margin: .25rem 0;
      font-size: 1rem;
    }
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
  @media only screen and (max-width:${LAPTOP}){
    width: 85%;
  }
  @media only screen and (max-width:${TABLET}){
    width: 85%;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 20rem;
    justify-items: center;
  }
  @media only screen and (max-width:${MOVILE_L}){
    width: 85%;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 20rem;
    .imgPoke{
      width: 200px;
      height: 200px;
      &::before{
      height: 100px;
      width: 200px;
      }
      .line{
      width: 200px;
      }
      .line::before{
        width: 80px;
        height: 80px;
        margin-left: 60px;
        margin-top: -35px;
      }
      .line::after{
        width: 40px;
        height: 40px;
        margin-left: 80px;
        margin-top: -15px;
      }
      img{
        width: 8rem;
        height: 8rem;
      }
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
  @media only screen and (max-width:${TABLET}){
    display: grid;
    grid-column-start: 1;
    grid-column-end: 3;
    justify-self: center;
  }
  @media only screen and (max-width:${MOVILE_L}){
    display: flex;
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
  @media only screen and (max-width:${TABLET}){
    display: grid;
    grid-template-columns: 15rem 15rem;
    padding: 0px;
  }
  @media only screen and (max-width:${MOVILE_L}){
    display: flex;
    .h2-types{
      width: 10rem;
    }
  }
  @media only screen and (max-width:${MOVILE_S}){
    h2{
      width: 12rem;
    }
    .h2-types{
      width: 8rem;
    }
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