import React from 'react';
import { motion } from 'framer-motion';
import Slide from '../../components/Slide';
import { FeatureCard } from '../../components/Card';
import { staggerContainer, fadeInUp } from '../../utils/animations';

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
                <motion.div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 'var(--space-2xl)' }}>
                    <motion.h2 variants={fadeInUp}>
                        Capacity Building
                    </motion.h2>
                    <motion.div variants={fadeInUp} style={{ fontSize: 'var(--font-size-lg)', color: 'var(--color-text-secondary)', background: 'rgba(255,255,255,0.1)', padding: '4px 12px', borderRadius: '20px' }}>
                        Elevate 2.0
                    </motion.div>
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
                            <strong>1 Former Employee</strong> successfully rehired
                            <div style={{ marginTop: 'var(--space-sm)', fontSize: 'var(--font-size-xs)', color: 'var(--color-text-secondary)' }}>
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
    return (
        <Slide>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                style={{ width: '100%', height: '100%' }}
            >
                <motion.h2 variants={fadeInUp} style={{ marginBottom: 'var(--space-2xl)' }}>
                    Marketing & Branding
                </motion.h2>

                <div className="grid-2">
                    <FeatureCard
                        title="Strategic Partnership"
                        delay={0.1}
                    >
                        <div style={{ marginTop: 'var(--space-md)', fontSize: 'var(--font-size-sm)' }}>
                            <div style={{ marginBottom: 'var(--space-md)' }}>
                                <strong className="gradient-text" style={{ fontSize: 'var(--font-size-2xl)' }}>9 Companies</strong>
                                <div style={{ color: 'var(--color-text-tertiary)', fontSize: 'var(--font-size-xs)' }}>
                                    Supported in West Bank (6) & Gaza (3)
                                </div>
                            </div>
                            <ul style={{ fontSize: 'var(--font-size-xs)', marginTop: 'var(--space-sm)' }}>
                                <li>Brand & Marketing Strategy</li>
                                <li>SEO, Social Media & Content Creation</li>
                                <li>Campaign Management & Sponsorships</li>
                            </ul>
                        </div>
                    </FeatureCard>

                    <FeatureCard
                        title="Direct Support"
                        delay={0.2}
                    >
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
                            <div>
                                <strong
                                    style={{
                                        display: 'block',
                                        fontSize: 'var(--font-size-lg)',
                                        marginBottom: 'var(--space-sm)',
                                        color: 'var(--color-accent-secondary)',
                                    }}
                                >
                                    Agency Rebranding
                                </strong>
                                <p style={{ margin: 0 }}>
                                    Comprehensive visual overhaul led by specialized agencies.
                                </p>
                            </div>

                            <div>
                                <strong
                                    style={{
                                        display: 'block',
                                        fontSize: 'var(--font-size-lg)',
                                        marginBottom: 'var(--space-sm)',
                                        color: 'var(--color-accent-secondary)',
                                    }}
                                >
                                    Internal Resources
                                </strong>
                                <p style={{ margin: 0 }}>
                                    Stipends for dedicated marketing staff.
                                </p>
                            </div>

                            <div
                                className="divider"
                                style={{
                                    margin: 'var(--space-sm) 0',
                                }}
                            />

                            <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-tertiary)' }}>
                                <strong>Beneficiaries:</strong> AccessLine, Edubook, Hexa, Pillars, Yummy
                            </div>
                        </div>
                    </FeatureCard>
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
