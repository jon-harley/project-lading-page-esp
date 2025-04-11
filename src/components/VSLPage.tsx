import React, { useEffect, useRef, useState } from 'react';
import Player from '@vimeo/player';
import { Play, Pause } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const VSLPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [player, setPlayer] = useState<any>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [hasEnteredFullscreen, setHasEnteredFullscreen] = useState(false);
  const navigate = useNavigate();

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  useEffect(() => {
    if (iframeRef.current && !player) {
      const vimeoPlayer = new Player(iframeRef.current);
      setPlayer(vimeoPlayer);

      vimeoPlayer.play();

      vimeoPlayer.on('pause', () => setIsPlaying(false));
      vimeoPlayer.on('play', () => setIsPlaying(true));
      vimeoPlayer.on('ended', () => navigate('/quiz'));
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

  const togglePlay = () => {
    if (player) {
      isPlaying ? player.pause() : player.play();
    }
  };

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
    if (isMobile && !hasEnteredFullscreen) {
      enterFullScreen();
      setHasEnteredFullscreen(true);
      return;
    }

    togglePlay();
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4 py-8">
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
            src="https://player.vimeo.com/video/1074102465?h=44b28efb4a&title=0&byline=0&portrait=0&controls=0&playsinline=1"
            className="absolute inset-0 w-full h-full"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          />

          <div
            className="absolute inset-0 z-10"
            onClick={handleOverlayClick}
          />
        </div>
      </div>

      {!isFullscreen && (
        <div className="mt-6 flex justify-center z-10">
          <button
            onClick={togglePlay}
            className="flex items-center gap-2 px-5 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition"
          >
            {isPlaying ? (
              <>
                <Pause className="w-5 h-5" />
                <span>Pausar</span>
              </>
            ) : (
              <>
                <Play className="w-5 h-5" />
                <span>Reproduzir</span>
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default VSLPage;
