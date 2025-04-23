import React, { useState } from "react";
import { ChevronRight, MessageCircleQuestion } from "lucide-react";

import "./event-questions.css";

const Questions = ({ evento }) => {
    const [openIndexes, setOpenIndexes] = useState([]);

    const toggleFAQ = (index) => {
        setOpenIndexes((prev) =>
            prev.includes(index)
                ? prev.filter((i) => i !== index)
                : [...prev, index]
        );
    };

    return (
        <div className="flex flex-col items-start justify-center w-full">
            <div className="w-full space-y-3">
                {evento.questions.map((questions, index) => {
                    const isOpen = openIndexes.includes(index);

                    return (
                        <div
                            key={index}
                            onClick={() => toggleFAQ(index)}
                            className={`cursor-pointer rounded-lg bg-white px-5 py-4 shadow-sm transition-all hover:shadow-md ${isOpen ? "bg-gray-50" : "bg-white"
                                }`}
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex items-center justify-center gap-1">
                                    <MessageCircleQuestion size={18} className="text-gray-500" />
                                    <h3 className="text-lg font-jaini text-gray-700">{questions.question}</h3>
                                </div>
                                <ChevronRight
                                    className={`size-5 text-gray-400 transition-transform duration-300 ${isOpen ? "rotate-90 text-gray-600" : ""
                                        }`}
                                />
                            </div>

                            {isOpen && (
                                <div className="mt-3 text-sm text-gray-500 font-jaini leading-relaxed">
                                    {questions.answer}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Questions;
