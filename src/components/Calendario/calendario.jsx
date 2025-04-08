import React from "react";
import { Clock, MapPin } from "lucide-react";
import { DateTime } from "luxon";
import "./calendario.css";

const CalendarioEvento = ({ value, location }) => {
  const isValidDate = value instanceof Date && !isNaN(value);

  if (!isValidDate) return null;

  return (
    <div className="flex justify-left items-center gap-4 rounded-xl p-4 box-com-shadow-externa">
      <div className="flex flex-col items-center">
        <p className="text-xxl font-extrabold text-blue-700 font-jaini">
          {DateTime.fromJSDate(value).toFormat("dd")}
        </p>
        <p className="text-base uppercase tracking-wide text-gray-600 font-jaini">
          {DateTime.fromJSDate(value).toFormat("LLL")}
        </p>
      </div>
      <div className="flex flex-col justify-center items-start gap-2">
        <div className="flex items-center gap-2">
          <Clock className="text-blue-700 w-5 h-5" />
          <span className="text-sm text-gray-700 font-jaini">
            Início às {DateTime.fromJSDate(value).toFormat("HH:mm")}h
          </span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="text-blue-700 w-5 h-5" />
          <span className="text-sm text-gray-800 font-jaini">
            {location}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CalendarioEvento;
