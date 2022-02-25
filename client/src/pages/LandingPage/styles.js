import styled from "styled-components";
//import { COLOR_BORDER_BOX, COLOR_SUCCESS } from "../../styles/global";
import imgBG from "../../images/LandingBackground1.jpg"

export const LandingContainer = styled.div`
  background-image: url("${imgBG}");
  background-size: cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  `
export const Title = styled.div`
  margin: .5rem 1rem;
  position: absolute;
  top: 4rem;
  h1{
    font-size: 5rem;
    box-shadow: inset 0px 0px 7px 8px;
    background-color: #64a8e2b8;
    padding: 1rem 1rem;
    border-radius: .5rem;
  } 

`
export const BtnContainer = styled.div`
  position: absolute;
  top: 25rem;
  img{
    height: 9.2rem;
    box-shadow: inset 0px 0px 7px 8px;
    background-color: #64a8e2b8;
    padding: 1rem 1rem;
    border-radius: 50%;
  }
}
`
export const ImageLoading = styled.div`
  position: absolute;
  top: 21rem;
  img{
    height: 9.2rem;
    box-shadow: inset 0px 0px 7px 8px;
    background-color: #64a8e2b8;
    padding: 1rem 1rem;
    border-radius: 50%;
  }
}
`