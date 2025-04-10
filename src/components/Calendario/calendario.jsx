import React from "react";
import { Clock, MapPinned } from "lucide-react";
import { DateTime } from "luxon";
import "./calendario.css";

const CalendarioEvento = ({ value, location }) => {
  const isValidDate = value instanceof Date && !isNaN(value);
  if (!isValidDate) return null;

  const data = DateTime.fromJSDate(value);

  return (
    <div className="flex flex-col md:mt-0 mt-4 sm:flex-row items-center justify-start gap-4 px-1 text-center sm:text-left">
      {/* Data (dia e mês) */}
      <div className="flex md:flex-col gap-x-2 items-center leading-none">
        <p className="text-title-e font-extrabold text-blue-700 font-jaini">
          {data.toFormat("dd")}
        </p>
        <span className="text-xxl tracking-wider text-gray-500 font-jaini">
          {data.toFormat("LLL").toUpperCase()}
        </span>
      </div>

      {/* Informações do evento */}
      <div className="flex flex-col items-start justify-start gap-1">
        <div className="flex items-center gap-2">
          <Clock size={15} className="text-blue-700" />
          <span className="text-sm text-gray-400 font-jaini">
            Início às {data.toFormat("HH:mm")}h
          </span>
        </div>
        <div className="flex gap-2 text-center items-center">
          <MapPinned size={15} className="text-blue-700" />
          <span className="text-sm text-gray-400 font-jaini ">{location}</span>
        </div>
      </div>
    </div>
  );
};

export default CalendarioEvento;
