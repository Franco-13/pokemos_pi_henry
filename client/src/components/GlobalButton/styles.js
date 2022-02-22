import styled from "styled-components";
import {  COLOR_LIGHT, COLOR_SUCCESS } from "../../styles/global";

export const GlobalButonLayout = styled.button`     
    ${({colorBtn, fontSize, radius, active}) => {
        return `
        padding: .375rem .75rem;
        background-color: ${active? COLOR_SUCCESS :colorBtn};
        border: 1px solid ${active? COLOR_SUCCESS :colorBtn};
        color: #fff;
        font-size: ${fontSize};
        border-radius: ${radius ? radius : ".25rem"};
        transition: box-shadow .15s linear;
        font-family: 'Indie Flower', cursive;
        `
    }}
    &:hover{
        box-shadow: ${({disabled})=>disabled ? "" : "inset 0px 0px 7px 5px"};
        background-color: ${({disabled})=>disabled ? COLOR_LIGHT : COLOR_SUCCESS};
        border: 1px solid ${({disabled})=>disabled ? COLOR_LIGHT : COLOR_SUCCESS};
    }
    &:focus{
        outline: 0;
    }
`