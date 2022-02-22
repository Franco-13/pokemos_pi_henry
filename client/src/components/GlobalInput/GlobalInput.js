import React from "react";
import { Container, GlobalInputLayout } from "./styles";

export function GlobalInput ({ type, name, placeholder, onChange, value, label, labelTitle, display, min, max}) {
    
    return (
        <Container>
            {label && <label htmlFor={label}>{labelTitle}</label>}
            <GlobalInputLayout
                type={type} 
                name={name} 
                onChange={onChange}  
                id={label?label:""} 
                value={value}
                placeholder={placeholder}
                display={display}
                min={min}
                max={max}
            />
        </Container>
    )
}
