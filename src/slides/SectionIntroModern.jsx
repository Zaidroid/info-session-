import React from 'react';
import { motion } from 'framer-motion';
import Slide from '../components/Slide';

export default function SectionIntroModern({ title, subtitle, presenter, role, presenterPhoto, part, topImage }) {
    return (
        <Slide>
            <div style={{
                display: 'flex',
                width: '100%',
                height: '100%',
                gap: 'var(--space-3xl)',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0 var(--space-3xl)',
                maxWidth: '1400px',
                margin: '0 auto'
            }}>
                {/* LEFT PANEL: Branding Area */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    style={{
                        flex: '0 0 40%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 'var(--space-2xl)',
                    }}
                >
                    {/* Part Badge */}
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                        className="badge badge-primary"
                        style={{
                            padding: 'var(--space-md) var(--space-2xl)',
                            fontSize: 'var(--font-size-lg)',
                            fontWeight: 'var(--font-weight-bold)',
                            letterSpacing: '2px',
                            boxShadow: 'var(--shadow-glow)',
                            animation: 'pulse 3s ease-in-out infinite'
                        }}
                    >
                        {part}
                    </motion.div>

                    {/* Logo Container with Contrast Background */}
                    {topImage && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8, type: 'spring' }}
                            style={{
                                background: 'rgba(255,255,255,0.03)', // Much more subtle background
                                backdropFilter: 'blur(var(--glass-blur))',
                                WebkitBackdropFilter: 'blur(var(--glass-blur))',
                                border: '1px solid rgba(255,255,255,0.08)', // Fainter border
                                borderRadius: 'var(--radius-2xl)',
                                padding: 'var(--space-xl)', // Increased padding
                                boxShadow: 'var(--shadow-lg)', // Softer shadow
                                position: 'relative',
                                overflow: 'visible', // Allow slight overlap if needed, or stick to hidden but nicer
                            }}
                        >
                            {/* Decorative gradient background */}
                            <div style={{
                                position: 'absolute',
                                inset: 0,
                                background: 'radial-gradient(circle at 50% 50%, rgba(222, 99, 54, 0.05) 0%, transparent 60%)', // Very faint glow
                                pointerEvents: 'none',
                                borderRadius: 'var(--radius-2xl)' // Match container radius
                            }} />

                            <motion.img
                                src={topImage}
                                alt="Section Logo"
                                animate={{
                                    y: [0, -10, 0],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: 'easeInOut'
                                }}
                                style={{
                                    maxHeight: '350px',
                                    width: 'auto',
                                    maxWidth: '450px',
                                    filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.15))',
                                    objectFit: 'contain',
                                    position: 'relative',
                                    zIndex: 1
                                }}
                            />
                        </motion.div>
                    )}

                    {/* Decorative Elements */}
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '120px' }}
                        transition={{ delay: 1.0, duration: 0.8 }}
                        style={{
                            height: '4px',
                            background: 'var(--gradient-accent)',
                            borderRadius: 'var(--radius-full)',
                            boxShadow: 'var(--shadow-glow)',
                        }}
                    />
                </motion.div>

                {/* RIGHT PANEL: Content & Speaker */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    style={{
                        flex: '1',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 'var(--space-xl)',
                        alignItems: 'flex-start',
                    }}
                >
                    {/* Main Title */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.7 }}
                    >
                        <h1
                            className="gradient-text"
                            style={{
                                fontSize: 'clamp(3rem, 7vmin, 6rem)',
                                fontWeight: 'var(--font-weight-extrabold)',
                                marginBottom: subtitle ? 'var(--space-md)' : 'var(--space-xl)',
                                lineHeight: 'var(--line-height-tight)',
                                letterSpacing: '-0.02em'
                            }}
                        >
                            {title}
                        </h1>

                        {/* Subtitle */}
                        {subtitle && (
                            <motion.h2
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.8, duration: 0.6 }}
                                style={{
                                    fontSize: 'clamp(1.5rem, 3vmin, 2.5rem)',
                                    fontWeight: 'var(--font-weight-semibold)',
                                    color: 'var(--color-accent-secondary)',
                                    marginBottom: 'var(--space-lg)',
                                }}
                            >
                                {subtitle}
                            </motion.h2>
                        )}
                    </motion.div>

                    {/* Animated Divider */}
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ delay: 1.0, duration: 0.8 }}
                        style={{
                            height: '2px',
                            background: 'linear-gradient(90deg, var(--color-accent-primary) 0%, transparent 100%)',
                            borderRadius: 'var(--radius-full)',
                            maxWidth: '400px'
                        }}
                    />

                    {/* Speaker Card */}
                    {(presenter || presenterPhoto) && (
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.2, duration: 0.6, type: 'spring' }}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 'var(--space-xl)',
                                padding: 'var(--space-xl)',
                                background: 'var(--color-surface)',
                                backdropFilter: 'blur(var(--glass-blur))',
                                WebkitBackdropFilter: 'blur(var(--glass-blur))',
                                borderRadius: 'var(--radius-xl)',
                                border: '1px solid var(--color-border-subtle)',
                                boxShadow: 'var(--shadow-lg)',
                                transition: 'all var(--duration-normal) var(--ease-out)',
                                cursor: 'default',
                                minWidth: '400px'
                            }}
                            whileHover={{
                                scale: 1.02,
                                boxShadow: '0 20px 40px rgba(0,0,0,0.15)'
                            }}
                        >
                            {/* Speaker Photo */}
                            {presenterPhoto && (
                                <div style={{
                                    width: '90px',
                                    height: '90px',
                                    borderRadius: '50%',
                                    overflow: 'hidden',
                                    border: '3px solid var(--color-accent-primary)',
                                    boxShadow: 'var(--shadow-glow)',
                                    flexShrink: 0
                                }}>
                                    <img
                                        src={presenterPhoto}
                                        alt={presenter}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            objectPosition: 'top'
                                        }}
                                    />
                                </div>
                            )}

                            {/* Speaker Info */}
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 'var(--space-xs)',
                                flex: 1
                            }}>
                                <div style={{
                                    fontSize: 'var(--font-size-sm)',
                                    color: 'var(--color-text-tertiary)',
                                    fontWeight: 'var(--font-weight-semibold)',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px'
                                }}>
                                    Presented by
                                </div>
                                <div style={{
                                    fontSize: 'var(--font-size-2xl)',
                                    fontWeight: 'var(--font-weight-bold)',
                                    color: 'var(--color-text-primary)',
                                    lineHeight: 'var(--line-height-tight)'
                                }}>
                                    {presenter}
                                </div>
                                {role && (
                                    <div style={{
                                        fontSize: 'var(--font-size-base)',
                                        color: 'var(--color-text-secondary)',
                                        fontWeight: 'var(--font-weight-medium)',
                                        lineHeight: 'var(--line-height-snug)'
                                    }}>
                                        {role}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    )}
                </motion.div>
            </div>

            {/* Floating Particles for Visual Interest */}
            <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{
                            x: Math.random() * window.innerWidth,
                            y: Math.random() * window.innerHeight,
                            opacity: 0
                        }}
                        animate={{
                            y: [null, Math.random() * window.innerHeight],
                            opacity: [0, 0.3, 0],
                        }}
                        transition={{
                            duration: 8 + Math.random() * 4,
                            repeat: Infinity,
                            delay: i * 0.3,
                            ease: 'easeInOut'
                        }}
                        style={{
                            position: 'absolute',
                            width: `${4 + Math.random() * 8}px`,
                            height: `${4 + Math.random() * 8}px`,
                            borderRadius: '50%',
                            background: i % 2 === 0 ? 'var(--color-accent-primary)' : 'var(--color-accent-secondary)',
                            filter: 'blur(2px)',
                        }}
                    />
                ))}
            </div>
        </Slide>
    );
}
