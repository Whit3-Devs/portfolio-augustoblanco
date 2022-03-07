import React from "react";
import imagenHome from "../assets/images/person_programing.svg";

const Home = () => {

  const stylesContainer = {
    "position": "absolute",
    "height": "100%",
    "width": "100%",
    "zIndex": "30"
  }

  const stylesColumns = {
    "position": "relative",
    "height": "100%",
    "zIndex": "35",
    "margin-left": "30px"
  }

  return (
    <div style={stylesContainer}>
      <div className="columns is-vcentered" style={stylesColumns}>
        <div className="column is-half">
          <figure className="image is-540x540">
            <img src={imagenHome} />
          </figure>
        </div>
        <div className="column is-half">
          <h1 className="title is-1">Hola, soy Augusto Blanco</h1>
          <h2 className="title is-2">Desarrollador Full-Stack</h2>
          <h4 className="title is-5">
            “Perseverancia, determinación y consistencia, es el camino para
            resolver y afrontar desafíos”
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Home;
