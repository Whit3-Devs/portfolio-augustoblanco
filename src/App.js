import { Route, Switch } from "react-router-dom";
import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./views/Home";
import About from "./views/About";
import Portfolio from "./views/Portfolio";
import Skills from "./views/Skills";
import Contact from "./views/Contact";
import PageNotFound from "./views/PageNotFound";
import ParticlesBackground from "./assets/background/ParticlesBackground";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/skills" component={Skills} />
        <Route exact path="/contact" component={Contact} />
        <Route component={PageNotFound} />
      </Switch>
      <ParticlesBackground/>
    </>
  );
};

export default App;
