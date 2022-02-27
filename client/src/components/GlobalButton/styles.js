import styled from "styled-components";
import {  COLOR_LIGHT, COLOR_SUCCESS } from "../../styles/global";
import { SMOOTH_WHITE_POKEBALL } from './../../styles/global';

export const GlobalButonLayout = styled.button`     
    ${({colorBtn, fontSize, radius, active, fontColor}) => {
        return `
        padding: .375rem .75rem;
        background: ${active? COLOR_SUCCESS :colorBtn};
        border: 1px solid ${active? COLOR_SUCCESS :colorBtn};
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: ${fontSize};
        border-radius: ${radius ? radius : ".25rem"};
        transition: box-shadow .15s linear;
        font-family: 'Indie Flower', cursive;
        //transition: .3s ease-in-out;
        h4{
            color: ${!active ? fontColor : SMOOTH_WHITE_POKEBALL};
        }
        `
    }}
    &:hover{
        box-shadow: ${({disabled})=>disabled ? "" : "inset 0px 0px 19px 3px"};
        background-color: ${({disabled})=>disabled ? COLOR_LIGHT : COLOR_SUCCESS};
        border: 1px solid ${({disabled})=>disabled ? COLOR_LIGHT : "black"};
        color: ${SMOOTH_WHITE_POKEBALL}
    }
    &:focus{
        outline: 0;
    }
`