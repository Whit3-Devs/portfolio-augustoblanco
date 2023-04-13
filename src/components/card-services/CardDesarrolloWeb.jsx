import React from "react";
import Desarrollowebsvg from "../../assets/services/desarrollowebsvg";

const CardDesarrolloWeb = () => {
  return (
    <div className="w-[380px] h-[450px] py-5 px-5 flex flex-col justify-start items-center text-navy fill-greenlight hover:bg-gradient-to-t from-greenlight to-turquise hover:text-white hover:fill-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
      <Desarrollowebsvg />
      <h3 className="font-roboto text-2xl font-bold mt-5">Desarrollo Web</h3>
      <p className="w-full font-roboto text-lg mt-3 ">
        Te ofrezco soluciones personalizadas y asequibles para llevar tu
        presencia en línea al siguiente nivel. Mi enfoque se basa en una
        comunicación clara y constante con mis clientes para entender sus
        necesidades y objetivos.
      </p>
    </div>
  );
};

export default CardDesarrolloWeb;
