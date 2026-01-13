import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Layout from './components/Layout';
import Intro from './slides/Intro';
import SectionIntro from './slides/SectionIntro';
import ClosingCTA from './slides/ClosingCTA';
import { Individuals1, Individuals2, Individuals3, Individuals4, Individuals5 } from './slides/Hazem/Content';
import { CapacityBuilding, Marketing, WorkingSpaces, SuccessStories } from './slides/Raouf/Content';
import { MarketAccessProgressive } from './slides/Zaid/MarketAccessProgressive';
import { MarketAccessImpact } from './slides/Zaid/Content';

// Speaker Config
const SPEAKERS = {
  HAZEM: { name: "Hazem", role: "Individuals Program Manager" },
  RAOUF: { name: "Raouf", role: "Elevate Program Senior Officer" },
  ZAID: { name: "Zaid", role: "Market Access Officer" },
};

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 or 1
  const [marketAccessStep, setMarketAccessStep] = useState(0); // Track Market Access sub-steps

  // Slide Deck Configuration
  const slides = [
    // 0. Cover
    { component: <Intro />, speaker: null },

    // Part I: Hazem
    {
      component: <SectionIntro title="Individuals Program" subtitle="Talent & Freelancing" presenter="Hazem" part="Part I" />,
      speaker: SPEAKERS.HAZEM
    },
    { component: <Individuals1 />, speaker: SPEAKERS.HAZEM },
    { component: <Individuals2 />, speaker: SPEAKERS.HAZEM },
    { component: <Individuals3 />, speaker: SPEAKERS.HAZEM },
    { component: <Individuals4 />, speaker: SPEAKERS.HAZEM },
    { component: <Individuals5 />, speaker: SPEAKERS.HAZEM },

    // Part II: Raouf
    {
      component: <SectionIntro title="Elevate Program" subtitle="Capacity Building & Marketing" presenter="Raouf" part="Part II" />,
      speaker: SPEAKERS.RAOUF
    },
    { component: <CapacityBuilding />, speaker: SPEAKERS.RAOUF },
    { component: <Marketing />, speaker: SPEAKERS.RAOUF },
    { component: <SuccessStories />, speaker: SPEAKERS.RAOUF },
    { component: <WorkingSpaces />, speaker: SPEAKERS.RAOUF },

    // Part III: Zaid
    {
      component: <SectionIntro title="Market Access" subtitle="Global Connections" presenter="Zaid" part="Part III" />,
      speaker: SPEAKERS.ZAID
    },
    // Progressive Market Access reveal (3 internal steps)
    { component: <MarketAccessProgressive step={marketAccessStep} />, speaker: SPEAKERS.ZAID, isProgressive: true },
    { component: <MarketAccessImpact />, speaker: SPEAKERS.ZAID },

    // Closing CTA
    { component: <ClosingCTA />, speaker: null },
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

      {/* Sleek Navigation Controls */}
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
