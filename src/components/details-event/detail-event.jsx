import React, { useState, useEffect } from "react";
import { DollarSign, Clock, MapPin, Info, Gift } from "lucide-react";
import { DateTime } from "luxon";
import "./detail-event.css";
import CalendarioEvento from "../Calendario/calendario";

const EventoDetalhes = ({ evento }) => {
  const isFree = evento.free === 1;
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    if (evento?.date) {
      const localDate = DateTime.fromISO(evento.date)
        .setZone("America/Sao_Paulo")
        .toJSDate();
      setSelectedDate(localDate);
    }
  }, [evento]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const formatDate = (date) => {
    const start = DateTime.fromJSDate(date);
    const end = start.plus({ hours: 2 });

    const format = (d) => d.toFormat("yyyyMMdd'T'HHmmss");
    return `${format(start)}/${format(end)}`;
  };

  return (
    <div className="min-h-screen">
      <div>
        <div className="relative overflow-hidden shadow-xl">
          <div className="relative h-96 w-full">
            <img
              src={evento.image}
              alt={evento.title}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/80 flex flex-col justify-end px-4">
              <h1 className="text-xxxl text-secondary mb-2 font-jaini">{evento.title}</h1>

              <div className="space-y-0 w-full">
                <div className="flex items-center justify-between text-sm text-gray-400 font-jaini">
                  <span>R$: 0,00</span>
                  <span>R$: 100,00</span>
                </div>
                <div className="relative h-5 overflow-hidden">
                  <div class="w-full bg-gray-100 rounded">
                    <div class="bg-green-500 text-base font-jaini text-center justify-center text-secondary flex leading-none rounded"
                      style={{ width: `${evento.value}%`}}>
                      R$: {Number(evento.value).toFixed(2)}
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full flex font-jaini text-sm text-gray-400 mt-0 mb-2 text-center justify-center">
                (Valor do Evento)
              </div>
            </div>
          </div>



          <div className="bg-white p-8 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <CalendarioEvento value={selectedDate} onChange={handleDateChange} evento={evento} />

              <div className="flex items-center gap-2">
                <DollarSign size={20} className="text-gray-600" />
                <span className="text-xl font-medium font-jaini">{evento.value}</span>
              </div>

              <div className="flex items-center gap-2">
                <MapPin size={20} className="text-gray-600" />
                <span className="text-base font-jaini">{evento.location}</span>
              </div>

              <a
                href={`https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
                  evento.title
                )}&dates=${formatDate(selectedDate)}&details=${encodeURIComponent(
                  evento.description
                )}&location=${encodeURIComponent(evento.location)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-center px-6 py-2 rounded-lg font-jaini"
              >
                Salvar na Agenda
              </a>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-100 p-6 rounded-xl shadow-md">
                <h2 className="text-xl font-bold mb-4 font-jaini">Programação</h2>
                {evento.schedule?.map((periodo, index) => (
                  <div key={index} className="mb-4">
                    <h3 className="font-semibold mb-2 text-lg text-gray-700">{periodo.title}</h3>
                    <ul className="space-y-2">
                      {periodo.events.map((item, idx) => (
                        <li key={idx} className="flex gap-2 items-center">
                          <Clock className="text-gray-500 w-5 h-5" />
                          <span className="text-sm font-jaini">{item.time} - {item.description}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {evento.bands?.length > 0 && (
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h2 className="text-xl font-bold text-center mb-6 font-jaini">Bandas Confirmadas</h2>
                  <div className="flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-6">
                    {evento.bands.map((banda, index) => (
                      <div key={index} className="flex flex-col items-center text-center">
                        <img
                          src={banda.image}
                          alt={banda.name}
                          className="w-24 h-24 rounded-full border-4 border-blue-600 object-cover"
                        />
                        <p className="font-bold mt-2 text-gray-800">{banda.name}</p>
                        <p className="text-sm text-gray-500">{banda.info}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="bg-white px-8 py-6">
            <div className="flex items-start gap-4">
              <Info className="text-blue-500 w-5 h-5 mt-1" />
              <p className="text-gray-800 font-jaini whitespace-pre-line">
                {evento.description}
              </p>
            </div>
          </div>

          {evento.sponsors?.length > 0 && (
            <div className="bg-gray-100 py-8 px-4">
              <h2 className="text-center text-2xl font-bold mb-6 font-jaini text-gray-700">Patrocinadores</h2>
              <div className="flex flex-wrap justify-center items-center gap-6">
                {evento.sponsors.map((logo, index) => (
                  <img
                    key={index}
                    src={logo}
                    alt={`Patrocinador ${index}`}
                    className="h-12 md:h-16 object-contain"
                  />
                ))}
              </div>
            </div>
          )}

          <div className="bg-white py-6 px-8 flex justify-end">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold shadow-md">
              Confirmar Presença
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventoDetalhes;
