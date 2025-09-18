'use client';
import { Pause, Play } from 'lucide-react';
import { useRef, useState } from 'react';

export default function MusicPlayer({ src = '/music.mp3' }: { src?: string }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  return (
    <div className="flex items-center gap-4">
      <button onClick={() => {
        if (!audioRef.current) return;
        if (playing) { audioRef.current.pause(); setPlaying(false); }
        else { audioRef.current.play(); setPlaying(true); }
      }} className="p-8 rounded-full text-white border shadow-sm bg-black bg-opacity-50 hover:bg-opacity-70 transition-all">
{playing ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8" />}
      </button>
      <audio ref={audioRef} src={src} loop />
    </div>
  );
}
