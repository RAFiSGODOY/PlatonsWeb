import { Routes, Route } from 'react-router-dom';
import Main from './main/main';
import Galeria from './galeria/galeria.jsx';
import Evento from './eventos/event.jsx';
import EventoDetalhesPage from './details-event/infoevento.jsx';

function RouterPages() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/Galeria" element={<Galeria />} />
      <Route path="/Eventos" element={<Evento />} />
      <Route path="/Informação-Evento/:id" element={<EventoDetalhesPage />} />
    </Routes>
  );
}

export default RouterPages;
