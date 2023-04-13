import React from "react";
import Mantenimientosvg from "../../assets/services/mantenimientosvg";

const CardMantenimiento = () => {
  return (
    <div className="w-[380px] h-[450px]  py-5 px-5 flex flex-col justify-start items-center text-navy fill-greenlight hover:bg-gradient-to-t from-greenlight to-turquise hover:text-white hover:fill-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
      <Mantenimientosvg />
      <h3 className="font-roboto text-2xl font-bold mt-5">Mantenimiento</h3>
      <p className="w-full font-roboto text-lg mt-3 ">
        De acuerdo al proyecto, puedo refactorizar y desarrollar codigo
        sostenible y escalable en el tiempo con proyectos que ya esten
        deployados. Trabajaré en cada componente creando asi una infraestructura
        sostenible en el tiempo.
      </p>
    </div>
  );
};

export default CardMantenimiento;
