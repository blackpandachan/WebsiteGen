import React, { useState, useEffect } from 'react';
import { ChevronDown, Music, Calendar, MapPin, Gift, Camera, HelpCircle } from 'lucide-react';

const WeddingWebsite = () => {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const weddingDate = new Date('2025-09-20T15:30:00').getTime();
      const now = new Date().getTime();
      const distance = weddingDate - now;

      setCountdown({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-sage-green text-rust font-serif min-h-screen">
      <header className="bg-cream-white py-8">
        <h1 className="text-4xl font-bold text-center">Helen & Alec</h1>
        <p className="text-xl text-center mt-2">September 20, 2025 • Los Gatos, CA</p>
      </header>

      <nav className="bg-rust text-cream-white py-4">
        <ul className="flex justify-center space-x-6">
          <li><a href="#home" className="hover:underline">Home</a></li>
          <li><a href="#story" className="hover:underline">Our Story</a></li>
          <li><a href="#details" className="hover:underline">Details</a></li>
          <li><a href="#rsvp" className="hover:underline">RSVP</a></li>
          <li><a href="#registry" className="hover:underline">Registry</a></li>
        </ul>
      </nav>

      <main className="container mx-auto px-4 py-8">
        <section id="home" className="mb-16">
          <div className="bg-antique-glass p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-4">Countdown to Our Big Day</h2>
            <div className="grid grid-cols-4 gap-4 text-center">
              <div>
                <span className="text-4xl font-bold">{countdown.days}</span>
                <p>Days</p>
              </div>
              <div>
                <span className="text-4xl font-bold">{countdown.hours}</span>
                <p>Hours</p>
              </div>
              <div>
                <span className="text-4xl font-bold">{countdown.minutes}</span>
                <p>Minutes</p>
              </div>
              <div>
                <span className="text-4xl font-bold">{countdown.seconds}</span>
                <p>Seconds</p>
              </div>
            </div>
          </div>
        </section>

        <section id="story" className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <div className="bg-cream-white p-8 rounded-lg shadow-lg">
            <p className="mb-4">Our journey began on a sunny day at this very beach. We were both there with friends, enjoying the warm sand and cool breeze. As fate would have it, our groups ended up playing a game of volleyball together. From the moment we teamed up, we knew there was something special between us.</p>
            <img src="/helen-alec-beach.jpg" alt="Helen and Alec at the beach" className="w-full rounded-lg mb-4" />
            <p>Since that day, we've shared countless adventures, from hiking in the nearby mountains to exploring the charming streets of Los Gatos. Our love has grown with each passing day, and we can't wait to start the next chapter of our lives together. We're so excited to share our special day with all of you!</p>
          </div>
        </section>

        <section id="details" className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Wedding Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-cream-white p-8 rounded-lg shadow-lg">
              <Calendar className="w-12 h-12 mb-4 text-rust" />
              <h3 className="text-2xl font-bold mb-2">Ceremony & Reception</h3>
              <p>Saturday, September 20, 2025</p>
              <p>3:30 PM - 11:00 PM</p>
              <p>Radonich Ranch</p>
              <p>25140 Highland Way, Los Gatos, CA 95033</p>
            </div>
            <div className="bg-cream-white p-8 rounded-lg shadow-lg">
              <MapPin className="w-12 h-12 mb-4 text-rust" />
              <h3 className="text-2xl font-bold mb-2">Accommodations</h3>
              <p>Toll House Hotel</p>
              <p>140 S Santa Cruz Ave, Los Gatos, CA 95030</p>
              <p className="mt-4">More information on transportation and lodging options coming soon!</p>
            </div>
          </div>
        </section>

        {/* Rest of the sections (RSVP, Registry, Playlist, Photos, FAQ) remain unchanged */}

      </main>

      <footer className="bg-rust text-cream-white py-8 text-center">
        <p>We can't wait to celebrate with you!</p>
        <p className="mt-2">Helen & Alec • September 20, 2025</p>
      </footer>
    </div>
  );
};

export default WeddingWebsite;
