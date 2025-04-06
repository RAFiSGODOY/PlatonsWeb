import React from 'react';
import './sobre.css';

function Sobre() {
  return (
    <> 
    
<div className="relative flex flex-col justify-center items-center min-h-screen gap-10 px-6 md:px-20 py-16 text-white text-center">
  <div className="bg-gradient-overlay-top"></div>
  <img 
    src="/assets/images/correntes.png" 
    alt="Fundo" 
    className="absolute inset-0 w-full h-full object-cover object-center"
  />
  
  <div className="relative z-10 w-full md:w-3/4">
    <h2 className="text-xxl font-bold mb-10 tracking-widest font-jaini">Sobre</h2>
    
    <div className="mb-20 flex flex-col md:flex-row items-center gap-4">
      <p className="text-xl leading-loose tracking-wider font-jaini text-justify md:w-1/2 self-start">ㅤO Platon’s Moto Clube é uma associação de motociclistas — incluindo motos, triciclos e quadriciclos — sem fins lucrativos, fundada em Peabiru-PR, Brasil. Seu propósito é promover o motociclismo e a liberdade sobre duas rodas, tendo como lema: Coragem, Liberdade e Respeito.</p>
      <img src="/assets/images/peabiru.jpg" alt="Cidade Peabiru-Pr" className="w-full md:w-1/3 rounded-lg self-start" />
    </div>
    
    <div className="mb-20 flex flex-col md:flex-row-reverse items-center gap-4">
      <p className="text-xl leading-loose tracking-wider font-jaini text-justify md:w-1/2 self-start">ㅤFundado por Nicolas Altino (Tino), presidente, e Pedro Luis (Kaffurna), vice-presidente, o Platon’s nasceu do desejo de fazer as coisas à sua própria maneira. Tino não queria apenas se juntar a um moto clube e seguir regras impostas, mas sim criar um espaço onde a liberdade fosse um princípio essencial.</p>
      <img src="/assets/images/tino.png" alt="Fundadores do Platon’s" className="w-full md:w-1/3 rounded-lg self-start" />
    </div>
    
    <div className="mb-20 flex flex-col md:flex-row items-center gap-4">
      <p className="text-xl leading-loose tracking-wider font-jaini text-justify md:w-1/2 self-start">ㅤO brasão do clube é uma caveira com chamas nos olhos e na boca, simbolizando que, mesmo após a morte, o espírito motociclista segue ardendo como uma chama viva, intensa e inextinguível. Ao fundo, dois pistões de motor a combustão reforçam a paixão pela estrada.</p>
      <img src="/assets/images/logo.png" alt="Brasão do Platon’s" className="w-full md:w-1/3 rounded-lg self-start" />
    </div>
    
    <div className="mb-20 flex flex-col md:flex-row-reverse items-center gap-4">
      <p className="text-xl leading-loose tracking-wider font-jaini text-justify md:w-1/2 self-start">ㅤO nome Platon’s é uma homenagem ao grande filósofo grego Aristocles, mais conhecido como Platão. No grego original, seu apelido Plátōn significa “ombros largos”, um reflexo de seu físico imponente. Platão fundou uma academia, onde pensadores se reuniam para treinar tanto a mente quanto o corpo, um conceito que inspira a filosofia do moto clube: força, liberdade e conhecimento.</p>
      <img src="/assets/images/platons.png" alt="Platão" className="w-full md:w-1/3 rounded-lg self-start" />
    </div>
  </div>

  <div className="bg-gradient-overlay-bottom"></div>
</div>

  </>
  );
}

export default Sobre;
