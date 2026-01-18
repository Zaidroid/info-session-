import React from 'react';
import Slide from '../components/Slide';
import { motion } from 'framer-motion';
import gsgLogo from '../assets/gsg-logo.png';
import mcLogo from '../assets/mc-logo.png';
import elevateLogo from '../assets/elevate-logo.png';

export default function Intro() {
    return (
        <Slide>
            <div style={{ textAlign: 'center', zIndex: 1 }}>
                {/* Partner Logos (Top) */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr auto 1fr',
                        alignItems: 'center',
                        gap: '4rem',
                        marginBottom: 'var(--space-2xl)',
                        width: '100%',
                        maxWidth: '1400px', // Ensure it doesn't get too spread out on huge screens
                        marginInline: 'auto'
                    }}
                >
                    {/* Left: Mercy Corps */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '4rem' }}>
                        <img src={mcLogo} alt="Mercy Corps" style={{ height: '200px', opacity: 0.9, objectFit: 'contain' }} />
                        <div style={{ width: '2px', height: '160px', background: 'var(--color-border-subtle)' }} />
                    </div>

                    {/* Center: GSG */}
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <img src={gsgLogo} alt="Gaza Sky Geeks" style={{ height: '230px', opacity: 0.9, objectFit: 'contain' }} />
                    </div>

                    {/* Right: Elevate */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '4rem' }}>
                        <div style={{ width: '2px', height: '160px', background: 'var(--color-border-subtle)' }} />
                        <img src={elevateLogo} alt="Elevate" style={{ height: '230px', opacity: 0.9, objectFit: 'contain' }} />
                    </div>
                </motion.div>

                {/* Animated Divider */}
                <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 'min(250px, 60%)', opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
                    style={{
                        height: '5px',
                        background: 'var(--gradient-accent)',
                        margin: '0 auto var(--space-2xl)',
                        borderRadius: 'var(--radius-full)',
                        boxShadow: 'var(--shadow-glow)',
                    }}
                />

                {/* Subtitle */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.6 }}
                    style={{
                        fontSize: 'clamp(1.5rem, 2.5vmin, 2.5rem)',
                        fontWeight: 'var(--font-weight-light)',
                        color: 'var(--color-text-primary)',
                        marginBottom: 'var(--space-3xl)',
                    }}
                >
                    Impact & Future Horizons
                </motion.div>

                {/* Floating Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.3, duration: 0.5 }}
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 'var(--space-sm)',
                        padding: 'var(--space-md) var(--space-xl)',
                        background: 'var(--color-surface)',
                        backdropFilter: 'blur(var(--glass-blur))',
                        borderRadius: 'var(--radius-full)',
                        border: '1px solid var(--color-border-subtle)',
                        boxShadow: 'var(--shadow-lg)',
                        fontSize: 'var(--font-size-lg)',
                        color: 'var(--color-text-secondary)',
                    }}
                >
                    <span>Palestine's Leading Tech Hub</span>
                </motion.div>

                {/* Event Name */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 0.6 }}
                    style={{
                        marginTop: 'var(--space-xl)',
                        marginBottom: 'var(--space-2xl)',
                    }}
                >
                    <h2 style={{
                        fontSize: '1.8rem',
                        fontWeight: '600',
                        color: 'var(--color-text-primary)',
                        lineHeight: 1.3,
                        maxWidth: '800px',
                        margin: '0 auto'
                    }}>
                        Gaza Sky Geeks: Elevate Program<br />
                        <span style={{ color: 'var(--color-text-secondary)', fontWeight: '400' }}>Impact and Future Horizons</span>
                    </h2>
                </motion.div>
            </div>
        </Slide>
    );
}

