import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, TrendingUp, Megaphone, Globe, Monitor } from 'lucide-react';
import Layout from './components/Layout';
import Intro from './slides/Intro';
import Agenda from './slides/Agenda';
import SectionIntro from './slides/SectionIntro';
import SectionIntroModern from './slides/SectionIntroModern';
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
import Lunch from './slides/Lunch';
import ElevatePhases from './slides/ElevatePhases';
import InternTestimonials from './slides/InternTestimonials';
import CompanyNiches from './slides/CompanyNiches';
import CARM from './slides/CARM'; // New CARM Slide
import GeographicalDistribution from './slides/GeographicalDistribution'; // New Geo Slide
import IntroTestimonials from './slides/IntroTestimonials'; // New Intro Slide

import { Individuals1, Individuals2, Individuals3, Individuals4, Individuals5 } from './slides/Hazem/Content';
import { CapacityBuilding, Marketing, WorkingSpaces } from './slides/Raouf/Content';
import { MarketAccessProgressive } from './slides/Zaid/MarketAccessProgressive';
import { ElevateBridge } from './slides/Zaid/ElevateBridge';
import { MarketAccessImpact } from './slides/Zaid/Content';
import { GazaResilience, Post2023Impact } from './slides/Alan/Content';

import alanPhoto from './assets/speakers/alan-new.jpg';
import randPhoto from './assets/speakers/Rand.JPG';
import hazemPhoto from './assets/speakers/Hazem.JPG';
import raoufPhoto from './assets/speakers/Raouf.JPG';
import zaidPhoto from './assets/speakers/Zaid.JPG';
import elevateLogo from './assets/elevate-logo-03.png';
import yahyaPhoto from './assets/companies/Yahya.jpeg';
import adelPhoto from './assets/companies/Adel_Ewaida.png';
import arefPhoto from './assets/companies/Aref.jpg';
import radixPhoto from './assets/companies/Adel_Joudallah.jpg';
import tech360Photo from './assets/companies/Imad.jpg';
import dotlinePhoto from './assets/companies/dotline.jpeg';

// Speaker Config
const SPEAKERS = {
  ALAN: { name: "Alan El Kadhi", role: "GSG Program Director", photo: alanPhoto },
  RAND: { name: "Rand Safi", role: "Senior program manager", photo: randPhoto },
  HAZEM: { name: "Hazem Kiwan", role: "GSG Program Manager", photo: hazemPhoto },
  RAOUF: { name: "Raouf Said", role: "Companies Program Senior Officer", photo: raoufPhoto },
  ZAID: { name: "Zaid Salem", role: "Market Access Officer", photo: zaidPhoto },
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
        name={SPEAKERS.ALAN.name}
        role={SPEAKERS.ALAN.role}
        bio="Leading the strategic vision and expansion of Gaza Sky Geeks."
        photoUrl={SPEAKERS.ALAN.photo}
      />,
      speaker: SPEAKERS.ALAN
    },

    // 3. Alan - Gaza Resilience (Emotional Slide)
    { component: <GazaResilience />, speaker: SPEAKERS.ALAN },

    // 4. Alan - Post-2023 Impact (Data Slide)
    { component: <Post2023Impact />, speaker: SPEAKERS.ALAN },

    // 5. Rand Intro
    {
      component: <SpeakerIntro
        name={SPEAKERS.RAND.name}
        role={SPEAKERS.RAND.role}
        bio="Driving operational excellence and program impact across all regions."
        photoUrl={SPEAKERS.RAND.photo}
      />,
      speaker: SPEAKERS.RAND
    },

    // 4. GSG Ecosystem Structure
    { component: <GSGStructure />, speaker: SPEAKERS.RAND },

    // NEW: CARM Slide (After Rand's Ice Breaker)
    { component: <CARM />, speaker: SPEAKERS.RAND },

    // NEW: Ice Breaker
    { component: <IceBreaker />, speaker: SPEAKERS.RAND },

    // Part I: Hazem (Individuals)
    {
      component: <SectionIntroModern title="Individuals Program" subtitle="Talent & Freelancing" presenter={SPEAKERS.HAZEM.name} role={SPEAKERS.HAZEM.role} presenterPhoto={SPEAKERS.HAZEM.photo} part="Part I" />,
      speaker: SPEAKERS.HAZEM
    },
    { component: <Individuals1 />, speaker: SPEAKERS.HAZEM },
    { component: <Individuals2 />, speaker: SPEAKERS.HAZEM },
    { component: <Individuals3 />, speaker: SPEAKERS.HAZEM },
    { component: <Individuals4 />, speaker: SPEAKERS.HAZEM },
    { component: <Individuals5 />, speaker: SPEAKERS.HAZEM },



    // Part II: Raouf (Capacity Building & Marketing)
    {
      component: <SectionIntroModern
        title="Elevate Program"
        subtitle=""
        topImage={elevateLogo}
        presenter={SPEAKERS.RAOUF.name}
        role={SPEAKERS.RAOUF.role}
        presenterPhoto={SPEAKERS.RAOUF.photo}
        part="Part II"
      />,
      speaker: SPEAKERS.RAOUF
    },
    // NEW: Elevate Overview
    { component: <ElevateOverview />, speaker: SPEAKERS.RAOUF },

    // NEW: Company Niches
    // { component: <CompanyNiches />, speaker: SPEAKERS.RAOUF },

    // NEW: Geographical Distribution
    { component: <GeographicalDistribution />, speaker: SPEAKERS.RAOUF },



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
        description="Improve the visibility and visual identity of companies"
        icon={Megaphone}
      />,
      speaker: SPEAKERS.RAOUF
    },
    { component: <Marketing />, speaker: SPEAKERS.RAOUF },


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
      component: <SectionIntroModern title="Market Access" subtitle="Global Connections" topImage={elevateLogo} presenter={SPEAKERS.ZAID.name} role={SPEAKERS.ZAID.role} presenterPhoto={SPEAKERS.ZAID.photo} part="Part III" />,
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
    // ElevateBridge Full Slide (morphs from widget)
    { component: <ElevateBridge />, speaker: SPEAKERS.ZAID },
    { component: <MarketAccessImpact />, speaker: SPEAKERS.ZAID },

    // Part IV: The Journey
    {
      component: <SectionIntroModern
        title="Program Roadmap"
        subtitle="Phases, Timeline & Eligibility"
        part="Part IV"
        topImage={elevateLogo}
      />,
      speaker: null
    },

    // Elevate Process (Moved before Q&A)
    { component: <ElevatePhases />, speaker: null },

    // Eligibility (Moved before Q&A)
    { component: <Eligibility />, speaker: null },

    // NEW: Q&A Session
    { component: <QASession />, speaker: SPEAKERS.ZAID },

    // Gaza Video
    { component: <GazaVideoPlaceholder />, speaker: null },

    // Intro to Testimonials
    { component: <IntroTestimonials />, speaker: null },

    // Testimonials
    { component: <TestimonialPlaceholder companyName="Jaffa" speakerName="Dr. Yahya Alsalqan" role="CEO" photo={yahyaPhoto} />, speaker: null },
    { component: <TestimonialPlaceholder companyName="Scope Systems" speakerName="Adel Ewaida" role="Product Manager" photo={adelPhoto} photoPosition="center 15%" />, speaker: null },
    { component: <TestimonialPlaceholder companyName="Top Mena Talents" speakerName="Aref Hanaysheh" role="CEO" photo={arefPhoto} />, speaker: null },
    { component: <TestimonialPlaceholder companyName="PITS" speakerName="Mohammed Abed Alraheem" role="CEO" />, speaker: null },
    { component: <TestimonialPlaceholder companyName="Radix" speakerName="Adel Jodalah" role="CEO" photo={radixPhoto} />, speaker: null },
    { component: <TestimonialPlaceholder companyName="Dotline" speakerName="Odai Abu Baker" role="CEO" photo={dotlinePhoto} />, speaker: null },
    { component: <TestimonialPlaceholder companyName="Tech 360" speakerName="Imad Temeiza" role="Deputy CEO" photo={tech360Photo} />, speaker: null },


    // Closing CTA
    { component: <ClosingCTA />, speaker: null },

    // NEW: Networking
    { component: <Networking />, speaker: null },
    { component: <Lunch />, speaker: null },
  ];

  const currentSlide = slides[currentIndex];

  // Navigation Logic with Progressive Step Support
  const nextSlide = () => {
    // Check if current slide is progressive and has more steps
    if (currentSlide.isProgressive && marketAccessStep < 1) {
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
      if (slides[prevSlideIndex]?.isProgressive) {
        setMarketAccessStep(1);
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
            { id: 'ALAN', label: 'Alan', photo: SPEAKERS.ALAN.photo, targetIndex: 2, isActive: (s) => s?.name?.includes('Alan') },
            { id: 'RAND', label: 'Rand', photo: SPEAKERS.RAND.photo, targetIndex: 5, isActive: (s) => s?.name?.includes('Rand'), objectPosition: 'center 20%' },
            { id: 'HAZEM', label: 'Hazem', photo: SPEAKERS.HAZEM.photo, targetIndex: 9, isActive: (s) => s?.name?.includes('Hazem'), objectPosition: 'center 20%' },
            { id: 'RAOUF', label: 'Raouf', photo: SPEAKERS.RAOUF.photo, targetIndex: 15, isActive: (s) => s?.name?.includes('Raouf'), objectPosition: 'center 20%' },
            { id: 'ZAID', label: 'Zaid', photo: SPEAKERS.ZAID.photo, targetIndex: 25, isActive: (s) => s?.name?.includes('Zaid') },
            { id: 'PART4', label: 'Roadmap', shortLabel: 'IV', targetIndex: 30, isActive: () => currentIndex >= 30 && currentIndex <= 34 },
            { id: 'TESTIMONIALS', label: 'Testimonials', shortLabel: '™', targetIndex: 35, isActive: () => currentIndex >= 35 && currentIndex <= 42 },
            { id: 'APPLY', label: 'Apply', isAction: true, targetIndex: 43, isActive: () => currentIndex === 43 },
          ].map(item => {
            const isActive = item.isActive(currentSlide.speaker);
            return (
              <motion.button
                key={item.id}
                onClick={() => {
                  setDirection(item.targetIndex > currentIndex ? 1 : -1);
                  setCurrentIndex(item.targetIndex);
                  setMarketAccessStep(0);
                }}
                initial={{ width: '45px' }}
                animate={{
                  width: isActive ? 'auto' : '45px',
                  backgroundColor: isActive ? 'var(--color-accent-primary)' : 'rgba(255,255,255,0.05)',
                  borderColor: isActive ? 'var(--color-accent-primary)' : 'transparent',
                  opacity: isActive ? 1 : 0.7,
                  scale: isActive ? 1.05 : 1
                }}
                transition={{
                  type: 'spring',
                  stiffness: 500,
                  damping: 30
                }}
                style={{
                  height: '45px',
                  padding: isActive ? '0 1rem 0 0' : 0, // Padding for text when active
                  borderRadius: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: isActive ? '0.5rem' : 0,
                  color: isActive ? '#fff' : 'var(--color-text-secondary)',
                  border: '1px solid transparent', // Base border
                  cursor: 'pointer',
                  overflow: 'hidden',
                  position: 'relative',
                  whiteSpace: 'nowrap'
                }}
                title={item.label}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.opacity = 1;
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.opacity = 0.7;
                    e.currentTarget.style.transform = 'scale(1)';
                  }
                }}
              >
                <div style={{
                  width: '45px',
                  height: '45px',
                  borderRadius: '50%',
                  flexShrink: 0,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  overflow: 'hidden',
                  border: isActive ? '2px solid rgba(255,255,255,0.3)' : 'none'
                }}>
                  {item.photo ? (
                    <img
                      src={item.photo}
                      alt={item.label}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: item.objectPosition || 'top',
                        filter: isActive ? 'none' : 'grayscale(100%)',
                        transition: 'filter 0.3s'
                      }}
                    />
                  ) : item.isAction ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
                    </svg>
                  ) : (
                    <span style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.5px' }}>
                      {item.shortLabel || item.label.substring(0, 2).toUpperCase()}
                    </span>
                  )}
                </div>

                <AnimatePresence mode="popLayout">
                  {isActive && (
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ delay: 0.1 }}
                      style={{
                        fontSize: '0.9rem',
                        fontWeight: 600,
                        letterSpacing: '0.5px'
                      }}
                    >
                      {item.label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
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
