import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, TrendingUp, Megaphone, Globe, Monitor } from 'lucide-react';
import Layout from './components/Layout';
import Intro from './slides/Intro';
import Agenda from './slides/Agenda';
import SectionIntro from './slides/SectionIntro';
import ComponentBrief from './slides/ComponentBrief'; // Generic Brief
import ElevateOverview from './slides/ElevateOverview'; // New Overview
import ClosingCTA from './slides/ClosingCTA';
import GazaVideoPlaceholder from './slides/GazaVideoPlaceholder';
import TestimonialPlaceholder from './slides/TestimonialPlaceholder';
import SpeakerIntro from './slides/SpeakerIntro';
import GSGStructure from './slides/GSGStructure'; // New GSG Structure
import Eligibility from './slides/Eligibility';
import IceBreaker from './slides/IceBreaker';
import QASession from './slides/QASession';
import Networking from './slides/Networking';

import { Individuals1, Individuals2, Individuals3, Individuals4, Individuals5 } from './slides/Hazem/Content';
import { CapacityBuilding, Marketing, WorkingSpaces, SuccessStories } from './slides/Raouf/Content';
import { MarketAccessProgressive } from './slides/Zaid/MarketAccessProgressive';
import { MarketAccessImpact } from './slides/Zaid/Content';

import randPhoto from './assets/speakers/Rand.JPG';
import hazemPhoto from './assets/speakers/Hazem.JPG';
import raoufPhoto from './assets/speakers/Raouf.JPG';
import zaidPhoto from './assets/speakers/Zaid.JPG';

// Speaker Config
const SPEAKERS = {
  ALAN: { name: "Alan El-Kadhi", role: "Program Director", photo: null },
  RAND: { name: "Rand Safi", role: "Program Senior Manager", photo: randPhoto },
  HAZEM: { name: "Hazem", role: "Individuals Program Manager", photo: hazemPhoto },
  RAOUF: { name: "Raouf", role: "Elevate Program Senior Officer", photo: raoufPhoto },
  ZAID: { name: "Zaid", role: "Market Access Officer", photo: zaidPhoto },
};

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 or 1
  const [marketAccessStep, setMarketAccessStep] = useState(0); // Track Market Access sub-steps

  // Slide Deck Configuration
  const slides = [
    // 0. Cover
    { component: <Intro />, speaker: null },

    // 1. Agenda
    { component: <Agenda />, speaker: null },

    // 2. Alan Intro
    {
      component: <SpeakerIntro
        name="Alan El-Kadhi"
        role="Program Director"
        bio="Leading the strategic vision and expansion of Gaza Sky Geeks."
        photoUrl={SPEAKERS.ALAN.photo}
      />,
      speaker: SPEAKERS.ALAN
    },

    // 3. Rand Intro
    {
      component: <SpeakerIntro
        name="Rand Safi"
        role="Program Senior Manager"
        bio="Driving operational excellence and program impact across all regions."
        photoUrl={SPEAKERS.RAND.photo}
      />,
      speaker: SPEAKERS.RAND
    },

    // 4. GSG Ecosystem Structure
    { component: <GSGStructure />, speaker: SPEAKERS.RAND },

    // NEW: Ice Breaker
    { component: <IceBreaker />, speaker: SPEAKERS.RAND },

    // Part I: Hazem (Individuals)
    {
      component: <SectionIntro title="Individuals Program" subtitle="Talent & Freelancing" presenter="Hazem" presenterPhoto={SPEAKERS.HAZEM.photo} part="Part I" />,
      speaker: SPEAKERS.HAZEM
    },
    { component: <Individuals1 />, speaker: SPEAKERS.HAZEM },
    { component: <Individuals2 />, speaker: SPEAKERS.HAZEM },
    { component: <Individuals3 />, speaker: SPEAKERS.HAZEM },
    { component: <Individuals4 />, speaker: SPEAKERS.HAZEM },
    { component: <Individuals5 />, speaker: SPEAKERS.HAZEM },

    // Part II: Raouf (Capacity Building & Marketing)
    {
      component: <SectionIntro title="Elevate Program" subtitle="Capacity Building & Marketing" presenter="Raouf" presenterPhoto={SPEAKERS.RAOUF.photo} part="Part II" />,
      speaker: SPEAKERS.RAOUF
    },
    // NEW: Elevate Overview
    { component: <ElevateOverview />, speaker: SPEAKERS.RAOUF },

    // NEW: Capacity Building Brief
    {
      component: <ComponentBrief
        title="Capacity Building"
        description="Empowering the next generation of tech leaders through world-class training, mentorship, and practical experience."
        icon={TrendingUp}
      />,
      speaker: SPEAKERS.RAOUF
    },
    { component: <CapacityBuilding />, speaker: SPEAKERS.RAOUF },

    // NEW: Marketing Brief
    {
      component: <ComponentBrief
        title="Marketing & Branding"
        description="Amplifying Palestinian tech success stories and building a resilient global brand."
        icon={Megaphone}
      />,
      speaker: SPEAKERS.RAOUF
    },
    { component: <Marketing />, speaker: SPEAKERS.RAOUF },

    // Success Stories
    { component: <SuccessStories />, speaker: SPEAKERS.RAOUF },

    // NEW: Working Spaces Brief
    {
      component: <ComponentBrief
        title="Working Spaces"
        description="Revitalizing Gaza’s tech ecosystem by providing essential infrastructure and community hubs."
        icon={Monitor}
      />,
      speaker: SPEAKERS.RAOUF
    },
    { component: <WorkingSpaces />, speaker: SPEAKERS.RAOUF },

    // Part III: Zaid (Market Access)
    {
      component: <SectionIntro title="Market Access" subtitle="Global Connections" presenter="Zaid" presenterPhoto={SPEAKERS.ZAID.photo} part="Part III" />,
      speaker: SPEAKERS.ZAID
    },

    // NEW: Market Access Brief
    {
      component: <ComponentBrief
        title="Market Access"
        description="Bridging the gap between Palestinian talent and the global marketplace through strategic partnerships."
        icon={Globe}
      />,
      speaker: SPEAKERS.ZAID
    },
    // Progressive Market Access reveal
    { component: <MarketAccessProgressive step={marketAccessStep} />, speaker: SPEAKERS.ZAID, isProgressive: true },
    { component: <MarketAccessImpact />, speaker: SPEAKERS.ZAID },

    // NEW: Q&A Session
    { component: <QASession />, speaker: SPEAKERS.ZAID },

    // Gaza Video
    { component: <GazaVideoPlaceholder />, speaker: null },

    // Testimonials
    { component: <TestimonialPlaceholder companyName="Company 1" speakerName="Speaker 1" />, speaker: null },
    { component: <TestimonialPlaceholder companyName="Company 2" speakerName="Speaker 2" />, speaker: null },
    { component: <TestimonialPlaceholder companyName="Company 3" speakerName="Speaker 3" />, speaker: null },
    { component: <TestimonialPlaceholder companyName="Company 4" speakerName="Speaker 4" />, speaker: null },
    { component: <TestimonialPlaceholder companyName="Company 5" speakerName="Speaker 5" />, speaker: null },

    // Eligibility
    { component: <Eligibility />, speaker: null },

    // Closing CTA
    { component: <ClosingCTA />, speaker: null },

    // NEW: Networking
    { component: <Networking />, speaker: null },
  ];

  const currentSlide = slides[currentIndex];

  // Navigation Logic with Progressive Step Support
  const nextSlide = () => {
    // Check if current slide is progressive and has more steps
    if (currentSlide.isProgressive && marketAccessStep < 2) {
      setMarketAccessStep(prev => prev + 1);
    } else if (currentIndex < slides.length - 1) {
      setDirection(1);
      setCurrentIndex(prev => prev + 1);
      // Reset progressive step when leaving progressive slide
      if (currentSlide.isProgressive) {
        setMarketAccessStep(0);
      }
    }
  };

  const prevSlide = () => {
    // Check if current slide is progressive and has previous steps
    if (currentSlide.isProgressive && marketAccessStep > 0) {
      setMarketAccessStep(prev => prev - 1);
    } else if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex(prev => prev - 1);
      // Set to last step when entering progressive slide from next
      const prevSlideIndex = currentIndex - 1;
      if (slides[prevSlideIndex].isProgressive) {
        setMarketAccessStep(2);
      }
    }
  };

  // Keyboard Listeners
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, marketAccessStep]);

  return (
    <Layout activeSpeaker={currentSlide.speaker}>
      <AnimatePresence initial={false} custom={direction} mode='popLayout'>
        {React.cloneElement(currentSlide.component, { key: currentIndex, direction })}
      </AnimatePresence>

      {/* LEFT: Unified Navigation Bar */}
      <div style={{ position: 'fixed', bottom: '1.5rem', left: '1.5rem', zIndex: 1000, display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
        <div style={{
          display: 'flex',
          gap: '0.6rem',
          background: 'var(--color-surface)',
          padding: '0.6rem',
          borderRadius: '24px',
          border: '1px solid var(--color-border)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
        }}>
          {[
            { id: 'ALAN', label: 'Alan', photo: SPEAKERS.ALAN.photo, targetIndex: 2, isActive: (s) => s?.name.includes('Alan') },
            { id: 'RAND', label: 'Rand', photo: SPEAKERS.RAND.photo, targetIndex: 3, isActive: (s) => s?.name.includes('Rand') },
            { id: 'HAZEM', label: 'Hazem', photo: SPEAKERS.HAZEM.photo, targetIndex: 6, isActive: (s) => s?.name.includes('Hazem') },
            { id: 'RAOUF', label: 'Raouf', photo: SPEAKERS.RAOUF.photo, targetIndex: 12, isActive: (s) => s?.name.includes('Raouf') },
            { id: 'ZAID', label: 'Zaid', photo: SPEAKERS.ZAID.photo, targetIndex: 21, isActive: (s) => s?.name.includes('Zaid') },
            { id: 'APPLY', label: 'Apply', isAction: true, targetIndex: 33, isActive: () => currentIndex === 33 },
          ].map(item => {
            const isActive = item.isActive(currentSlide.speaker);
            return (
              <button
                key={item.id}
                onClick={() => {
                  setDirection(item.targetIndex > currentIndex ? 1 : -1);
                  setCurrentIndex(item.targetIndex);
                  setMarketAccessStep(0);
                }}
                style={{
                  width: '45px',
                  height: '45px',
                  padding: 0,
                  borderRadius: '50%',
                  background: isActive ? 'var(--color-accent-primary)' : 'rgba(255,255,255,0.05)',
                  color: isActive ? '#fff' : 'var(--color-text-secondary)',
                  border: isActive ? '2px solid var(--color-accent-primary)' : '1px solid transparent',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  opacity: isActive ? 1 : 0.7,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  overflow: 'hidden',
                  position: 'relative',
                  transform: isActive ? 'scale(1.1)' : 'scale(1)'
                }}
                title={item.label}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = 1;
                  e.currentTarget.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.opacity = 0.7;
                    e.currentTarget.style.transform = 'scale(1)';
                  } else {
                    e.currentTarget.style.transform = 'scale(1.1)';
                  }
                }}
              >
                {item.photo ? (
                  <img
                    src={item.photo}
                    alt={item.label}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'top',
                      filter: isActive ? 'none' : 'grayscale(20%)'
                    }}
                  />
                ) : item.isAction ? (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
                  </svg>
                ) : (
                  <span style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.5px' }}>
                    {item.label.substring(0, 2).toUpperCase()}
                  </span>
                )}

                {isActive && (
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    borderRadius: '50%',
                    border: '2px solid white',
                    opacity: 0.3
                  }} />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* RIGHT: Sleek Navigation Controls */}
      <div style={{ position: 'fixed', bottom: '1.5rem', right: '1.5rem', zIndex: 1000, display: 'flex', gap: '0.8rem' }}>
        {/* Fullscreen Toggle */}
        <button
          className="nav-btn-slick"
          onClick={() => {
            if (!document.fullscreenElement) {
              document.documentElement.requestFullscreen().catch(e => console.error(e));
            } else {
              if (document.exitFullscreen) {
                document.exitFullscreen();
              }
            }
          }}
          title="Toggle Fullscreen"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
          </svg>
        </button>
        <button className="nav-btn-slick" onClick={prevSlide} disabled={currentIndex === 0} style={{ opacity: currentIndex === 0 ? 0.3 : 1 }}>
          <ArrowLeft size={24} />
        </button>
        <button className="nav-btn-slick" onClick={nextSlide} disabled={currentIndex === slides.length - 1} style={{ opacity: currentIndex === slides.length - 1 ? 0.3 : 1 }}>
          <ArrowRight size={24} />
        </button>
      </div>

      {/* Progress Bar */}
      <div style={{
        position: 'fixed', bottom: 0, left: 0, height: '4px',
        background: 'linear-gradient(to right, var(--color-accent-secondary), var(--color-accent-primary))',
        width: `${((currentIndex + (currentSlide.isProgressive ? marketAccessStep / 3 : 0) + 1) / slides.length) * 100}%`,
        transition: 'width 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)',
        zIndex: 2000
      }} />
    </Layout>
  );
}

export default App;
