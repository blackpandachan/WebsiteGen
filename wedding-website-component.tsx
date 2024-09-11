import React, { useState } from 'react';
import { ChevronDown, Music, Calendar, MapPin, Gift, Camera, HelpCircle } from 'lucide-react';

const WeddingWebsite = () => {
  const [rsvpForm, setRsvpForm] = useState({
    name: '',
    email: '',
    attending: 'yes',
    mealPreference: ''
  });

  const handleRsvpChange = (e) => {
    setRsvpForm({
      ...rsvpForm,
      [e.target.name]: e.target.value
    });
  };

  const handleRsvpSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send this data to your server
    console.log('RSVP Submitted:', rsvpForm);
    // Reset form or show confirmation message
    alert('Thank you for your RSVP!');
  };

  // ... (keep the existing countdown state and useEffect)

  return (
    <div className="bg-sage-green text-rust font-serif min-h-screen">
      {/* ... (keep existing header and nav) */}

      <main className="container mx-auto px-4 py-8">
        {/* ... (keep existing home and story sections) */}

        <section id="rsvp" className="mb-16">
          <h2 className="text-3xl font-bold mb-4">RSVP</h2>
          <div className="bg-cream-white p-8 rounded-lg shadow-lg">
            <form onSubmit={handleRsvpSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  value={rsvpForm.name}
                  onChange={handleRsvpChange}
                  className="w-full p-2 border rounded" 
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={rsvpForm.email}
                  onChange={handleRsvpChange}
                  className="w-full p-2 border rounded" 
                  required
                />
              </div>
              <div>
                <label htmlFor="attending" className="block mb-1">Will you be attending?</label>
                <select 
                  id="attending" 
                  name="attending"
                  value={rsvpForm.attending}
                  onChange={handleRsvpChange}
                  className="w-full p-2 border rounded"
                >
                  <option value="yes">Yes, I'll be there!</option>
                  <option value="no">Sorry, I can't make it</option>
                </select>
              </div>
              {rsvpForm.attending === 'yes' && (
                <div>
                  <label htmlFor="mealPreference" className="block mb-1">Meal Preference</label>
                  <select 
                    id="mealPreference" 
                    name="mealPreference"
                    value={rsvpForm.mealPreference}
                    onChange={handleRsvpChange}
                    className="w-full p-2 border rounded"
                    required
                  >
                    <option value="">Select a meal</option>
                    <option value="chicken">Chicken</option>
                    <option value="steak">Steak</option>
                    <option value="vegetarian">Vegetarian</option>
                    <option value="vegan">Vegan</option>
                  </select>
                </div>
              )}
              <button type="submit" className="bg-rust text-cream-white py-2 px-4 rounded hover:bg-dark-rust transition-colors">
                Submit RSVP
              </button>
            </form>
          </div>
        </section>

        <section id="registry" className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Registry</h2>
          <div className="bg-cream-white p-8 rounded-lg shadow-lg">
            <Gift className="w-12 h-12 mb-4 mx-auto text-rust" />
            <p className="mb-4">Your presence at our wedding is the greatest gift of all. However, if you wish to honor us with a gift, we've registered at the following places:</p>
            <div className="space-y-4">
              <div className="border-b pb-4">
                <h3 className="text-xl font-bold mb-2">Crate & Barrel</h3>
                <p>We've selected a variety of home goods to help us start our new life together.</p>
                <a href="https://www.crateandbarrel.com/gift-registry/" target="_blank" rel="noopener noreferrer" className="inline-block mt-2 bg-rust text-cream-white py-2 px-4 rounded hover:bg-dark-rust transition-colors">View Registry</a>
              </div>
              <div className="border-b pb-4">
                <h3 className="text-xl font-bold mb-2">Amazon</h3>
                <p>From kitchen appliances to smart home devices, we've curated a list of items to enhance our home.</p>
                <a href="https://www.amazon.com/wedding/" target="_blank" rel="noopener noreferrer" className="inline-block mt-2 bg-rust text-cream-white py-2 px-4 rounded hover:bg-dark-rust transition-colors">View Registry</a>
              </div>
              <div className="border-b pb-4">
                <h3 className="text-xl font-bold mb-2">Honeymoon Fund</h3>
                <p>If you'd like to contribute to our dream honeymoon in Bali, we'd be incredibly grateful.</p>
                <a href="#" className="inline-block mt-2 bg-rust text-cream-white py-2 px-4 rounded hover:bg-dark-rust transition-colors">Contribute</a>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Charity Donations</h3>
                <p>In lieu of a gift, consider making a donation to one of these organizations close to our hearts:</p>
                <ul className="list-disc list-inside mt-2">
                  <li>World Wildlife Fund</li>
                  <li>Doctors Without Borders</li>
                  <li>Local Food Bank</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ... (keep existing playlist, photos, and FAQ sections) */}

      </main>

      <footer className="bg-rust text-cream-white py-8 text-center">
        <p>We can't wait to celebrate with you!</p>
        <p className="mt-2">Helen & Alec • September 20, 2025</p>
      </footer>
    </div>
  );
};

export default WeddingWebsite;
