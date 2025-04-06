import React from "react";
import { useParams } from "react-router-dom";
import eventosData from "../../data/eventos.json";
import EventoDetalhes from "../../components/details-event/detail-event";
import BotaoVoltar from "../../components/buttonback/button";

const EventoDetalhesPage = () => {
  const { id } = useParams();
  const evento = eventosData.find((evento) => evento.id === Number(id));

  if (!evento) {
    return (
      <>
        <div className="text-center text-white mt-10 justify-center">Evento não encontrado</div>
        <BotaoVoltar />
      </>
    );
  }

  return (
    <div className="relative min-h-screen">
      <img
        src="/assets/images/infoevent.png"
        alt="Recordações"
        className="fixed top-0 left-0 w-full h-full object-cover z-0"
      />
      <div className="relative z-10 ">
        <EventoDetalhes evento={evento} />
        <BotaoVoltar />
      </div>
    </div>
  );
};

export default EventoDetalhesPage;
