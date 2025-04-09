import React from "react";
import { Clock, Sunrise, Sun, Moon } from "lucide-react";
import PropTypes from "prop-types";
import "./periodo.css";

const periodIcons = {
  "Manhã": <Sunrise className="text-yellow-500 w-6 h-6" />,
  "Tarde": <Sun className="text-orange-400 w-6 h-6" />,
  "Noite": <Moon className="text-blue-500 w-6 h-6" />
};

const BlocoPeriodoEvento = ({ schedule }) => {
  return (
    <div className="p-6 rounded-xl  bg-secondary box-com-shadow-interna2">
      {schedule.map((periodo, index) => (
        <div key={index} className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            {periodIcons[periodo.title] || <Clock size={15} className="text-gray-500" />}
            <h3 className=" font-jaini text-lg text-background">{periodo.title}</h3>
          </div>
          <ul className="space-y-2">
            {periodo.events.map((item, idx) => (
              <li key={idx} className="flex gap-2 items-center">
                <Clock size={15} className="text-gray-500" />
                <span className="text-base text-gray-700 font-jaini whitespace-nowrap">
                  {item.time}
                </span>
                <span className="text-sm text-gray-800 font-jaini">
                  -
                </span>
                <span className="text-sm text-gray-600 font-jaini">
                  ({item.description})
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

BlocoPeriodoEvento.propTypes = {
  schedule: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    events: PropTypes.arrayOf(PropTypes.shape({
      time: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    })).isRequired
  })).isRequired
};

export default BlocoPeriodoEvento;
