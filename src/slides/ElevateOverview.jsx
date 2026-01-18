import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Megaphone, Monitor, Code, Briefcase, Award } from 'lucide-react';
import Slide from '../components/Slide';
import FeedbackWall from '../components/FeedbackWall';
import { staggerContainer, fadeInUp } from '../utils/animations';

export default function ElevateOverview() {
    const pillars = [
        {
            title: "Capacity Building",
            subtitle: "Talent & Training",
            description: "Upskilling individuals and teams to meet global standards.",
            color: "var(--color-accent-primary)",
            icon: Code,
            delay: 0
        },
        {
            title: "Marketing & Branding",
            subtitle: "Visibility & Growth",
            description: "Enhancing digital presence to attract international clients.",
            color: "var(--color-accent-secondary)",
            icon: Megaphone,
            delay: 1 // For floating offset
        },
        {
            title: "Market Access",
            subtitle: "Global Connections",
            description: "Bridging the gap to international contracts and revenue.",
            color: "#FFB020", // Amber
            icon: TrendingUp,
            delay: 0.5
        }
    ];

    return (
        <Slide>
            {/* Background - FeedbackWall */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0,
                opacity: 0.2
            }}>
                <FeedbackWall />
            </div>

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
                    position: 'relative',
                    zIndex: 1,
                    padding: '0 5%'
                }}
            >
                <motion.div variants={fadeInUp} style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <div className="badge badge-primary" style={{ marginBottom: '1rem' }}>
                        Program Overview
                    </div>
                    <h2 style={{ fontSize: 'clamp(3rem, 6vmin, 5rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '1rem' }}>
                        The <span className="gradient-text">Elevate</span> Program
                    </h2>
                    <p style={{ fontSize: '1.4rem', color: 'var(--color-text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
                        A comprehensive ecosystem designed to accelerate tech growth in Palestine.
                    </p>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '2.5rem',
                    width: '100%',
                    maxWidth: '1400px'
                }}>
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp} // Use the standard variant
                            whileHover={{
                                scale: 1.02,
                                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                                transition: { duration: 0.2 }
                            }}
                            className="glass"
                            style={{
                                padding: '3rem',
                                borderRadius: '24px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'center',
                                textAlign: 'left',
                                border: '1px solid rgba(255,255,255,0.08)',
                                // No colored top border
                                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                                position: 'relative',
                                overflow: 'hidden',
                                height: '100%',
                                transition: 'box-shadow 0.3s ease'
                            }}
                        >
                            {/* Subtle colored accent glow in background instead of border */}
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '5px',
                                background: `linear-gradient(90deg, ${pillar.color}, transparent)`,
                                opacity: 0.8
                            }} />

                            {/* Accent Glow Blob */}
                            <div style={{
                                position: 'absolute',
                                top: '-20px',
                                right: '-20px',
                                width: '150px',
                                height: '150px',
                                background: `radial-gradient(circle, ${pillar.color}20 0%, transparent 70%)`,
                                pointerEvents: 'none',
                                filter: 'blur(20px)'
                            }} />

                            <h3 style={{
                                fontSize: '2rem',
                                fontWeight: 800,
                                marginBottom: '0.5rem',
                                color: 'var(--color-text-primary)'
                            }}>
                                {pillar.title}
                            </h3>
                            <div style={{
                                fontSize: '0.9rem',
                                fontWeight: 700,
                                textTransform: 'uppercase',
                                letterSpacing: '1px',
                                color: pillar.color,
                                marginBottom: '1.5rem',
                                opacity: 0.9
                            }}>
                                {pillar.subtitle}
                            </div>
                            <p style={{ fontSize: '1.05rem', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                                {pillar.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </Slide>
    );
}
