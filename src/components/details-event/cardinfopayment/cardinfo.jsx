// components/FlipCard.jsx
import React from "react";
import { ArrowLeftFromLineIcon, BadgeDollarSignIcon, ArrowRightIcon, ArrowLeftIcon } from "lucide-react";
import "./card.css";

const CardInfoPayment = ({ evento }) => {
    return (
        <div className="card w-64 relative">
            <div className="card__content text-center relative w-full h-full transition-transform duration-1000">

                {/* Frente do card */}
                <div className="card__front absolute top-0 bottom-0 right-0 left-0 p-5 flex flex-col items-center justify-center rounded-xl shadow-lg space-y-4 bg-white">

                    {/* Seta para virar para trás (canto direito superior) */}
                    <ArrowRightIcon size={16} className="text-gray-400 absolute top-2 right-2" />

                    
                    <div className="flex justify-center w-full items-center gap-2  py-1">
                    <div className="flex-grow border-t border-gray-200"></div>
                        <BadgeDollarSignIcon
                            size={20}
                            className={Number(evento.value) === 0 ? "text-yellow-400" : "text-green-400"}
                        />
                        <p className="font-jaini text-gray-600">Valor da Inscrição</p>
                        <div className="flex-grow border-t border-gray-200"></div>
                    </div>

                    {/* Valor da inscrição */}
                    <div className={`flex py-1 w-full justify-center items-center text-center rounded-sm ${Number(evento.value) === 0 ? "bg-yellow-400" : "bg-green-400"}`}>
                        <p className="text-xl font-jaini text-secondary text-center leading-none">
                            R$: {Number(evento.value).toFixed(2)}
                        </p>
                    </div>

                    {/* Texto necessário, se houver */}
                    {typeof evento.necessario === 'string' && evento.necessario.trim() !== "" && (
                        <div className="justify-center items-center text-center text-green-500">
                            <span className="text-sm font-jaini text-gray-500 rounded-xl italic block">
                                + {evento.necessario}
                            </span>
                        </div>
                    )}

                </div>

                {/* Verso do card */}
                <div className="card__back absolute top-0 bottom-0 right-0 left-0 p-5 flex flex-col items-center justify-center rounded-xl shadow-lg space-y-4 bg-white">

                    {/* Seta para voltar para frente (canto esquerdo superior) */}
                    <ArrowLeftIcon size={16} className="text-gray-400 absolute top-2 left-2" />

                    <div className="flex justify-center w-full items-center gap-2 border-b border-gray-300 py-1">
                        <BadgeDollarSignIcon
                            size={20}
                            className={Number(evento.value) === 0 ? "text-yellow-400" : "text-green-400"}
                        />
                        <p className="font-jaini text-gray-600">Formas de Pagamento</p>
                    </div>

                    <div className="flex justify-center items-center gap-2">
                        {(evento?.payment || []).map((item, index) => (
                            <div key={index} className="flex flex-col items-center p-1 rounded-xs">
                                <span className="text-xs font-jaini text-gray-700 text-center mb-1">
                                    {item.name}
                                </span>
                                {item.flags ? (
                                    <div className="flex gap-1">
                                        {item.flags.map((flag) => (
                                            <img
                                                key={flag.id}
                                                src={flag.image}
                                                alt={flag.name}
                                                width={24}
                                                height={18}
                                            />
                                        ))}
                                    </div>
                                ) : (
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        width={24}
                                        height={18}
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CardInfoPayment;
