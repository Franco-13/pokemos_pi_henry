import React from "react";
import { GlobalButonLayout } from "./styles";

export function GlobalButton ({type, onClick, textBtn, colorBtn, fontSize, disabledState = false, radius, active=false}) {
  return (
    <GlobalButonLayout 
      type={type} 
      onClick={onClick}
      colorBtn={colorBtn}
      fontSize={fontSize}
      radius={radius}
      active={active}
      disabled={disabledState}
    >
      {textBtn}
    </GlobalButonLayout>
  )
}