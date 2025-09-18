'use client';
import Image from 'next/image'
import { useState } from 'react';
import { Heart } from 'lucide-react';

export default function WishPage() {
  const [name, setName] = useState('');
  const [msg, setMsg] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Use GET method with URL parameters to avoid CORS preflight
      const url = new URL("https://script.google.com/macros/s/AKfycbw15kwGugHWJuTJFd77ks0XmnAyx3UywVxNwok-34fThDD9fNJtSk5Zn8MJJUB51Rcm/exec");
      url.searchParams.append('name', name);
      url.searchParams.append('msg', msg);

      const response = await fetch(url.toString(), {
        method: "GET",
        mode: 'no-cors', // This prevents CORS errors but limits response access
      });

      // Since we're using no-cors, we can't read the response
      // We'll assume success if no error is thrown
      setSubmitted(true);
      setName('');
      setMsg('');
    } catch (err) {
      console.error(err);
      alert("Failed to submit. Please check your internet connection or try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="container-print overflow-x-hidden py-12 px-4 flex flex-col items-center">

      {/* Image at top */}
      <div className="border p-2 max-w-md w-full rounded-xl shadow-md mb-8">
        <Image
          src='/wish_image.jpg'
          alt='wish'
          width={600}
          height={800}
          className='object-cover w-full h-auto rounded-lg'
        />
      </div>

      {/* Wish Section */}
      <div className="w-full max-w-2xl">
        <h2 className="text-4xl font-serif mb-6 text-center text-gray-800">
          Leave a Wish
        </h2>

          {submitted ? (
  <div className="p-20 rounded-3xl border bg-gradient-to-r from-rose-50 to-pink-50 text-center text-gray-800 shadow-lg">
    <div className="text-5xl font-serif fontF-bold mb-4">
      Thanks for your love ❤︎
    </div>
  </div>
) : (
          <form onSubmit={handleSubmit} className="space-y-8">

            {/* Name */}
            <div>
              <label className="block mb-4 text-3xl font-semibold text-gray-800 text-center">
                Name
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-8 border border-rose-300 rounded-3xl text-3xl focus:ring-4 focus:ring-rose-400 focus:border-rose-400 outline-none transition"
                placeholder="Your name"
                required
                disabled={loading}
              />
            </div>

            {/* Message */}
            <div>
              <label className="block mb-4 text-3xl font-semibold text-gray-800 text-center">
                Your Message
              </label>
              <textarea
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                className="w-full p-8 border border-rose-300 rounded-3xl text-3xl focus:ring-4 focus:ring-rose-400 focus:border-rose-400 outline-none transition"
                rows={8}
                placeholder="Share your wish..."
                required
                disabled={loading}
              />
            </div>

            {/* Button */}
            <div className="flex justify-center">
              <button 
                type="submit"
                disabled={loading}
                className="relative rounded-full bg-gradient-to-r from-rose-400 to-pink-500 
                px-12 py-5 flex items-center gap-5 font-serif font-semibold text-white text-3xl transition-all duration-300 
                ease-in-out shadow-lg backdrop-blur-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending...' : 'Share Love'}
                <Heart className="w-8 h-8 fill-current" />
              </button>
            </div>

          </form>
        )}
      </div>
    </main>
  )
}