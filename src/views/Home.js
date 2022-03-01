import React from "react";
import { Container, Columns, Heading, Image } from "react-bulma-components";
import imagenHome from "../assets/images/person_programing.svg";

const styles = {
  "height": "100%",
  "position": "absoulte",
  "z-index": "50"
};

const Home = () => {
  return (
    <Container style={styles}>
      <Columns style={styles} vCentered>
        <Columns.Column>
          <Image src={imagenHome} />
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
