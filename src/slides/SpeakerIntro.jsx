import React from 'react';
import { motion } from 'framer-motion';
import Slide from '../components/Slide';

export default function SpeakerIntro({ name, role, photoUrl, bio }) {
    return (
        <Slide>
            <div style={{
                width: '100%',
                height: '100%',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 'var(--space-2xl)',
                alignItems: 'center'
            }}>
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    style={{ display: 'flex', justifyContent: 'center' }}
                >
                    <div style={{
                        position: 'relative',
                        width: '350px',
                        height: '450px',
                        borderRadius: '24px',
                        overflow: 'hidden',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                        border: '1px solid rgba(255,255,255,0.1)'
                    }}>
                        {photoUrl ? (
                            <img src={photoUrl} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        ) : (
                            <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '1rem', color: '#555' }}>
                                <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)' }} />
                            </div>
                        )}

                        {/* Decorative Gradient Overlay */}
                        <div style={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            width: '100%',
                            height: '50%',
                            background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)'
                        }} />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <h2 className="gradient-text" style={{ fontSize: 'var(--font-size-4xl)', marginBottom: 'var(--space-xs)' }}>
                        {name}
                    </h2>
                    <h3 style={{ fontSize: 'var(--font-size-xl)', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-xl)' }}>
                        {role}
                    </h3>

                    {bio && (
                        <p style={{ fontSize: 'var(--font-size-lg)', lineHeight: '1.6', color: 'var(--color-text-primary)' }}>
                            {bio}
                        </p>
                    )}
                </motion.div>
            </div>
        </Slide>
    );
}
