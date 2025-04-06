import React, { useState, useEffect, useRef } from "react";
import { DollarSign, Clock, MapPin, Info, Gift } from "lucide-react";
import { DateTime } from "luxon";  // Importa o Luxon
import "./detail-event.css";
import CalendarioEvento from "../Calendario/calendario";

const EventoDetalhes = ({ evento }) => {
  const isFree = evento.free === 1;
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    // Se o evento já tiver uma data, inicialize o selectedDate com a data do evento
    if (evento?.date) {
      const localDate = DateTime.fromISO(evento.date) // Converte a data para o formato ISO
        .setZone("America/Sao_Paulo") // Define o fuso horário
        .toJSDate();  // Converte para objeto Date
      setSelectedDate(localDate);
    }
  }, [evento]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const formatDate = (date) => {
    const start = DateTime.fromJSDate(date);
    const end = start.plus({ hours: 2 });  // Soma 2 horas

    const format = (d) => d.toFormat("yyyyMMdd'T'HHmmss");
    return `${format(start)}/${format(end)}`;
  };


  const mapContainerRef = useRef(null);

  useEffect(() => {
    // Inicializa o mapa quando o componente for montado
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&callback=initMap`;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    window.initMap = () => {
      const map = new window.google.maps.Map(mapContainerRef.current, {
        center: { lat: -23.55052, lng: -46.633308 }, // Padrão São Paulo
        zoom: 14,
      });

      // Adiciona o marcador no mapa com base no endereço
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ address: location }, (results, status) => {
        if (status === "OK") {
          map.setCenter(results[0].geometry.location);
          new window.google.maps.Marker({
            map: map,
            position: results[0].geometry.location,
          });
        } else {
          alert("Não foi possível localizar o endereço.");
        }
      });
    };

    return () => {
      document.body.removeChild(script);
    };
  }, [location]);



  return (
    <div className="min-h-screen relative">
      <div className="w-full flex justify-center">
        <div className="relative w-full bg-secondary opacity-98 px-1 sm:px-6 lg:px-5 lg:py-5 py-1 z-10 overflow-hidden max-w-screen-xl mx-auto">
          <div className="relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-2">
              {/* Imagem do Evento */}
              <div className="w-full ">
                <div className="relative w-full h-64 md:h-96 flex items-end justify-center rounded-lg overflow-hidden">
                  <img
                    src={evento.image}
                    alt={evento.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Detalhes do Evento */}
              <div className="space-y-6">
                <div className="flex items-center justify-center borda p-2">
                  <h1 className="text-xxl text-center font-jaini text-background px-4 whitespace-nowrap">
                    {evento.title}
                  </h1>
                  <div className={`flex items-center mt-2 p-1 ${isFree ? "free" : "pago"}`}>
                    {isFree ? (
                      <Gift className="w-5 h-5 mr-1 icone2" />
                    ) : (
                      <DollarSign className="w-5 h-5 mr-1 icone" />
                    )}
                    <span className="text-base font-jaini whitespace-nowrap">
                      {isFree ? "Evento Gratuito" : "Evento Pago"}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2 text-secondary font-jaini text-xll card-description p-1 max-w-xl shadow-lg">
                  <div className="text-secondary p-0 flex-shrink-0">
                    <Info className="w-4 h-4 text-terciary" />
                  </div>
                  <p className="text-terciary mt-2 text-base text-left break-words whitespace-pre-line overflow-hidden">
                    {evento.description}
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-5 p-4">
              {/* Valor e Programação */}
              <div className="space-y-8">
                <div className="flex-col shadow-inner items-center gap-3 text-secondary font-jaini text-xl bg-gray-100 p-4 rounded-md">
                  <h2 className="text-lg font-jaini text-center mb-4 text-gray-800">
                    Valor do Evento
                  </h2>
                  <div className="flex w-full justify-center items-center gap-2">
                    <DollarSign size={30} className="value" />
                    <div className="bg-gray-200 p-4 rounded-lg flex items-center w-full  gap-2 shadow-inner">
                      <p className="text-xxl value2 text-center w-full">{evento.value}</p>
                    </div>
                  </div>

                </div>

                {/* Programação */}
                <div className="space-y-8">
                  {evento.schedule?.map((periodo, periodoIndex) => (
                    <div key={periodoIndex} className="bg-gray-100 p-4 rounded-md shadow-inner">
                      <h2 className="text-lg font-jaini text-center mb-4 text-gray-800">
                        {periodo.title}
                      </h2>
                      <div className="space-y-4">
                        {periodo.events.map((item, itemIndex) => (
                          <div className="flex w-full justify-center items-center gap-2">
                            <Clock size={30} className="text-gray-800 back-icone " />
                            <div key={itemIndex} className="bg-gray-200 p-2  shadow-inner w-full rounded-lg flex items-center gap-0">

                              <div className="justify-center flex flex-col w-full">
                                <p className="text-xxl text-center font-jaini text-gray-800">{item.time}</p>
                                <p className="text-gray-700 text-center text-base font-jaini">({item.description})</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>


              <div className="space-y-8">

                <div className="flex flex-col items-center p-2 gap-5 rounded-md bg-gray-100">
                <h2 className="text-lg font-jaini text-center  text-gray-800">
                        Data e Endereço
                      </h2>
                  <div className="flex flex-col sm:flex-row gap-2 w-full">
                    <div className="bg-gray-200 shadow-inner text-secondary font-jaini rounded-lg flex sm:w-auto w-full">
                      <CalendarioEvento value={selectedDate} onChange={handleDateChange} />
                    </div>
                    <div className="relative w-full sm:w-1/2 rounded-md overflow-hidden">
                      <iframe
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        style={{ border: 0 }}
                        src={`https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${encodeURIComponent(evento.location)}`}
                        allowFullScreen
                        aria-hidden="false"
                        tabIndex="0"
                      ></iframe>
                    </div>
                  </div>
                  <div className="justify-center flex mb-2">
                    <a
                      href={`https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
                        evento.title
                      )}&dates=${formatDate(selectedDate)}&details=${encodeURIComponent(
                        evento.description
                      )}&location=${encodeURIComponent(evento.location)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-botton text-secondary p-15 py-2 rounded-lg font-jaini text-xl text-center"
                    >
                      Salvar na Agenda 
                    </a>
                  </div>
                </div>




                {/* Bandas */}
                {evento.bands?.length > 0 && (
                  <div className="bg-gray-800 p-6 rounded-md">
                    <h2 className="text-lg font-bold mb-4 text-center text-secondary">
                      Bandas no Evento
                    </h2>
                    <div className="flex flex-col items-center space-y-6">
                      {evento.bands.map((banda, index) => (
                        <div key={index} className="flex items-center gap-6">
                          <img
                            src={banda.image}
                            alt={banda.name}
                            className="w-24 h-24 rounded-full object-cover border-2 border-botton"
                          />
                          <div className="text-left">
                            <p className="font-semibold text-lg text-secondary">{banda.name}</p>
                            <p className="text-gray-400 text-sm">{banda.info}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Patrocinadores */}
            {evento.sponsors?.length > 0 && (
              <div className="w-full mt-20 text-center bg-gray-800 p-6 rounded-md">
                <h2 className="text-xl font-bold mb-6 text-secondary">Patrocinadores</h2>
                <div className="flex flex-wrap justify-center items-center gap-6">
                  {evento.sponsors.map((logo, index) => (
                    <img
                      key={index}
                      src={logo}
                      alt={`Patrocinador ${index}`}
                      className="h-12 md:h-16 object-contain"
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Botão Final */}
            <div className="w-full flex justify-end mt-10">
              <button className="bg-botton text-black px-8 py-4 rounded-lg font-bold shadow-lg hover:bg-[#FFA500] transition">
                Confirmar Presença
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventoDetalhes;
