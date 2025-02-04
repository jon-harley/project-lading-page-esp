import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(10 * 60); // 10 minutes in seconds

  useEffect(() => {
    if (!timeLeft) return;

    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
      <div className="flex items-center justify-center gap-3 mb-4">
        <Clock className="w-6 h-6 text-red-400 animate-pulse" />
        <h3 className="text-xl font-semibold text-white">¡Oferta por tiempo limitado!</h3>
      </div>
      <div className="flex items-center justify-center gap-4">
        <div className="bg-purple-900/50 px-4 py-2 rounded-lg">
          <span className="text-3xl font-bold text-white">{String(minutes).padStart(2, '0')}</span>
          <span className="text-sm text-purple-300 block">minutos</span>
        </div>
        <span className="text-3xl font-bold text-white">:</span>
        <div className="bg-purple-900/50 px-4 py-2 rounded-lg">
          <span className="text-3xl font-bold text-white">{String(seconds).padStart(2, '0')}</span>
          <span className="text-sm text-purple-300 block">segundos</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;