import React from "react";
import { Container, Columns, Heading, Image } from "react-bulma-components";
import imagenHome from "../assets/images/person_programing.svg";

const styles = {
  "height": "100%",
  "position": "absoulte",
};

const stylesCol = {
  "height": "100%",
  "position": "relative",
  "z-index": "35"
};

const Home = () => {
  return (
    <Container style={styles} zindex={30}>
      <Columns vCentered style={stylesCol}>
        <Columns.Column>
          <Image src={imagenHome} className="imageHome"/>
        </Columns.Column>
        <Columns.Column>
          <Heading size={2}>Hola, soy Augusto Blanco</Heading>
          <Heading subtitle size={3}>Desarrollador Full-Stack</Heading>
          <Heading subtitle size={5}>“Perseverancia, determinación y consistencia, es el camino para resolver y afrontar desafíos”</Heading>
        </Columns.Column>
      </Columns>
    </Container>
  );
};

export default Home;
