import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Defina o tempo de exibição do botão/desconto em milissegundos
const BUTTON_AND_DISCOUNT_DELAY_MS = (19 * 60 * 1000) + (26 * 1000); 

const VSLNew = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const vturbPlayerRef = useRef<HTMLDivElement>(null); // Referência para a div do player VTurb
    const navigate = useNavigate();

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    const [currentDate, setCurrentDate] = useState('');
    const [watchingNow, setWatchingNow] = useState(352); // Começa com 352
    const [showCallToAction, setShowCallToAction] = useState(false); // Estado para controlar a exibição do botão e preço

    useEffect(() => {
        // Atualiza a data no topo
        const today = new Date();
        const options: Intl.DateTimeFormatOptions = { month: '2-digit', day: '2-digit', year: 'numeric' };
        setCurrentDate(today.toLocaleDateString('en-US', options));

        // --- Lógica para o player VTurb ---
        // Adiciona o script do VTurb (uma vez que o componente é montado)
        // **NÃO MUDAR A LÓGICA DE INJEÇÃO DO SCRIPT VTURB**
        const playerScriptId = 'scr_68274b0a4908c922a60339d3';
        if (!document.getElementById(playerScriptId)) {
            const script = document.createElement('script');
            script.id = playerScriptId;
            script.type = 'text/javascript';
            script.async = true;
            script.src = 'https://scripts.converteai.net/33eac275-852b-4b26-bd4f-baff99e69a42/players/68274b0a4908c922a60339d3/player.js';
            document.head.appendChild(script);
        }

        // --- Lógica para o contador de espectadores ---
        const intervalId = setInterval(() => {
            setWatchingNow(prevCount => prevCount + Math.floor(Math.random() * 3) + 1);
        }, 2000);

        // --- Lógica para exibir o botão e o desconto após o tempo fixo (19:26) ---
        console.log("Setting call-to-action timer for:", BUTTON_AND_DISCOUNT_DELAY_MS, "ms");
        const callToActionTimer = setTimeout(() => {
            setShowCallToAction(true);
            console.log("Call to action (button & discount) visibility set to TRUE!"); // Confirma que o estado mudou
        }, BUTTON_AND_DISCOUNT_DELAY_MS);

        // Cleanup: remove os timers e intervalos quando o componente é desmontado
        return () => {
            clearInterval(intervalId);
            clearTimeout(callToActionTimer);
        };
    }, []); // Este useEffect roda apenas uma vez (na montagem do componente)

    const enterFullScreen = () => {
        const container = containerRef.current;
        if (!container) return;

        const requestFullScreen =
            container.requestFullscreen ||
            (container as any).webkitRequestFullscreen ||
            (container as any).mozRequestFullScreen ||
            (container as any).msRequestFullscreen;

        if (requestFullScreen) {
            requestFullScreen.call(container);
        }
    };

    const handleOverlayClick = () => {
        if (isMobile) {
            enterFullScreen();
        }
    };

    const handleButtonClick = () => {
        // Lógica para quando o botão é clicado, por exemplo, navegar para o checkout
        navigate('/checkout'); // Altere '/checkout' para a rota desejada
        console.log("Button clicked!");
    };

    return (
        // Removi 'min-h-screen' do div principal para evitar que ele crie espaço excessivo
        // A altura será ditada pelo conteúdo. Se você quer que a página tenha no mínimo 100% da altura da tela,
        // pode adicionar 'h-full' ou 'min-h-screen' no <body> ou no #root do seu index.html.
        <div className="bg-black flex flex-col items-center px-4 py-8">
            {/* Mensagem no topo */}
            <div style={{ backgroundColor: 'red', color: 'white', textAlign: 'center', padding: '10px', width: 'fit-content', margin: '10px auto', borderRadius: '5px' }}>
                This presentation will be taken down on {currentDate}
            </div>

            {/* Container principal para o conteúdo central (player, contador, desconto) */}
            <div className="w-full flex flex-col items-center">
                <div
                    ref={containerRef}
                    className={`w-full relative ${isMobile ? 'max-w-full' : 'max-w-4xl'}`}
                >
                    {/* Container para o player VTurb */}
                    {/* **VOLTOU AO ORIGINAL**: A estrutura do VTurb está EXATAMENTE como você tinha, sem mexer na imagem/backdrop */}
                    <div
                        ref={vturbPlayerRef}
                        dangerouslySetInnerHTML={{
                            __html: `
                            <div id="vid_68274b0a4908c922a60339d3" style="position: relative; width: 100%; padding: 56.25% 0 0;">
                            <img id="thumb_68274b0a4908c922a60339d3" src="https://images.converteai.net/33eac275-852b-4b26-bd4f-baff99e69a42/players/68274b0a4908c922a60339d3/thumbnail.jpg" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; display: block;" alt="thumbnail">
                            <div id="backdrop_68274b0a4908c922a60339d3" style=" -webkit-backdrop-filter: blur(5px); backdrop-filter: blur(5px); position: absolute; top: 0; height: 100%; width: 100%; "></div>
                            </div>
                            `,
                        }}
                        onClick={handleOverlayClick}
                    />

                    {/* Conteúdo que aparece junto com o botão de compra (se showCallToAction for true) */}
                    {showCallToAction && (
                        <div className="w-full flex flex-col items-center mt-4">
                            {/* Título "You will be able to secure your spot" */}
                            <p className="text-white text-lg md:text-xl font-bold mb-4 text-center">
                                You will be able to secure your spot
                            </p>

                            {/* Preço com Desconto */}
                            <div className="text-center animate-pulse mb-8">
                                <p className="text-white text-3xl md:text-4xl font-bold mb-2">
                                    <span className="text-gray-500 line-through text-2xl opacity-75 mr-2">
                                        $47
                                    </span>
                                    <span className="text-green-500">
                                        Only TODAY: $27
                                    </span>
                                </p>
                                <p className="text-red-400 text-sm md:text-base font-semibold">
                                    LIMITED-TIME OFFER. ACT NOW!
                                </p>
                            </div>

                            {/* Botão Principal */}
                            <button
                                onClick={handleButtonClick}
                                className="w-full max-w-sm py-4 px-6 bg-blue-600 text-white font-black text-xl md:text-2xl rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 animate-pulse"
                            >
                                YES, I WANT HIM! DRIVE HIM CRAZY!
                            </button>
                        </div>
                    )}

                    {/* Contador de espectadores (fica abaixo do player, e abaixo do botão se ele aparecer) */}
                    <p className="mt-4 text-lg text-white text-center"><span className="text-red-500">{watchingNow}</span> people watching now...</p>
                </div>
            </div>

            {/* Seção "FEATURED TOPICS" */}
            <div className="w-full max-w-2xl border-2 border-red-500 p-6 mt-12 mb-8 mx-auto">
                <h2 className="text-white text-2xl md:text-3xl font-bold text-center mb-6">FEATURED TOPICS</h2>
                <div className="flex flex-col space-y-4">
                    <p className="text-white text-lg md:text-xl text-center pb-4 border-b border-gray-600">
                        Discover the secret Egyptian seduction ritual that makes any man feel drawn, obsessed, and emotionally dependent on you.
                    </p>
                    <p className="text-white text-lg md:text-xl text-center pb-4 border-b border-gray-600">
                        How thousands of women have used this forgotten method to make even cold and distant men beg for their attention.
                    </p>
                    <p className="text-white text-lg md:text-xl text-center pb-4 border-b border-gray-600">
                        How to activate a mental trigger that makes him see you as the only woman he desires — no matter how many others are around.
                    </p>
                    <p className="text-white text-lg md:text-xl text-center">
                        How to implant a “seed of obsession” in his mind… so he thinks of you all day, every day, without even knowing why.
                    </p>
                </div>
            </div>

            {/* Footer */}
            <div className="w-full text-xs text-gray-400 text-center mt-8 pb-4">
                <p>Copyright 2025 - SOURCE FOUNDRY®</p>
                <p>All rights reserved</p>
                <p className="mt-2">
                    <a href="/terms" className="hover:underline">Terms and conditions</a> ·{' '}
                    <a href="/privacyPolicy" className="hover:underline">Privacy</a>
                </p>
                <p className="mt-3">This site is not affiliated with any advertising platform. Results may vary.</p>
            </div>
        </div>
    );
};

export default VSLNew;