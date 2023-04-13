import React, { useRef, useState } from "react";
import Logo from "../assets/navbar/logoab.svg";
import languajeESEN from "../assets/navbar/trasnlateesen.svg";

const Navbar = () => {
  const [bgNavbar, setBgNavar] = useState("");

  const itemsNav = [
    { section: "#", name: "Inicio" },
    { section: "#", name: "Servicios" },
    { section: "#", name: "Sobre Mí" },
  ];

  const changeColor = () => {
    window.scrollY >= 90 ? setBgNavar("bg-navy-transparent") : setBgNavar("");
  };

  window.addEventListener("scroll", changeColor);

  return (
    <header className={`fixed  w-full h-[90px] flex items-center z-50 transition-colors ${bgNavbar}`}>
      <nav className="w-full flex items-center justify-between">
        <a href="#" className="ml-7">
          <img src={Logo} alt="Logotipo de augusto blanco" />
        </a>
        <div className="h-full flex items-center justify-between gap-10 mr-7">
          {itemsNav.map(({ section, name }, index) => {
            return (
              <a
                key={index}
                href={section}
                className="text-white font-roboto text-xl hover:text-greenlight"
              >
                {name}
              </a>
            );
          })}
          <a
            href="#"
            className="text-greenlight font-roboto text-xl border-2 border-greenlight py-1 px-2 hover:text-white hover:bg-greenlight "
          >
            Contacto
          </a>
          <button className="text-white ml-5">
            <img
              src={languajeESEN}
              alt="Icono para cambiar de idioma de pagina"
            />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
