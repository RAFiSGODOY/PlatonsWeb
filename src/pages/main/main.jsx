import React from 'react';
import './main.css';
import Sobre from '../sections/sobre/sobre';
import Inicial from '../sections/inicial/inicial';
import Recordacoes from '../sections/recordacoes/recordacoes';
import Eventos from '../sections/eventos/eventos';


function Main() {
  return (
    <> 
    <div>
       <Inicial/>
      
    </div>
    <div>
       <Sobre />
    </div>
    <div>
       <Recordacoes />
    </div>
    <div>
       <Eventos />
    </div>
  </>
  );
}

export default Main;
