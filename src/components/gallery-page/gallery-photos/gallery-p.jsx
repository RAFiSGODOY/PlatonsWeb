import React, { useState } from "react";
import { Info, Calendar, Download } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import "./gallery-p.css";

const Gallery = ({ images }) => {
  const colunas = [[], [], [], []];

  images.forEach((image, index) => {
    colunas[index % 4].push(image);
  });

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 mb-20">
      {colunas.map((coluna, colIndex) => (
        <div key={colIndex} className="grid gap-4">
          {coluna.map((image, index) => {
            const [openMenu, setOpenMenu] = useState(false);

            return (
              <div key={index} className="relative group">
                <img
                  className="h-auto max-w-full rounded-lg"
                  src={image.image}
                  alt={image.title || "Imagem"}
                />
                <div className="absolute top-2 right-2 z-10">
                  <div className="relative flex flex-col items-center">
                    <button
                      onClick={() => setOpenMenu(!openMenu)}
                      className="w-8 h-8 bg-primary icon-effect text-terciary rounded flex items-center justify-center shadow transition-transform"
                      title="Ações"
                    >
                      <svg
                        className={`w-5 h-5 transition-transform ${openMenu ? "rotate-45" : ""}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                      </svg>
                    </button>
                    {openMenu && (
                      <div className="absolute top-full mt-2 flex flex-col gap-2 items-end">
                        <a
                          href={image.image}
                          download
                          className="bg-white hover:bg-gray-200 text-black rounded-full p-2 shadow"
                          title="Baixar imagem"
                        >
                          <Download className="w-4 h-4" />
                        </a>

                        <a
                          href={`https://wa.me/?text=${encodeURIComponent(image.image)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-green-500 hover:bg-green-600 text-white rounded-full p-2 shadow"
                          title="Compartilhar no WhatsApp"
                        >
                          <FaWhatsapp className="w-4 h-4" />
                        </a>
                      </div>
                    )}
                  </div>
                </div>
                <div className="text-center bg-terciary rounded p-2 flex flex-col items-center mt-2">
                  <h3 className="text-base font-jaini text-secondary flex items-center gap-2">
                    <Info className="w-4 h-4 text-secondary" /> {image.title}
                  </h3>
                  <p className="text-sm font-jaini text-primary flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" /> {image.date}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Gallery;
