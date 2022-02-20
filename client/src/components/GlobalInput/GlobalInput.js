import React from "react";
import { Container, GlobalInputLayout } from "./styles";

export function GlobalInput ({ type, name, placeholder, onChange, value, label, labelTitle, display}) {
    
    return (
        <Container>
            {label && <label for={label}>{labelTitle}</label>}
            <GlobalInputLayout
                type={type} 
                name={name} 
                onChange={onChange}  
                id={label?label:""} 
                value={value}
                placeholder={placeholder}
                display={display}
            />
        </Container>
    )
}
