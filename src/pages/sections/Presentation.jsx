import rectangleNavy from "../../assets/presentation/rectangle-navy.svg";
import rectangleGreen from "../../assets/presentation/rectangle-green.svg";
import thoTheMoon from "../../assets/presentation/tothemoon.svg";
import linkedin from "../../assets/presentation/linkedin.svg";
import github from "../../assets/presentation/github.svg";

const Presentation = () => {
  return (
    <section id="presentacion" className="flex h-full w-full">
      <div className="h-[625px] w-1/2 flex flex-col justify-center pl-7">
        <h2 className="font-roboto text-6xl font-bold text-navy mt-8">
          ¡Hola! Soy
        </h2>
        <h1 className="font-roboto text-6xl font-bold text-greenlight">
          Augusto Blanco
        </h1>
        <h3 className="font-roboto text-5xl text-navy mt-8">
          Desarrollador Web Front-end
        </h3>
        <p className="font-roboto text-2xl text-navy mt-7">
          Creo interfaces que transmitan una experiencia positiva en el usuario
          y permita comunicar la esencia del producto.
        </p>
        <div className="flex mt-12 gap-6">
          <a href="https://www.linkedin.com/in/blanco-augusto-r/" target="_blank" className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <img src={linkedin} alt="Imagen de linkedin" />
          </a>
          <a href="https://github.com/Whit3-Devs" target="_blank" className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <img src={github} alt="Imagen de github" />
          </a>
        </div>
        <button className="w-[250px] text-white font-bold font-roboto text-lg bg-greenlight py-2 px-3 mt-6 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          Conocer más
        </button>
      </div>
      <div className="h-[625px] w-1/2 flex justify-end items-center">
        <img
          src={rectangleGreen}
          alt="rectangulo color green para presentacion"
          className="h-[625px] absolute -z-10 right-32"
        />
        <img
          src={rectangleNavy}
          alt="rectangulo color navy para presentacion"
          className="h-[625px] absolute z-0 right-0  "
        />
        <img
          src={thoTheMoon}
          alt="rectangulo color navy para presentacion"
          className="h-[440px] w-[420px] absolute z-30 mr-7"
        />
      </div>
    </section>
  );
};

export default Presentation;
