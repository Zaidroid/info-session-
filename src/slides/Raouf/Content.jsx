import React from 'react';
import { motion } from 'framer-motion';
import Slide from '../../components/Slide';
import { FeatureCard } from '../../components/Card';
import { staggerContainer, fadeInUp } from '../../utils/animations';
import { Megaphone, Palette, Search, Users, ExternalLink, Globe } from 'lucide-react';

// Animation Variants
const containerVariants = staggerContainer(0.15);

export function CapacityBuilding() {
    return (
        <Slide>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                style={{ width: '100%', height: '100%' }}
            >
                <motion.div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 'var(--space-2xl)', flexDirection: 'column' }}>
                    {/* Elevate Logo Concept */}
                    <motion.h2 variants={fadeInUp} style={{ fontSize: '4rem', fontWeight: '900', letterSpacing: '-2px', lineHeight: 1, textAlign: 'center' }}>
                        Elevate <span className="gradient-text">2.0</span>
                        <div style={{ fontSize: '2.5rem', marginTop: 'var(--space-xs)', color: 'var(--color-text-secondary)' }}>2025</div>
                    </motion.h2>
                </motion.div>

                <div className="grid-3">
                    <FeatureCard
                        title="Train-to-Hire"
                        description="Financial support for intern stipends to onboard fresh, pre-vetted talent."
                        delay={0.1}
                    >
                        <div style={{ marginTop: 'var(--space-md)', fontSize: 'var(--font-size-sm)' }}>
                            <div style={{ marginBottom: 'var(--space-sm)' }}>
                                <strong className="gradient-text" style={{ fontSize: 'var(--font-size-2xl)' }}>40 Interns</strong>
                                <div style={{ color: 'var(--color-text-tertiary)', fontSize: 'var(--font-size-xs)' }}>
                                    Placed in 10 companies (20 WB, 20 Gaza)
                                </div>
                            </div>
                            <div style={{ marginBottom: 'var(--space-sm)', padding: '8px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                                    <span>West Bank Hiring:</span>
                                    <strong style={{ color: 'var(--color-accent-secondary)' }}>75%</strong>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <span>Gaza Hiring:</span>
                                    <strong style={{ color: 'var(--color-accent-primary)' }}>30%</strong>
                                </div>
                            </div>
                            <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-secondary)', marginTop: 'var(--space-md)' }}>
                                ODOO, ASP.NET, Angular, Blockchain, Cybersec, UI/UX
                            </div>
                        </div>
                    </FeatureCard>

                    <FeatureCard
                        title="Upskilling"
                        description="Covering training costs for existing staff to meet evolving market demands."
                        delay={0.2}
                    >
                        <div style={{ marginTop: 'var(--space-md)', fontSize: 'var(--font-size-sm)' }}>
                            <div style={{ marginBottom: 'var(--space-md)' }}>
                                <strong className="gradient-text" style={{ fontSize: 'var(--font-size-2xl)' }}>81 Employees</strong>
                                <div style={{ color: 'var(--color-text-tertiary)', fontSize: 'var(--font-size-xs)' }}>
                                    From 17 companies
                                </div>
                            </div>
                            <ul style={{ fontSize: 'var(--font-size-xs)', marginTop: 'var(--space-sm)' }}>
                                <li>Cloud Architecture & DevOps</li>
                                <li>Communication & Time Management</li>
                                <li>Digital Marketing & Campaign Management</li>
                            </ul>
                        </div>
                    </FeatureCard>

                    <FeatureCard
                        title="Talent Recovery"
                        description="Supporting Gaza-based companies by covering salaries to recover war-affected employees."
                        highlighted={true}
                        highlightLabel="Gaza Specific"
                        delay={0.3}
                    >
                        <div
                            style={{
                                marginTop: 'var(--space-md)',
                                padding: 'var(--space-md)',
                                background: 'rgba(0, 210, 170, 0.1)',
                                borderRadius: 'var(--radius-lg)',
                                fontSize: 'var(--font-size-sm)',
                            }}
                        >
                            <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-secondary)' }}>
                                Helping retain former talents at Gaza companies
                            </div>
                        </div>
                    </FeatureCard>
                </div>


            </motion.div>
        </Slide>
    );
}

export function Marketing() {
    const scope = [
        { icon: Palette, text: 'Brand Strategy & Positioning' },
        { icon: Megaphone, text: 'Campaigns & Creative Production' },
        { icon: Search, text: 'SEO & Digital Visibility' },
        { icon: Globe, text: 'Social Media & Market Presence' },
    ];

    return (
        <Slide>
            {/* Background Effects */}
            <div style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(circle at 10% 10%, rgba(48, 157, 196, 0.05) 0%, transparent 50%), radial-gradient(circle at 90% 90%, rgba(222, 99, 54, 0.05) 0%, transparent 50%)',
                zIndex: 0,
                pointerEvents: 'none'
            }} />

            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    padding: 'var(--space-md) var(--space-2xl)',
                    position: 'relative',
                    zIndex: 1
                }}
            >
                {/* Header Row */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1.2fr 0.8fr',
                    gap: 'var(--space-2xl)',
                    marginBottom: 'var(--space-lg)',
                    alignItems: 'center'
                }}>
                    <motion.div variants={fadeInUp}>
                        <div className="badge" style={{
                            background: 'var(--brand-teal)',
                            color: 'white',
                            marginBottom: 'var(--space-md)',
                            boxShadow: '0 4px 15px rgba(48, 157, 196, 0.3)'
                        }} >
                            Visibility & Identity
                        </div>
                        <h2 style={{
                            fontSize: 'clamp(2.5rem, 6vmin, 4rem)',
                            fontWeight: 900,
                            margin: 0,
                            letterSpacing: '-0.02em',
                            lineHeight: 1
                        }}>
                            Marketing & <span className="gradient-text">Branding</span>
                        </h2>
                        <p style={{
                            fontSize: 'var(--font-size-md)',
                            margin: 'var(--space-sm) 0 0',
                            color: 'var(--color-text-secondary)',
                            fontWeight: 300,
                            maxWidth: '600px'
                        }}>
                            Elevating the global digital presence of Palestinian tech companies through professional support and talent.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={fadeInUp}
                        className="glass-strong"
                        style={{
                            padding: 'var(--space-lg)',
                            borderRadius: 'var(--radius-2xl)',
                            borderRight: '4px solid var(--brand-teal)',
                            background: 'var(--color-surface-elevated)'
                        }}
                    >
                        <h4 style={{ textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.1em', color: 'var(--brand-teal)', margin: '0 0 8px' }}>
                            Strategic Focus
                        </h4>
                        <p style={{ margin: 0, fontSize: '1rem', lineHeight: 1.5, fontWeight: 500, color: 'var(--color-text-primary)' }}>
                            Strengthening market readiness with dedicated agency support and in-house marketing experts.
                        </p>
                    </motion.div>
                </div>

                {/* Main Bento Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1.2fr 0.8fr',
                    gridTemplateRows: 'auto 1fr',
                    gap: 'var(--space-lg)',
                    flex: 1
                }}>
                    {/* Track 1: Two-Track Approach */}
                    <motion.div
                        variants={fadeInUp}
                        className="glass"
                        style={{
                            gridRow: 'span 2',
                            padding: 'var(--space-xl)',
                            borderRadius: 'var(--radius-3xl)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 'var(--space-lg)',
                            background: 'var(--color-surface)',
                            border: '1px solid var(--color-border-subtle)'
                        }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
                            <div style={{ padding: '10px', background: 'var(--brand-red)15', borderRadius: '12px', color: 'var(--brand-red)' }}>
                                <ExternalLink size={24} />
                            </div>
                            <h3 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-text-primary)' }}>Dual-Track Strategy</h3>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
                            <div style={{
                                padding: 'var(--space-md)',
                                background: 'var(--color-surface-elevated)',
                                borderRadius: 'var(--radius-xl)',
                                borderLeft: '4px solid var(--brand-red)',
                                position: 'relative',
                                overflow: 'hidden'
                            }}>
                                <strong style={{ display: 'block', fontSize: '1.1rem', color: 'var(--brand-red)', marginBottom: '4px' }}>1. Agency Partnerships</strong>
                                <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                                    Professional marketing firms delivering high-level strategy and execution.
                                </p>
                            </div>

                            <div style={{
                                padding: 'var(--space-md)',
                                background: 'var(--color-surface-elevated)',
                                borderRadius: 'var(--radius-xl)',
                                borderLeft: '4px solid var(--brand-teal)',
                                position: 'relative',
                                overflow: 'hidden'
                            }}>
                                <strong style={{ display: 'block', fontSize: '1.1rem', color: 'var(--brand-teal)', marginBottom: '4px' }}>2. Dedicated Talent (T2H)</strong>
                                <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                                    Train-to-Hire marketing specialists embedded within company teams.
                                </p>
                            </div>
                        </div>

                        <div style={{ marginTop: 'auto', padding: '1rem', background: 'rgba(31, 48, 54, 0.03)', borderRadius: '12px', border: '1px dashed var(--color-border-medium)' }}>
                            <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', opacity: 0.6, letterSpacing: '1px', marginBottom: '4px' }}>Resource Model</div>
                            <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>Bridging the gap between strategy and execution.</div>
                        </div>
                    </motion.div>

                    {/* Track 2: Scope Items */}
                    <motion.div
                        variants={fadeInUp}
                        className="glass"
                        style={{
                            padding: 'var(--space-xl)',
                            borderRadius: 'var(--radius-3xl)',
                            background: 'var(--color-surface)',
                            border: '1px solid var(--color-border-subtle)'
                        }}
                    >
                        <h3 style={{ margin: '0 0 var(--space-md)', fontSize: '1rem', fontWeight: 800, color: 'var(--color-text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                            Scope of Services
                        </h3>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'var(--space-sm)' }}>
                            {scope.map((item, idx) => (
                                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
                                    <div style={{ color: 'var(--brand-teal)', display: 'flex' }}><item.icon size={16} /></div>
                                    <span style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--color-text-secondary)' }}>{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Track 3: Impact Metrics */}
                    <motion.div
                        variants={fadeInUp}
                        className="glass-strong"
                        whileHover={{ scale: 1.02 }}
                        style={{
                            padding: 'var(--space-xl)',
                            borderRadius: 'var(--radius-3xl)',
                            background: 'var(--gradient-primary)',
                            color: 'white',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            textAlign: 'center',
                            position: 'relative',
                            overflow: 'hidden',
                            boxShadow: 'var(--shadow-lg)'
                        }}
                    >
                        <div style={{ position: 'absolute', top: '-10%', right: '-10%', opacity: 0.1 }}>
                            <Megaphone size={120} />
                        </div>
                        <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', opacity: 0.9, marginBottom: '4px' }}>Impact Delivered</div>
                        <div style={{ fontSize: '4.5rem', fontWeight: 900, lineHeight: 1 }}>9</div>
                        <div style={{ fontSize: '1.1rem', fontWeight: 700 }}>Companies Supported</div>
                        <div style={{
                            marginTop: 'var(--space-md)',
                            padding: '4px 16px',
                            background: 'rgba(255,255,255,0.2)',
                            borderRadius: 'var(--radius-full)',
                            fontSize: '0.85rem',
                            fontWeight: 600,
                            backdropFilter: 'blur(4px)'
                        }}>
                            3 Gaza • 6 West Bank
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </Slide>
    );
}

export function WorkingSpaces() {
    return (
        <Slide>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                style={{ width: '100%', height: '100%' }}
            >
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-xl)', height: '100%' }}>

                    {/* Left Column: Header & Context */}
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <motion.h2 variants={fadeInUp} style={{ marginBottom: 'var(--space-md)' }}>
                            Supporting Resilience
                        </motion.h2>

                        <motion.div variants={fadeInUp}>
                            <h3 className="gradient-text" style={{ fontSize: 'var(--font-size-2xl)', marginBottom: 'var(--space-sm)' }}>
                                Gaza Coworking Support
                            </h3>
                            <p style={{ fontSize: 'var(--font-size-md)', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
                                Revitalizing Gaza’s tech ecosystem by providing direct support to existing co-working spaces to serve as access points, learning hubs, and community spaces.
                            </p>
                        </motion.div>

                        <motion.div
                            variants={fadeInUp}
                            style={{ margin: 'var(--space-lg) 0' }}
                        >
                            <h4 style={{ color: 'var(--color-accent-secondary)', marginBottom: 'var(--space-sm)' }}>Program Objectives</h4>
                            <ul style={{ fontSize: 'var(--font-size-sm)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <li><strong>Infrastructure Rehabilitation:</strong> Restoring essential tech hubs.</li>
                                <li><strong>Work Continuity:</strong> Enabling remote work & learning.</li>
                                <li><strong>Geographic Reach:</strong> Expanding coverage across Gaza.</li>
                                <li><strong>Sustainability:</strong> Developing resilient operating models.</li>
                            </ul>
                        </motion.div>

                        <motion.div variants={fadeInUp} style={{ marginTop: 'auto' }}>
                            <div style={{ padding: 'var(--space-md)', background: 'rgba(255,255,255,0.05)', borderRadius: '12px' }}>
                                <strong style={{ color: 'var(--color-accent-primary)' }}>Cohort 2 (Feb 2026):</strong>
                                <p style={{ margin: '4px 0 0', fontSize: 'var(--font-size-sm)' }}>Targeting 7-10 additional spaces.</p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Cards & Details */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>

                        <FeatureCard
                            title="Cohort 1 (Current)"
                            description="5 Spaces Selected (Aug 2025 - Jan 2026)"
                            delay={0.2}
                            highlighted={true}
                        >
                            <div style={{ fontSize: 'var(--font-size-sm)', marginTop: 'var(--space-sm)' }}>
                                <div style={{ display: 'flex', gap: 'var(--space-sm)', flexWrap: 'wrap' }}>
                                    <span style={{ background: 'rgba(255,255,255,0.1)', padding: '4px 8px', borderRadius: '4px', fontSize: '12px' }}>Operational Spaces</span>
                                    <span style={{ background: 'rgba(255,255,255,0.1)', padding: '4px 8px', borderRadius: '4px', fontSize: '12px' }}>Legally Registered</span>
                                    <span style={{ background: 'rgba(255,255,255,0.1)', padding: '4px 8px', borderRadius: '4px', fontSize: '12px' }}>Safe Zones</span>
                                </div>
                            </div>
                        </FeatureCard>

                        <FeatureCard
                            title="Cohort 2 Targets"
                            description="Expanding geographic reach and continuity for 2026."
                            delay={0.3}
                        >
                            <div style={{ marginTop: 'var(--space-md)' }}>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '1rem',
                                    background: 'rgba(255,255,255,0.05)',
                                    padding: '1rem',
                                    borderRadius: '12px',
                                    border: '1px solid rgba(255,255,255,0.1)'
                                }}>
                                    <div style={{
                                        fontSize: '2.5rem',
                                        fontWeight: '700',
                                        color: 'var(--color-accent-primary)',
                                        lineHeight: 1
                                    }}>
                                        7-10
                                    </div>
                                    <div style={{ fontSize: '0.9rem', color: 'var(--color-text-primary)' }}>
                                        Additional Spaces<br />
                                        <span style={{ opacity: 0.7 }}>To be supported</span>
                                    </div>
                                </div>
                            </div>
                        </FeatureCard>

                    </div>
                </div>
            </motion.div>
        </Slide>
    );
}


export function SuccessStories() {
    return (
        <Slide>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                style={{ width: '100%', height: '100%' }}
            >
                <motion.h2 variants={fadeInUp} style={{ marginBottom: 'var(--space-xl)' }}>
                    Impact Stories
                </motion.h2>

                <div className="grid-2" style={{ gap: 'var(--space-xl)' }}>
                    {/* Accessline Story */}
                    <FeatureCard
                        title="Accessline"
                        description="From Interns to Major Contracts"
                        delay={0.1}
                    >
                        <div style={{ fontSize: 'var(--font-size-sm)', lineHeight: '1.6' }}>
                            <p style={{ marginBottom: 'var(--space-md)' }}>
                                Strengthened by hiring <strong style={{ color: 'var(--color-accent-secondary)' }}>Train-to-Hire interns</strong>, Accessline secured a <strong style={{ color: 'var(--color-accent-primary)' }}>major international project</strong> focused on data estimation in Gaza.
                            </p>
                            <p>
                                This capacity enabled them to:
                            </p>
                            <ul style={{ marginTop: 'var(--space-sm)', marginBottom: 'var(--space-md)' }}>
                                <li>Deliver critical work in a challenging environment</li>
                                <li>Offer full-time jobs to <strong>3 Elevate interns</strong></li>
                                <li>Secure <strong>multiple new projects</strong></li>
                            </ul>
                        </div>
                    </FeatureCard>

                    {/* Hexa Story */}
                    <FeatureCard
                        title="Hexa & MIRA"
                        description="AI Innovation Recognized Globally"
                        delay={0.2}
                    >
                        <div style={{ fontSize: 'var(--font-size-sm)', lineHeight: '1.6' }}>
                            <p style={{ marginBottom: 'var(--space-md)' }}>
                                Achieved a major milestone with <strong style={{ color: 'var(--color-accent-secondary)' }}>MIRA</strong>, an AI-powered smart health app for women using voice & camera analysis.
                            </p>
                            <div style={{
                                padding: 'var(--space-md)',
                                background: 'rgba(255, 255, 255, 0.05)',
                                borderRadius: 'var(--radius-md)',
                                borderLeft: '3px solid var(--color-accent-primary)'
                            }}>
                                <strong style={{ display: 'block', marginBottom: 'var(--space-xs)', color: 'var(--color-text-primary)' }}>
                                    Global Competition Selection
                                </strong>
                                Accepted in the first stage with <strong className="gradient-text">significant funding secured</strong>.
                            </div>
                        </div>
                    </FeatureCard>
                </div>
            </motion.div>
        </Slide>
    );
}
