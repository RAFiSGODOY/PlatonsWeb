import React from "react";
import { useParams, useNavigate } from "react-router-dom"; 
import "./button.css";

const BotaoVoltar = () => {
  const navigate = useNavigate();

  return (
    <button
        onClick={() => navigate(-1)}
        className=" flex top-1 left-1 botao-efeito text-background py-1 px-5 rounded shadow-lg fixed"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
  );
};

export default BotaoVoltar;
