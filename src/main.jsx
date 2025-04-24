import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import RouterPages from './pages/Router.jsx';
import ScrollToTop from './components/scrolltotop.jsx';
import './styles/theme.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <ScrollToTop />
      <RouterPages />
    </Router>
  </StrictMode>
);
