import  styled  from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  label{
    padding-left: 1rem;
    color: yellowgreen;
    font-size: larger;
    font-weight: bolder;
  }
`

export const GlobalInputLayout = styled.input`
  margin: 0 .5rem;
  height: 1.75rem;
  border-radius: .25rem;
  padding-left: .5rem;
  background-color: #69696999;
  color: black;
  ::placeholder{
    color: grey;
  }
`