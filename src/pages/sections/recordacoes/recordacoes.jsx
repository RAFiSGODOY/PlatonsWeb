import { useNavigate } from 'react-router-dom';
import './recordacoes.css';
import RecordacoesSlider from '../../../components/slides/recodacoesslider';

function Recordacoes() {
  const navigate = useNavigate();

  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen px-6 md:px-20 py-16">
      <div className="bg-gradient-overlay-top"></div>
      <img 
        src="/assets/images/correntes.png" 
        alt="Fundo" 
        className="absolute inset-0 w-full h-full object-cover object-center mirrored"
      />
        <h2 className="text-xxl mt-20 mb-10 font-bold tracking-widest font-jaini">Recordações</h2>
       <RecordacoesSlider />
       <button 
           className="mt-10 mb-20 px-6 py-3 bg-secondary text-background font-jaini text-sm rounded-lg botao-efeito"
          onClick={(e) => {
          e.preventDefault();
          navigate("/Recordações");
        }}
        >
        Mais Recordações
      </button>


      <div className="bg-gradient-overlay-bottom"></div>
    </div>
  );
}

export default Recordacoes;
