import React from "react";

const eventos = [
  {
    id: 1,
    imagem: "../../../assets/images/eventos/campanhabeneficente03.jpeg",
    titulo: "1° Moto Fest - Peabiru",
    data: "08/06/25",
  },
  {
    id: 2,
    imagem: "../../../assets/images/eventos/1motofest.jpeg",
    titulo: "Campanha Beneficente",
    data: "03/03/25",
  },
];

const Eventosinfo = () => {
  return (
    
      <div className="relative flex flex-col items-center max-w-5xl mx-auto">
        {/* Linha principal conectando todos os eventos */}
        <div className="absolute w-1 bg-gray-400 h-full top-0 left-1/2 transform -translate-x-1/2 md:block hidden" />
        
        {eventos.map((evento, index) => (
          <div
            key={evento.id}
            className="relative w-full flex flex-col items-center mb-10"
          >
            {/* Linha horizontal conectando a imagem */}
            <div className="absolute w-16 h-1 bg-gray-400 top-1/2 transform -translate-y-1/2 left-1/2 -translate-x-1/2 md:block hidden" />

            <div className="flex flex-col items-center text-center">
              <img
                src={evento.imagem}
                alt={evento.titulo}
                className="w-48 h-48 md:w-60 md:h-60 rounded-full object-cover border-4 border-white shadow-lg"
              />
              <h3 className="text-primary text-xl md:text-2xl font-jaini mt-4">
                {evento.titulo}
              </h3>
              <p className="text-primary font-jaini text-base">{evento.data}</p>
              <button className="mt-4 px-6 py-2 bg-primary text-background font-jaini rounded-lg shadow-md hover:bg-gray-200">
                Ver Informações
              </button>
            </div>
          </div>
        ))}
        <button className="mt-6 px-4 py-2 bg-primary text-background font-jaini rounded-md shadow-md hover:bg-gray-600 z-1">
          Mais Eventos
        </button>
      </div>
  );
};

export default Eventosinfo;
