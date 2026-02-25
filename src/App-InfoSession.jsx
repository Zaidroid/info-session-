import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Layout from './components/Layout';
import Intro from './slides/Intro';
import Agenda from './slides/Agenda';
import GSGVisionMission from './slides/GSGVisionMission';
import GSGStructure from './slides/GSGStructure';
import CARM from './slides/CARM';
import GazaVideoPlaceholder from './slides/GazaVideoPlaceholder';
import TestimonialPlaceholder from './slides/TestimonialPlaceholder';
import ElevateOverview from './slides/ElevateOverview';
import ElevatePhases from './slides/ElevatePhases';
import Eligibility from './slides/Eligibility';
import GeographicalDistribution from './slides/GeographicalDistribution';
import SupportedCompanies from './slides/SupportedCompanies';
import ElevatePartners from './slides/ElevatePartners';
import QASession from './slides/QASession';
import ClosingCTA from './slides/ClosingCTA';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Info Session Slide Deck
  const slides = [
    // 0. Cover
    { component: <Intro />, speaker: null },

    // 1. Agenda
    { component: <Agenda />, speaker: null },

    // 2. GSG Vision & Mission
    { component: <GSGVisionMission />, speaker: null },

    // 3. GSG Ecosystem Structure
    { component: <GSGStructure />, speaker: null },

    // 4. CARM Slide
    { component: <CARM />, speaker: null },

    // 5. CARM Video Placeholder
    { component: <GazaVideoPlaceholder />, speaker: null },

    // 6. Elevate Overview
    { component: <ElevateOverview />, speaker: null },

    // 7. Elevate Phases
    { component: <ElevatePhases />, speaker: null },

    // 8. Eligibility
    { component: <Eligibility />, speaker: null },

    // 9. Geographical Distribution
    { component: <GeographicalDistribution />, speaker: null },

    // 10. Supported Companies
    { component: <SupportedCompanies />, speaker: null },

    // 11. Elevate Partners
    { component: <ElevatePartners />, speaker: null },

    // 12. Company Testimonials Video
    { component: <TestimonialPlaceholder companyName="Company Testimonials" speakerName="From Ramallah Event" role="Video Presentation" />, speaker: null },

    // 13. Q&A Session
    { component: <QASession />, speaker: null },

    // 14. Application CTA
    { component: <ClosingCTA />, speaker: null },
  ];

  const currentSlide = slides[currentIndex];

  const nextSlide = () => {
    if (currentIndex < slides.length - 1) {
      setDirection(1);
      setCurrentIndex(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex(prev => prev - 1);
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
  }, [currentIndex]);

  return (
    <Layout activeSpeaker={currentSlide.speaker}>
      <AnimatePresence initial={false} custom={direction} mode='popLayout'>
        {React.cloneElement(currentSlide.component, { key: currentIndex, direction })}
      </AnimatePresence>

      {/* Navigation Bar */}
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
            { id: 'INTRO', label: 'Intro', targetIndex: 0 },
            { id: 'GSG', label: 'GSG', targetIndex: 2 },
            { id: 'CARM', label: 'CARM', targetIndex: 4 },
            { id: 'ELEVATE', label: 'Elevate', targetIndex: 6 },
            { id: 'COMPANIES', label: 'Companies', targetIndex: 10 },
            { id: 'QA', label: 'Q&A', targetIndex: 13 },
            { id: 'APPLY', label: 'Apply', targetIndex: 14 },
          ].map(item => {
            const isActive = currentIndex === item.targetIndex || 
              (item.id === 'GSG' && currentIndex >= 2 && currentIndex <= 3) ||
              (item.id === 'CARM' && currentIndex >= 4 && currentIndex <= 5) ||
              (item.id === 'ELEVATE' && currentIndex >= 6 && currentIndex <= 9) ||
              (item.id === 'COMPANIES' && currentIndex >= 10 && currentIndex <= 12);
            
            return (
              <motion.button
                key={item.id}
                onClick={() => {
                  setDirection(item.targetIndex > currentIndex ? 1 : -1);
                  setCurrentIndex(item.targetIndex);
                }}
                animate={{
                  backgroundColor: isActive ? 'var(--color-accent-primary)' : 'rgba(255,255,255,0.05)',
                  opacity: isActive ? 1 : 0.7,
                  scale: isActive ? 1.05 : 1
                }}
                style={{
                  padding: '0.75rem 1.25rem',
                  borderRadius: '20px',
                  color: isActive ? '#fff' : 'var(--color-text-secondary)',
                  border: '1px solid transparent',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  letterSpacing: '0.5px'
                }}
                title={item.label}
              >
                {item.label}
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Navigation Controls */}
      <div style={{ position: 'fixed', bottom: '1.5rem', right: '1.5rem', zIndex: 1000, display: 'flex', gap: '0.8rem' }}>
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
        width: `${((currentIndex + 1) / slides.length) * 100}%`,
        transition: 'width 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)',
        zIndex: 2000
      }} />
    </Layout>
  );
}

export default App;
