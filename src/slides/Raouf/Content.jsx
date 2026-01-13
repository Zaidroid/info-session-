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
                <motion.h2 variants={fadeInUp} style={{ marginBottom: 'var(--space-2xl)' }}>
                    Capacity Building
                </motion.h2>

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
                                    Placed in 10 companies
                                </div>
                            </div>
                            <div style={{ marginBottom: 'var(--space-sm)' }}>
                                <strong className="gradient-text" style={{ fontSize: 'var(--font-size-xl)' }}>52.5% Hired</strong>
                                <div style={{ color: 'var(--color-text-tertiary)', fontSize: 'var(--font-size-xs)' }}>
                                    21 interns secured positions
                                </div>
                            </div>
                            <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-secondary)', marginTop: 'var(--space-md)' }}>
                                DevOps, Blockchain, Cybersecurity, UI/UX & more
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
                <motion.h2 variants={fadeInUp} style={{ marginBottom: 'var(--space-md)' }}>
                    Supporting Resilience
                </motion.h2>
                <motion.h3
                    variants={fadeInUp}
                    style={{
                        marginBottom: 'var(--space-2xl)',
                        color: 'var(--color-text-primary)',
                        fontSize: 'var(--font-size-2xl)',
                    }}
                >
                    Working Spaces in Gaza
                </motion.h3>

                <div className="grid-2" style={{ gridTemplateColumns: '1.3fr 0.7fr', gap: 'var(--space-2xl)' }}>
                    <motion.div
                        variants={fadeInUp}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            gap: 'var(--space-lg)',
                        }}
                    >
                        <p style={{ fontSize: 'clamp(1.1rem, 2vmin, 1.4rem)', lineHeight: 'var(--line-height-relaxed)' }}>
                            Providing physical and digital infrastructure to ensure continuity for tech companies and freelancers in Gaza.
                        </p>

                        <ul style={{ fontSize: 'clamp(1rem, 1.8vmin, 1.25rem)' }}>
                            <li>Safe, equipped co-working hubs</li>
                            <li>Reliable Internet & Power solutions</li>
                            <li>Community support & networking</li>
                        </ul>
                    </motion.div>

                    <FeatureCard
                        title="Vital for Survival"
                        description="Enabling teams to stay operational despite the crisis."
                        highlighted={true}
                        delay={0.2}
                        style={{
                            justifyContent: 'center',
                            textAlign: 'center',
                        }}
                    />
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
