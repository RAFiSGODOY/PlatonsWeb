import { Info, AlertTriangle } from "lucide-react";
import "./alert.css";


const AlertaEvento = ({ evento }) => {
  if (!evento?.alert || !Array.isArray(evento.alert)) return null;

  return (
    <div className="m-4">
      <div className="flex items-center gap-2 justify-center w-full">
        <AlertTriangle size={20} className="text-botton" />
        <h2 className="text-xll text-center text-gray-700 font-jaini">
          Pontos de Atenção
        </h2>
      </div>
      <div className=" py-2 px-4 flex flex-wrap gap-4 justify-center">
        {evento.alert.map((alert, index) => (
          <div
            key={index}
            className="bg-white border-t-2 border-orange-400 shadow-sm p-4 w-full sm:w-96 "
          >
            <div className="flex items-center gap-2 mb-2 justify-start">
              <Info size={15} className="text-orange-500" />
              <h3 className="font-semibold font-jaini  text-center text-orange-700">{alert.title}</h3>
            </div>
            <p className="text-sm text-gray-600 mb-1 font-jaini">{alert.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlertaEvento;
