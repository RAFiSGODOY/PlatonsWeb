import React, { useState, useEffect } from "react";
import { ShieldCheck, Save, MapPin, Info, PiggyBank, Calendar, Coffee, Drum, AlertCircle, MonitorCog, Share2, Link, BadgeDollarSignIcon, HandCoins } from "lucide-react";
import { DateTime } from "luxon";
import "./detail-event.css";
import CalendarioEvento from "../Calendario/calendario";
import BlocoPeriodoEvento from "../PeriodoEvento/periodo";
import BandaCard from "../bandas/banda";
import AlertEvento from "../alertEvento/alert";
import ToastAviso from "../modalmessage/modal";
import CardInfoPayment from "./cardinfopayment/cardinfo";


const EventoDetalhes = ({ evento }) => {
  const [mostrarToast, setMostrarToast] = useState(false);
  const [mensagemToast, setMensagemToast] = useState('');
  const [tipoToast, setTipoToast] = useState("positivo");
  const [selectedDate, setSelectedDate] = useState(null);
  const [showPayments, setShowPayments] = useState(false);

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
    <div className="min-h-screen md:px-2 px-2 py-2">
      <div className="mg-100">
        <div className="relative overflow-hidden">
          <div className="relative w-full h-auto bg-secondary">
            <div className=" w-full h-80">
              <img
                src={evento.image}
                alt={evento.title}
                className="object-cover h-80 w-full rounded-xl"
              />
            </div>
            <div className="flex flex-col md:flex-row w-full h-full">
              <div className=" md:px-4 w-full px-1 py-4 flex flex-col justify-start">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <h1 className="text-2xl md:text-5xl font-jaini text-gray-700 font-bold">
                      {evento.title}
                    </h1>
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
                  className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-jaini ${evento.value == 0
                    ? "bg-yellow-50 text-yellow-500"
                    : "bg-green-50 text-green-500"
                    }`}
                >
                  <PiggyBank size={16} />
                  {evento.value == 0 ? "Evento Gratuito" : "Evento Pago"}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-secondary md:px-10 px-2 flex flex-col md:grid md:gap-x-10 md:grid-cols-3 md:min-h-[150vh] mt-2">
            <div className="order-1 md:order-2 flex flex-col relative items-end justify-start md:sticky md:top-4 md:col-span-1 md:px-2">
              <CardInfoPayment evento={evento} />
              <div className="w-[350px] box-com-shadow-externa p-2 mt-4 rounded-xl transition-transform duration-1000 hover:scale-102 ">
                <div className="flex justify-center items-center gap-2 border-b-1 border-gray-300 py-1">
                  <Calendar size={18} className="text-blue-500" />
                  <p className="text-base text-gray-600 font-jaini">Data e Localização</p>
                </div>
                <div className="flex w-full justify-center">
                  <div className="flex w-full justify-start items-center text-center rounded-sm">
                    <CalendarioEvento
                      value={selectedDate}
                      onChange={handleDateChange}
                      location={evento.location}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="order-2 md:order-1 space-y-2 md:col-span-2 mt-10">
              <div className="px-2 mb-10">
                <div className="flex items-center md:justify-center justify-center gap-2 mb-2">
                  <Info size={18} className="text-blue-700" />
                  <h2 className="text-lg text-gray-700 font-jaini">Sobre o Evento</h2>
                </div>
                <p className="transition-all duration-300 hover:text-gray-700 text-base text-gray-500 text-left font-jaini whitespace-pre-line leading-relaxed">
                  ㅤ{evento.description}
                </p>
              </div>
              <div className="flex grid grid-cols-1 md:grid-cols-2 items-start justify-center  gap-5 px-2 ">
                <div className=" flex flex-col justify-center">
                  <div className="flex justify-center items-center gap-2 mb-5">
                    <MonitorCog size={20} className="text-blue-700" />
                    <h2 className="text-xll text-center text-gray-700 font-jaini">Programação</h2>
                  </div>
                  <BlocoPeriodoEvento schedule={evento.schedule} />
                </div>
                <div className=" flex flex-col justify-center">
                  <div className="flex items-center justify-center gap-2 mb-5">
                    <Drum size={20} className="text-blue-700" />
                    <h2 className="text-xll text-center text-gray-700 font-jaini">Bandas Confirmadas</h2>
                  </div>
                  {evento.bands?.length > 0 && (
                    <div className="grid grid-cols-1 gap-6">
                      {evento.bands.map((banda, index) => (
                        <BandaCard key={index} banda={banda} />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 ">
            <div className="flex items-center justify-center gap-2">
              <ShieldCheck size={20} className="text-blue-700" />
              <h2 className="text-xll text-center text-gray-700 font-jaini">
                Regras do Evento
              </h2>
            </div>
            <AlertEvento evento={evento} />
          </div>


        </div>
        <div className="flex flex-col text-center items-center text-sm justify-start mb-5 card-value p-2">
          <div className="flex items-center  gap-2 mb-5">
            <HandCoins size={20} className="text-blue-700" />
            <p className="text-xll text-center text-gray-700 font-jaini mb-2">Patrocinadores do Evento</p>
          </div>

          {evento.sponsors?.length > 0 && (

            <div className="flex flex-wrap justify-center items-center gap-6">
              {evento.sponsors.map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt={`Patrocinador ${index}`}
                  className="h-16 md:h-32 object-contain "
                />
              ))}
            </div>

          )}
        </div>
        <div className="bg-white py-6 px-8 flex justify-end">
          <button className=" animate-bounce botao-efeito2 bg-green-500 hover:bg-green-700 text-xl fixed bottom-2 right-2 hover:bg-blue-700 px-6 py-3 rounded-lg font-jaini shadow-md">
            Quero Participar
          </button>
        </div>
      </div>
      <div className="absolute top-2 right-2 h-auto">
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
