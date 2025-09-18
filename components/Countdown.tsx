'use client';
import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

function pad(n: number) {
  return String(n).padStart(2, '0');
}

export default function WeddingCountdown() {
  // Target: Oct 19, 2025 10:30 local time
  const target = new Date(2025, 9, 19, 10, 30, 0).getTime();
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const timer = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(timer);
  }, []);

  const diff = Math.max(0, target - now);
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((diff / (1000 * 60)) % 60);
  const secs = Math.floor((diff / 1000) % 60);

  const timeUnits = [
    { value: days, label: 'Days' },
    { value: hours, label: 'Hours' },
    { value: mins, label: 'Minutes' },
    { value: secs, label: 'Seconds' }
  ];

  return (
    <section className="relative px-4  overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 border border-rose-300 rounded-full"></div>
        <div className="absolute top-20 right-16 w-16 h-16 border border-pink-300 rounded-full"></div>
        <div className="absolute bottom-16 left-20 w-12 h-12 border border-rose-300 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 border border-pink-300 rounded-full"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Heart className="w-6 h-6 text-rose-400 fill-current" />
            <h2 className="text-2xl md:text-3xl font-serif text-gray-700 tracking-wide">
              Counting Down To
            </h2>
            <Heart className="w-6 h-6 text-rose-400 fill-current" />
          </div>
          {/* <h3 className="text-4xl md:text-5xl font-serif text-gray-800 mb-2">
            Our Wedding Day
          </h3> */}
          <p className="text-black-400 text-2xl md:text-2xl font-semibold">
            October 19, 2025
          </p>

        </div>

        {/* Countdown Display */}
        <div className="mb-8">
          <div className="text-5xl md:text-9xl lg:text-7xl font-bold tracking-wider text-gray-800 mb-4 font-mono">
            {pad(days)}:{pad(hours)}:{pad(mins)}:{pad(secs)}
          </div>
          <div className="flex justify-center gap-8 md:gap-12 lg:gap-16 text-sm md:text-base uppercase tracking-widest text-gray-600 font-medium">
            <div>Days</div>
            <div>Hours</div>
            <div>Minutes</div>
            <div>Seconds</div>
          </div>
        </div>

        {/* Romantic message */}
        <div className="mt-6 p-6 bg-white/60 backdrop-blur-sm rounded-lg border border-white/50 max-w-2xl mx-auto">
          <p className="text-gray-900 font-serif text-lg md:text-xl italic leading-relaxed">
            "Every moment brings us closer to forever"
          </p>
          {/* <div className="flex justify-center mt-3">
            <Heart className="w-5 h-5 text-rose-400 fill-current animate-pulse" />
          </div> */}
        </div>

      </div>
    </section>
  );
}