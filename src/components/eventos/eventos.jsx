import React from "react";
import { useNavigate } from "react-router-dom";
import { Calendar, Clock } from "lucide-react";
import "./eventos.css";

const Timeline = ({ eventos }) => {
  const navigate = useNavigate();

  const formatarData = (dataISO) => {
    const data = new Date(dataISO);
    const dia = String(data.getDate()).padStart(2, "0");
    const mes = String(data.getMonth() + 1).padStart(2, "0");
    const ano = data.getFullYear();
    const hora = String(data.getHours()).padStart(2, "0");
    const minutos = String(data.getMinutes()).padStart(2, "0");

    return `${dia}/${mes}/${ano} ${hora}:${minutos}`;
  };


  return (
    <div className="relative w-full py-20 text-primary flex flex-col items-center">
      <h2 className="text-center text-xxl font-jaini font-bold px-4 z-10 relative">
        Eventos
      </h2>
      <div className="absolute hidden sm:block left-1/2 top-32 bottom-32 w-px bg-white transform -translate-x-1/2 z-0" />
      <div className="relative flex flex-col items-center gap-10 mt-10 z-10 w-full px-4">
        {eventos.slice(0, 2).map((evento, index) => (
          <div
            key={evento.id}
            className={`relative flex w-full max-w-5xl items-center ${index % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"
              } flex-col gap-8 lg:gap-0`}
          >
            <div
              className={`absolute top-1/2 h-px w-16 bg-white ${index % 2 === 0 ? "left-1/2" : "right-1/2"
                } transform -translate-y-1/2`}
            />
            <div className="w-full lg:w-[55%] flex justify-center z-10">
              <img
                src={evento.image}
                alt={evento.title}
                className="w-74 h-74 efeito-image object-cover border-2"
              />
            </div>
            <div className="w-full lg:w-[30%] flex flex-col items-center text-center card-effect opacity-40">
              <h3 className="text-xxl font-jaini text-primary rounded ">
                {evento.title}
              </h3>
              <p className="text-base font-jaini break-words text-botton rounded flex items-center gap-2">
                <Calendar className="w-4 h-4 text-botton" />
                {formatarData(evento.date).split(" ")[0]}
                <Clock className="w-4 h-4 text-botton" />
                {formatarData(evento.date).split(" ")[1]}
              </p>

              <button
                onClick={() => navigate(`/Informação-Evento/${evento.id}`)}
                className="mt-5 mb-10 px-10 py-2 text-base bg-secondary text-background font-jaini rounded-lg shadow-md botao-efeito"
              >
                Ver Informações
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10 text-center z-20">
        <button
          className="px-6 py-3 bg-secondary text-background font-jaini text-sm rounded-lg botao-efeito opacity-40"
          onClick={(e) => {
            e.preventDefault();
            navigate("/Eventos");
          }}
        >
          Mais Eventos
        </button>
      </div>
    </div>
  );
};

export default Timeline;
