import React from 'react';
import { motion } from 'framer-motion';
import Slide from '../components/Slide';
import { staggerContainer, fadeInUp } from '../utils/animations';

const TimelineItem = ({ time, title, subtitle, isLast }) => (
    <motion.div
        variants={fadeInUp}
        style={{
            display: 'flex',
            gap: time ? 'var(--space-lg)' : '0.5rem',
            position: 'relative',
            paddingBottom: isLast ? 0 : '1.5rem',
            alignItems: 'baseline'
        }}
    >
        {/* Timeline Line */}
        {!isLast && (
            <div style={{
                position: 'absolute',
                left: time ? '95px' : '15px',
                top: '20px',
                bottom: 0,
                width: '1px',
                background: 'linear-gradient(to bottom, var(--color-accent-primary), var(--color-border-subtle))',
                opacity: 0.3
            }} />
        )}

        {/* Time - Only show if time exists */}
        {time && (
            <div style={{
                width: '80px',
                textAlign: 'right',
                flexShrink: 0,
            }}>
                <span style={{
                    fontSize: '0.95rem',
                    fontWeight: '700',
                    color: 'var(--color-accent-secondary)',
                    fontVariantNumeric: 'tabular-nums',
                    letterSpacing: '0.5px'
                }}>
                    {time}
                </span>
            </div>
        )}

        {/* Dot */}
        <div style={{
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            background: 'var(--color-accent-primary)',
            flexShrink: 0,
            boxShadow: '0 0 8px var(--color-accent-primary)',
            position: 'relative',
            zIndex: 2,
            transform: 'translateY(2px)'
        }} />

        {/* Content */}
        <div style={{ flex: 1 }}>
            <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                color: 'var(--color-text-primary)',
                marginBottom: '0.1rem',
                lineHeight: 1.1
            }}>
                {title}
            </h3>
            {subtitle && (
                <p style={{
                    fontSize: '0.85rem',
                    color: 'var(--color-text-secondary)',
                    opacity: 0.8,
                    marginTop: '2px'
                }}>
                    {subtitle}
                </p>
            )}
        </div>
    </motion.div>
);

export default function Agenda() {
    const agendaItems = [
        { time: "", title: "Welcome" },
        { time: "", title: "GSG Overview", subtitle: "Vision, Mission & Structure" },
        { time: "", title: "Elevate Program Overview", subtitle: "Components & Impact" },
        { time: "", title: "Supported Companies & Partners Showcase" },
        { time: "", title: "Program Journey", subtitle: "Phases & Eligibility" },
        { time: "", title: "CARM Introduction", subtitle: "Community Accountability" },
        { time: "", title: "Q&A Session" },
        { time: "", title: "Application Process & Next Steps" }
    ];

    return (
        <Slide>
            <div style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 'var(--space-2xl)',
                padding: '0 var(--space-xl)'
            }}>
                {/* Left: Title Area */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{
                        flex: '0 0 30%', // Slightly smaller left column
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        textAlign: 'right'
                    }}
                >
                    <h2 style={{
                        fontSize: 'clamp(3rem, 5vw, 4.5rem)', // Scaled down max size
                        lineHeight: 0.9,
                        marginBottom: 'var(--space-md)',
                        fontWeight: 800
                    }}>
                        Today's<br />
                        <span className="gradient-text">Agenda</span>
                    </h2>
                    <div style={{
                        width: '80px',
                        height: '3px',
                        background: 'var(--color-accent-secondary)',
                        marginLeft: 'auto',
                        borderRadius: '2px',
                        marginBottom: 'var(--space-sm)'
                    }} />
                    <p style={{
                        fontSize: '1rem',
                        color: 'var(--color-text-tertiary)',
                        maxWidth: '250px',
                        marginLeft: 'auto',
                        lineHeight: 1.4
                    }}>
                        A roadmap for connection, insight, and future impact.
                    </p>
                </motion.div>

                {/* Vertical Divider */}
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: '70%', opacity: 0.2 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    style={{
                        width: '1px',
                        background: 'var(--color-border-medium)',
                        height: '70%',
                        flexShrink: 0
                    }}
                />

                {/* Right: Timeline */}
                <div style={{
                    flex: '1',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    padding: '2rem 0' // Add vertical padding to container
                }}>
                    <motion.div
                        variants={staggerContainer(0.05)}
                        initial="hidden"
                        animate="visible"
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center', // Center content vertically
                            height: '100%'
                        }}
                    >
                        {agendaItems.map((item, index) => (
                            <TimelineItem
                                key={index}
                                {...item}
                                isLast={index === agendaItems.length - 1}
                            />
                        ))}
                    </motion.div>
                </div>
            </div>
        </Slide>
    );
}
