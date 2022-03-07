import React, { useEffect, useState } from "react";
import {
  GrHomeRounded,
  GrUser,
  GrBriefcase,
  GrMailOption,
  GrConfigure,
} from "react-icons/gr";
import { NavLink, Link } from "react-router-dom";
import "./NavButtonsMobile.css";
import logoAB from '../../assets/images/logoabwhite.png'

const NavButtonsMobile = () => {
  const [hidden, setHidden] = useState(false);

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

  const stylePositionMenu = {
    position: "absolute",
    zIndex: "200",
    width: "100%",
  };

  return (
    <>
      <nav
        className="navbar"
        style={stylePositionMenu}
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a class="navbar-item" href="https://augustoblancoweb.web.app/">
            <img
              src={logoAB}
              width="40"
              height="30"
            />
          </a>
          <button
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            onClick={() => {
              setHidden(!hidden);
            }}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </div>
        <div id="navbarMenu" className="navbar-menu">
          <div className="navbar-end">
            <NavLink
              exact
              to="/"
              className="navbar-item is-flex is-align-content-center"
              activeClassName="activeBackgroundMobile"
            >
              <GrHomeRounded className="icon is-medium mr-3 ml-3" />
              <span className="is-size-5">Inicio</span>
            </NavLink>
            <NavLink
              to="/about"
              className="navbar-item is-flex is-align-content-center"
              activeClassName="activeBackgroundMobile"
            >
              <GrUser className="icon is-medium mr-3 ml-3" />
              <span className="is-size-5">Sobre Mí</span>
            </NavLink>
            <NavLink
              to="/portfolio"
              className="navbar-item is-flex is-align-content-center"
              activeClassName="activeBackgroundMobile"
            >
              <GrBriefcase className="icon is-medium mr-3 ml-3" />
              <span className="is-size-5">Portfolio</span>
            </NavLink>
            <NavLink
              to="/skills"
              className="navbar-item is-flex is-align-content-center"
              activeClassName="activeBackgroundMobile"
            >
              <GrConfigure className="icon is-medium mr-3 ml-3" />
              <span className="is-size-5">Skills</span>
            </NavLink>
            <NavLink
              to="/contact"
              className="navbar-item is-flex is-align-content-center"
              activeClassName="activeBackgroundMobile"
            >
              <GrMailOption className="icon is-medium mr-3 ml-3" />
              <span className="is-size-5">Contacto</span>
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavButtonsMobile;
