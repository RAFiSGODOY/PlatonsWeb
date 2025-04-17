import React from 'react';
import { BlinkBlur } from 'react-loading-indicators';

function LoadingScreen() {
  return (
    <div className="fixed inset-0 w-screen h-screen bg-black flex items-center justify-center z-50 opacity-70">
      <BlinkBlur
        color="#dbdbdb"
        size="small"
        text=""
      />
    </div>
  );
}

export default LoadingScreen;
