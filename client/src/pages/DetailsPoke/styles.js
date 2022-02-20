import styled from "styled-components";

export const Container = styled.div`

`
export const HeaderDetail = styled.header`     
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 3.5rem;
  background-color: #b81613a6;
`
export const DeatilContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1{
    font-size: 4rem;
    margin: 0;
  }
  h2{
    margin: .75rem 0;
  }
  img{
    width: 30rem;
    height: 30rem;
  }
  `
export const DetailSection = styled.section`
margin: 2rem auto;
display: flex;
align-items: center;
`
export const SectionStatsAndType = styled.section`
  width: 30rem;
`
export const Type = styled.div`
  display: flex;
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
    margin: 16rem auto;
    width: 24rem;
  }
`