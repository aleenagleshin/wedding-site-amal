import Image from 'next/image'
import dynamic from 'next/dynamic';

const Countdown = dynamic(() => import('../components/Countdown'), { ssr: false });

import MusicPlayer from '../components/MusicPlayer'
import Link from 'next/link'
import { Great_Vibes, Dancing_Script } from 'next/font/google'
import { Heart, MapPin, Sparkles } from 'lucide-react';

const greatVibes = Great_Vibes({
  weight: '400',
  subsets: ['latin'],
})

const dancingScript = Dancing_Script({
  weight: ['400', '700'],
  subsets: ['latin'],
})

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <section className="container-print text-center">
        <h1 className={`${dancingScript.className}`} style={{ fontSize: '8rem', lineHeight: '1', marginBottom: '0.5rem' }}>
          Amal & Abhirami
        </h1>
        <div className="text-lg mb-8">OCT 19, 2025</div>

        <div className="mb-12">
          <div className="border p-1">
            <Image
              src="/collage-1.jpg"
              alt="wedding collage"
              width={1200}
              height={1000}
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className={`${dancingScript.className}`} style={{ fontSize: '3.5rem', lineHeight: '1.2' }}>
          Join Our Journey
        </div>
      </section>

      {/* Countdown */}
      <Countdown />

      {/* Our Story - Force 2 columns */}
      <section className="container-print">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'stretch' }}>
          {/* Image - smaller, shifted right */}
          <div className="w-full max-w-md border p-2 h-25" style={{ marginLeft: '6rem' }}>
            <Image
              src="/ourstory.jpg"
              alt="our story"
              width={400}
              height={200}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Text */}
          <div className="h-full flex flex-col justify-center">
            <h2
              className="flex items-center gap-2"
              style={{ fontSize: '4.5rem', lineHeight: '1', marginBottom: '1rem' }}
            >
              Our Story
              <span>
                <Heart className="w-6 h-6 text-rose-400 fill-current" />
              </span>
            </h2>
            <p
              className="text-justify"
              style={{
                fontSize: '1.700rem',
                lineHeight: '1.75',
                color: '#374151',
                maxWidth: '30rem'
              }}
            >
              What started in school corridors as friendship has grown into love, and today, into a lifetime bond.
              From laughter to love, from dreams to reality, our story now becomes forever. Bound by love, blessed by family,
              and cherished by destiny — we are tying the knot.
            </p>
          </div>
        </div>
      </section>


      {/* Schedule & Leave a Wish - Force 2 columns */}
      <section className="container-print">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'center' }}>
          <div className="text-center">
            <h2 style={{ fontSize: '4.5rem', lineHeight: '1', marginBottom: '1rem' }}>Schedule</h2>

            {/* Inspirational text */}
            <p
              className="mb-10 font-serif leading-relaxed text-center max-w-2xl mx-auto text-[26px]"
              style={{ color: '#374151' }}
            >
              <span className="inline-flex items-center align-middle">
                <Sparkles className="w-5 h-5 fill-current text-rose-400 mr-2 animate-pulse" />
              </span>
              Like Rama and Sita, may their bond be eternal.
              <br />
              Like Radha and Krishna, may their love be divine
              <span className="inline-flex items-center align-middle">
                <Sparkles className="w-5 h-5 fill-current text-pink-400 ml-2 animate-pulse" />
              </span>
            </p>


            <div className="text-center mb-16">
              {/* Ceremony - Secondary */}
              <div style={{ fontSize: '1.5rem', lineHeight: '1.2', fontWeight: '500', marginBottom: '0.5rem', color: '#6b7280' }}>
                10:30 AM - 11:15 AM
              </div>
              <div style={{ fontSize: '1rem', fontWeight: '500', color: '#9ca3af', marginBottom: '2rem' }}>
                Wedding Ceremony (Muhurtham)
              </div>

              {/* Reception - Main Focus */}
              <div style={{ fontSize: '3rem', lineHeight: '1.2', fontWeight: '700', marginBottom: '0.5rem', color: '#1f2937' }}>
                5:00 PM - 8:00 PM
              </div>
              <div style={{ fontSize: '1.5rem', fontWeight: '700', color: '#059669' }}>
                Wedding Reception
              </div>
            </div>

            {/* Leave a Wish Button - bigger and pushed further down */}
            <div className="flex justify-center mt-10"> {/* slightly less top margin */}
              <Link href="/wish">
                <button className="relative rounded-full bg-gradient-to-r from-rose-400 to-pink-500 
    px-6 py-2 flex items-center gap-3 font-serif font-semibold text-white text-2xl transition-all duration-300 
    ease-in-out shadow-lg backdrop-blur-sm">
                  Leave a Wish
                  <span>
                    <Heart className="w-6 h-6 fill-current" />
                  </span>
                </button>
              </Link>
            </div>

          </div>

          {/* Caricature Image with Play Button */}
          <div className="relative border p-2 mx-auto overflow-hidden" style={{ width: '600px', height: '700px' }}>
            <Image
              src="/caricature.jpg"
              alt="caricature"
              width={600}
              height={800}
              className="object-cover w-full h-full"
            />

            {/* Play button at bottom-left */}
            <div className="absolute bottom-4 left-4">
              <MusicPlayer />
            </div>
          </div>
        </div>
      </section>


      {/* Getting There Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-rose-50/30 overflow-x-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-start">

          {/* Left Side - Map Bigger */}
          <div className="relative group w-full h-[450px] md:h-[550px]">
            <div className="absolute inset-0 bg-gradient-to-r from-rose-200 to-pink-200 rounded-xl blur-sm opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
            <div className="relative bg-white rounded-xl shadow-lg border border-white/50 overflow-hidden h-full">
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3921.517267415244!2d76.1425077!3d10.6168645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7eb34c735c6cf%3A0x4101a13c3c0cc51b!2sMoon%20Light%20Palace%20Auditorium!5e0!3m2!1sen!2sin!4v1758220173140!5m2!1sen!2sin' width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl"
              ></iframe>

            </div>
          </div>

          {/* Right Side - Venue */}
          <div className="flex flex-col justify-start">
            {/* Heading on top of venue */}
            <div className="flex items-center justify-start gap-3 mb-8">

              <h2 className="font-serif text-gray-800" style={{ fontSize: '3.5rem', lineHeight: '1' }}>
                Getting There
              </h2>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/50 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-rose-100 rounded-full">
                  <MapPin className="w-6 h-6 text-rose-500" />
                </div>
                <h3 style={{ fontSize: '2rem', lineHeight: '1.2' }} className="text-gray-800">Venue Details</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 style={{ fontSize: '1.125rem' }} className="text-gray-800 mb-2">Moon Light Palace Auditorium
                  </h4>
                  <p className="text-gray-600 leading-relaxed text-2xl">
                    J49V+2PM, Road, near Vidya Engineering College, Thalakkottukara, Kaiparambu, Kerala 680546
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final full width image with overlay and footer - DESKTOP STYLE */}
      <section className="relative w-full overflow-hidden" style={{ height: '70vh' }}>
        <Image
          src='/final.jpg'
          alt='see you there'
          width={2000}
          height={800}
          className="w-full h-full object-cover"
        />

        {/* Black transparent overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-35"></div>

        {/* Overlay text - DESKTOP STYLE */}
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <h2 className={`${dancingScript.className} text-white font-light drop-shadow-lg mb-4 text-center`}
            style={{ fontSize: '8rem', lineHeight: '1' }}>
            See you there!
          </h2>
        </div>

        {/* Footer - DESKTOP STYLE */}
        <div className="absolute bottom-0 w-full bg-black bg-opacity-90 text-white text-center py-3 font-semibold"
          style={{ fontSize: '2rem', padding: '2rem 0' }}>
          Coded with Love ~ Aleena ♡ Athul
        </div>
      </section>
    </main>
  )
}