import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Slide from '../components/Slide';

export default function ClosingCTA() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Slide>
            <div style={{ textAlign: 'center', position: 'relative', zIndex: 10 }}>
                {/* Background Ambient Glow */}
                <div style={{
                    position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                    width: '600px', height: '600px',
                    background: 'radial-gradient(circle, var(--color-accent-primary) 0%, transparent 70%)',
                    opacity: 0.1,
                    filter: 'blur(80px)',
                    zIndex: -1,
                }} />

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    style={{ fontSize: 'clamp(2.5rem, 5vmin, 3.5rem)', marginBottom: 'var(--space-lg)' }}
                >
                    Ready to <span className="gradient-text">Elevate?</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    style={{ fontSize: 'clamp(1.25rem, 2.5vmin, 1.5rem)', marginBottom: 'var(--space-4xl)', color: 'var(--color-text-secondary)' }}
                >
                    Join the next wave of Palestinian Tech Excellence.
                </motion.p>

                {/* Immersive QR Code Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: 0.6, type: 'spring', stiffness: 60 }}
                    onHoverStart={() => setIsHovered(true)}
                    onHoverEnd={() => setIsHovered(false)}
                    style={{
                        display: 'inline-block',
                        position: 'relative',
                        cursor: 'pointer',
                    }}
                >
                    {/* Glowing Card Container */}
                    <motion.div
                        animate={{
                            boxShadow: isHovered
                                ? '0 30px 60px -10px rgba(var(--brand-red), 0.3)'
                                : '0 20px 40px -10px rgba(0,0,0,0.2)',
                            y: isHovered ? -5 : 0
                        }}
                        style={{
                            padding: '0',
                            background: 'transparent',
                            borderRadius: '24px',
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                    >
                        {/* Animated Border Shimmer */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            style={{
                                position: 'absolute', top: '-50%', left: '-50%', width: '200%', height: '200%',
                                background: 'conic-gradient(transparent, transparent, rgba(255,255,255,0.8), transparent)',
                                opacity: 0.3,
                                pointerEvents: 'none',
                                mixBlendMode: 'overlay',
                            }}
                        />

                        {/* Card Content */}
                        <div style={{
                            background: 'var(--color-surface)',
                            padding: 'var(--space-xl)',
                            borderRadius: '24px',
                            position: 'relative',
                            backdropFilter: 'blur(10px)',
                        }}>
                            <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '16px' }}>
                                {/* Scanning Beam Effect */}
                                <motion.div
                                    animate={{ top: ['0%', '100%', '0%'] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                    style={{
                                        position: 'absolute',
                                        left: 0,
                                        width: '100%',
                                        height: '4px',
                                        background: 'var(--color-accent-primary)',
                                        boxShadow: '0 0 20px var(--color-accent-primary)',
                                        zIndex: 10,
                                        opacity: 0.8,
                                    }}
                                />

                                <img
                                    src="/qr-download-final.png"
                                    alt="Scan to Apply"
                                    style={{
                                        display: 'block',
                                        width: 'auto',
                                        height: '350px',
                                        borderRadius: '16px',
                                        userSelect: 'none',
                                    }}
                                />
                            </div>

                            {/* Button */}
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                style={{
                                    marginTop: 'var(--space-lg)',
                                    width: '100%',
                                    padding: 'var(--space-md)',
                                    background: 'var(--gradient-primary)',
                                    border: 'none',
                                    borderRadius: '12px',
                                    color: 'white',
                                    fontWeight: 'var(--font-weight-bold)',
                                    fontSize: 'var(--font-size-lg)',
                                    boxShadow: '0 10px 20px -5px rgba(222, 99, 54, 0.4)',
                                    cursor: 'pointer',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}
                            >
                                <span style={{ position: 'relative', zIndex: 1 }}>Apply Now</span>

                                {/* Button Shine */}
                                <motion.div
                                    initial={{ x: '-100%' }}
                                    whileHover={{ x: '100%' }}
                                    transition={{ duration: 0.5 }}
                                    style={{
                                        position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                                        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                                        skewX: '-20deg'
                                    }}
                                />
                            </motion.button>
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6 }}
                    transition={{ delay: 1.2 }}
                    style={{ marginTop: 'var(--space-2xl)' }}
                >
                    <p style={{ fontSize: 'var(--font-size-base)', fontWeight: 'var(--font-weight-medium)' }}>
                        Applications Open until March 2026
                    </p>
                </motion.div>
            </div>
        </Slide>
    );
}

