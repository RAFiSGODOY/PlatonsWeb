import { useState } from 'react';
import { getFunctions, httpsCallable } from 'firebase/functions';
import { FaMotorcycle } from 'react-icons/fa';
import { User, Mail, Phone, MapPin, Landmark, MessageCircle } from 'lucide-react';

export default function ParticiparModal({ evento }) {
    const [mostrarModal, setMostrarModal] = useState(false);
    const [presenca, setPresenca] = useState(0);
    const [hover, setHover] = useState(0);
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [mensagem, setMensagem] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const functions = getFunctions();
        const enviarConfirmacaoEvento = httpsCallable(functions, 'enviarConfirmacaoEvento');

        try {
            await enviarConfirmacaoEvento({
                nome,
                email,
                eventoTitle: evento.title,
                dataEvento: evento.date,
                cidade,
                estado,
                presenca,
            });
            alert('E-mail de confirmação enviado!');
            setMostrarModal(false);
        } catch (error) {
            console.error('Erro ao enviar o e-mail:', error);
            alert('Houve um erro ao enviar o e-mail de confirmação.');
        }
    };

    const handleTelefoneChange = (e) => {
        let value = e.target.value.replace(/\D/g, ''); // Removendo tudo que não for número
        value = value.replace(/^(\d{2})(\d)/g, '($1) $2'); // Formatação (XX) XXXXX-XXXX
        value = value.replace(/(\d{5})(\d{1,4})$/, '$1-$2'); // Formatação final
        setTelefone(value); // Atualizando o estado com o valor formatado
    };

    return (
        <>
            {/* Botão flutuante */}
            <div className="py-6 px-8 flex justify-end">
                <button
                    onClick={() => setMostrarModal(true)}
                    className="animate-bounce botao-efeito2 bg-green-600 hover:bg-green-700 text-xl fixed bottom-2 right-2 px-6 py-3 rounded-lg font-jaini shadow-md text-white"
                >
                    Participar do Evento
                </button>
            </div>

            {mostrarModal && (
                <div className="fixed right-0 inset-0 z-50 flex justify-end items-start  bg-black/50 overflow-y-auto pt-0">
                    <div className="bg-secondary text-gray-600 w-full h-auto max-w-3xl p-6 relative border border-green-700">
                        <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none z-0">
                            <img
                                src="/assets/images/logo.png"
                                alt="Logo Moto Clube"
                                className="max-w-[90%] max-h-[90%] object-contain"
                            />
                        </div>
                        <button
                            onClick={() => setMostrarModal(false)}
                            className="absolute top-2 right-3 text-gray-300 hover:text-red-500 text-2xl font-bold cursor-pointer z-10"
                        >
                            &times;
                        </button>
                        <div className=" flex md:flex-row flex-col justify-center  items-center gap-2 z-10">
                            <p className="text-xxxl font-jaini font-bold text-center text-gray-800 uppercase tracking-wider leading-tight">
                                {evento.title}
                            </p>
                        </div>

                        <form className="grid grid-cols-1 gap-6 text-white relative z-10">
                            <div className="space-y-1 mt-2">
                                <div className="mb-5">
                                    <h3 className="text-xl font-jaini text-gray-700">Sobre você</h3>
                                    <p className="text-xs font-jaini text-gray-500">(Preencha seus dados para notificações sobre próximos eventos)</p>
                                </div>

                                {/* Nome */}
                                <div className="relative mb-3">
                                    <User className="absolute left-3 top-4 text-green-400" size={18} />
                                    <input
                                        type="text"
                                        id="nome"
                                        className="pl-10 block px-2.5 pb-2.5 pt-4 w-full text-lg font-jaini text-gray-600 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-500 peer"
                                        placeholder=" "
                                        value={nome}
                                        onChange={(e) => setNome(e.target.value)}
                                    />
                                    <label
                                        htmlFor="nome"
                                        className="absolute text-base text-gray-400 font-jaini duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-secondary px-2 peer-focus:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1"
                                    >
                                        Nome completo
                                    </label>
                                </div>

                                {/* Email */}
                                <div className="relative mb-3">
                                    <Mail className="absolute left-3 top-4 text-green-400" size={18} />
                                    <input
                                        type="email"
                                        id="email"
                                        className="pl-10 block px-2.5 pb-2.5 pt-4 w-full text-lg text-gray-600 font-jaini bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-500 peer"
                                        placeholder=" "
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <label
                                        htmlFor="email"
                                        className="absolute text-base font-jaini text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-secondary px-2 peer-focus:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1"
                                    >
                                        Email
                                    </label>
                                </div>

                                {/* Telefone */}
                                <div className="relative mb-3">
                                    <Phone className="absolute left-3 top-4 text-green-400" size={18} />
                                    <input
                                        type="tel"
                                        id="telefone"
                                        className="pl-10 block px-2.5 pb-2.5 pt-4 w-full text-lg text-gray-600 font-jaini bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-500 peer"
                                        placeholder=" "
                                        value={telefone}
                                        onChange={handleTelefoneChange}
                                    />
                                    <label
                                        htmlFor="telefone"
                                        className="absolute text-base font-jaini text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-secondary px-2 peer-focus:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1"
                                    >
                                        WhatsApp ou Telefone
                                    </label>
                                </div>

                                {/* Data de Nascimento */}
                                <div className="relative">
                                    <input
                                        type="date"
                                        id="data-nascimento"
                                        className="block px-3 pb-2.5 pt-4 w-full text-lg text-gray-600 font-jaini bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-500 peer"
                                        placeholder=" "
                                        value={dataNascimento}
                                        onChange={(e) => setDataNascimento(e.target.value)}
                                    />
                                    <label
                                        htmlFor="data-nascimento"
                                        className="absolute text-base font-jaini text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-secondary px-2 peer-focus:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1"
                                    >
                                        Data de nascimento
                                    </label>
                                </div>
                            </div>


                            <div className="space-y-1 mt-2">
                                <div className="mb-5">
                                    <h3 className="text-xl font-jaini text-gray-700">Até onde nosso Evento chegou?</h3>
                                    <p className="text-xs font-jaini text-gray-500">(Preencha com a Cidade e o Estado em que reside.)</p>
                                </div>
                                <div className="relative mb-3">
                                    <MapPin className="absolute left-3 top-4 text-green-400" size={18} />
                                    <input
                                        type="text"
                                        id="cidade"
                                        className="pl-10 block px-2.5 pb-2.5 pt-4 w-full text-lg text-gray-600 font-jaini bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-500 peer"
                                        placeholder=" "
                                        value={cidade}
                                        onChange={(e) => setCidade(e.target.value)}
                                    />
                                    <label
                                        htmlFor="cidade"
                                        className="absolute text-base font-jaini text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-secondary px-2 peer-focus:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1"
                                    >
                                        Cidade
                                    </label>
                                </div>
                                <div className="relative mb-3">
                                    <Landmark className="absolute left-3 top-4 text-green-400" size={18} />
                                    <input
                                        type="text"
                                        id="estado"
                                        className="pl-10 block px-2.5 pb-2.5 pt-4 w-full text-lg text-gray-600 font-jaini bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-500 peer"
                                        placeholder=" "
                                        value={estado}
                                        onChange={(e) => setEstado(e.target.value)}
                                    />
                                    <label
                                        htmlFor="estado"
                                        className="absolute text-base font-jaini text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-secondary px-2 peer-focus:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1"
                                    >
                                        Estado (UF)
                                    </label>
                                </div>
                            </div>


                            <div className="space-y-1">
                                <div className="mb-5">
                                    <h3 className="text-xl font-jaini text-gray-700">Estimativa para Comparecer ao Evento:</h3>
                                    <p className="text-xs font-jaini text-gray-500">(De 0 à 10 motos, diga a chance de sua presença em nosso evento)</p>
                                </div>
                                <div className="flex gap-1">
                                    {[...Array(10)].map((_, i) => {
                                        const rating = i + 1;
                                        return (
                                            <button
                                                key={rating}
                                                type="button"
                                                onClick={() => setPresenca(rating)}
                                                onMouseEnter={() => setHover(rating)}
                                                onMouseLeave={() => setHover(presenca)}
                                                className="text-2xl transition duration-200 cursor-pointer"
                                            >
                                                <FaMotorcycle
                                                    className={
                                                        rating <= (hover || presenca)
                                                            ? "text-green-400"
                                                            : "text-gray-500"
                                                    }
                                                />
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            <div className="space-y-1 mt-2">
                                <div className="mb-5">
                                    <h3 className="text-xl font-jaini text-gray-700">Alguma dúvida ou Sugestão?</h3>
                                    <p className="text-xs font-jaini text-gray-500">(Responderemos o mais rápido possivel)</p>
                                </div>
                                <div className="relative">
                                    <MessageCircle className="absolute left-3 top-4 text-green-400" size={18} />
                                    <textarea
                                        id="mensagem"
                                        className="pl-10 block w-full px-2.5 pt-4 pb-2.5 text-lg text-gray-600 font-jaini bg-transparent rounded-lg border border-gray-300 focus:outline-none focus:ring-0 focus:border-green-500 resize-none h-32 peer"
                                        placeholder=" "
                                        value={mensagem}
                                        onChange={(e) => setMensagem(e.target.value)}
                                    ></textarea>
                                    <label
                                        htmlFor="mensagem"
                                        className="absolute text-base font-jaini text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-secondary px-2 peer-focus:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-6 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1"
                                    >
                                        Mensagem
                                    </label>
                                </div>
                            </div>

                            <div className="flex flex-col justify-start gap-3 mt-4">
                                <div className="flex items-center">
                                    <input
                                        id="checkbox-novos-eventos"
                                        type="checkbox"
                                        className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-green-500 focus:ring-2 cursor-pointer"
                                    />
                                    <label htmlFor="checkbox-novos-eventos" className="ms-2 text-sm font-jaini text-gray-600">
                                        Aceito receber notificações sobre novos eventos.
                                    </label>
                                </div>

                                <div className="flex items-center">
                                    <input
                                        id="checkbox-regras"
                                        type="checkbox"
                                        className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-green-500 focus:ring-2 cursor-pointer"
                                    />
                                    <label htmlFor="checkbox-regras" className="ms-2 text-sm font-jaini text-gray-600">
                                        Li e estou de acordo com as Regras do Evento.
                                    </label>
                                </div>

                                <div className="text-xs text-gray-600 font-jaini bg-yellow-50 p-3 rounded-lg border-1 border-yellow-200 tracking-wider">
                                    <strong className="text-red-600">Atenção:</strong> O pagamento é realizado apenas <strong className="text-gray-600 tracking-wider">presencialmente</strong>.
                                    Qualquer cobrança antecipada deve ser confirmada com nosso{" "}
                                    <a
                                        href="https://wa.me/5544998969205"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-600 font-bold underline cursor-pointer"
                                    >
                                        suporte oficial.
                                    </a>
                                </div>


                                <button
                                    type="submit"
                                    onClick={handleSubmit}
                                    className="bg-green-500 cursor-pointer tracking-wider hover:bg-green-700 text-white px-6 py-3 rounded-lg font-jaini text-lg shadow-md transition duration-300"
                                >
                                    Enviar Inscrição
                                </button>
                            </div>

                        </form>

                    </div>
                </div>
            )}
        </>
    );
}
