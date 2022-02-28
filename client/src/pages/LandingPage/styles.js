import styled from "styled-components";

export const LandingContainer = styled.div`
  background-image: url("https://wallpapercave.com/wp/wp2566722.jpg");
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
    padding: 2rem;
    border-radius: .5rem;
  } 
`
export const BtnContainer = styled.div`
  position: absolute;
  top: 25rem;
  animation-name: visiblility1;
  //animation-delay: 1s;
  animation-duration: 4s;
  animation-fill-mode: forwards;
  //z-index:100;
  @keyframes visiblility1 {
    0%{
      opacity: 0;
    }
    100%{
      opacity: 1;
    }
  }
  button{
    cursor: pointer;
  }
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
  animation-name: visiblility;
  animation-duration: 4s;
  animation-fill-mode: forwards;
  @keyframes visiblility {
    0%{
      opacity: 1;
    }
    100%{
      opacity: 0;
    }
  }
  img{
    height: 9.2rem;
    box-shadow: inset 0px 0px 7px 8px;
    background-color: #64a8e2b8;
    padding: 1rem 1rem;
    border-radius: 50%;
  }
}
`