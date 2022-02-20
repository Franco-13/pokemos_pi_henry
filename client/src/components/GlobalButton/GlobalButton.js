import React from "react";
import { GlobalButonLayout } from "./styles";

export function GlobalButton ({type, onClick, textBtn, colorBtn, fontSize,disabled,radius,active=false}) {
    return (   
            <GlobalButonLayout 
                type={type} 
                onClick={onClick}
                colorBtn={colorBtn}
                fontSize={fontSize}
                disabled={disabled}
                radius={radius}
                active={active}
            >
                {textBtn}
            </GlobalButonLayout>
    )
}