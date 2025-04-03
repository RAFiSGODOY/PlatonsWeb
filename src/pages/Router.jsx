import { Routes, Route } from 'react-router-dom';
import Main from './main/main';
import Recordacoes from './recordacoes/recordacoes';

function RouterPages() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/Recordações" element={<Recordacoes />} />
    </Routes>
  );
}

export default RouterPages;
