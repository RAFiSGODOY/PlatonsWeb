import { useState } from "react";
import {Phone, Mic2, Guitar, Drum, Piano, Music, User, Info, Minus } from "lucide-react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

import "./bands.css";

const BandsCard = ({ banda }) => {
    const [showInfo, setShowInfo] = useState(false);

    const getInstrumentIcon = (cargo) => {
        const cargoLower = cargo.toLowerCase();
        if (cargoLower.includes("vocal")) return <Mic2 size={14} className="text-gray-600" />;
        if (cargoLower.includes("guitarra")) return <Guitar size={14} className="text-gray-600" />;
        if (cargoLower.includes("baixo") || cargoLower.includes("violão")) return <Guitar size={14} className="text-gray-600" />;
        if (cargoLower.includes("bateria")) return <Drum size={14} className="text-gray-600" />;
        if (cargoLower.includes("piano") || cargoLower.includes("teclado")) return <Piano size={14} className="text-gray-600" />;
        return <Music size={14} className="text-gray-600" />;
    };

    return (
        <div className="rounded-lg p-5 flex flex-col bg-white shadow-md hover:shadow-lg transition-shadow duration-300 mt-4">
            {/* Top Section */}
            <div className="flex flex-col md:flex-row md:justify-between w-full">
                <div className="flex items-center gap-4">
                    <img
                        src={banda.image}
                        alt={banda.name}
                        className="w-20 h-20 rounded-md object-cover shadow-sm"
                    />
                    <div>
                        <h2 className="text-lg font-semibold text-gray-800">{banda.name}</h2>
                        {banda.contato && (
                            <div className="flex items-center gap-2 text-gray-500 mt-1">
                                <Phone size={14} className="text-green-500" />
                                <span className="text-sm">{banda.contato}</span>
                                <a
                                    href={`https://wa.me/${banda.contato.replace(/\D/g, "")}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-green-500 hover:text-green-700"
                                >
                                    <FaWhatsapp size={16} />
                                </a>
                                {banda.instagram && (
                                    <a
                                        href={banda.instagram}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-pink-600 hover:text-pink-800"
                                    >
                                        <FaInstagram size={16} />
                                    </a>
                                )}
                            </div>
                        )}
                    </div>
                </div>

                {/* Info Toggle Button */}
                <button
                    onClick={() => setShowInfo(!showInfo)}
                    title="Informações da banda"
                    className="flex items-start justify-end gap-1 text-sm text-gray-600 hover:text-gray-900 transition mt-4 md:mt-0 cursor-pointer"
                >
                    {showInfo ? <Minus size={18} /> : <Info size={18} />}
                </button>
            </div>

            {/* Expanded Info Section */}
            {showInfo && (
                <div className="border-t border-gray-200 mt-4 pt-4">
                    {Array.isArray(banda.info) ? (
                        <ul className="space-y-2">
                            {banda.info.map((integrante, idx) => (
                                <li key={idx} className="flex items-center text-gray-700 text-sm">
                                    <User size={14} className="text-blue-500 mr-2" />
                                    <span className="font-medium">{integrante.nome}</span>
                                    <span className="mx-2 text-gray-400">|</span>
                                    <span className="flex items-center gap-1 text-gray-500">
                                        {getInstrumentIcon(integrante.cargo)}
                                        {integrante.cargo}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-sm text-gray-500">{banda.info}</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default BandsCard;
