import React from 'react';
import Slide from '../components/Slide';
import { motion } from 'framer-motion';

export default function Intro() {
    return (
        <Slide>
            <div style={{ textAlign: 'center', zIndex: 1 }}>
                {/* Main Title with Gradient */}
                {/* Main Logo with Animation */}
                <motion.div
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                    style={{ marginBottom: 'var(--space-lg)' }}
                >
                    <img
                        src="/logo-full.png" // Assumes copied successfully to public/logo-full.png
                        alt="Gaza Sky Geeks"
                        style={{
                            height: 'auto',
                            width: 'min(500px, 80vw)', // Responsive width
                            filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.15))'
                        }}
                    />
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
                    <span>Empowering Palestinian Tech</span>
                </motion.div>
            </div>
        </Slide>
    );
}

