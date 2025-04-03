import React from "react";
import { Info, Calendar } from "lucide-react";

const Gallery = ({ images }) => {
  const colunas = [[], [], [], []];

  images.forEach((image, index) => {
    colunas[index % 4].push(image);
  });

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 mb-20">
      {colunas.map((coluna, colIndex) => (
        <div key={colIndex} className="grid gap-4">
          {coluna.map((image, index) => (
            <div key={index}>
              <img
                className="h-auto max-w-full rounded-lg"
                src={image.image}
                alt={image.title || "Imagem"}
              />
              <div className="text-center bg-terciary rounded p-2 flex flex-col items-center mt-2">
                <h3 className="text-base font-jaini text-secondary flex items-center gap-2">
                  <Info className="w-4 h-4 text-secondary" /> {image.title}
                </h3>
                <p className="text-sm font-jaini text-primary flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" /> {image.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Gallery;
