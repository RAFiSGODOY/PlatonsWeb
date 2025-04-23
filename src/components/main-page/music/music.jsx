import { useState, useEffect, useRef } from "react";
import { Play, Pause, SkipForward, Volume2, VolumeX } from "lucide-react";
import tracks from "../../../data/tracks.json";

import "./music.css"

export default function MusicPlayer() {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const [muted, setMuted] = useState(false);
  const audioRef = useRef(null);

  const currentTrack = tracks[currentTrackIndex];

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      if (isPlaying) {
        audioRef.current.play().catch(() => setIsPlaying(false));
      }
    }
  }, [currentTrackIndex, isPlaying]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const nextTrack = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % tracks.length);
    setIsPlaying(true);
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    const newMuted = !muted;
    audioRef.current.muted = newMuted;
    setMuted(newMuted);
  };

  const changeVolume = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
      if (muted && newVolume > 0) {
        audioRef.current.muted = false;
        setMuted(false);
      }
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 bg-neutral-900 text-white w-80 rounded-2xl shadow-2xl overflow-hidden flex items-center p-4 gap-4">
      <audio
        ref={audioRef}
        src={currentTrack.src}
        onEnded={nextTrack}
        preload="auto"
      />
      <img
        src={currentTrack.cover}
        alt="Capa"
        className="w-16 h-16 rounded-lg object-cover shadow-md"
      />

      <div className="flex-1">
        <div className="font-semibold text-sm">{currentTrack.title}</div>
        <div className="text-xs text-gray-400">{currentTrack.artist}</div>
        <div className="flex items-center gap-3 mt-2">
          <button onClick={togglePlay} className="hover:text-green-400 transition">
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </button>
          <button onClick={nextTrack} className="hover:text-blue-400 transition">
            <SkipForward size={20} />
          </button>
          <button onClick={toggleMute} className="hover:text-red-400 transition">
            {muted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </button>
        </div>
      </div>

      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={changeVolume}
        className="w-16 accent-green-500"
      />
    </div>
  );
}
