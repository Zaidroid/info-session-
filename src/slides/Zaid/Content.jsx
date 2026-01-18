import React from 'react';
import { motion } from 'framer-motion';
import Slide from '../../components/Slide';
import FeedbackWall from '../../components/FeedbackWall';
import { FeatureCard } from '../../components/Card';
import AnimatedMetric from '../../components/AnimatedMetric';
import { staggerContainer, fadeInUp } from '../../utils/animations';

// Animation Variants
const containerVariants = staggerContainer(0.15);

export function MarketAccessGrid() {
    return (
        <Slide>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                style={{ width: '100%', height: '100%' }}
            >
                <motion.h2 variants={fadeInUp} style={{ marginBottom: 'var(--space-2xl)' }}>
                    Market Access Components
                </motion.h2>

                <div className="grid-3">
                    <FeatureCard
                        title="C-Suite Coaching"
                        description="Upskilling leadership for global strategy."
                        delay={0.1}
                    >
                        <ul style={{ marginTop: 'var(--space-md)', marginBottom: 'var(--space-lg)' }}>
                            <li>Pitching & Data Strategy</li>
                            <li>Business Development</li>
                        </ul>
                        <div style={{ marginTop: 'auto', paddingTop: 'var(--space-md)', borderTop: '1px solid var(--color-border-subtle)' }}>
                            <strong className="gradient-text" style={{ fontSize: 'var(--font-size-2xl)' }}>
                                11 Companies
                            </strong>
                        </div>
                    </FeatureCard>

                    <FeatureCard
                        title="Legal Support"
                        description="Infrastructure for international expansion."
                        delay={0.2}
                    >
                        <ul style={{ marginTop: 'var(--space-md)', marginBottom: 'var(--space-lg)' }}>
                            <li>Contracts & NDA Review</li>
                            <li>Registration (UAE, KSA, US)</li>
                        </ul>
                        <div style={{ marginTop: 'auto', paddingTop: 'var(--space-md)', borderTop: '1px solid var(--color-border-subtle)' }}>
                            <strong className="gradient-text" style={{ fontSize: 'var(--font-size-2xl)' }}>
                                7 Companies
                            </strong>
                        </div>
                    </FeatureCard>

                    <FeatureCard
                        title="Conferences"
                        description="Direct exposure to global markets."
                        delay={0.3}
                    >
                        <ul style={{ marginTop: 'var(--space-md)', marginBottom: 'var(--space-lg)' }}>
                            <li>GITEX (Dubai)</li>
                            <li>Future Blockchain Summit</li>
                            <li>Biban (KSA)</li>
                        </ul>
                        <div style={{ marginTop: 'auto', paddingTop: 'var(--space-md)', borderTop: '1px solid var(--color-border-subtle)' }}>
                            <strong className="gradient-text" style={{ fontSize: 'var(--font-size-2xl)' }}>
                                5 Companies
                            </strong>
                        </div>
                    </FeatureCard>
                </div>
            </motion.div>
        </Slide>
    );
}

export function ElevateBridgeModule() {
    return (
        <Slide>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, opacity: 0.3 }}>
                <FeedbackWall />
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                style={{ textAlign: 'center', position: 'relative', zIndex: 10, maxWidth: '1100px', margin: '0 auto' }}
            >
                <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="badge badge-primary"
                    style={{
                        marginBottom: 'var(--space-3xl)',
                        fontSize: 'var(--font-size-sm)',
                    }}
                >
                    <span style={{
                        height: '12px', width: '12px',
                        background: 'white',
                        borderRadius: '50%',
                        display: 'inline-block',
                        boxShadow: '0 0 15px white',
                        marginRight: 'var(--space-sm)',
                    }}></span>
                    The 4th Component
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    style={{
                        fontSize: 'clamp(3rem, 7vmin, 7rem)',
                        fontWeight: 'var(--font-weight-extrabold)',
                        marginBottom: 'var(--space-lg)',
                        letterSpacing: '-0.03em',
                        lineHeight: 'var(--line-height-tight)',
                    }}
                >
                    Elevate<span className="gradient-text">Bridge</span>
                </motion.h2>

                <motion.h3
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    style={{
                        fontSize: 'clamp(1.25rem, 2.5vmin, 2rem)',
                        fontWeight: 'var(--font-weight-light)',
                        color: 'var(--color-text-primary)',
                        marginBottom: 'var(--space-4xl)',
                        fontStyle: 'italic',
                    }}
                >
                    "Collaboration over Competition"
                </motion.h3>

                <motion.div
                    className="glass"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.9, type: "spring", stiffness: 50 }}
                    style={{
                        padding: 'var(--space-3xl)',
                        borderRadius: 'var(--radius-2xl)',
                        position: 'relative',
                        overflow: 'hidden',
                        boxShadow: 'var(--shadow-xl)',
                    }}
                >
                    <div style={{
                        position: 'absolute', top: 0, left: 0, width: '5px', height: '100%',
                        background: 'var(--gradient-accent)',
                        borderRadius: 'var(--radius-sm)',
                    }} />

                    <p style={{
                        margin: 0,
                        fontSize: 'clamp(1.1rem, 2.2vmin, 1.5rem)',
                        lineHeight: 'var(--line-height-relaxed)',
                        color: 'var(--color-text-primary)',
                        paddingLeft: 'var(--space-lg)',
                    }}>
                        A specialized <strong style={{ color: 'var(--color-accent-secondary)' }}>Market Access</strong> initiative connecting Palestinian agencies with global opportunities through a network of professional <strong style={{ color: 'var(--color-accent-primary)' }}>"Hunters"</strong>.
                    </p>
                </motion.div>
            </motion.div>
        </Slide>
    );
}

import { Globe, TrendingUp, Compass, ShieldCheck, DollarSign, Building2 } from 'lucide-react';

export function MarketAccessImpact() {
    const metrics2024 = [
        { label: 'Strategic Outreach', value: 35, suffix: '+', color: 'var(--color-accent-primary)' },
        { label: 'Companies Supported', value: 20, suffix: '+', color: 'var(--color-accent-secondary)' },
        { label: 'GITEX Expo Hub', value: 6, suffix: ' Co' },
    ];

    const metrics2025 = [
        { label: 'Strategic Outreach', value: 85, suffix: '+', color: 'var(--color-success)', isNew: true },
        { label: 'Companies Supported', value: 40, suffix: '+', color: 'var(--color-accent-secondary)', sub: '60+ Total' },
        { label: 'C-Suite Mentoring', value: 11, suffix: ' Co' },
        { label: 'Legal Entities', value: 7, suffix: ' Co' },
    ];

    const outreachGrowth = 50; // Outreach growth percentage or absolute

    return (
        <Slide>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    padding: 'var(--space-2xl) var(--space-3xl) var(--space-xs)',
                    position: 'relative'
                }}
            >
                {/* Background Effect */}
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'radial-gradient(circle at 70% 30%, rgba(222, 99, 54, 0.08) 0%, transparent 60%)',
                    pointerEvents: 'none',
                    zIndex: 0
                }} />

                {/* Header */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-end',
                    marginBottom: 'var(--space-xl)',
                    zIndex: 1
                }}>
                    <div>
                        <motion.div
                            variants={fadeInUp}
                            className="badge badge-primary"
                            style={{ marginBottom: 'var(--space-sm)' }}
                        >
                            Market Access Impact
                        </motion.div>
                        <motion.h2
                            variants={fadeInUp}
                            style={{
                                fontSize: 'clamp(2.5rem, 5vmin, 4rem)',
                                fontWeight: 900,
                                margin: 0,
                                lineHeight: 1.1
                            }}
                        >
                            Bridging to <span className="gradient-text">Global Markets</span>
                        </motion.h2>
                    </div>

                    {/* Growth Badge */}
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
                        className="glass-strong"
                        style={{
                            padding: 'var(--space-md) var(--space-xl)',
                            borderRadius: 'var(--radius-xl)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '2px',
                            border: '1px solid var(--color-success)'
                        }}
                    >
                        <div style={{ color: 'var(--color-success)', display: 'flex', alignItems: 'center', gap: 'var(--space-xs)' }}>
                            <TrendingUp size={20} />
                            <span style={{ fontSize: 'var(--font-size-2xl)', fontWeight: 900 }}>+{outreachGrowth}</span>
                        </div>
                        <span style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--color-text-tertiary)' }}>
                            Strategic Outreach Hubs
                        </span>
                    </motion.div>
                </div>

                {/* Main Content Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: 'var(--space-2xl)',
                    flex: 1,
                    zIndex: 1
                }}>
                    {/* 2024 Panel */}
                    <motion.div
                        variants={fadeInUp}
                        className="glass"
                        style={{
                            padding: 'var(--space-xl)',
                            borderRadius: 'var(--radius-2xl)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 'var(--space-lg)',
                            border: '1px solid rgba(255,255,255,0.05)'
                        }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <h3 style={{ fontSize: '1.2rem', margin: 0, opacity: 0.7 }}>Elevate 1.0 (2024)</h3>
                            <div className="badge" style={{ background: 'rgba(255,255,255,0.05)' }}>Baseline</div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)', justifyContent: 'center', flex: 1 }}>
                            {metrics2024.map((m, i) => (
                                <div key={m.label}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--space-xs)' }}>
                                        <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>{m.label}</span>
                                        <span style={{ fontWeight: 800 }}>{m.prefix}{m.value}{m.suffix}</span>
                                    </div>
                                    <div style={{ height: '8px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', overflow: 'hidden' }}>
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${(m.value / 100) * 100}%` }}
                                            transition={{ duration: 1, delay: 0.8 + (i * 0.1) }}
                                            style={{ height: '100%', background: m.color || 'var(--color-text-tertiary)', borderRadius: '4px' }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* 2025 Panel */}
                    <motion.div
                        variants={fadeInUp}
                        className="glass-strong"
                        style={{
                            padding: 'var(--space-xl)',
                            borderRadius: 'var(--radius-2xl)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 'var(--space-lg)',
                            border: '1px solid var(--color-accent-primary)'
                        }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <h3 style={{ fontSize: '1.5rem', margin: 0, fontWeight: 800 }}>Elevate 2.0 (2025)</h3>
                            <div className="badge badge-success">Scaling</div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)', flex: 1, justifyContent: 'center' }}>
                            {metrics2025.map((m, i) => (
                                <div key={m.label}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-xs)' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-xs)' }}>
                                            <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-primary)', fontWeight: 600 }}>{m.label}</span>
                                            {m.isNew && <span style={{ fontSize: '8px', padding: '2px 6px', background: 'var(--color-success)', borderRadius: '10px', color: 'white' }}>NEW</span>}
                                        </div>
                                        <div style={{ textAlign: 'right' }}>
                                            <div style={{ fontWeight: 900, color: m.isNew ? 'var(--color-success)' : 'inherit' }}>{m.prefix}{m.value}{m.suffix}</div>
                                            {m.sub && <div style={{ fontSize: '9px', color: 'var(--color-text-tertiary)' }}>{m.sub}</div>}
                                        </div>
                                    </div>
                                    <div style={{ height: '12px', background: 'rgba(255,255,255,0.05)', borderRadius: '6px', overflow: 'hidden' }}>
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${(m.value / 100) * 100}%` }}
                                            transition={{ duration: 1.2, delay: 1 + (i * 0.1), ease: "circOut" }}
                                            style={{
                                                height: '100%',
                                                background: m.color || 'var(--color-accent-primary)',
                                                borderRadius: '6px',
                                                boxShadow: m.isNew ? '0 0 15px var(--color-success)' : 'none'
                                            }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Footer Insight */}
                <motion.div
                    variants={fadeInUp}
                    style={{
                        marginTop: 'var(--space-xl)',
                        textAlign: 'center',
                        fontSize: 'var(--font-size-sm)',
                        fontStyle: 'italic',
                        color: 'var(--color-text-secondary)',
                        zIndex: 1
                    }}
                >
                    "Combining legal enablement, executive support, and international exposure to unlock commercial opportunities."
                </motion.div>
            </motion.div>
        </Slide>
    );
}


