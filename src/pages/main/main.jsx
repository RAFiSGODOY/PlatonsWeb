import React from 'react';
import './main.css';
import Sobre from '../sections/sobre/sobre';
import Inicial from '../sections/inicial/inicial';
import Recordacoes from '../sections/recordacoes/recordacoes';
import Eventos from '../sections/eventos/eventos';
import PlatonsNavbar from '../../components/header/header';


function Main() {
   return (
      <div>
          <PlatonsNavbar />
            <div>
               <Inicial />

            </div>
            <div id="sobre">
               <Sobre />
            </div>
            <div id="recordacoes">
               <Recordacoes  />
            </div>
            <div id="eventos">
               <Eventos />
            </div>
      </div>
   );
}

export default Main;
