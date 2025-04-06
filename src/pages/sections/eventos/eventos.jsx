import React from "react";
import Timeline from "../../../components/eventos/eventos";
import eventos from "../../../data/eventos.json";
import "./eventos.css";

const Eventos = () => {
  return (
    <section className="relative w-full bg-black py-12 px-2 sm:px-4 md:px-6 flex">
      <div className="bg-gradient-overlay-top2"></div>
      <img 
        src="/assets/images/backeventos.png" 
        alt="Fundo" 
        className="absolute inset-0 w-full h-full object-cover object-top"
      />
      <div className="w-full max-w-5xl ml-auto px-2 sm:px-4">
        <Timeline eventos={eventos} />
      </div>
      <div className="bg-gradient-overlay-bottom"></div>
    </section>
  );
};

export default Eventos;
