import React, { useEffect, useState } from "react";
import { Navbar } from "react-bulma-components";
import {
  GrHomeRounded,
  GrUser,
  GrBriefcase,
  GrMailOption,
  GrConfigure,
} from "react-icons/gr";
import { NavLink } from "react-router-dom";
import "./NavButtons.css";

const NavButtonsMobile = () => {
  const [hidden, setHidden] = useState(false);


  const stylesNav = {
    "z-index": "999"
  };

  useEffect(() => {
    const navbarMenu = document.getElementById("navbarMenu");

    if (hidden) {
      navbarMenu.classList.add("is-active");
    } else {
      if (navbarMenu.classList.contains("is-active")) {
        navbarMenu.classList.remove("is-active");
      }
    }
  }, [hidden]);

  return (
      <Navbar color="text" fixed="top" style={stylesNav}>
        <Navbar.Brand>
          <Navbar.Burger
            id="navbarBurger"
            onClick={() => {
              setHidden(!hidden);
            }}
          />
        </Navbar.Brand>
        <Navbar.Menu id="navbarMenu">
          <Navbar.Container>
            <NavLink
              exact
              to="/"
              className="nav__navlink"
              activeClassName="activeBackground"
            >
              <GrHomeRounded className="nav__iconButtons" />
              <h3>Inicio</h3>
            </NavLink>
            <NavLink
              to="/about"
              className="nav__navlink"
              activeClassName="activeBackground"
            >
              <GrUser className="nav__iconButtons" />
              <h3>Sobre Mí</h3>
            </NavLink>
            <NavLink
              to="/portfolio"
              className="nav__navlink"
              activeClassName="activeBackground"
            >
              <GrBriefcase className="nav__iconButtons" />
              <h3>Portfolio</h3>
            </NavLink>
            <NavLink
              to="/skills"
              className="nav__navlink"
              activeClassName="activeBackground"
            >
              <GrConfigure className="nav__iconButtons" />
              <h3>Skills</h3>
            </NavLink>
            <NavLink
              to="/contact"
              className="nav__navlink"
              activeClassName="activeBackground"
            >
              <GrMailOption className="nav__iconButtons" />
              <h3>Contacto</h3>
            </NavLink>
          </Navbar.Container>
        </Navbar.Menu>
      </Navbar>
  );
};

export default NavButtonsMobile;
