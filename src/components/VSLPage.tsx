import React, { useEffect, useRef, useState } from 'react';
import Player from '@vimeo/player';
import { Play, Pause, Maximize2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const VSLPage = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [player, setPlayer] = useState<any>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (iframeRef.current && !player) {
      const vimeoPlayer = new Player(iframeRef.current);
      setPlayer(vimeoPlayer);

      vimeoPlayer.play();

      vimeoPlayer.on('pause', () => setIsPlaying(false));
      vimeoPlayer.on('play', () => setIsPlaying(true));
      vimeoPlayer.on('ended', () => navigate('/quiz'));
    }
  }, [player, navigate]);

  const togglePlay = () => {
    if (player) {
      isPlaying ? player.pause() : player.play();
    }
  };

  const enterFullScreen = () => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const requestFullScreen =
      iframe.requestFullscreen ||
      (iframe as any).webkitRequestFullscreen ||
      (iframe as any).mozRequestFullScreen ||
      (iframe as any).msRequestFullscreen;

    if (requestFullScreen) {
      requestFullScreen.call(iframe);
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4 py-8">
      {/* Container do vídeo */}
      <div className="w-full max-w-4xl relative">
        <div className="relative pt-[56.25%]">
          <iframe
            ref={iframeRef}
            title="vimeo-player"
            src="https://player.vimeo.com/video/1074102465?h=44b28efb4a&title=0&byline=0&portrait=0&controls=0&playsinline=1"
            className="absolute inset-0 w-full h-full"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          />
        </div>
      </div>

      {/* Controles abaixo do vídeo */}
      <div className="mt-6 flex gap-4 justify-center">
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

        <button
          onClick={enterFullScreen}
          className="flex items-center gap-2 px-5 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition"
        >
          <Maximize2 className="w-5 h-5" />
          <span>Tela cheia</span>
        </button>
      </div>
    </div>
  );
};

export default VSLPage;