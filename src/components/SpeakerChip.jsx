import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SpeakerChip({ speaker }) {
    // speaker: { name: string, role: string, image?: string }
    if (!speaker) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, x: -100, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -100, scale: 0.8 }}
                transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                style={{
                    position: 'fixed',
                    bottom: '2rem',
                    left: '2rem',
                    zIndex: 100,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-md)',
                    background: 'var(--color-surface)',
                    padding: 'var(--space-md) var(--space-lg)',
                    borderRadius: 'var(--radius-full)',
                    border: '1px solid var(--color-border-subtle)', // Reduced border width and opacity
                    backdropFilter: 'blur(var(--glass-blur))',
                    boxShadow: 'var(--shadow-lg)', // Removed the strong colored glow
                }}
            >
                {/* Avatar with Gradient & Pulse */}
                <motion.div
                    animate={{
                        boxShadow: [
                            '0 0 10px var(--color-accent-primary)',
                            '0 0 20px var(--color-accent-primary)',
                            '0 0 10px var(--color-accent-primary)',
                        ],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '50%',
                        background: 'var(--gradient-primary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontWeight: 'var(--font-weight-extrabold)',
                        fontSize: 'var(--font-size-lg)',
                        border: '2px solid white',
                    }}
                >
                    {speaker.name.charAt(0)}
                </motion.div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
                        <div
                            style={{
                                width: '8px',
                                height: '8px',
                                borderRadius: '50%',
                                background: 'var(--color-accent-primary)',
                                boxShadow: '0 0 10px var(--color-accent-primary)',
                            }}
                        />
                        <AnimatePresence mode='wait'>
                            <motion.span
                                key={speaker.name}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                style={{
                                    fontWeight: 'var(--font-weight-bold)',
                                    fontSize: 'var(--font-size-base)',
                                    color: 'var(--color-text-primary)',
                                }}
                            >
                                {speaker.name}
                            </motion.span>
                        </AnimatePresence>
                    </div>
                    <AnimatePresence mode='wait'>
                        <motion.span
                            key={speaker.role}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            style={{
                                fontSize: 'var(--font-size-xs)',
                                color: 'var(--color-text-tertiary)',
                                textTransform: 'uppercase',
                                letterSpacing: '0.5px',
                                fontWeight: 'var(--font-weight-semibold)',
                                paddingLeft: 'calc(var(--space-sm) + 8px)',
                            }}
                        >
                            {speaker.role}
                        </motion.span>
                    </AnimatePresence>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}

