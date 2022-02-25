import styled from "styled-components";
import { COLOR_RED_TRANSPARENT } from "../../styles/global";

export const Container = styled.div`
  background-image: url("https://img.wallpapersafari.com/desktop/1366/768/13/63/7zrbm6.jpg");
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
`
export const DeatilContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1{
    font-size: 4rem;
    margin: 0;
    color: yellowgreen;
  }
  h2{
    margin: .75rem 0;
    color: yellowgreen;
    font-weight: bolder;
    padding-left: 2rem
  }
  span{
    color: yellowgreen;
  }
  `
export const DetailSection = styled.section`
  margin: 2rem auto;
  display: flex;
  align-items: center;
    .imgPoke{  
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: ${COLOR_RED_TRANSPARENT};
      margin: 1.5rem;
      width: 425px;
      height: 425px;
      border-radius:50%;
      padding: 1rem;
      img{
        width: 20rem;
        height: 20rem;
      }
    }
`
export const SectionStatsAndType = styled.section`
  width: 30rem;

  box-shadow: inset 0px 0px 7px 8px;
  background-color: #69696999;
  padding: 1rem 1rem;
  border-radius: .5rem;

`
export const Type = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  display: flex;
  justify-content: center;
  h2{
    padding: 0 1rem;
  }
`
export const Stats = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr; 
  grid-template-rows: 1fr 1fr 1fr;
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