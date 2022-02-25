import React from "react";
import {
  GrHomeRounded,
  GrUser,
  GrBriefcase,
  GrMailOption,
  GrConfigure,
} from "react-icons/gr";

import { Link } from "react-router-dom";

import  "./NavButtons.css";
import "bulma-tooltip";

const NavButtons = () => {
  return (
    <>
      <div className="nav__container">
        <ul className="nav__containerButtons">
          <li className="nav__liButton has-tooltip-left" data-tooltip="Home">
            <Link to="/">
              <GrHomeRounded className="nav__iconButtons" />
            </Link>
          </li>
          <li className="nav__liButton has-tooltip-left" data-tooltip="About">
            <Link className="center" to="/about">
              <GrUser className="nav__iconButtons" />
            </Link>
          </li>
          <li className="nav__liButton has-tooltip-left" data-tooltip="Portfolio">
            <Link to="/portfolio">
              <GrBriefcase className="nav__iconButtons" />
            </Link>
          </li>
          <li className="nav__liButton has-tooltip-left" data-tooltip="Skills">
            <Link to="/skills">
              <GrConfigure className="nav__iconButtons" />
            </Link>
          </li>
          <li className="nav__liButton has-tooltip-left" data-tooltip="Contact">
            <Link to="/contact">
              <GrMailOption className="nav__iconButtons" />
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavButtons;
