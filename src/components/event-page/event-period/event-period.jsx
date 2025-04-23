import React from "react";
import { Clock, Sunrise, Sun, Moon, Info } from "lucide-react";
import PropTypes from "prop-types";

import "./event-period.css"

const periodIcons = {
  "Manhã": <Sunrise size={18} className="text-yellow-400" />,
  "Tarde": <Sun size={18} className="text-orange-400" />,
  "Noite": <Moon size={18} className="text-blue-400" />,
};

const PeriodEventBlock = ({ schedule }) => {
  return (
    <div className="rounded-2xl bg-white  p-6 space-y-10">
      {schedule.map((periodo, index) => (
        <div key={index} className="space-y-4">
          {/* Título do período */}
          <div className="flex items-center gap-2 text-gray-700 ">
            {periodIcons[periodo.title] || (
              <Clock size={18} className="text-gray-400" />
            )}
            <h3 className="text-xl font-medium font-jaini">{periodo.title}</h3>
            <div className="flex-grow border-t border-gray-200 "></div>
          </div>

          {/* Lista de eventos */}
          <ul className="space-y-3">
            {periodo.events.map((item, idx) => (
              <li
                key={idx}
                className="flex items-center gap-4 hover:bg-gray-50  transition rounded-xl p-2"
              >
                <div className="flex items-center gap-2 min-w-[80px]">
                  <Clock size={16} className="text-gray-400" />
                  <span className="text-sm text-gray-700  font-medium">
                    {item.time}
                  </span>
                </div>
                <div className="flex items-center font-jaini gap-1 text-gray-500  text-sm">
                  <Info size={14} />
                  <span>{item.description}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

PeriodEventBlock.propTypes = {
  schedule: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      events: PropTypes.arrayOf(
        PropTypes.shape({
          time: PropTypes.string.isRequired,
          description: PropTypes.string.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
};

export default PeriodEventBlock;
