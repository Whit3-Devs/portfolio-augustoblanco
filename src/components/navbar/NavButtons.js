import React from "react";
import {
  GrHomeRounded,
  GrUser,
  GrBriefcase,
  GrMailOption,
  GrConfigure,
} from "react-icons/gr";

import { NavLink } from "react-router-dom";

import "./NavButtons.css";
import "bulma-tooltip";

const NavButtons = () => {

  return (
    <>
      <div className="nav__container">
        <ul className="nav__containerButtons">
          <li
            id="inicio"
            className="nav__liButton has-tooltip-left"
            data-tooltip="Inicio"
          >
            <NavLink exact to="/" className="nav__navlink" activeClassName='activeBackground'>
              <GrHomeRounded className="nav__iconButtons" />
            </NavLink>
          </li>
          <li
            id="about"
            className="nav__liButton has-tooltip-left"
            data-tooltip="Sobre Mí"
          >
            <NavLink to="/about" className="nav__navlink" activeClassName='activeBackground'>
              <GrUser className="nav__iconButtons" />
            </NavLink>
          </li>
          <li
            id="portfolio"
            className="nav__liButton has-tooltip-left"
            data-tooltip="Portfolio"
          >
            <NavLink to="/portfolio" className="nav__navlink" activeClassName='activeBackground'>
              <GrBriefcase className="nav__iconButtons" />
            </NavLink>
          </li>
          <li
            id="skills"
            className="nav__liButton has-tooltip-left"
            data-tooltip="Skills"
          >
            <NavLink to="/skills" className="nav__navlink" activeClassName='activeBackground'>
              <GrConfigure className="nav__iconButtons" />
            </NavLink>
          </li>
          <li
            id="contacto"
            className="nav__liButton has-tooltip-left"
            data-tooltip="Contacto"
          >
            <NavLink to="/contact" className="nav__navlink" activeClassName='activeBackground'>
              <GrMailOption className="nav__iconButtons" />
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavButtons;
