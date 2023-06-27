import React from 'react';
import{PropTypes} from "prop-types";

export const FirstApp = ({tittle, subTitle, subT2})=>{
  return(
    <>
      <h1>{tittle}</h1>
      <h2>{subTitle}</h2>
      <h2>{subT2}</h2>
    </>
  )
}

FirstApp.PropTypes = {
  tittle: PropTypes.string.isRequired,
  subTitle: PropTypes.number.isRequired,
  subT2: PropTypes.string
}

FirstApp.defaultProps ={
  subT2: "No hay subtitulo 2"
}

// Funcion Team
export function Team() {
  return (
    <FirstApp tittle = "Tema: React" subTitle = {32}/>
  )
}
