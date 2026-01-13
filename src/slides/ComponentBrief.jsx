import React from 'react';
import { motion } from 'framer-motion';
import Slide from '../components/Slide';
import { fadeInUp, staggerContainer } from '../utils/animations';

export default function ComponentBrief({ title, description, stats = [], icon: Icon }) {
    return (
        <Slide>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer(0.1)}
                style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    // No background color here - let the global background show through
                }}
            >
                {/* 1. Subtle Background Decor (Consistent with Intro/SectionIntro) */}
                <div style={{
                    position: 'absolute',
                    top: '-20%',
                    right: '-20%',
                    width: '60vw',
                    height: '60vw',
                    background: 'radial-gradient(circle, var(--color-accent-primary) 0%, transparent 70%)',
                    opacity: 0.1,
                    filter: 'blur(100px)',
                    zIndex: 0
                }} />

                {/* 2. Main Content Container */}
                <div style={{
                    zIndex: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    maxWidth: '1200px',
                    width: '100%',
                    padding: '0 var(--space-2xl)'
                }}>
                    {/* Header / Kicker */}
                    <motion.div
                        variants={fadeInUp}
                        style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: 'var(--space-md)' }}
                    >
                        <div style={{ height: '2px', width: '40px', background: 'var(--color-accent-secondary)' }} />
                        <span style={{
                            textTransform: 'uppercase',
                            letterSpacing: '0.15em',
                            color: 'var(--color-accent-secondary)',
                            fontWeight: 600,
                            fontSize: 'var(--font-size-sm)'
                        }}>
                            Component Overview
                        </span>
                    </motion.div>

                    {/* Title - Large & Clean */}
                    <motion.h1
                        variants={fadeInUp}
                        style={{
                            fontSize: '4.5rem', // Consistent large size
                            fontWeight: 800,
                            lineHeight: 1.1,
                            marginBottom: 'var(--space-lg)',
                            color: 'var(--color-text-primary)',
                            letterSpacing: '-0.02em',
                        }}
                    >
                        {title}
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        variants={fadeInUp}
                        style={{
                            fontSize: '1.5rem',
                            lineHeight: 1.6,
                            color: 'var(--color-text-secondary)', // Use system color
                            maxWidth: '800px',
                            marginBottom: 'var(--space-2xl)',
                            borderLeft: '4px solid var(--color-accent-primary)',
                            paddingLeft: 'var(--space-lg)'
                        }}
                    >
                        {description}
                    </motion.p>

                    {/* Stats Grid - Glassmorphism */}
                    {stats.length > 0 && (
                        <motion.div
                            variants={fadeInUp}
                            style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: 'var(--space-xl)',
                                width: '100%'
                            }}
                        >
                            {stats.map((stat, i) => (
                                <div
                                    key={i}
                                    style={{
                                        background: 'rgba(255,255,255,0.03)',
                                        border: '1px solid var(--color-border)', // Use system border color if available, or subtle white
                                        borderRadius: '16px',
                                        padding: 'var(--space-lg)',
                                        minWidth: '200px',
                                        backdropFilter: 'blur(10px)'
                                    }}
                                >
                                    <div style={{
                                        fontSize: '2.5rem',
                                        fontWeight: 700,
                                        color: 'var(--color-accent-primary)',
                                        marginBottom: '0.5rem',
                                        lineHeight: 1
                                    }}>
                                        {stat.value}
                                    </div>
                                    <div style={{
                                        fontSize: '0.9rem',
                                        color: 'var(--color-text-tertiary)',
                                        textTransform: 'uppercase',
                                        letterSpacing: '1px',
                                        fontWeight: 600
                                    }}>
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    )}
                </div>
            </motion.div>
        </Slide>
    );
}
