import React, { useEffect, useRef, useState } from 'react';
 import { useNavigate } from 'react-router-dom';
 

 const VSLNew = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const vturbPlayerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
 

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
 

  const [currentDate, setCurrentDate] = useState('');
  const [watchingNow, setWatchingNow] = useState(632); // Começa com 632
 

  useEffect(() => {
  // Atualiza a data
  const today = new Date();
  const options: Intl.DateTimeFormatOptions = { month: '2-digit', day: '2-digit', year: 'numeric' };
  setCurrentDate(today.toLocaleDateString('en-US', options));
 

  // Adiciona o script do VTurb (uma vez que o componente é montado)
  if (vturbPlayerRef.current && !document.getElementById('scr_68274b0a4908c922a60339d3')) {
  const script = document.createElement('script');
  script.id = 'scr_68274b0a4908c922a60339d3';
  script.type = 'text/javascript';
  script.async = true;
  script.src = 'https://scripts.converteai.net/33eac275-852b-4b26-bd4f-baff99e69a42/players/68274b0a4908c922a60339d3/player.js';
  document.head.appendChild(script);
  }
 

  // Intervalo para atualizar o contador de espectadores
  const intervalId = setInterval(() => {
  setWatchingNow(prevCount => prevCount + Math.floor(Math.random() * 3) + 1);
  }, 2000);
 

  return () => {
  clearInterval(intervalId);
  };
  }, []);
 

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
 

  return (
  <div className="min-h-screen bg-black flex flex-col items-center px-4 py-8">
  {/* Mensagem no topo */}
  <div style={{ backgroundColor: 'red', color: 'white', textAlign: 'center', padding: '10px', width: 'fit-content', margin: '10px auto', borderRadius: '5px' }}>
  While you’re wasting time doubting, he’s already forgotten you exist. This is your last chance to be the priority in his life — miss it, and you’ll become just another memory he wants to erase.
  </div>
 

  <div className="w-full flex-grow flex flex-col items-center justify-center">
  <div
  ref={containerRef}
  className={`w-full relative ${isMobile ? 'w-screen h-screen' : 'max-w-4xl'}`}
  >
  {/* Container para o player VTurb */}
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
  onClick={handleOverlayClick} // Apenas para tela cheia em mobile
  />
 

  {/* Contador de espectadores */}
  <p className="mt-4 text-lg text-white text-center"><span className="text-red-500">{watchingNow}</span> people watching now...</p>
  </div>
  </div>
 

  {/* Footer */}
  <div className="w-full text-xs text-gray-400 text-center mt-8">
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