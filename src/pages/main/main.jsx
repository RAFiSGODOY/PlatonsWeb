import React from 'react';
import './main.css';
import Sobre from '../sections/sobre/sobre';
import Inicial from '../sections/inicial/inicial';


function Main() {
  return (
    <> 
    <div>
       <Inicial/>
      
    </div>
    <div>
       <Sobre />
    </div>
  </>
  );
}

export default Main;
