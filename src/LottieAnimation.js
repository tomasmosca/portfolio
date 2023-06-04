/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
import React, { useEffect, useRef } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

function LottieAnimation({ width = '100%', height = '100%', data }) {
  const playerRef = useRef();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (playerRef.current) {
        playerRef.current.play();
      }
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return <Player ref={playerRef} src={data} loop style={{ width, height }} />;
}

export default LottieAnimation;
