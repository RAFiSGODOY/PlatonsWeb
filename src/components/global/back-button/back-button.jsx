import React from "react";
import { useNavigate } from "react-router-dom"; 
import { MoveLeft } from "lucide-react";

import "./back-button.css";


const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
        onClick={() => navigate(-1)}
        className=" flex top-2 left-2 botao-efeito  py-1 px-5 rounded-lg box-com-shadow-externa fixed"
      >
        <MoveLeft size={20} className="text-jaini text-gray-700"/>
      </button>
  );
};

export default BackButton;
