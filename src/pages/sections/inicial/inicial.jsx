import React from 'react';
import './inicial.css';

function Inicial() {
  return (
    <> 
      <div className="relative w-full h-screen bg-background">
        <img 
          src="/assets/images/header.png" 
          alt="Fundo" 
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: 'center' }}  
        />
      
        
        <div className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-white z-10 text-center">
          <img 
            src="/assets/images/logo.png" 
            alt="Logo" 
            className="w-[15rem] min-w-[10rem] max-w-full mx-auto" 
          />
          <p className=" font-jaini" style={{ fontSize: "var(--font-xll)" }}>
            QUEIMANDO O ASFALTO, LIBERTANDO ALMAS
          </p>
          
        </div>
        <div className="absolute bottom-15 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-11 text-center">
          <p className="text-base sm:text-sm md:text-lg lg:text-xl font-jaini text-primary max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl">
            Moto Clube - Peabiru-PR<br/>Since 2024
          </p>
        </div>
        <div className="cloud">
          <img src="https://demos.creative-tim.com/paper-kit-react/static/media/clouds.3c700c13.png" alt="Neblina" className="img_cloud"/>
        </div>
      </div>
      <div className="bg-gradient-overlay-bottom"></div>
    </>
  );
}

export default Inicial;
