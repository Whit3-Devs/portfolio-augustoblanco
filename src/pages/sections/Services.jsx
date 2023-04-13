import CardDesarrolloWeb from "../../components/card-services/CardDesarrolloWeb";
import CardDisenioWeb from "../../components/card-services/CardDisenioWeb";
import CardMantenimiento from "../../components/card-services/CardMantenimiento";

const Services = () => {
  return (
    <section className="flex flex-col justify-center items-center px-7">
      <h2 className="font-roboto text-3xl font-bold mt-16">Mis Servicios</h2>
      <div className="w-full flex items-start justify-between my-14">
        <CardDesarrolloWeb/>
        <CardDisenioWeb/>
        <CardMantenimiento/>
      </div>
    </section>
  );
};

export default Services;

