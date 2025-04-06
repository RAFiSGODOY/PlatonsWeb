import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Calendar } from "lucide-react";
import eventosData from "../../data/eventos.json";
import EventosLista from "../../components/listadeeventos/eventoslista";
import "./event.css";
import BotaoVoltar from "../../components/buttonback/button";

function Evento() {
  const navigate = useNavigate();
  const [paginaAtual, setPaginaAtual] = useState(1);
  const eventosPorPagina = 3;
  const totalPaginas = Math.ceil(eventosData.length / eventosPorPagina);

  const proximaPagina = () => {
    if (paginaAtual < totalPaginas) setPaginaAtual(paginaAtual + 1);
  };

  const paginaAnterior = () => {
    if (paginaAtual > 1) setPaginaAtual(paginaAtual - 1);
  };

  const eventosExibidos = eventosData.slice(
    (paginaAtual - 1) * eventosPorPagina,
    paginaAtual * eventosPorPagina
  );

  return (
    <div className="bg-black min-h-screen text-white flex flex-col items-center relative">
      <div className="relative w-full h-64 md:h-80 overflow-hidden">
        <img
          src="/assets/images/eventos.png"
          alt="Recordações"
          className="w-full h-full object-cover brightness-75 opacity-50"
        />
        <h1 className="absolute inset-0 flex items-center justify-center text-xxxl md:text-4xl font-jaini z-10">
          Eventos
        </h1>
        <div className="bg-gradient-overlay-bottom" />
      </div>
      <EventosLista eventos={eventosExibidos} />
      <div className="flex gap-4 mt-6">
        <button
          onClick={paginaAnterior}
          className="botao-efeito bg-primary text-background px-4 py-2 rounded disabled:opacity-50 flex items-center gap-2"
          disabled={paginaAtual === 1}
        >
          <ArrowLeft size={18} />
        </button>
        <span className="px-4 py-2 botao-efeito bg-botton text-background rounded">
          {paginaAtual}
        </span>
        <button
          onClick={proximaPagina}
          className="botao-efeito bg-primary text-background px-4 py-2 rounded disabled:opacity-80 flex items-center gap-2"
          disabled={paginaAtual === totalPaginas}
        >
          <ArrowRight size={18} />
        </button>
      </div>

     <BotaoVoltar />

      <div className="absolute top-2 right-2 w-20 h-auto md:w-32 md:h-32">
        <img
          src="/assets/images/semzoeira.png"
          alt="Imagem fixa"
          className="w-32 h-auto shadow-lg"
        />
      </div>

      <footer className="mt-20 text-center text-sm">
        <p className="mb-5 font-jaini text-base uppercase">Patrocinadores</p>
        <div className="flex flex-wrap justify-center gap-4">
          <img src="/assets/images/patrocinadores/ABASSI.jpeg" alt="Abassi Logo" className="h-12 md:h-16" />
          <img src="/assets/images/patrocinadores/JMYA.jpeg" alt="JMYA Logo" className="h-12 md:h-16" />
          <img src="/assets/images/logo.png" alt="Platons Logo" className="h-12 md:h-16" />
          <img src="/assets/images/patrocinadores/MAYAHOX.jpeg" alt="Mayahox Logo" className="h-12 md:h-16" />
          <img src="/assets/images/patrocinadores/ROZANE.png" alt="Rozane Logo" className="h-12 md:h-16" />
          <img src="/assets/images/patrocinadores/CLAUDINHO.jpeg" alt="Claudinho Logo" className="h-12 md:h-16" />
        </div>
        <p className="mt-5 mb-5 font-jaini text-base">&copy; Copyright Moto Clube 2024.</p>
      </footer>
    </div>
  );
}

export default Evento;
