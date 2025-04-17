import { Routes, Route } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import Main from './main/main';
import Galeria from './galeria/galeria.jsx';
import Evento from './eventos/event.jsx';
import EventoDetalhesPage from './details-event/infoevento.jsx';
import LoadingScreen from './loadingscreen/loading.jsx';

function RouterPages() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const images = Object.values(
      import.meta.glob('../assets/imagens/**/*.{jpg,jpeg,png,gif,webp}', { eager: true })
    );
    

    const imagePromises = images.map((mod) =>
      new Promise((resolve) => {
        const img = new Image();
        img.src = mod.default;
        img.onload = resolve;
        img.onerror = resolve;
      })
    );
    

    Promise.all(imagePromises).then(() => {
      setLoading(false);
    });
  }, []);

  if (loading) return <LoadingScreen />;
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
