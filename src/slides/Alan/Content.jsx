import React, { useMemo, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Slide from '../../components/Slide';

// Import images from Alan's pictures folder
import img1 from '../../../Alan-Slides/alan-slides-pictures/WhatsApp Image 2026-01-18 at 9.58.53 PM.jpeg';
import img2 from '../../../Alan-Slides/alan-slides-pictures/WhatsApp Image 2026-01-18 at 9.58.54 PM.jpeg';
import img3 from '../../../Alan-Slides/alan-slides-pictures/WhatsApp Image 2026-01-18 at 9.58.5s4 PM.jpeg';
import img4 from '../../../Alan-Slides/alan-slides-pictures/WhatsApp Image 2026-01-1s at 9.58.54 PM.jpeg';
import img5 from '../../../Alan-Slides/alan-slides-pictures/WhatsApp Image 2026-01-sat 9.58.54 PM.jpeg';
import img6 from '../../../Alan-Slides/alan-slides-pictures/WhatsApp Image 2026-0s1-18 at 9.58.54 PM.jpeg';
import img7 from '../../../Alan-Slides/alan-slides-pictures/WhatsApp Image 202s6-01-18 at 9.58.54 PM.jpeg';
import img8 from '../../../Alan-Slides/alan-slides-pictures/WhatsApp Imagse 2026-01-18 at 9.58.54 PM.jpeg';

export function AnqaaSlide() {
    const images = useMemo(() => [img1, img2, img3, img4, img5, img6, img7, img8], []);

    // Focus Loop State: 0 or 1
    const [activeGroup, setActiveGroup] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveGroup(prev => (prev === 0 ? 1 : 0));
        }, 8000); // Switch focus every 8 seconds
        return () => clearInterval(interval);
    }, []);

    // Configuration for a cinematic "Cloud" layout
    // Layers: 0 (Back/Slowest), 1 (Mid), 2 (Front/Fastest)
    const cinematicConfig = [
        { top: '15%', left: '5%', scale: 0.8, layer: 0 },
        { top: '55%', left: '80%', scale: 0.9, layer: 0 },
        { top: '5%', left: '65%', scale: 1.1, layer: 1 },
        { top: '65%', left: '10%', scale: 1.0, layer: 1 },
        { top: '25%', left: '85%', scale: 1.2, layer: 2 },
        { top: '75%', left: '55%', scale: 1.15, layer: 2 },
        { top: '10%', left: '25%', scale: 1.3, layer: 2 }, // Hero-ish
        { top: '50%', left: '-5%', scale: 0.85, layer: 0 },
    ];

    return (
        <Slide>
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                overflow: 'hidden',
                zIndex: 0
            }}>
                {/* Cinematic Image Layers */}
                {images.map((src, idx) => {
                    const config = cinematicConfig[idx];

                    // Assign groups: Even indices = Group 0, Odd indices = Group 1
                    const myGroup = idx % 2;
                    const isFocused = activeGroup === myGroup;

                    // Dynamic styles based on focus
                    const currentOpacity = isFocused ? 1 : 0.4;
                    const currentFilter = isFocused ? 'blur(0px)' : 'blur(4px)';
                    const currentScale = isFocused ? config.scale * 1.05 : config.scale * 0.95;
                    const currentZIndex = isFocused ? config.layer + 10 : config.layer;

                    return (
                        <motion.div
                            key={idx}
                            style={{
                                position: 'absolute',
                                top: config.top,
                                left: config.left,
                                width: '25vw',
                                maxWidth: '450px',
                                aspectRatio: '16/10',
                                zIndex: currentZIndex,
                                // Styles governed by animation now
                            }}
                            initial={{ x: -20, opacity: 0, filter: 'blur(10px)' }}
                            animate={{
                                x: [0, (config.layer + 1) * 40, 0], // Slow horizontal drift
                                y: [0, (config.layer + 1) * 15, 0], // Very subtle vertical
                                opacity: currentOpacity,
                                scale: currentScale,
                                filter: currentFilter
                            }}
                            transition={{
                                x: {
                                    duration: 40 + (idx * 5),
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    repeatType: "reverse"
                                },
                                y: {
                                    duration: 40 + (idx * 5),
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    repeatType: "reverse"
                                },
                                // Smooth transition for focus changes
                                opacity: { duration: 2.5, ease: "easeInOut" },
                                scale: { duration: 2.5, ease: "easeInOut" },
                                filter: { duration: 2.5, ease: "easeInOut" }
                            }}
                        >
                            <img
                                src={src}
                                alt={`Cinematic Gallery ${idx}`}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    borderRadius: '8px',
                                    boxShadow: isFocused
                                        ? '0 30px 60px -10px rgba(0, 0, 0, 0.8)'
                                        : '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
                                    transition: 'box-shadow 2.5s ease-in-out'
                                }}
                            />
                        </motion.div>
                    );
                })}

                {/* Title Overlay - Centered & Premium with Cinematic Vignette */}
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    zIndex: 20,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    pointerEvents: 'none',
                    // Removed vignette to match global theme
                }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        style={{ textAlign: 'center' }}
                    >
                        <h2 className="gradient-text" style={{
                            fontSize: 'clamp(4rem, 8vw, 7rem)',
                            fontWeight: '800', // Extra bold matches SectionIntroModern
                            margin: 0,
                            lineHeight: 0.9,
                            letterSpacing: '-0.02em',
                            textShadow: '0 10px 40px rgba(0,0,0,0.8)'
                        }}>
                            Anqaa
                        </h2>
                        <div style={{
                            height: '4px',
                            background: 'var(--gradient-accent)',
                            width: '120px',
                            margin: 'var(--space-lg) auto',
                            borderRadius: '4px',
                            boxShadow: '0 0 20px rgba(255, 100, 50, 0.5)'
                        }} />
                        <h3 style={{
                            fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                            fontWeight: '600', // Semibold
                            color: 'rgba(255, 255, 255, 0.85)',
                            margin: 0,
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase'
                        }}>
                            Collaborate & Revive
                        </h3>
                    </motion.div>
                </div>
            </div>
        </Slide>
    );
}
