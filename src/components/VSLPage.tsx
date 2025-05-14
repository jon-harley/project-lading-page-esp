import React, { useEffect, useRef, useState } from 'react';
import Player from '@vimeo/player';
import { useNavigate } from 'react-router-dom';

const VSLPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [player, setPlayer] = useState<any>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [hasEnteredFullscreen, setHasEnteredFullscreen] = useState(false);
  const [showNextButton, setShowNextButton] = useState(false);
  const [watchingNow, setWatchingNow] = useState(0);
  const navigate = useNavigate();

  const nextPageRoute = 'https://app.smarttalknow-chat.shop/isadora-predictions';
  const targetTime = 4 * 60 + 55; // 4 minutos e 55 segundos em segundos
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  useEffect(() => {
    if (iframeRef.current && !player) {
      const vimeoPlayer = new Player(iframeRef.current);
      setPlayer(vimeoPlayer);

      vimeoPlayer.play();

      vimeoPlayer.on('pause', () => setIsPlaying(false));
      vimeoPlayer.on('play', () => setIsPlaying(true));
      vimeoPlayer.on('ended', () => navigate('/quiz'));

      vimeoPlayer.on('timeupdate', (data: { seconds: number }) => {
        if (Math.floor(data.seconds) === targetTime) {
          setShowNextButton(true);
          setIsPlaying(true);
        }
      });

      // Gera um número aleatório de espectadores em torno de 400
      setWatchingNow(Math.floor(Math.random() * 50) + 350); // Entre 350 e 399 (exemplo)
    }

    const handleFullscreenChange = () => {
      const fullscreenElement =
        document.fullscreenElement ||
        (document as any).webkitFullscreenElement ||
        (document as any).mozFullScreenElement ||
        (document as any).msFullscreenElement;

      setIsFullscreen(!!fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, [player, navigate]);

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
    if (player) {
      player.getCurrentTime().then((currentTime: number) => {
        if (currentTime >= targetTime && showNextButton) {
          return; // Não permite pausar/reproduzir após o tempo alvo
        }
        isPlaying ? player.pause() : player.play();
        setIsPlaying(!isPlaying);
      });
    }
    if (isMobile && !hasEnteredFullscreen) {
      enterFullScreen();
      setHasEnteredFullscreen(true);
      return;
    }
  };

  const handleNextButtonClick = () => {
    window.location.href = nextPageRoute;
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center px-4 py-8">
      <div className="w-full flex-grow flex flex-col items-center justify-center">
        <div
          ref={containerRef}
          className={`w-full relative ${isFullscreen ? 'w-screen h-screen' : 'max-w-4xl'}`}
        >
          <div
            className={`relative ${
              isFullscreen
                ? 'w-full h-full'
                : isMobile
                ? 'h-[70vh]'
                : 'pt-[56.25%]'
            }`}
          >
            <iframe
              ref={iframeRef}
              title="vimeo-player"
              src="https://player.vimeo.com/video/1084115175?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;controls=0&amp;sidedock=0"
              className="absolute inset-0 w-full h-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              allowFullScreen
            />

            <div
              className="absolute inset-0 z-10 cursor-pointer"
              onClick={handleOverlayClick}
            />
          </div>
        </div>

        <p className="mt-4 text-lg text-white text-center">{watchingNow} people watching now...</p>

        {!isFullscreen && showNextButton && (
          <div className="mt-6 flex justify-center z-10">
            <button
              onClick={handleNextButtonClick}
              className="px-8 py-4 bg-green-500 text-white rounded-full hover:bg-green-600 transition"
            >
              Reveal My Destiny Now
            </button>
          </div>
        )}
      </div>

      <div className="w-full text-xs text-gray-400 text-center mt-8">
        <p>Copyright 2025 - Luz del Amor®</p>
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

export default VSLPage;