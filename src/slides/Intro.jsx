import React from 'react';
import Slide from '../components/Slide';
import { motion } from 'framer-motion';
import gsgLogo from '../assets/gsg-logo.png';
import mcLogo from '../assets/mc-logo.png';
import elevateLogo from '../assets/elevate-logo.png';
// TODO: Add donor logos to public folder:
// - /public/sida-logo.png (Swedish International Development Cooperation Agency)
// - /public/dutch-gov-logo.png (The Dutch Government)

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
                        maxWidth: '1400px',
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

                {/* Main Title */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.6 }}
                    style={{
                        fontSize: 'clamp(2rem, 3.5vmin, 3.5rem)',
                        fontWeight: 'var(--font-weight-bold)',
                        color: 'var(--color-text-primary)',
                        marginBottom: 'var(--space-lg)',
                    }}
                >
                    Discover and Discuss <span className="gradient-text">Elevate Program 2026</span>
                </motion.div>

                {/* Donors Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.3, duration: 0.5 }}
                    style={{
                        display: 'inline-flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 'var(--space-lg)',
                        padding: 'var(--space-2xl) var(--space-3xl)',
                        background: 'var(--color-surface)',
                        backdropFilter: 'blur(var(--glass-blur))',
                        borderRadius: 'var(--radius-2xl)',
                        border: '1px solid var(--color-border-subtle)',
                        boxShadow: 'var(--shadow-lg)',
                        marginTop: 'var(--space-2xl)',
                    }}
                >
                    <span style={{
                        fontSize: 'var(--font-size-xs)',
                        textTransform: 'uppercase',
                        letterSpacing: '2px',
                        color: 'var(--color-text-tertiary)',
                        fontWeight: 'var(--font-weight-bold)',
                    }}>
                        Supported By
                    </span>
                    
                    {/* Donor Logos Row - Centered */}
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 'var(--space-2xl)',
                    }}>
                        {/* Sida Logo */}
                        <img 
                            src="/sida-logo.png" 
                            alt="Sida" 
                            style={{ 
                                height: '70px', 
                                objectFit: 'contain'
                            }} 
                            onError={(e) => {
                                e.target.style.display = 'none';
                            }}
                        />

                        <div style={{ 
                            width: '2px', 
                            height: '60px', 
                            background: 'var(--color-border-subtle)' 
                        }} />

                        {/* Dutch Government Logo */}
                        <img 
                            src="/dutch-gov-logo.png" 
                            alt="Dutch Government" 
                            style={{ 
                                height: '70px', 
                                objectFit: 'contain'
                            }} 
                            onError={(e) => {
                                e.target.style.display = 'none';
                            }}
                        />
                    </div>
                </motion.div>
            </div>
        </Slide>
    );
}
