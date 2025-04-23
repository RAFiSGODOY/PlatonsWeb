import React from "react";
import Timeline from "../../../components/main-page/events/events.jsx";
import events from "../../../data/events.json";
import "./sec-events.css";

const SecEvents = () => {
  return (
    <section className="relative w-full bg-black py-12 px-2 sm:px-4 md:px-6 flex">
      <div className="bg-gradient-overlay-top2"></div>
      <img 
        src="/assets/images/backeventos.png" 
        alt="Fundo" 
        className="absolute inset-0 w-full h-full object-cover object-top"
      />
      <div className="w-full max-w-5xl ml-auto px-2 sm:px-4">
        <Timeline eventos={events} />
      </div>
      <div className="bg-gradient-overlay-bottom"></div>
    </section>
  );
};

export default SecEvents;
