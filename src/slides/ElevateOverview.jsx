import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Megaphone, Monitor, Code, Briefcase } from 'lucide-react';
import Slide from '../components/Slide';
import { staggerContainer, fadeInUp } from '../utils/animations';

export default function ElevateOverview() {
    const pillars = [
        {
            title: "Capacity Building",
            description: "Training & Mentorship",
            color: "var(--color-accent-primary)"
        },
        {
            title: "Marketing & Branding",
            description: "Visibility & Growth",
            color: "var(--color-accent-secondary)"
        },
        {
            title: "Market Access",
            description: "Global Connections & Jobs",
            color: "#FFB020" // Different accent color
        }
    ];

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
                    alignItems: 'center'
                }}
            >
                <motion.div variants={fadeInUp} style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>
                        The <span className="gradient-text">Elevate</span> Program
                    </h2>
                    <p style={{ fontSize: '1.5rem', color: 'var(--color-text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                        A comprehensive ecosystem designed to accelerate tech growth in Palestine.
                    </p>
                </motion.div>

                <div style={{
                    display: 'flex',
                    gap: '2rem',
                    justifyContent: 'center',
                    width: '100%',
                    maxWidth: '1200px'
                }}>
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            style={{
                                flex: 1,
                                background: 'rgba(255,255,255,0.03)',
                                borderRadius: '24px',
                                padding: '3rem 2rem',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                textAlign: 'center',
                                border: '1px solid rgba(255,255,255,0.1)',
                                backdropFilter: 'blur(10px)'
                            }}
                        >
                            <h3 style={{
                                fontSize: '2rem',
                                marginBottom: '1rem',
                                color: pillar.color,
                                fontWeight: 700
                            }}>
                                {pillar.title}
                            </h3>
                            <p style={{ fontSize: '1.2rem', color: 'var(--color-text-secondary)' }}>{pillar.description}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </Slide>
    );
}
