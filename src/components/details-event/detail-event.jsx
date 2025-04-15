import React, { useState, useEffect } from "react";
import { ShieldCheck, Save, MapPin, Info, PiggyBank, Calendar, Coffee, Drum, AlertCircle, MonitorCog, Share2, Link, BadgeDollarSignIcon, HandCoins, CircleHelp, MailQuestion } from "lucide-react";
import { DateTime } from "luxon";
import "./detail-event.css";
import CalendarioEvento from "../Calendario/calendario";
import BlocoPeriodoEvento from "../PeriodoEvento/periodo";
import BandaCard from "../bandas/banda";
import AlertEvento from "../alertEvento/alert";
import ToastAviso from "../modalmessage/modal";
import CardInfoPayment from "./cardinfopayment/cardinfo";
import Questions from "../Questions/questions";
import ParticiparModal from "./ModalForm/ModalForm";


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
            <div className="order-1 md:order-2 flex flex-col relative md:items-end items-center sticky top-24  md:col-span-1 md:px-2">
              <CardInfoPayment evento={evento} />
              <div className="w-[350px]  p-4 mt-4 rounded-xl transition-transform duration-1000 shadow-lg  hover:scale-102 ">
                <div className="flex items-center w-full gap-2 mb-4">
                  <div className="flex-grow border-t border-gray-200"></div>
                  <Calendar size={18} className="text-blue-500" />
                  <p className="text-base text-gray-600 font-jaini">Data e Localização</p>
                  <div className="flex-grow border-t border-gray-200"></div>
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
            <div className="order-2 md:order-1 space-y-2 md:col-span-2 mt-5">
              <ol className="relative border-l border-gray-200">

                <li className="mt-2 ms-6">
                  <span className="absolute flex items-center justify-center w-6 h-6 bg-secondary  rounded-full -start-3 ring-8 ring-white ">
                    <Info size={18} className="text-blue-500" />
                  </span>
                  <div className="flex items-center justify-start gap-1">
                    <h2 className="text-xll text-gray-700 font-jaini">Sobre</h2>
                  </div>
                  <p className="transition-all duration-300 hover:text-gray-600 text-lg text-gray-500 text-left font-jaini whitespace-pre-line leading-relaxed">
                    ㅤ{evento.description}
                  </p>
                </li>


                <li className="mb-10 ms-6 mt-10">
                  <span className="absolute flex items-center justify-center w-6 h-6 bg-secondary  rounded-full -start-3 ring-8 ring-white ">
                    <CircleHelp size={18} className="text-blue-500" />
                  </span>
                  <div className="items-center justify-center gap-1 px-2">
                    <div className="flex items-center justify-start gap-1">

                      <h2 className="text-xll text-center text-gray-700 font-jaini">
                        Regras do Evento
                      </h2>
                    </div>
                    <AlertEvento evento={evento} />
                  </div>
                </li>


                <li className="mb-10 ms-6 ">
                  <span className="absolute flex items-center justify-center w-6 h-6 bg-secondary rounded-full -start-3 ring-8 ring-white ">
                    <MonitorCog size={18} className="text-blue-500" />
                  </span>
                  <div className="flex flex-col justify-center">
                    <div className="flex justify-start items-center gap-2 px-2">

                      <h2 className="text-xll text-center text-gray-700 font-jaini">Programação</h2>
                    </div>

                    <BlocoPeriodoEvento schedule={evento.schedule} />
                  </div>
                </li>


                <li className="ms-6 mb-20">
                  <span className="absolute flex items-center justify-center w-6 h-6 bg-secondary rounded-full -start-3 ring-8 ring-white ">
                    <Drum size={18} className="text-blue-500" />
                  </span>
                  <div className="flex flex-col justify-center px-2">
                    <div className="flex items-center justify-start gap-2 mb-5">
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
                </li>
                <li className="ms-6 mb-10">
                  <span className="absolute flex items-center justify-center w-6 h-6 bg-secondary rounded-full -start-3 ring-8 ring-white ">
                    <MailQuestion size={18} className="text-blue-500" />
                  </span>
                  <div className="flex flex-col justify-center px-2">
                    <div className="flex items-center justify-start gap-2 mb-5">
                      <h2 className="text-xll text-center text-gray-700 font-jaini">Perguntas Frequentes</h2>
                    </div>
                    <Questions evento={evento} />
                  </div>
                </li>
                <li className="ms-6 ">
                  <div className="flex flex-col justify-center px-2"></div>
                </li>
                <li className="ms-6">
                  <div className="flex flex-col justify-center px-2"></div>
                </li>
              </ol>
            </div>

          </div>
        </div>
        <div className="flex flex-col items-center justify-center p-8 rounded-lg w-full">
          <div className="flex items-center justify-center gap-1 mb-6 w-full">
            <div className="flex-grow border-t border-gray-200"></div>
            <HandCoins size={20} className="text-blue-700" />
            <p className="text-xll text-center text-gray-800 font-jaini px-2 whitespace-nowrap">Patrocinadores do Evento</p>
            <div className="flex-grow border-t border-gray-200"></div>
          </div>

          {evento.sponsors?.length > 0 && (
            <div className="flex flex-wrap justify-center items-center gap-8">
              {evento.sponsors.map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt={`Patrocinador ${index}`}
                  className="h-16 md:h-32 object-contain rounded-lg shadow-md transition-transform transform hover:scale-105"
                />
              ))}
            </div>
          )}
        </div>
          <ParticiparModal evento={evento} />
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
