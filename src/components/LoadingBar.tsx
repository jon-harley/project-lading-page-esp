import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const LoadingBar = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    setProgress(0);

    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        const newProgress = Math.min(oldProgress + Math.random() * 30, 90);
        return newProgress;
      });
    }, 300);

    const cleanup = setTimeout(() => {
      setProgress(100);
      setTimeout(() => {
        setIsLoading(false);
        setProgress(0);
      }, 200);
    }, 1000);

    return () => {
      clearInterval(timer);
      clearTimeout(cleanup);
    };
  }, [location]);

  if (!isLoading) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="h-1 bg-purple-900">
        <div
          className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default LoadingBar;