import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Scan, ArrowRight, Users, Briefcase, Award, Heart } from 'lucide-react';
import Slide from '../components/Slide';

export default function ClosingCTA() {
    return (
        <Slide>
            <div style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                zIndex: 10
            }}>
                {/* Background Ambient Glow */}
                <div style={{
                    position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                    width: '80vw', height: '80vw',
                    background: 'radial-gradient(circle, var(--color-accent-primary) 0%, transparent 60%)',
                    opacity: 0.08,
                    filter: 'blur(100px)',
                    zIndex: -1,
                }} />

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    style={{ textAlign: 'center', marginBottom: 'var(--space-2xl)' }}
                >
                    <h2 style={{ fontSize: 'clamp(2.5rem, 5vmin, 4rem)', fontWeight: 900, marginBottom: 'var(--space-xs)' }}>
                        Ready to <span className="gradient-text">Apply?</span>
                    </h2>
                    <p style={{ fontSize: '1.25rem', color: 'var(--color-text-secondary)' }}>
                        Fill in your application and join Elevate Program 2026
                    </p>
                </motion.div>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-2xl)' }}>
                    {/* Application Steps */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        style={{
                            display: 'flex',
                            gap: '2rem',
                            marginBottom: 'var(--space-lg)'
                        }}
                    >
                        {[
                            { step: '1', label: 'Scan QR Code', icon: Scan },
                            { step: '2', label: 'Fill Application', icon: Users },
                            { step: '3', label: 'Submit & Wait', icon: ArrowRight }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.5 + (idx * 0.1) }}
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    gap: '0.75rem'
                                }}
                            >
                                <div style={{
                                    width: '60px',
                                    height: '60px',
                                    borderRadius: '50%',
                                    background: 'var(--gradient-accent)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '1.5rem',
                                    fontWeight: 800,
                                    color: 'white',
                                    boxShadow: 'var(--shadow-glow)'
                                }}>
                                    {item.step}
                                </div>
                                <div style={{
                                    fontSize: '0.95rem',
                                    color: 'var(--color-text-secondary)',
                                    fontWeight: 600
                                }}>
                                    {item.label}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* QR Code */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ delay: 0.8, type: 'spring', stiffness: 100, damping: 20 }}
                        whileHover={{ scale: 1.05 }}
                        style={{
                            background: 'linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%)',
                            padding: '2rem',
                            borderRadius: '40px',
                            boxShadow: '0 30px 60px -15px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.2) inset',
                            display: 'inline-flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            position: 'relative',
                        }}
                    >
                        {/* Scanning markers */}
                        <div style={{ position: 'absolute', top: 20, left: 20, width: 40, height: 40, borderTop: '5px solid var(--brand-orange)', borderLeft: '5px solid var(--brand-orange)', borderRadius: '12px 0 0 0' }} />
                        <div style={{ position: 'absolute', top: 20, right: 20, width: 40, height: 40, borderTop: '5px solid var(--brand-orange)', borderRight: '5px solid var(--brand-orange)', borderRadius: '0 12px 0 0' }} />
                        <div style={{ position: 'absolute', bottom: 20, left: 20, width: 40, height: 40, borderBottom: '5px solid var(--brand-orange)', borderLeft: '5px solid var(--brand-orange)', borderRadius: '0 0 0 12px' }} />
                        <div style={{ position: 'absolute', bottom: 20, right: 20, width: 40, height: 40, borderBottom: '5px solid var(--brand-orange)', borderRight: '5px solid var(--brand-orange)', borderRadius: '0 0 12px 0' }} />

                        <img
                            src="/new-qr.png"
                            alt="Application QR Code"
                            style={{
                                width: '380px',
                                height: '380px',
                                display: 'block',
                                borderRadius: '16px',
                                margin: '10px'
                            }}
                        />

                        <motion.div
                            animate={{ opacity: [0.6, 1, 0.6] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            style={{
                                marginTop: '1.5rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.6rem',
                                color: 'var(--brand-orange)',
                                fontWeight: 800,
                                textTransform: 'uppercase',
                                letterSpacing: '1.5px',
                                fontSize: '1.1rem'
                            }}
                        >
                            <Scan size={28} strokeWidth={3} />
                            Scan to Apply Now
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        style={{
                            textAlign: 'center',
                            padding: '1.5rem 2rem',
                            background: 'rgba(255,255,255,0.05)',
                            borderRadius: '16px',
                            border: '1px solid rgba(255,255,255,0.1)',
                            maxWidth: '600px'
                        }}
                    >
                        <p style={{
                            fontSize: '1.1rem',
                            color: 'var(--color-text-primary)',
                            margin: 0,
                            fontWeight: 600
                        }}>
                            Applications are now open for Elevate Program 2026
                        </p>
                        <p style={{
                            fontSize: '0.95rem',
                            color: 'var(--color-text-secondary)',
                            margin: '0.5rem 0 0 0'
                        }}>
                            Scan the QR code with your phone camera to access the application form
                        </p>
                    </motion.div>
                </div>
            </div>
        </Slide>
    );
}

