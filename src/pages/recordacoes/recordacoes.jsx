import React, { useState, useEffect } from "react";
import "./recordacoes.css";
import { useNavigate } from "react-router-dom";
import recordacoesData from "../../data/recordacoes.json";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Gallery from "../../components/galeria/galeria";

function Recordacoes() {
  const navigate = useNavigate();
  const [paginaAtual, setPaginaAtual] = useState(1);
  const imagensPorPagina = 30;
  const totalPaginas = Math.ceil(recordacoesData.length / imagensPorPagina);

  const proximaPagina = () => {
    if (paginaAtual < totalPaginas) setPaginaAtual(paginaAtual + 1);
  };

  const paginaAnterior = () => {
    if (paginaAtual > 1) setPaginaAtual(paginaAtual - 1);
  };

  const imagensExibidas = recordacoesData.slice(
    (paginaAtual - 1) * imagensPorPagina,
    paginaAtual * imagensPorPagina
  );

  return (
    <div className="bg-black min-h-screen text-white flex flex-col items-center relative">
      <div className="relative w-full h-64 md:h-80 overflow-hidden">
        <img
          src="/assets/images/recordacoes.png"
          alt="Recordações"
          className="w-full h-full object-cover brightness-75 opacity-50"
        />
        <h1 className="absolute inset-0 flex items-center justify-center text-xxl md:text-4xl font-jaini z-10">
          Recordações
        </h1>
        <div className="bg-gradient-overlay-bottom"></div>
      </div>
      <div className="w-full px-4 md:px-10">
        <Gallery images={imagensExibidas} />
      </div>

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
      <button
        onClick={() => navigate(-1)}
        className="top-4 left-4 botao-efeito bg-primary text-background p-2 rounded-full shadow-lg fixed"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6 "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <div className="absolute top-2 right-2 w-20 h-auto md:w-32 md:h-32">
        <img 
          src="/assets/images/semzoeira.png" 
          alt="Imagem fixa" 
          className="w-32 h-auto shadow-lg"
        />
      </div>
      <footer className="mt-30 text-center text-sm">
        <p className="mb-5 font-jaini text-base uppercase">Patrocinadores</p>
        <div className="flex flex-wrap justify-center gap-4">
          <img src="../../assets/images/patrocinadores/ABASSI.jpeg" alt="Abassi Logo" className="h-12 md:h-16" />
          <img src="../../assets/images/patrocinadores/JMYA.jpeg" alt="JMYA Logo" className="h-12 md:h-16" />
          <img src="../../assets/images/logo.png" alt="Platons Logo" className="h-12 md:h-16" />
          <img src="../../assets/images/patrocinadores/MAYAHOX.jpeg" alt="Mayahox Logo" className="h-12 md:h-16" />
          <img src="../../assets/images/patrocinadores/ROZANE.png" alt="Rozane Logo" className="h-12 md:h-16" />
          <img src="../../assets/images/patrocinadores/CLAUDINHO.jpeg" alt="Claudinho Logo" className="h-12 md:h-16" />
        </div>
        <p className="mt-5 mb-5 font-jaini text-base">&copy; Copyright Moto Clube 2024.</p>
      </footer>
    </div>
  );
}

export default Recordacoes;
