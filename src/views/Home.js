import React from "react";
import imagenHome from "../assets/images/person_programing.svg";
import { Link } from "react-router-dom";

const Home = () => {

  const stylesContainer = {
    "position": "absolute",
    "height": "100%",
    "width": "100%",
    "zIndex": "30",
  }

  const stylesColumns = {
    "position": "relative",
    "height": "100%",
    "zIndex": "35",
  }

  return (
    <div className="containerHome" style={stylesContainer}>
      <div className="columns is-vcentered" style={stylesColumns}>
        <div className="column is-half">
          <figure className="image is-flex is-justify-content-center is-align-content-center">
            <img src={imagenHome} alt="Ilustracion de un programador" style={{width: "80%"}}/>
          </figure>
        </div>
        <div className="column is-half">
          <h1 className="title is-1">Hola, soy Augusto Blanco</h1>
          <h2 className="title is-2">Desarrollador Full-Stack</h2>
          <h4 className="subtitle mt-2">
            “Perseverancia, determinación y consistencia, es el camino para resolver y afrontar desafíos”
          </h4>
          <Link exact to="/about" className="button is-primary is-outlined is-medium">Mas Sobre Mí</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;