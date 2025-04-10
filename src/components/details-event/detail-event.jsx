import React, { useState, useEffect } from "react";
import { ShieldCheck, Save, MapPin, Info, PiggyBank, Calendar, Coffee, Drum, AlertCircle, MonitorCog, Share2, Link, BadgeDollarSignIcon } from "lucide-react";
import { DateTime } from "luxon";
import "./detail-event.css";
import CalendarioEvento from "../Calendario/calendario";
import BlocoPeriodoEvento from "../PeriodoEvento/periodo";
import BandaCard from "../bandas/banda";
import AlertEvento from "../alertEvento/alert";
import ToastAviso from "../modalmessage/modal";


const EventoDetalhes = ({ evento }) => {
  const [mostrarToast, setMostrarToast] = useState(false);
  const [mensagemToast, setMensagemToast] = useState('');
  const [tipoToast, setTipoToast] = useState("positivo");
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    if (evento?.date) {
      const localDate = DateTime.fromISO(evento.date)
        .setZone("America/Sao_Paulo")
        .toJSDate();
      setSelectedDate(localDate);
    }
  }, [evento]);

  const handleCopiarLink = async () => {
    try {
      if (!navigator.clipboard) {
        mostrarMensagemToast("Clipboard não disponível no navegador", "negativo");
        return;
      }

      await navigator.clipboard.writeText(window.location.href);
      mostrarMensagemToast("Link copiado!", "positivo");
    } catch (err) {
      mostrarMensagemToast("Erro ao copiar!", "negativo");
    }
  };

  const mostrarMensagemToast = (mensagem, tipo = "positivo") => {
    setMensagemToast(mensagem);
    setTipoToast(tipo);
    setMostrarToast(true);
  };





  const handleDateChange = (date) => {
    setSelectedDate(date);
  };


  return (
    <div className="min-h-screen">
      <div>
        <div className="relative overflow-hidden shadow-xl">
          <div className="relative w-full h-auto bg-secondary  px-6 py-10">
            <div className="flex flex-col md:flex-row w-full h-full">
              <div className="md:w-1/3 w-full h-96 md:h-auto">
                <img
                  src={evento.image}
                  alt={evento.title}
                  className="object-cover h-full w-full rounded-xl"
                />
              </div>
              <div className="md:w-2/3 md:px-4 px-1 py-4 flex flex-col justify-start">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <h1 className="text-2xl md:text-5xl font-jaini text-gray-700 font-bold">
                      {evento.title}
                    </h1>
                    <div
                      className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-jaini ${evento.value == 0
                          ? "bg-yellow-100 text-yellow-500"
                          : "bg-green-100 text-green-500"
                        }`}
                    >
                      <PiggyBank size={16} />
                      {evento.value == 0 ? "Evento Gratuito" : "Evento Pago"}
                    </div>
                  </div>
                  <button
                    onClick={handleCopiarLink}
                    title="Copiar link do evento"
                    className="hover:scale-110 transition-transform cursor-pointer"
                  >
                    <Share2 className="text-gray-600" size={20} />
                  </button>
                </div>


                <div
                  className={`space-y-2 box-com-shadow-externa md:border-l-4 md:border-t-0 border-t-4 md:card-value md:w-[50%] p-2 mt-4 ${evento.value == 0 ? "border-yellow-300" : "border-green-500"
                    }`}
                >
                  <div className="flex md:justify-start justify-center items-center gap-2">
                    <BadgeDollarSignIcon
                      size={20}
                      className={evento.value == 0 ? "text-botton" : "text-green-600"}
                    />
                    <p className="font-jaini text-gray-600">Valor da Inscrição</p>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-400 font-jaini">
                    <span>R$: 0,00</span>
                    <span>R$: 100,00</span>
                  </div>
                  <div className="relative h-4 overflow-hidden bg-gray-100 rounded">
                    <div
                      className="bg-green-500 text-sm font-jaini text-secondary text-center flex items-center justify-center leading-none rounded"
                      style={{ width: `${evento.value}%` }}
                    >
                      R$: {Number(evento.value).toFixed(2)}
                    </div>
                  </div>
                  {evento.necessario && (
                    <div className="justify-center items-center text-center text-green-500">
                      +
                      <span className="text-base  font-jaini text-gray-400 rounded-xl italic block">
                        {evento.necessario}
                      </span>
                    </div>
                  )}

                </div>
              </div>
            </div>
          </div>

          <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 ">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Info size={18} className="text-botton" />
                <h2 className="text-base text-gray-600 font-jaini">Sobre o Evento</h2>
              </div>
              <p className="transition-all duration-300 hover:text-gray-500 text-sm text-gray-500 text-justify font-jaini whitespace-pre-line leading-relaxed">
                {evento.description}
              </p>
            </div>
            <div className="bg-white p-4 ">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Calendar size={18} className="text-botton" />
                <p className="text-base text-gray-600 font-jaini">Data e Localização</p>
              </div>
              <CalendarioEvento
                value={selectedDate}
                onChange={handleDateChange}
                location={evento.location}
              />
            </div>
          </div>

          <div className="bg-secondary p-8 grid gap-x-20 grid-cols-1 md:grid-cols-2">
            <div className="space-y-2">
              <div className="flex justify-start  items-center gap-2">
                <MonitorCog size={20} className="text-botton" />
                <h2 className="text-lg text-gray-600 font-jaini ">Programação</h2>
              </div>
              <BlocoPeriodoEvento schedule={evento.schedule} />
            </div>

            <div className="space-y-2 ">
              <div className="flex items-center justify-center gap-2">
                <Drum size={20} className="text-botton" />
                <h2 className="text-lg text-gray-600 font-jaini ">Bandas Confirmadas</h2>
              </div>
              {evento.bands?.length > 0 && (
                <div className="grid grid-cols-1  gap-6">
                  {evento.bands.map((banda, index) => (
                    <BandaCard key={index} banda={banda} />
                  ))}
                </div>
              )}
            </div>


          </div>
          <div className="mb-4 ">
            <div className="flex items-center justify-center gap-2">
              <ShieldCheck size={20} className="text-botton" />
              <h2 className="text-xll text-center text-gray-700 font-jaini">
                Informações do Evento
              </h2>
            </div>
            <AlertEvento evento={evento} />
          </div>

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
      <div className="absolute top-1 right-0 h-auto">
        <img
          src="/assets/images/semzoeira.png"
          alt="Imagem fixa"
          className=" flex w-10 md:w-16 h-auto"
        />
      </div>


      <ToastAviso
        mensagem={mensagemToast}
        mostrar={mostrarToast}
        onClose={() => setMostrarToast(false)}
        tipo={tipoToast}
      />



    </div>
  );
};

export default EventoDetalhes;
