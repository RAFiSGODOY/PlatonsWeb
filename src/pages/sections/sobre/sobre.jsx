import React from 'react';
import './sobre.css';

function Sobre() {
  return (
    <> 
    
<div className="relative flex flex-col md:flex-row justify-center items-center min-h-screen gap-10 px-6 md:px-20 py-16">
 <div className="bg-gradient-overlay-top"></div>
  <img 
    src="/assets/images/correntes.png" 
    alt="Fundo" 
    className="absolute inset-0 w-full h-full object-cover object-center"
  />
  <div className="relative z-10 w-full md:w-1/2 text-white text-center px-6">
    <h2 className="text-xxl font-bold mb-4 tracking-widest font-jaini">Sobre </h2>
    <p className="text-xll leading-loose tracking-wider font-jaini text-center">
    Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
    </p>
  </div>


  <div className="relative z-10 w-full md:w-1/2 flex flex-col items-center gap-6">
    <div className="image-container">
      <img 
        src="/assets/images/sobre.png" 
        alt="História" 
        className="image01"
      />
    </div>
  </div>
  <div className="bg-gradient-overlay-bottom"></div>
</div>


  </>
  );
}

export default Sobre;
