import React, { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import SpeakerChip from './SpeakerChip';
import ParticleBackground from './ParticleBackground';
import { motion } from 'framer-motion';

function Background({ theme }) {
    return (
        <div style={{
            position: 'fixed',
            top: 0, left: 0, width: '100%', height: '100%',
            zIndex: -1,
            background: 'var(--color-bg-primary)',
            overflow: 'hidden',
            transition: 'background var(--duration-normal)',
        }}>
            {/* Animated Gradient Orbs */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.4, 0.2],
                    rotate: [0, 90, 0]
                }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                style={{
                    position: 'absolute',
                    top: '-15%', left: '-8%',
                    width: 'clamp(400px, 50vw, 900px)',
                    height: 'clamp(400px, 50vw, 900px)',
                    borderRadius: '50%',
                    background: 'var(--gradient-radial-primary)',
                    opacity: 0.3,
                    filter: 'blur(90px)',
                }}
            />
            <motion.div
                animate={{
                    scale: [1, 1.4, 1],
                    x: [0, 150, 0],
                    opacity: [0.15, 0.3, 0.15],
                }}
                transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                    position: 'absolute',
                    bottom: '-15%', right: '-8%',
                    width: 'clamp(350px, 45vw, 850px)',
                    height: 'clamp(350px, 45vw, 850px)',
                    borderRadius: '50%',
                    background: 'var(--gradient-radial-secondary)',
                    opacity: 0.2,
                    filter: 'blur(100px)',
                }}
            />

            {/* Particle Network */}
            <ParticleBackground theme={theme} particleCount={60} />
        </div>
    );
}

export default function Layout({ children, activeSpeaker }) {
    const [theme, setTheme] = useState('dark');

    // Detect theme from data-theme attribute
    useEffect(() => {
        const observer = new MutationObserver(() => {
            const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
            setTheme(currentTheme);
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['data-theme'],
        });

        // Initial theme
        setTheme(document.documentElement.getAttribute('data-theme') || 'dark');

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <Background theme={theme} />
            <ThemeToggle />
            <main style={{
                position: 'relative',
                width: '100vw',
                height: '100vh',
                perspective: '1500px',
                overflow: 'hidden'
            }}>
                {children}
            </main>
        </>
    );
}

