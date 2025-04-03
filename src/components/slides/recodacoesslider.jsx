import React, { useState, useEffect } from "react";
import list from "../../data/recordacoes.json";
import { Calendar, Info } from "lucide-react";

import "./recordacoesslides.css";

function RecordacoesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = list.length;
  const isMobile = window.innerWidth < 768;
  const itemsPerSlide = isMobile ? 1 : 3;

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
    <div className="flex justify-center items-center w-full px-4 md:px-0 relative">
      <div className="relative w-full max-w-7xl mx-auto overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out gap-x-4"
          style={{
            transform: `translateX(-${(currentIndex / totalSlides) * 100}%)`,
            width: `${(totalSlides / itemsPerSlide) * 100}%`,
          }}
        >
          {list.map((item) => (
            <div
              key={item.id}
              className="px-2"
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
                  <Calendar className="w-4 h-4 text-primary" /> {item.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-10 bg-primary text-background p-3 rounded-full botao-efeito"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-10 bg-primary text-background p-3 rounded-full "
      >
        ❯
      </button>
    </div>
  );
}

export default RecordacoesCarousel;
