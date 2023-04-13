import Diseniowebsvg from "../../assets/services/diseniowebsvg";

const CardDisenioWeb = () => {
  return (
    <div className="w-[380px] h-[450px]  py-5 px-5 flex flex-col justify-start items-center text-navy fill-greenlight hover:bg-gradient-to-t from-greenlight to-turquise hover:text-white hover:fill-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
      <Diseniowebsvg/>
      <h3 className="font-roboto text-2xl font-bold mt-5">Diseño Web</h3>
      <p className="w-full font-roboto text-lg mt-3 ">
        Te ayudaré a crear un sitio web atractivo y fácil de usar que refleje la
        esencia de tu marca. Mi enfoque se basa en la creatividad, la atención
        al detalle y la colaboración con mis clientes. Trabajo en cada detalle,
        desde la elección de colores y tipografía hasta la navegación y la
        funcionalidad para crear un sitio web impresionante.
      </p>
    </div>
  );
};

export default CardDisenioWeb;
