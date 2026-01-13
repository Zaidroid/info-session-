import React from 'react';
import { motion } from 'framer-motion';
import Slide from '../components/Slide';
import { staggerContainer, fadeInUp } from '../utils/animations';

export default function ElevateStructure() {
    return (
        <Slide>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer(0.1)}
                style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}
            >
                <motion.h2 variants={fadeInUp} style={{ marginBottom: 'var(--space-xl)', textAlign: 'center' }}>
                    Elevate Structure & Timeline
                </motion.h2>

                <div style={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-lg)' }}>
                    {/* Component 1: Individuals */}
                    <motion.div variants={fadeInUp} className="glass-panel" style={{ padding: 'var(--space-lg)', display: 'flex', flexDirection: 'column' }}>
                        <h3 style={{ color: 'var(--color-accent-primary)', marginBottom: 'var(--space-md)' }}>Individuals</h3>
                        <div style={{ marginBottom: 'var(--space-sm)' }}>
                            <strong>Focus:</strong> Freelancing & Talent
                        </div>
                        <p style={{ fontSize: 'var(--font-size-sm)', flex: 1 }}>
                            Empowering individual freelancers and tech talents to compete globally.
                        </p>
                        <div style={{ marginTop: 'auto', paddingTop: 'var(--space-md)', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                            <small style={{ color: 'var(--color-text-secondary)' }}>Timeline: Ongoing</small>
                        </div>
                    </motion.div>

                    {/* Component 2: Capacity Building */}
                    <motion.div variants={fadeInUp} className="glass-panel" style={{ padding: 'var(--space-lg)', display: 'flex', flexDirection: 'column' }}>
                        <h3 style={{ color: 'var(--color-accent-secondary)', marginBottom: 'var(--space-md)' }}>Capacity Building</h3>
                        <div style={{ marginBottom: 'var(--space-sm)' }}>
                            <strong>Focus:</strong> Corporate Training & Internships
                        </div>
                        <p style={{ fontSize: 'var(--font-size-sm)', flex: 1 }}>
                            Train-to-Hire programs, upskilling existing employees, and supporting recovery.
                        </p>
                        <div style={{ marginTop: 'auto', paddingTop: 'var(--space-md)', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                            <small style={{ color: 'var(--color-text-secondary)' }}>Timeline: 2024 - 2026</small>
                        </div>
                    </motion.div>

                    {/* Component 3: Market Access */}
                    <motion.div variants={fadeInUp} className="glass-panel" style={{ padding: 'var(--space-lg)', display: 'flex', flexDirection: 'column' }}>
                        <h3 style={{ color: 'var(--color-accent-primary)', marginBottom: 'var(--space-md)' }}>Market Access</h3>
                        <div style={{ marginBottom: 'var(--space-sm)' }}>
                            <strong>Focus:</strong> Global Expansion
                        </div>
                        <p style={{ fontSize: 'var(--font-size-sm)', flex: 1 }}>
                            Connecting Palestinian tech companies with international markets and investors.
                        </p>
                        <div style={{ marginTop: 'auto', paddingTop: 'var(--space-md)', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                            <small style={{ color: 'var(--color-text-secondary)' }}>Timeline: 2025 - 2026</small>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </Slide>
    );
}
