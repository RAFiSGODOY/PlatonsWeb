import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX } from 'lucide-react';
import playlist from "../../../data/tracks.json";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);
  const progressRef = useRef(null);

  

  const [currentTrack, setCurrentTrack] = useState(0);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlay = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  const handleProgressClick = (e) => {
    const rect = progressRef.current.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    audioRef.current.currentTime = pos * duration;
  };

  const toggleMute = () => {
    audioRef.current.muted = !audioRef.current.muted;
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
    if (newVolume === 0) {
      setIsMuted(true);
    } else {
      setIsMuted(false);
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="fixed bottom-4 right-4 w-80 bg-slate-800 rounded-lg shadow-xl p-4 backdrop-blur-lg bg-opacity-90 text-white z-50">
      <audio
        ref={audioRef}
        src={playlist[currentTrack].url}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
      />
      <div className="mb-3">
        <div className="text-sm font-semibold truncate">{playlist[currentTrack].title}</div>
        <div className="text-xs text-slate-400 truncate">{playlist[currentTrack].artist}</div>
      </div>
      <div 
        ref={progressRef}
        className="h-1 bg-slate-600 rounded-full mb-3 cursor-pointer"
        onClick={handleProgressClick}
      >
        <div 
          className="h-full bg-blue-500 rounded-full"
          style={{ width: `${(currentTime / duration) * 100}%` }}
        />
      </div>

      <div className="flex justify-between text-xs text-slate-400 mb-3">
        <span>{formatTime(currentTime)}</span>
        <span>{formatTime(duration)}</span>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button 
            className="text-slate-300 hover:text-white transition-colors"
            onClick={() => setCurrentTrack(prev => (prev > 0 ? prev - 1 : playlist.length - 1))}
          >
            <SkipBack size={20} />
          </button>

          <button 
            className="w-10 h-10 flex items-center justify-center bg-blue-500 rounded-full hover:bg-blue-600 transition-colors"
            onClick={togglePlay}
          >
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </button>

          <button 
            className="text-slate-300 hover:text-white transition-colors"
            onClick={() => setCurrentTrack(prev => (prev < playlist.length - 1 ? prev + 1 : 0))}
          >
            <SkipForward size={20} />
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button 
            className="text-slate-300 hover:text-white transition-colors"
            onClick={toggleMute}
          >
            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className="w-20 h-1 bg-slate-600 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white"
          />
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;