import React from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { DateTime } from "luxon";  // Importa o Luxon

const CalendarioEvento = ({ value, onChange }) => {
  const isValidDate = value instanceof Date && !isNaN(value);

  // Função para desabilitar o dia de hoje usando Luxon
  const modifiers = {
    today: (date) => DateTime.fromJSDate(date).hasSame(DateTime.local(), 'day'), // Verifica se a data é hoje
  };

  // Estilizando a data selecionada com a propriedade classNames
  const classNames = {
    selected: "bg-blue-500 text-white",  // Define o fundo azul e texto branco para o dia selecionado
    today: "bg-yellow-200",  // Cor de fundo para o dia de hoje
  };

  // Define o mês inicial para o calendário baseado na data do evento (value)
  const defaultMonth = isValidDate ? DateTime.fromJSDate(value).toJSDate() : new Date(); 

  return (
    <div className="p-2">
      <DayPicker
        mode="single"
        selected={isValidDate ? value : null} 
        onSelect={onChange}
        defaultMonth={defaultMonth}  // Define o mês inicial com base na data do evento
        modifiers={modifiers}  // Passa o modifier para desabilitar o dia de hoje
        classNames={classNames}  // Aplica as classes de estilo personalizadas
        disabled={modifiers.today}  // Desabilitar o dia de hoje
        className="rounded-lg text-gray-800"
      />
    </div>
  );
};

export default CalendarioEvento;
