import { ShieldCheck, AlertCircle, Ban, Info } from "lucide-react";

import "./event-alert.css"

const iconMap = {
  importante: <AlertCircle size={22} className="text-yellow-500" />,
  proibido: <Ban size={22} className="text-red-500" />,
  permitido: <ShieldCheck size={22} className="text-green-500" />,
  info: <Info size={22} className="text-blue-500" />,
};

const EventAlert = ({ evento }) => {
  if (!evento?.alert || !Array.isArray(evento.alert)) return null;

  return (
    <div className="mx-auto mt-8 max-w-5xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {evento.alert.map((alert, index) => (
          <div
            key={index}
            className="bg-white  rounded-2xl border border-gray-200  p-6 transition transform hover:shadow-md hover:-translate-y-1"
          >
            <div className="flex items-center gap-3 mb-3">
              {iconMap[alert.tipe] || (
                <Info size={22} className="text-gray-400" />
              )}
              <h3 className="text-xl text-gray-700  font-jaini">
                {alert.title}
              </h3>
            </div>
            <p className="text-sm text-gray-500 font-jaini leading-relaxed">
              {alert.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventAlert;
