import { useNavigate } from 'react-router-dom';
import './recordacoes.css';
import RecordacoesSlider from '../../../components/slides/recodacoesslider';

function Recordacoes() {
  const navigate = useNavigate();

  return ( <>
    <div className="relative flex flex-col justify-center items-center  px-5 md:px-20 py-20">
      <div className="bg-gradient-overlay-top"></div>
      <img 
        src="/assets/images/correntes.png" 
        alt="Fundo" 
        className="absolute inset-0 w-full h-full object-cover object-center mirrored"
      />
        <h2 className="text-xxl mb-20 mt-20 font-bold tracking-widest text-secondary font-jaini z-20">Recordações</h2>
       <RecordacoesSlider />
       <button 
           className="mt-10 mb-20 px-10 py-3 bg-secondary text-background font-jaini text-sm rounded-lg botao-efeito"
          onClick={(e) => {
          e.preventDefault();
          navigate("/Galeria");
        }}
        >
        Ver Galeria
      </button>


      <div className="bg-gradient-overlay-bottom"></div>
    </div>
    </>
  );
}

export default Recordacoes;
