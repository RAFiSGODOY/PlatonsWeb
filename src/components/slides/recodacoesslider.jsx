import React, { useState, useEffect } from "react";
import list from "../../data/recordacoes.json";
import { Calendar, Info } from "lucide-react";

import "./recordacoesslides.css";

function RecordacoesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = list.length;
  const isMobile = window.innerWidth < 768;
  const itemsPerSlide = isMobile ? 1 : 3;

  const formatarData = (dataISO) => {
    const data = new Date(dataISO);
    const dia = String(data.getDate()).padStart(2, "0");
    const mes = String(data.getMonth() + 1).padStart(2, "0");
    const ano = data.getFullYear();
    const hora = String(data.getHours()).padStart(2, "0");
    const minutos = String(data.getMinutes()).padStart(2, "0");

    return `${dia}/${mes}/${ano} ${hora}:${minutos}`;
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + itemsPerSlide) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - itemsPerSlide < 0 ? totalSlides - itemsPerSlide : prevIndex - itemsPerSlide
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center w-full md:px-0 relative">
      <div className="relative w-full max-w-7xl mx-auto overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out gap-x-1"
          style={{
            transform: `translateX(-${(currentIndex / totalSlides) * 100}%)`,
            width: `${(totalSlides / itemsPerSlide) * 100}%`,
          }}
        >
          {list.map((item) => (
            <div
              key={item.id}
              className="px-1"
              style={{
                width: isMobile ? "100%" : "33.33%",
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 md:h-80 object-cover rounded-lg"
              />
              <div className="text-center bg-terciary rounded p-2 flex flex-col items-center mt-2">
                <h3 className="text-base font-jaini text-secondary flex items-center gap-2">
                  <Info className="w-4 h-4 text-secondary" /> {item.title}
                </h3>
                <p className="text-sm font-jaini text-primary flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" /> {formatarData(item.date).split(" ")[0]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center gap-4 mt-4">
        <button
          onClick={prevSlide}
          className="bg-primary text-background py-1 px-14 rounded botao-efeito"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="bg-primary text-background py-1 px-14 rounded botao-efeito"
        >
          ❯
        </button>
      </div>
    </div>
  );
}

export default RecordacoesCarousel;
