import React, { useState, useEffect } from "react";
import { DollarSign, Clock, MapPin, Info, PiggyBank, Calendar, Coffee, Drum, AlertCircle } from "lucide-react";
import { DateTime } from "luxon";
import "./detail-event.css";
import CalendarioEvento from "../Calendario/calendario";
import BlocoPeriodoEvento from "../PeriodoEvento/periodo";
import BandaCard from "../bandas/banda";


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
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/80 flex flex-col justify-end text-center px-4">
              <h1 className="text-xxxl text-secondary  font-jaini">{evento.title}</h1>
              <div className="space-y-0 w-full">
                <div className="flex items-center justify-between text-sm text-gray-400 font-jaini">
                  <span>R$: 0,00</span>
                  <span>R$: 100,00</span>
                </div>
                <div className="relative h-5 overflow-hidden">
                  <div class="w-full bg-gray-100 rounded">
                    <div class="bg-green-500 text-base font-jaini text-center justify-center text-secondary flex leading-none rounded"
                      style={{ width: `${evento.value}%` }}>
                      R$: {Number(evento.value).toFixed(2)}
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full flex font-jaini text-sm text-gray-400 mt-0 mb-2 text-center justify-center">
                (Valor da Inscrição)
              </div>
            </div>

          </div>
          <div className=" m-2 rounded py-2 box-com-shadow-interna2">
            <div className="flex justify-left items-center gap-1 px-2 ">
              <Info size={15} className="text-gray-500" />
              <p className="text-sm text-gray-500 font-bold text-left font-jaini">Sobre o Evento</p>
            </div>
            <div className="flex items-start px-8 py-2 ">
              <p className="text-gray-600 text-lg text-justify font-jaini whitespace-pre-line">
                ㅤ{evento.description}
              </p>
            </div>
          </div>
          <div className="bg-secondary p-8 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-2">
              <div className="flex justify-start items-center gap-2">
                <Calendar size={20} className="text-botton" />
                <p className="text-lg text-gray-700 text-left font-jaini">Data e Endereço</p>
              </div>
              <CalendarioEvento value={selectedDate} onChange={handleDateChange} location={evento.location} />
              <div className="flex justify-end">
                <a
                  href={`https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
                    evento.title
                  )}&dates=${formatDate(selectedDate)}&details=${encodeURIComponent(
                    evento.description
                  )}&location=${encodeURIComponent(evento.location)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center gap-2 box-com-shadow-interna2 bg-blue-700 hover:bg-blue-800 text-secondary text-sm text-center p-10 py-2 rounded-lg  font-jaini"
                ><Calendar size={15} className="text-secondary" />
                  Salvar na Agenda
                </a>
              </div>

              <div className="flex items-center gap-2 mt-4 ">
                <Coffee size={20} className="text-botton " />
                <h2 className="text-lg text-gray-700 text-left font-jaini">Programação</h2>
              </div>
              <BlocoPeriodoEvento schedule={evento.schedule} />
            </div>

            <div className="space-y-2">
              <div className="flex items-center  gap-2">
                <Drum size={20} className="text-botton" />
                <h2 className="text-lg text-gray-700 justify-start font-jaini">Bandas Confirmadas</h2>
              </div>
              {evento.bands?.length > 0 && (
                <div className="grid grid-cols-1 p-6 bg-secondary box-com-shadow-externa rounded-xl gap-6">
                  {evento.bands.map((banda, index) => (
                    <BandaCard key={index} banda={banda} />
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="m-4">
            <div className="flex items-center  gap-2">
              <AlertCircle size={20} className="pt-atencao" />
              <h2 className="text-lg text-gray-700 justify-start font-jaini">Pontos de Atenção</h2>
            </div>
            {evento.sponsors?.length > 0 && (
              <div className="bg-gray-100 py-8 px-4">
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
            <button className="botao-efeito2 text-xl fixed bottom-2 right-2 hover:bg-blue-700 px-6 py-3 rounded-lg font-jaini shadow-md">
              Confirmar Presença
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventoDetalhes;
