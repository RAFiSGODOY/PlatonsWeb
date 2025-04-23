import React from 'react';
import Navbar from '../../components/main-page/navbar/navbar.jsx';
import MusicPlayer from '../../components/main-page/music/music';
import SecEvents from '../sections/sec4-events/sec-events.jsx';
import SecSouvenirs from '../sections/sec3-souvenirs/sec-souvenirs.jsx';
import SecInformation from '../sections/sec2-information/sec-information.jsx';
import SecMain from '../sections/sec1-main/sec-main.jsx';

import './main-page.css';



function Main() {
   return (
      <div>
          <Navbar />
          <MusicPlayer />
            <div id="Main">
               <SecMain />
            </div>
            <div id="Information">
               <SecInformation />
            </div>
            <div id="Souvenirs">
               <SecSouvenirs  />
            </div>
            <div id="Events">
               <SecEvents />
            </div>
      </div>
   );
}

export default Main;
