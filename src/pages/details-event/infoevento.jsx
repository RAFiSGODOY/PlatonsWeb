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
   
      <div className="relative z-10 bg-secondary">
        <EventoDetalhes evento={evento} />
        <BotaoVoltar />
      </div>
   
  );
};

export default EventoDetalhesPage;
