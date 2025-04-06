import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import RouterPages from './pages/Router';
import ScrollToTop from './components/scrolltotop';
import './styles/theme.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Router>
        <ScrollToTop />
        <RouterPages />
      </Router>
  </StrictMode>
);
