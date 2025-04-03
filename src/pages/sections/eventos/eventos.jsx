import React from "react";
import Eventosinfo from "../../../components/eventos/eventos";

const Eventos= () => {
  return (
    <section className="relative w-full bg-black py-12 px-4 md:px-12 flex justify-center">
      <div className="relative flex flex-col items-center max-w-5xl mx-auto">
        <h2 className="text-white text-3xl md:text-5xl font-bold text-center mb-10">
          Eventos
        </h2>
        <Eventosinfo />
      </div>
    </section>
  );
};

export default Eventos;
