import React from "react";
import { useParams } from "react-router-dom";
import EventsData from "../../data/events.json";
import EventDetail from "../../components/event-page/event-details/event-details.jsx";
import BackButton from "../../components/global/back-button/back-button.jsx";

import "./information-e.css"

const EventDetailsPage = () => {
  const { id } = useParams();
  const evento = EventsData.find((evento) => evento.id === Number(id));

  if (!evento) {
    return (
      <>
        <div className="text-center text-white mt-10 justify-center">Evento não encontrado</div>
        <BackButton />
      </>
    );
  }

  return (
   
      <div className="relative z-10 bg-secondary">
        <EventDetail evento={evento} />
        <BackButton />
      </div>
   
  );
};

export default EventDetailsPage;
