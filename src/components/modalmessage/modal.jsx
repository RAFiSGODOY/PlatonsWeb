import { useState, useEffect } from "react";
import { CheckCircle, X, AlertTriangle } from "lucide-react";
import "./modal.css";

export default function ToastAviso({ mensagem, mostrar, onClose, tipo = "positivo" }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval;

    if (mostrar) {
      setProgress(0);
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            onClose();
            return 0;
          }
          return prev + 1;
        });
      }, 20);
    }

    return () => clearInterval(interval);
  }, [mostrar, onClose]);

  if (!mostrar) return null;

  const isPositivo = tipo === "positivo";

  const borderColor = isPositivo ? "border-green-500" : "border-red-500";
  const bgColor = isPositivo ? "bg-green-100" : "bg-red-100";
  const iconColor = isPositivo ? "stroke-green-500" : "stroke-red-500";
  const textColor = isPositivo ? "text-gray-700" : "text-gray-700";
  const progressBarColor = isPositivo ? "bg-green-500" : "bg-red-500";
  const Icon = isPositivo ? CheckCircle : AlertTriangle;

  return (
    <div className="fixed top-1 right-1 w-[50%] max-w-xs mx-auto sm:right-2 sm:mx-0 z-50">
      <div className={`flex items-start gap-3 border-l-4 ${borderColor} ${bgColor} p-2 shadow-lg text-black`}>
        <Icon className={`w-5 h-5 mt-0.5 flex-none ${iconColor}`} />
        <div className="flex-1">
          <div className="flex justify-between items-start gap-2">
            <p className={`text-base font-jaini ${textColor}`}>
              {mensagem || (isPositivo ? "Ação concluída com sucesso." : "Algo deu errado.")}
            </p>
            <button
              onClick={onClose}
              className={`${textColor} hover:brightness-125 rounded p-1`}
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="h-1 sm:h-1.5 md:h-2  bg-white mt-3 rounded overflow-hidden">
            <div
              className={`h-full transition-all duration-75 origin-left ${progressBarColor}`}
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
