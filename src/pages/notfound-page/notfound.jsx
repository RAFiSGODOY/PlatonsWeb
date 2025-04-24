import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, ArrowLeft, Search } from 'lucide-react';
import ParticleBackground from './ParticleBackground';

const NotFound = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    document.title = '404 - Page Not Found';
    
    return () => {
      const defaultTitle = document.querySelector('title[data-default]')?.textContent;
      if (defaultTitle) document.title = defaultTitle;
    };
  }, []);
  
  const goHome = () => {
    navigate('/');
  };
  
  const goBack = () => {
    navigate(-1);
  };
  
  return (
    <div className="relative min-h-screen w-full overflow-hidden flex items-center justify-center bg-black text-white">
      <ParticleBackground /> 
      <div className="container relative z-10 px-4 py-8 mx-auto flex flex-col items-center">
        <div className="relative mb-6">
          <div className="  text-[12rem] md:text-[18rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-black/40 animate-pulse leading-none tracking-tighter">
            404
          </div>
          <div className="absolute top-0 left-0 right-0 bottom-0 text-[12rem] md:text-[18rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-black/40 animate-pulse-delayed leading-none tracking-tighter">
            404
          </div>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 
          animate-fade-in-up animation-delay-300">
          Página não encontrada
        </h1>
        <p className="text-lg md:text-xl text-slate-300 text-center max-w-lg mb-8
          animate-fade-in-up  animation-delay-400">
          A página que você procura desapareceu no vazio digital.
        </p>
        <div className="flex flex-col sm:flex-row gap-4
          animate-fade-in-up  animation-delay-500">
          <button 
            onClick={goHome}
            className=" hover:rotate-2 cursor-pointer px-6 py-3 flex items-center justify-center gap-2 bg-secondary hover:bg-yellow text-black rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <Home size={20} />
            <span>Voltar para o Início</span>
          </button>
          
          <button 
            onClick={goBack}
            className="hover:rotate-4 cursor-pointer px-6 py-3 flex items-center justify-center gap-2 bg-transparent hover:bg-gray-600 text-white border border-gray-600 rounded-lg transition-all duration-300 hover:scale-105"
          >
            <ArrowLeft size={20} />
            <span>Voltar</span>
          </button>
        </div>
       
      </div>
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-white/20 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute top-1/2 -right-32 w-80 h-80 bg-white/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-20 left-1/2 w-72 h-72 bg-white/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
    </div>
  );
};

export default NotFound;