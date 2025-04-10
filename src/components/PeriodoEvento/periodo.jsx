import React from "react";
import { Clock, Sunrise, Sun, Moon, Info } from "lucide-react";
import PropTypes from "prop-types";
import "./periodo.css";

const periodIcons = {
  "Manhã": <Sunrise size={18} className="text-yellow-500" />,
  "Tarde": <Sun size={18} className="text-orange-400" />,
  "Noite": <Moon size={18} className="text-blue-500" />
};

const BlocoPeriodoEvento = ({ schedule }) => {
  return (
    <div className="py-2 rounded-xl  bg-secondary px-4 ">
      {schedule.map((periodo, index) => (
        <div key={index} className="mb-6">
          <div className="flex items-center justify-center gap-2 mb-2">
            {periodIcons[periodo.title] || <Clock size={10} className="text-gray-500" />}
            <h3 className=" font-jaini text-base text-gray-500">{periodo.title}</h3>
          </div>
          <ul className="space-y-4">
            {periodo.events.map((item, idx) => (
              <div key={idx}>
              <div className="justify-left flex items-center gap-1">
               <Clock size={20} className="text-gray-700" />
               <span className="text-lg text-center w-full p-1 bg-gray-100 rounded-sm text-gray-700 font-jaini whitespace-nowrap">
                  {item.time}
                </span>
               </div>
              <li className="flex items-center justify-center gap-1 mt-1">
                <Info size={12} className="text-gray-400" />
                <span className="text-sm text-gray-400 font-jaini">
                  ({item.description})
                </span>
                
              </li>
              </div>
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
