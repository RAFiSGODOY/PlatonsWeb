import React, { useState, useEffect } from "react";
import { DollarSign, Save, MapPin, Info, PiggyBank, Calendar, Coffee, Drum, AlertCircle } from "lucide-react";
import { DateTime } from "luxon";
import "./detail-event.css";
import CalendarioEvento from "../Calendario/calendario";
import BlocoPeriodoEvento from "../PeriodoEvento/periodo";
import BandaCard from "../bandas/banda";
import AlertaEvento from "../alertEvento/alert";


const EventoDetalhes = ({ evento }) => {

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
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/90 flex flex-col justify-end text-center px-4">
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
              <div className="w-full flex flex-col items-center justify-center font-jaini text-sm text-gray-400 mt-0 mb-2 text-center">
                {evento.necessario && (
                  <span className="text-base text-botton italic">
                    + {evento.necessario}
                  </span>
                )}

                <span className="text-xs text-gray-400 font-semibold font-jaini italic">(Valor da Inscrição)</span>
              </div>

            </div>

          </div>
          <div className="bg-white  rounded-2xl p-2 m-4 space-y-2">
            <div className="flex justify-start items-center gap-1">
              <Info size={20} className="text-gray-600" />
              <h2 className="text-base text-gray-600 font-jaini">Sobre o Evento</h2>
            </div>
            <p className="text-gray-500 text-sm text-justify font-jaini whitespace-pre-line leading-relaxed">
            ㅤ{evento.description}
            </p>
          </div>

          <div className="bg-secondary p-8 grid  grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-2">
              <div className="flex justify-center items-center gap-2">
                <Calendar size={20} className="text-botton" />
                <p className="text-xll text-center text-gray-700 font-jaini">Data e Endereço</p>
              </div>
              <CalendarioEvento value={selectedDate} onChange={handleDateChange} location={evento.location} />
              <div className="flex justify-center">
                <a
                  href={`https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
                    evento.title
                  )}&dates=${formatDate(selectedDate)}&details=${encodeURIComponent(
                    evento.description
                  )}&location=${encodeURIComponent(evento.location)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center gap-1 box-com-shadow-externa bg-blue-700 hover:bg-blue-800 text-secondary text-sm text-center p-8 py-2 rounded-lg  font-jaini"
                ><Save size={15} className="text-secondary" />
                  Salvar na Agenda
                </a>
              </div>

              <div className="flex justify-center items-center gap-2 mt-10 ">
                <Coffee size={20} className="text-botton " />
                <h2 className="text-xll text-center text-gray-700 font-jaini">Programação</h2>
              </div>
              <BlocoPeriodoEvento schedule={evento.schedule} />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2">
                <Drum size={20} className="text-botton" />
                <h2 className="text-xll text-center text-gray-700 font-jaini">Bandas Confirmadas</h2>
              </div>
              {evento.bands?.length > 0 && (
                <div className="grid grid-cols-1 p-6 bg-secondary box-com-shadow-interna2 rounded-xl gap-6">
                  {evento.bands.map((banda, index) => (
                    <BandaCard key={index} banda={banda} />
                  ))}
                </div>
              )}
            </div>
          </div>
          <AlertaEvento evento={evento} />
          {evento.sponsors?.length > 0 && (
            <div className="bg-gray-100 py-8 px-4">
              <h2 className="text-xll text-center text-gray-700 font-jaini">Patrocinadores</h2>
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
            <button className="botao-efeito2 bg-green-500 hover:bg-green-700 text-xl fixed bottom-2 right-2 hover:bg-blue-700 px-6 py-3 rounded-lg font-jaini shadow-md">
              Confirmar Presença
            </button>
          </div>
        </div>
      </div>
      <div className="absolute top-2 right-2 w-20 h-auto md:w-32 md:h-32">
        <img
          src="/assets/images/semzoeira.png"
          alt="Imagem fixa"
          className="w-32 h-auto shadow-lg"
        />
      </div>
    </div>
  );
};

export default EventoDetalhes;
