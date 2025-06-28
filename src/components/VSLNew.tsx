import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CommentsSection from './CommentsSection';

const VSLNew = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const vturbPlayerRef = useRef<HTMLDivElement>(null); // Referência para a div do player VTurb
    const navigate = useNavigate();

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    const [currentDate, setCurrentDate] = useState('');
    const [watchingNow, setWatchingNow] = useState(352); // Começa com 352

    useEffect(() => {
        // Atualiza a data no topo
        const today = new Date();
        // A data atual é 25/05/2025. O requisito é que o vídeo esteja disponível "apenas até" 24/05/2025.
        // Vou manter a data como está no seu código original para 'currentDate'
        // Mas o texto da mensagem no topo refere-se a uma data "futura" ou limite.
        // Se a data de disponibilidade for sempre '24/05/2025', podemos fixá-la.
        // Vamos usar 05/24/2025 conforme o texto do seu aviso.
        setCurrentDate("05/24/2025");


        // --- Lógica para o player VTurb ---
        // Adiciona o script do VTurb (uma vez que o componente é montado)
        // **ATENÇÃO: MUDANÇA NO ID E SRC DO SCRIPT PARA O NOVO VTURB**
        const playerScriptId = 'scr_6832912cb8fbd30626a28eda'; // NOVO ID
        if (!document.getElementById(playerScriptId)) {
            const script = document.createElement('script');
            script.id = playerScriptId;
            script.type = 'text/javascript';
            script.async = true;
            script.src = 'https://scripts.converteai.net/33eac275-852b-4b26-bd4f-baff99e69a42/players/6832912cb8fbd30626a28eda/player.js'; // NOVO SRC
            document.head.appendChild(script);
        }

        // --- Lógica para o contador de espectadores ---
        const intervalId = setInterval(() => {
            setWatchingNow(prevCount => prevCount + Math.floor(Math.random() * 3) + 1);
        }, 2000);

        // Cleanup: remove o intervalo quando o componente é desmontado
        return () => {
            clearInterval(intervalId);
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
        // A lógica de full screen em mobile é controlada pelo próprio player do Vturb.
        // Não é necessário um overlay customizado para isso.
        // Se você tiver um overlay que cobre o vídeo e precisa ser clicado para iniciar
        // e entrar em fullscreen, mantenha essa função.
        // Caso contrário, pode removê-la ou deixá-la vazia se o Vturb gerencia tudo.
        if (isMobile) {
            // A maioria dos players modernos de VSL lida com isso automaticamente.
            // Se o Vturb não estiver entrando em fullscreen automaticamente no mobile,
            // pode ser necessário interagir com o iframe dele ou com a API do player.
            // Por enquanto, vamos manter a chamada ao enterFullScreen para compatibilidade,
            // mas o ideal é testar como o VTurb se comporta.
            enterFullScreen();
        }
    };

    return (
        <div className="bg-black flex flex-col items-center px-4 py-8">
            {/* Mensagem no topo */}
            <div style={{ backgroundColor: 'red', color: 'white', textAlign: 'center', padding: '10px', width: 'fit-content', margin: '10px auto', borderRadius: '5px' }}>
                Due to the high number of views, this video will only be available until {currentDate}
            </div>

            {/* Container principal para o conteúdo central (player, contador) */}
            <div className="w-full flex flex-col items-center">
                <div
                    ref={containerRef}
                    className={`w-full relative ${isMobile ? 'max-w-full' : 'max-w-4xl'}`}
                >
                    {/* Container para o player VTurb */}
                    {/* ATENÇÃO: TODO O CÓDIGO HTML DO PLAYER FOI SUBSTITUÍDO PELO NOVO */}
                    <div
                        ref={vturbPlayerRef}
                        dangerouslySetInnerHTML={{
                            __html: `
                                <div id="vid_6832912cb8fbd30626a28eda" style="position: relative; width: 100%; padding: 56.25% 0 0;">
                                    <img id="thumb_6832912cb8fbd30626a28eda" src="https://images.converteai.net/33eac275-852b-4b26-bd4f-baff99e69a42/players/6832912cb8fbd30626a28eda/thumbnail.jpg" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; display: block;" alt="thumbnail">
                                    <div id="backdrop_6832912cb8fbd30626a28eda" style=" -webkit-backdrop-filter: blur(5px); backdrop-filter: blur(5px); position: absolute; top: 0; height: 100%; width: 100%; "></div>
                                </div>
                            `,
                        }}
                        onClick={handleOverlayClick}
                    />

                    {/* Contador de espectadores */}
                    <p className="mt-4 text-lg text-white text-center"><span className="text-red-500">{watchingNow}</span> people watching now...</p>
                </div>
            </div>

            {/* Seção "FEATURED TOPICS" - MANTIDO COMENTADO SE VOCÊ QUISER REATIVAR DEPOIS */}
            {/* <div className="w-full max-w-2xl border-2 border-red-500 p-6 mt-12 mb-8 mx-auto">
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
            </div>*/}

            {/* Chamada para o novo componente de Comentários */}
            <CommentsSection />

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