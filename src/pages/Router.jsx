import { Routes, Route } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import PageMain from './main-page/main-page.jsx';
import PageGallery from './platons-gallery/gallery.jsx';
import PageEvents from './all-events/all-event.jsx';
import PageEventDetails from './information-event/information-e.jsx';
import PageLoadingScreen from './loading-page/loading.jsx';

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

  if (loading) return <PageLoadingScreen />;
  return (
    <Routes>
      <Route path="/" element={<PageMain />} />
      <Route path="/Galeria" element={<PageGallery />} />
      <Route path="/Eventos" element={<PageEvents />} />
      <Route path="/Informação-Evento/:id" element={<PageEventDetails />} />
    </Routes>
  );
}

export default RouterPages;
