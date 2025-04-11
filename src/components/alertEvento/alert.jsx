
import {
  ShieldCheck,
  AlertCircle,
  Ban,
  Info,
} from "lucide-react";
import "./alert.css";

const iconMap = {
  importante: <AlertCircle size={18} className="text-yellow-500" />,
  proibido: <Ban size={18} className="text-red-500" />,
  permitido: <ShieldCheck size={18} className="text-botton" />,
  info: <Info size={18} className="text-blue-500" />,
};

const AlertEvento = ({ evento }) => {
  if (!evento?.alert || !Array.isArray(evento.alert)) return null;

  return (
    <div className="mx-auto px-4 py-6 max-w-8xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {evento.alert.map((alert, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-2xl shadow-md p-5 hover:shadow-lg transition-shadow duration-200"
          >
            <div className="flex items-center gap-1 mb-3">
              {iconMap[alert.tipe] || <Info size={18} className="text-gray-400" />}
              <h3 className="text-lg text-gray-700 font-jaini">
                {alert.title}
              </h3>
            </div>
            <p className="text-sm text-gray-400 font-jaini">{alert.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlertEvento;


