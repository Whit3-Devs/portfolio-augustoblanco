import React from 'react'
import imageBuild from "../assets/images/build_blocks.svg"


const Contact = () => {

  const stylesContainer = {
    "position": "absolute",
    "height": "100%",
    "width": "100%",
    "zIndex": "30",
  }

  return (
    <div className="containerAbout" style={stylesContainer}>
    <div className="columns">
      <div className="column is-flex is-flex-direction-column is-justify-content-center is-align-content-center is-align-items-center">
            <h5 className="title">Sección en construcción</h5>
            <img src={imageBuild} alt="Ilustracion de un programador" className="imageBuild"/>
      </div>
    </div>
  </div>
  )
}

export default Contact