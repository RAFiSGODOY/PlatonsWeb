import { useState } from "react";
import {
    Plus,
    Minus,
    Phone,
    Mic2,
    Guitar,
    Drum,
    Piano,
    Music,
    User,
    Info,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import "./banda.css";

const BandaCard = ({ banda }) => {
    const [showInfo, setShowInfo] = useState(false);

    const getInstrumentIcon = (cargo) => {
        const lower = cargo.toLowerCase();
        if (lower.includes("vocal")) return <Mic2 size={16} className="text-gray-500" />;
        if (lower.includes("guitarra")) return <Guitar size={16} className="text-gray-500" />;
        if (lower.includes("baixo") || lower.includes("violão")) return <Guitar size={16} className="text-gray-500" />;
        if (lower.includes("bateria")) return <Drum size={16} className="text-gray-500" />;
        if (lower.includes("piano") || lower.includes("teclado")) return <Piano size={16} className="text-gray-500" />;
        return <Music size={16} />;
    };

    return (
        <div className="bg-white  p-4 flex flex-col ">
            <div className="flex flex-col md:flex-row md:justify-between w-full p-2 rounded-lg ">
                <div className="flex flex-col sm:flex-row items-center gap-4 ">
                    <img
                        src={banda.image}
                        alt={banda.name}
                        className="w-24 h-24 rounded-sm object-cover shrink-0"
                    />

                    <div className="text-center sm:text-left">
                        <p className="font-jaini text-gray-700 text-xll">{banda.name}</p>
                        {banda.contato && (
                            <div className="text-gray-600 mt-1 flex items-center gap-2 justify-center sm:justify-start">
                                <Phone size={14} className="text-green-500" />
                                <span className="text-xs">{banda.contato}</span>
                                <a
                                    href={`https://wa.me/${banda.contato.replace(/\D/g, "")}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="Conversar no WhatsApp"
                                    className="text-green-500 hover:text-green-800 transition"
                                >
                                    <FaWhatsapp size={16} />
                                </a>
                                {banda.instagram && (
                                    <a
                                        href={banda.instagram}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        title="Ver Instagram da banda"
                                        className="text-pink-600 hover:text-pink-800 transition"
                                    >
                                        <FaInstagram size={16} />
                                    </a>
                                )}

                            </div>
                        )}
                    </div>
                </div>
                <div className="flex justify-end mt-4 md:mt-0">
                    <button
                        onClick={() => setShowInfo(!showInfo)}
                        className="font-jaini gap-1 bg-gray-400 flex w-full md:w-auto justify-center md:justify-end px-1 py-1 rounded-sm text-base hover:bg-gray-500 transition items-center text-secondary btt"
                    >
                        {showInfo ? <Minus size={16} /> : <Info size={16} />}
                        <span className="md:hidden">
                            {showInfo ? "Ocultar" : "Informações"}
                        </span>
                    </button>
                </div>

            </div>
            {showInfo && Array.isArray(banda.info) && (
                <div className="border-t pt-4">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                        {banda.info.map((integrante, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                                <span className="flex items-center gap-1 text-gray-700 font-jaini">
                                    <User size={14} className=" text-blue-600" /> {integrante.nome}
                                </span>
                                <span className="flex items-center gap-1 text-sm text-gray-500 font-jaini whitespace-nowrap">
                                    - {getInstrumentIcon(integrante.cargo)} {integrante.cargo}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            {showInfo && typeof banda.info === "string" && (
                <p className="text-sm text-gray-500 mt-2 border-t pt-4">{banda.info}</p>
            )}
        </div>
    );
};

export default BandaCard;
