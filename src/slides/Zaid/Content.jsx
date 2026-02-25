import React from 'react';
import { motion } from 'framer-motion';
import Slide from '../../components/Slide';
import FeedbackWall from '../../components/FeedbackWall';
import { FeatureCard } from '../../components/Card';
import AnimatedMetric from '../../components/AnimatedMetric';
import { staggerContainer, fadeInUp } from '../../utils/animations';
import { FloatingBackground } from '../../components/FloatingBackground';
import zaidBg1 from '../../assets/images/backgrounds/zaid/zaid-1.jpg';
import zaidBg2 from '../../assets/images/backgrounds/zaid/zaid-2.jpg';
import zaidBg3 from '../../assets/images/backgrounds/zaid/zaid-3.jpg';
import zaidBg4 from '../../assets/images/backgrounds/zaid/zaid-4.jpg';
import zaidBg5 from '../../assets/images/backgrounds/zaid/zaid-5.jpg';

const zaidImages = [zaidBg1, zaidBg2, zaidBg3, zaidBg4, zaidBg5];

// Animation Variants
const containerVariants = staggerContainer(0.15);

export function MarketAccessGrid() {
    return (
        <Slide>
            {/* Background Effect */}
            <div style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(circle at 70% 30%, rgba(48, 157, 196, 0.08) 0%, transparent 50%)',
                pointerEvents: 'none',
                zIndex: 0
            }} />
            <FloatingBackground images={zaidImages} />

            <div style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                padding: 'var(--space-2xl) var(--space-3xl) var(--space-lg)',
                position: 'relative',
                zIndex: 1
            }}>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    style={{
                        marginBottom: 'var(--space-xl)'
                    }}
                >
                    <div>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 'var(--space-sm)',
                            marginBottom: 'var(--space-sm)',
                            color: 'var(--brand-teal)'
                        }}>
                            <Globe size={20} />
                            <span style={{
                                fontSize: 'var(--font-size-sm)',
                                fontWeight: 'var(--font-weight-bold)',
                                textTransform: 'uppercase',
                                letterSpacing: '2px'
                            }}>
                                Global Expansion
                            </span>
                        </div>
                        <h2 style={{
                            fontSize: 'clamp(2.5rem, 5vmin, 4rem)',
                            fontWeight: 'var(--font-weight-extrabold)',
                            margin: 0,
                            lineHeight: 'var(--line-height-tight)'
                        }}>
                            Market <span className="gradient-text">Access</span>
                        </h2>
                    </div>
                </motion.div>

                {/* 4 Components Grid */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        gap: 'var(--space-lg)',
                        flex: 1
                    }}
                >
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
                                8 Companies
                            </strong>
                        </div>
                    </FeatureCard>

                    <FeatureCard
                        title="ElevateBridge"
                        description="Collaboration over competition."
                        delay={0.4}
                    >
                        <ul style={{ marginTop: 'var(--space-md)', marginBottom: 'var(--space-lg)' }}>
                            <li>Network of Professional Hunters</li>
                            <li>Global Opportunity Connections</li>
                        </ul>
                        <div style={{ marginTop: 'auto', paddingTop: 'var(--space-md)', borderTop: '1px solid var(--color-border-subtle)' }}>
                            <strong className="gradient-text" style={{ fontSize: 'var(--font-size-2xl)' }}>
                                New Initiative
                            </strong>
                        </div>
                    </FeatureCard>
                </motion.div>
            </div>
        </Slide>
    );
}

export function ElevateBridgeModule() {
    return (
        <Slide>
            <FloatingBackground images={zaidImages} />
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
    const impactMetrics = [
        { label: 'C-Suite Mentoring', v24: 9, v25: 11, unit: 'Companies', icon: Compass, color: 'var(--brand-teal)', max: 15 },
        { label: 'Legal Support', v24: 5, v25: 7, unit: 'Companies', icon: ShieldCheck, color: 'var(--brand-teal)', max: 10 },
        { label: 'Intl. Conferences', v24: 6, v25: 8, unit: 'Companies', icon: Globe, color: 'var(--brand-teal)', max: 10 },
        { label: 'Total Supported', v24: 20, v25: 26, unit: 'Entities', icon: Building2, color: 'var(--brand-teal)', max: 30 },
    ];

    return (
        <Slide>
            {/* Background Layer */}
            <div style={{
                position: 'absolute',
                inset: 0,
                zIndex: 0,
                overflow: 'hidden'
            }}>
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'radial-gradient(circle at 70% 30%, rgba(48, 157, 196, 0.1) 0%, transparent 60%)',
                }} />
                <FloatingBackground images={zaidImages} />
            </div>

            {/* Content Layer */}
            <div style={{
                position: 'relative',
                zIndex: 1,
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                padding: 'var(--space-2xl) var(--space-4xl)'
            }}>
                {/* Header */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: 'var(--space-2xl)'
                }}>
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="badge badge-primary"
                            style={{ marginBottom: 'var(--space-sm)' }}
                        >
                            Impact Progress
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            style={{
                                fontSize: 'clamp(2.5rem, 5vmin, 4rem)',
                                fontWeight: 900,
                                margin: 0,
                                lineHeight: 1.1
                            }}
                        >
                            Scaling <span className="gradient-text">Market Access</span>
                        </motion.h2>
                    </div>

                    <div style={{
                        background: 'rgba(255,255,255,0.05)',
                        padding: '12px 20px',
                        borderRadius: '16px',
                        border: '1px solid var(--color-border-subtle)',
                        display: 'flex',
                        gap: '24px'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <div style={{ width: '12px', height: '12px', background: 'rgba(255,255,255,0.4)', borderRadius: '3px' }} />
                            <span style={{ fontSize: '0.75rem', fontWeight: 700, opacity: 0.7 }}>2024 Baseline</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <div style={{ width: '12px', height: '12px', background: 'var(--brand-teal)', borderRadius: '3px' }} />
                            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--brand-teal)' }}>2025 Expansion</span>
                        </div>
                    </div>
                </div>

                {/* Progress Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: 'var(--space-xl)',
                    flex: 1,
                    alignContent: 'center'
                }}>
                    {impactMetrics.map((m, idx) => (
                        <motion.div
                            key={m.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 + (idx * 0.1), duration: 0.7 }}
                            className="glass"
                            style={{
                                padding: 'var(--space-xl)',
                                borderRadius: 'var(--radius-3xl)',
                                border: '1px solid var(--color-border-subtle)',
                                background: 'rgba(255,255,255,0.02)'
                            }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '14px', alignItems: 'flex-end' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <div style={{ padding: '10px', background: 'rgba(48, 157, 196, 0.1)', borderRadius: '12px' }}>
                                        <m.icon size={20} color="var(--brand-teal)" />
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                                        <span style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--color-text-tertiary)', textTransform: 'uppercase', letterSpacing: '1px' }}>{m.label}</span>
                                        <span style={{ fontSize: '1.4rem', fontWeight: 900, color: 'white' }}>{m.v25} <small style={{ opacity: 0.6, fontSize: '0.8rem' }}>{m.unit}</small></span>
                                    </div>
                                </div>
                                <div style={{ textAlign: 'right' }}>
                                    <span style={{
                                        fontSize: '0.85rem',
                                        color: 'var(--brand-teal)',
                                        fontWeight: 900,
                                        background: 'rgba(48, 157, 196, 0.1)',
                                        padding: '4px 10px',
                                        borderRadius: '8px'
                                    }}>
                                        +{Math.round(((m.v25 - m.v24) / m.v24) * 100)}% Growth
                                    </span>
                                </div>
                            </div>

                            <div style={{ height: '10px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px', overflow: 'hidden', position: 'relative' }}>
                                {/* 2025 Target - The full bar in Branded Teal */}
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${(m.v25 / m.max) * 100}%` }}
                                    transition={{ duration: 1.5, delay: 0.8 + (idx * 0.1), ease: 'easeOut' }}
                                    style={{ height: '100%', background: 'var(--brand-teal)', borderRadius: '10px', position: 'relative', zIndex: 1 }}
                                />
                                {/* 2024 Baseline - Overlay at the start */}
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${(m.v24 / m.max) * 100}%` }}
                                    transition={{ duration: 1.2, delay: 0.6 + (idx * 0.1), ease: 'easeOut' }}
                                    style={{
                                        position: 'absolute',
                                        left: 0,
                                        top: 0,
                                        bottom: 0,
                                        background: 'rgba(255,255,255,0.4)',
                                        borderRadius: '10px',
                                        zIndex: 2,
                                        borderRight: '1px solid rgba(0,0,0,0.2)'
                                    }}
                                />
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                                <span style={{ fontSize: '0.7rem', fontWeight: 700, opacity: 0.5 }}>2024 Baseline: {m.v24}</span>
                                <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--brand-teal)' }}>2025 Goal: {m.v25}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Slide>
    );
}


