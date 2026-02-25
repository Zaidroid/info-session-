import React from 'react';
import { motion } from 'framer-motion';
import Slide from '../components/Slide';
import { Target, Eye, Heart, Zap } from 'lucide-react';
import { staggerContainer, fadeInUp } from '../utils/animations';

export default function GSGVisionMission() {
    return (
        <Slide>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer(0.2)}
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '0 5%'
                }}
            >
                {/* Header */}
                <motion.div variants={fadeInUp} style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <div className="badge badge-primary" style={{ marginBottom: '1rem' }}>
                        Who We Are
                    </div>
                    <h2 style={{ fontSize: 'clamp(3rem, 6vmin, 5rem)', fontWeight: 900, lineHeight: 1.1 }}>
                        Gaza Sky <span className="gradient-text">Geeks</span>
                    </h2>
                </motion.div>

                {/* Vision & Mission Cards */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '3rem',
                    width: '100%',
                    maxWidth: '1200px',
                    marginBottom: '3rem'
                }}>
                    {/* Vision Card */}
                    <motion.div
                        variants={fadeInUp}
                        whileHover={{ scale: 1.02, y: -5 }}
                        className="glass"
                        style={{
                            padding: '3rem',
                            borderRadius: '24px',
                            border: '1px solid rgba(255,255,255,0.1)',
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                    >
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '5px',
                            background: 'linear-gradient(90deg, var(--color-accent-primary), transparent)'
                        }} />
                        
                        <div style={{
                            width: '70px',
                            height: '70px',
                            borderRadius: '50%',
                            background: 'rgba(222, 99, 54, 0.2)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '1.5rem'
                        }}>
                            <Eye size={36} color="var(--color-accent-primary)" />
                        </div>

                        <h3 style={{
                            fontSize: '2rem',
                            fontWeight: 800,
                            marginBottom: '1rem',
                            color: 'var(--color-text-primary)'
                        }}>
                            Our Vision
                        </h3>

                        <p style={{
                            fontSize: '1.15rem',
                            color: 'var(--color-text-secondary)',
                            lineHeight: 1.7
                        }}>
                            To build a globally respected, sustainable tech ecosystem in Palestine that drives economic growth, inspires innovation, and contributes to rebuilding Gaza through opportunity and resilience.
                        </p>
                    </motion.div>

                    {/* Mission Card */}
                    <motion.div
                        variants={fadeInUp}
                        whileHover={{ scale: 1.02, y: -5 }}
                        className="glass"
                        style={{
                            padding: '3rem',
                            borderRadius: '24px',
                            border: '1px solid rgba(255,255,255,0.1)',
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                    >
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '5px',
                            background: 'linear-gradient(90deg, var(--color-accent-secondary), transparent)'
                        }} />
                        
                        <div style={{
                            width: '70px',
                            height: '70px',
                            borderRadius: '50%',
                            background: 'rgba(48, 157, 196, 0.2)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '1.5rem'
                        }}>
                            <Target size={36} color="var(--color-accent-secondary)" />
                        </div>

                        <h3 style={{
                            fontSize: '2rem',
                            fontWeight: 800,
                            marginBottom: '1rem',
                            color: 'var(--color-text-primary)'
                        }}>
                            Our Mission
                        </h3>

                        <p style={{
                            fontSize: '1.15rem',
                            color: 'var(--color-text-secondary)',
                            lineHeight: 1.7
                        }}>
                            To empower young Palestinians and businesses to unlock their potential, achieve economic independence, and thrive in the global tech industry.
                        </p>
                    </motion.div>
                </div>

                {/* Core Values */}
                <motion.div
                    variants={fadeInUp}
                    style={{
                        display: 'flex',
                        gap: '2rem',
                        justifyContent: 'center',
                        flexWrap: 'wrap'
                    }}
                >
                    {[
                        { icon: Heart, label: 'Community First', color: '#ef4444' },
                        { icon: Zap, label: 'Innovation Driven', color: '#f59e0b' },
                        { icon: Target, label: 'Impact Focused', color: '#10b981' }
                    ].map((value, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ scale: 1.05 }}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.75rem',
                                padding: '1rem 1.5rem',
                                background: 'rgba(255,255,255,0.05)',
                                borderRadius: '16px',
                                border: '1px solid rgba(255,255,255,0.1)'
                            }}
                        >
                            <value.icon size={24} color={value.color} />
                            <span style={{
                                fontSize: '1rem',
                                fontWeight: 600,
                                color: 'var(--color-text-primary)'
                            }}>
                                {value.label}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </Slide>
    );
}
