import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Slide from '../components/Slide';
import { FileText, Users, PenTool, Rocket, CheckCircle, ChevronRight } from 'lucide-react';
import { staggerContainer, fadeInUp } from '../utils/animations';

export default function ElevatePhases() {
    const [activeStep, setActiveStep] = useState(0);

    // Auto-advance the active step for the animation effect
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveStep((prev) => (prev + 1) % 6); // Cycle through 0 to 5 (5 is all done)
        }, 1200);
        return () => clearInterval(interval);
    }, []);

    const phases = [
        { icon: FileText, title: "Application", subtitle: "Submit & Screen" },
        { icon: Users, title: "Selection", subtitle: "Vetting Process" },
        { icon: PenTool, title: "Agreement", subtitle: "Sign Contracts" },
        { icon: Rocket, title: "Kick Off", subtitle: "Program Start" },
        { icon: CheckCircle, title: "Closure", subtitle: "Program End" },
    ];

    return (
        <Slide>
            <div style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '4rem',
                padding: '0 2rem'
            }}>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ textAlign: 'center' }}
                >
                    <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '0.5rem' }}>
                        The <span className="gradient-text">Journey</span>
                    </h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--color-text-secondary)', fontFamily: 'monospace' }}>
                        ROADMAPPING SUCCESS 2026
                    </p>
                </motion.div>

                {/* Main Process Container */}
                <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    width: '100%',
                    maxWidth: '1300px'
                }}>
                    {phases.map((phase, index) => {
                        const isActive = index <= activeStep;
                        const isCurrent = index === activeStep;

                        return (
                            <React.Fragment key={index}>
                                {/* Phase Node */}
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    gap: '1.5rem',
                                    position: 'relative',
                                    zIndex: 10,
                                    flex: '0 0 auto' // Don't shrink
                                }}>
                                    {/* Icon Circle */}
                                    <motion.div
                                        animate={{
                                            scale: isCurrent ? 1.1 : 1,
                                            boxShadow: isActive
                                                ? `0 0 15px ${index === phases.length - 1 ? 'rgba(7, 188, 12, 0.4)' : 'rgba(222, 99, 54, 0.4)'}`
                                                : 'none',
                                            borderColor: isActive
                                                ? (index === phases.length - 1 ? 'var(--color-success)' : 'var(--color-accent-primary)')
                                                : 'rgba(255,255,255,0.1)',
                                            background: isActive ? 'var(--color-surface)' : 'rgba(255,255,255,0.02)'
                                        }}
                                        style={{
                                            width: '90px',
                                            height: '90px',
                                            borderRadius: '24px',
                                            border: '2px solid',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            transition: 'all 0.5s ease',
                                            transform: 'rotate(45deg)', // Diamond shape
                                            margin: '10px' // Spacing for rotation
                                        }}
                                    >
                                        <div style={{ transform: 'rotate(-45deg)' }}> {/* Counter-rotate icon */}
                                            <phase.icon
                                                size={32}
                                                color={isActive ? (index === phases.length - 1 ? "var(--color-success)" : "var(--color-accent-primary)") : "var(--color-text-tertiary)"}
                                            />
                                        </div>
                                    </motion.div>

                                    {/* Text Content */}
                                    <motion.div
                                        animate={{ opacity: isActive ? 1 : 0.4, y: isActive ? 0 : 10 }}
                                        style={{ textAlign: 'center', marginTop: '1rem' }}
                                    >
                                        <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.25rem' }}>{phase.title}</h3>
                                        <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>{phase.subtitle}</p>
                                    </motion.div>
                                </div>

                                {/* Connector (if not last) */}
                                {index < phases.length - 1 && (
                                    <div style={{
                                        flex: 1,
                                        height: '2px', // Thin line
                                        background: 'rgba(255,255,255,0.1)',
                                        margin: '55px 1rem 0', // Vertical align with center of diamond (approx)
                                        position: 'relative',
                                        minWidth: '60px'
                                    }}>
                                        <motion.div
                                            initial={{ width: '0%' }}
                                            animate={{ width: isActive ? '100%' : '0%' }}
                                            transition={{ duration: 0.8, ease: "easeInOut" }}
                                            style={{
                                                height: '100%',
                                                background: 'var(--gradient-primary)',
                                                boxShadow: '0 0 5px rgba(222, 99, 54, 0.3)'
                                            }}
                                        />
                                    </div>
                                )}
                            </React.Fragment>
                        );
                    })}
                </div>
            </div>
        </Slide>
    );
}
