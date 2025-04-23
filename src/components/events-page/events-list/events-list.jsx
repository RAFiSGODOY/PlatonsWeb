import React from "react";
import { Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom"; 

import "./events-list.css"

function EventsList({ eventos }) {
  const navigate = useNavigate();

  return (
    <div className="w-full px-4 md:px-10 relative overflow-hidden">
        <div className="bg-gradient-overlay-top z-10" />
      <img 
        src="/assets/images/motor.png" 
        alt="Motor" 
        className="absolute inset-0 w-full h-full object-cover object-center opacity-5"
      />
      <div className="relative w-full py-20 text-primary flex flex-col items-center z-0">
        <div className="absolute hidden sm:block left-1/2 top-10 bottom-32 w-px bg-white transform -translate-x-1/2 z-0" />
        <div className="relative flex flex-col items-center gap-10 mt-10 z-10 w-full px-4">
          {eventos.map((evento, index) => (
            <div
              key={index}
              className={`relative flex w-full max-w-5xl items-center ${
                index % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"
              } flex-col gap-8 lg:gap-0`}
            >
              <div
                className={`absolute top-1/2 h-px w-16 bg-white ${
                  index % 2 === 0 ? "left-1/2" : "right-1/2"
                } transform -translate-y-1/2`}
              />
              <div className="w-full lg:w-[55%] flex justify-center z-10">
                <img
                  src={evento.image}
                  alt={evento.title}
                  className="w-74 h-74 rounded-full object-cover border-2"
                />
              </div>
              <div className="w-full lg:w-[30%] flex flex-col items-center card-effect opacity-40 text-center">
                <h3 className="text-xxl font-jaini text-primary rounded">
                  {evento.title}
                </h3>
                <p className="text-base font-jaini text-botton flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-botton" />
                  {evento.date}
                </p>
                <a
                  onClick={() => navigate(`/Informação-Evento/${evento.id}`)}
                  className="mt-5 mb-10 px-10 py-2 text-base bg-secondary text-background font-jaini rounded-lg shadow-md botao-efeito"
                >
                  Ver Informações
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-gradient-overlay-bottom z-10" />
    </div>
  );
}

export default EventsList;
