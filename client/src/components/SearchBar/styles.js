import styled from "styled-components";
import { SMOOTH_WHITE_POKEBALL } from './../../styles/global';

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin: .25rem;
  padding:.25rem;
  height: 2.5rem;
  button{
    height: 2.5rem;
    cursor: pointer;
  }
  input{
    background: ${SMOOTH_WHITE_POKEBALL};
    height: 2.25rem;
  }
`