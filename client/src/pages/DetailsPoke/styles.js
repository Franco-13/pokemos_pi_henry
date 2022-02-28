import styled from "styled-components";
import { COLOR_RED, COLOR_RED_TRANSPARENT, SMOOTH_WHITE_POKEBALL } from "../../styles/global";

export const Container = styled.div`
  background-image: url("https://wallpapercave.com/wp/wp8053695.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
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
`
export const DeatilContainer = styled.section`
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
  margin: 2rem auto;
  display: flex;
  align-items: center;
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
        width: 20rem;
        height: 20rem;
        z-index: 100;
      }
    }
`
export const SectionStatsAndType = styled.section`
  width: 30rem;
  padding: 1rem 1rem;
  border-radius: .5rem;
`
export const Type = styled.div`
/*   grid-column-start: 1;
  grid-column-end: 3; */
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
  /*display: grid;
   grid-template-columns: 1fr 1fr; 
  grid-template-rows: 1fr 1fr 1fr;
  line-height: 1rem; */
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
export const Modal = styled.div`
  position: fixed;
  width: 100vw;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 500;
  background-color: #2d312da1;
  justify-content: center;
  align-items: center;
  display: none;
  color: black;
  >div{
    display: flex;
    justify-content: center;
    background-image: url("https://www.molaunhuevo.com/wp-content/uploads/fondo-pokemon.jpg");
    padding: 4rem;
    border-radius: 5px;
    background-size: cover;
    position: relative;
    width:20%;
    height:20%;
    >h3{
      position: absolute;
      top: 2rem;
      padding-bottom: 2rem;
      font-size: 1rem;
      color: black;
    }
  }
  &.active{
      display: ${({visible})=>visible?"flex":"none"};
  }
`
export const ContentBtn = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 30rem;
height: 3rem;
margin-top: 9rem;
button{
  width: 4rem;
  height: 2.5rem;
}
`