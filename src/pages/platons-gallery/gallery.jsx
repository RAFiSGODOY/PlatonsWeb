import React, { useState} from "react";
import SouvenirsData from "../../data/souvenirs.json";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Gallery from "../../components/gallery-page/gallery-photos/gallery-p.jsx";
import BackButton from "../../components/global/back-button/back-button.jsx";

import "./gallery.css";
import Footer from "../../components/global/footer/footer.jsx";

function PageGallery() {
  const [paginaAtual, setPaginaAtual] = useState(1);
  const imagensPorPagina = 30;
  const totalPaginas = Math.ceil(SouvenirsData.length / imagensPorPagina);

  const proximaPagina = () => {
    if (paginaAtual < totalPaginas) setPaginaAtual(paginaAtual + 1);
  };

  const paginaAnterior = () => {
    if (paginaAtual > 1) setPaginaAtual(paginaAtual - 1);
  };

  const imagensExibidas = SouvenirsData.slice(
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
        <h1 className="absolute inset-0 flex items-center justify-center text-xxxl md:text-4xl font-jaini z-10">
          GALERIA
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
      <BackButton />
      <div className="absolute top-2 right-2 w-20 h-auto md:w-32 md:h-32">
        <img 
          src="/assets/images/semzoeira.png" 
          alt="Imagem fixa" 
          className="w-32 h-auto shadow-lg"
        />
      </div>
      <Footer />
    </div>
  );
}

export default PageGallery;
