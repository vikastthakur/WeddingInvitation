import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  CalendarDays,
  Clock,
  Flower2,
  Gift,
  Heart,
  MapPin,
  MessageCircle,
  Music,
  Phone,
  Sparkles,
  Utensils,
} from 'lucide-react';
import './styles.css';

const couple = {
  bride: 'Nitin Thakur',
  groom: 'Chhaya',
  family: 'Together with their families',
  weddingDate: '21 NOVEMBER 2026',
  venue: 'Royal Garden Palace, Jaipur',
};

const events = [
  {
    title: 'Haldi',
    date: '18 November 2026',
    time: '10:00 AM',
    place: 'Bride Residence Lawn',
    tone: 'Turmeric yellow dress code',
    icon: Sparkles,
  },
  {
    title: 'Mehndi',
    date: '19 November 2026',
    time: '6:30 PM',
    place: 'Courtyard Hall',
    tone: 'Green, music and dhol night',
    icon: Flower2,
  },
  {
    title: 'Sangeet',
    date: '20 November 2026',
    time: '7:00 PM',
    place: 'Crystal Ballroom',
    tone: 'Dance, dinner and family performances',
    icon: Music,
  },
  {
    title: 'Wedding Ceremony',
    date: '21 November 2026',
    time: '8:15 PM',
    place: 'Royal Garden Palace',
    tone: 'Traditional pheras followed by blessings',
    icon: Heart,
  },
  {
    title: 'Reception Dinner',
    date: '22 November 2026',
    time: '7:30 PM',
    place: 'Lotus Banquet',
    tone: 'Dinner, greetings and photographs',
    icon: Utensils,
  },
];

const guestGroups = ['Family', 'Friends', 'Office Team', 'Neighbors'];

function EventCard({ event }) {
  const Icon = event.icon;
  return (
    <article className="event-card">
      <div className="event-icon" aria-hidden="true">
        <Icon size={22} />
      </div>
      <div>
        <h3>{event.title}</h3>
        <p className="event-detail"><CalendarDays size={16} />{event.date}</p>
        <p className="event-detail"><Clock size={16} />{event.time}</p>
        <p className="event-detail"><MapPin size={16} />{event.place}</p>
        <p className="event-tone">{event.tone}</p>
      </div>
    </article>
  );
}

function App() {
  const mapUrl = 'https://www.google.com/maps/search/?api=1&query=Royal%20Garden%20Palace%20Jaipur';
  const whatsappText = encodeURIComponent(
    `Namaste! I am happy to attend ${couple.bride} and ${couple.groom}'s wedding functions.`
  );

  return (
    <main>
      <section className="hero" aria-label="Wedding invitation">
        <div className="hero-media" />
        <div className="hero-content">
          <p className="eyebrow">Wedding Invitation</p>
          <h1>{couple.bride} & {couple.groom}</h1>
          <p className="families">{couple.family} request the honour of your presence.</p>
          <div className="hero-actions">
            <a href="#events" className="primary-action"><CalendarDays size={18} />View Functions</a>
            <a href={`https://wa.me/?text=${whatsappText}`} className="secondary-action"><MessageCircle size={18} />Send RSVP</a>
          </div>
        </div>
      </section>

      <section className="intro-band">
        <div>
          <span className="label">Wedding Day</span>
          <strong>{couple.weddingDate}</strong>
        </div>
        <div>
          <span className="label">Venue</span>
          <strong>{couple.venue}</strong>
        </div>
        <a href={mapUrl} target="_blank" rel="noreferrer"><MapPin size={18} />Open Map</a>
      </section>

      <section className="section" id="events">
        <div className="section-heading">
          <p className="eyebrow">All Functions</p>
          <h2>Celebrate every beautiful ritual with us</h2>
        </div>
        <div className="events-grid">
          {events.map((event) => <EventCard key={event.title} event={event} />)}
        </div>
      </section>

      <section className="invite-section">
        <div className="invite-copy">
          <p className="eyebrow">Guest Invitation</p>
          <h2>Your presence is our biggest blessing</h2>
          <p>
            We warmly invite you to join the Haldi, Mehndi, Sangeet, Wedding and Reception celebrations.
            Please come with your family and make these moments memorable with your love and blessings.
          </p>
          <div className="guest-tags">
            {guestGroups.map((group) => <span key={group}>{group}</span>)}
          </div>
        </div>
        <div className="contact-panel">
          <h3>Contact for RSVP</h3>
          <a href="tel:+918941963741"><Phone size={18} />+91 89419 63741</a>
          <a href={`https://wa.me/?text=${whatsappText}`}><MessageCircle size={18} />WhatsApp RSVP</a>
          <p><Gift size={18} />Blessings only, your presence is enough.</p>
        </div>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
