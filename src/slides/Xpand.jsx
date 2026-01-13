import React from 'react';
import { motion } from 'framer-motion';
import Slide from '../components/Slide';
import { fadeInUp } from '../utils/animations';

export default function Xpand() {
    return (
        <Slide>
            <motion.div
                initial="hidden"
                animate="visible"
                style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}
            >
                <motion.h2 variants={fadeInUp} style={{ marginBottom: 'var(--space-lg)' }}>
                    <span className="gradient-text" style={{ fontSize: 'clamp(3rem, 6vmin, 5rem)' }}>XPAND</span>
                </motion.h2>

                <motion.p
                    variants={fadeInUp}
                    style={{ fontSize: 'var(--font-size-xl)', color: 'var(--color-text-secondary)', maxWidth: '800px', marginBottom: 'var(--space-2xl)' }}
                >
                    Expanding Horizons for Palestinian Tech
                </motion.p>

                {/* Visual Graphic Reprsenting Expansion */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    style={{
                        position: 'relative',
                        width: '300px',
                        height: '300px',
                    }}
                >
                    <div style={{
                        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                        width: '100px', height: '100px',
                        borderRadius: '50%',
                        background: 'var(--color-accent-primary)',
                        filter: 'blur(20px)',
                        opacity: 0.5
                    }} />

                    {[...Array(3)].map((_, i) => (
                        <motion.div
                            key={i}
                            animate={{ scale: [1, 2], opacity: [0.8, 0] }}
                            transition={{ duration: 3, delay: i * 1, repeat: Infinity, ease: 'easeOut' }}
                            style={{
                                position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                                width: '100px', height: '100px',
                                borderRadius: '50%',
                                border: '2px solid var(--color-accent-secondary)',
                                opacity: 0
                            }}
                        />
                    ))}
                </motion.div>
            </motion.div>
        </Slide>
    );
}
