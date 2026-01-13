import React from 'react';
import { motion } from 'framer-motion';
import Slide from '../../components/Slide';
import { FeatureCard, StatCard } from '../../components/Card';
import AnimatedMetric from '../../components/AnimatedMetric';
import { staggerContainer, fadeInUp, scaleIn } from '../../utils/animations';
import { Sprout, Hammer, Briefcase, CircleDollarSign, Users, Building2, TrendingUp, ArrowRight } from 'lucide-react';

const containerVariants = staggerContainer(0.15);

// Slide 1: Introduction
export function Individuals1() {
    return (
        <Slide>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
            >
                <div className="badge badge-primary" style={{ alignSelf: 'flex-start', marginBottom: 'var(--space-md)' }}>
                    Part I: Individuals
                </div>
                <motion.h2 variants={fadeInUp} style={{ fontSize: 'var(--font-size-7xl)', marginBottom: 'var(--space-xl)', lineHeight: 1.1 }}>
                    <span className="gradient-text">The individuals</span> — the talent, the learners, the future leaders.
                </motion.h2>
                <motion.h3
                    variants={fadeInUp}
                    style={{
                        fontSize: 'var(--font-size-4xl)',
                        color: 'var(--color-accent-secondary)',
                        fontWeight: 'bold',
                        maxWidth: '80%'
                    }}
                >
                    Individuals Are the Engine of Growth
                </motion.h3>
            </motion.div>
        </Slide>
    );
}

// Slide 2: Potential to Professional Flow
export function Individuals2() {
    return (
        <Slide>
            <motion.div initial="hidden" animate="visible" variants={containerVariants} style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <motion.h2 variants={fadeInUp} style={{ marginBottom: 'var(--space-3xl)' }}>
                    From Potential to Professional
                </motion.h2>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 'auto', padding: '0 var(--space-xl)' }}>
                    {[
                        { label: 'Potential', icon: <Sprout size={48} strokeWidth={1.5} /> },
                        { label: 'Skills', icon: <Hammer size={48} strokeWidth={1.5} /> },
                        { label: 'Experience', icon: <Briefcase size={48} strokeWidth={1.5} /> },
                        { label: 'Income', icon: <CircleDollarSign size={48} strokeWidth={1.5} /> }
                    ].map((step, index) => (
                        <React.Fragment key={step.label}>
                            <motion.div
                                variants={scaleIn}
                                style={{
                                    width: '160px',
                                    height: '160px',
                                    borderRadius: '50%',
                                    border: '4px solid var(--color-primary)',
                                    background: 'var(--color-surface)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    boxShadow: 'var(--shadow-lg)',
                                    zIndex: 2,
                                    color: 'var(--color-text-primary)'
                                }}
                            >
                                <div style={{ color: 'var(--color-primary)', marginBottom: 'var(--space-xs)' }}>{step.icon}</div>
                                <div style={{ fontSize: 'var(--font-size-xl)', fontWeight: 'bold' }}>{step.label}</div>
                            </motion.div>
                            {index < 3 && (
                                <motion.div
                                    variants={fadeInUp}
                                    style={{
                                        flex: 1,
                                        height: '4px',
                                        background: 'var(--color-border)',
                                        margin: '0 var(--space-md)',
                                        position: 'relative'
                                    }}
                                >
                                    <div style={{
                                        position: 'absolute',
                                        right: -2,
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        width: 0,
                                        height: 0,
                                        borderTop: '8px solid transparent',
                                        borderBottom: '8px solid transparent',
                                        borderLeft: '12px solid var(--color-border)'
                                    }} />
                                </motion.div>
                            )}
                        </React.Fragment>
                    ))}
                </div>

                <motion.p
                    variants={fadeInUp}
                    style={{
                        fontSize: 'var(--font-size-2xl)',
                        textAlign: 'center',
                        maxWidth: '900px',
                        margin: 'var(--space-3xl) auto var(--space-2xl)',
                        lineHeight: 1.6,
                        color: 'var(--color-text-secondary)'
                    }}
                >
                    A holistic journey: nurture <strong>raw potential</strong>, build <strong>specialist skills</strong>, gain <strong>real-world experience</strong> and secure <strong>income</strong>.
                </motion.p>
            </motion.div>
        </Slide>
    );
}

// Slide 3: Three Pillars
export function Individuals3() {
    return (
        <Slide>
            <motion.div initial="hidden" animate="visible" variants={containerVariants} style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <motion.h2 variants={fadeInUp} style={{ marginBottom: 'var(--space-xl)' }}>
                    The Power of Three
                </motion.h2>

                <div className="grid-3" style={{ flex: 1, marginBottom: 'var(--space-xl)', gap: 'var(--space-lg)' }}>
                    <FeatureCard title="Technical Skills" delay={0.1}>
                        <div style={{ marginTop: 'var(--space-md)' }}>
                            <div style={{ color: 'var(--color-accent-secondary)', fontWeight: 'bold', marginBottom: 'var(--space-sm)', fontSize: 'var(--font-size-sm)', textTransform: 'uppercase' }}>Core Training</div>
                            <ul style={{ listStyle: 'none', padding: 0, color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                                <li>• Intensive Bootcamps</li>
                                <li>• Advanced Courses</li>
                                <li>• Industry Certifications</li>
                            </ul>
                        </div>
                    </FeatureCard>

                    <FeatureCard title="Employability" delay={0.2}>
                        <div style={{ marginTop: 'var(--space-md)' }}>
                            <div style={{ color: 'var(--color-accent-secondary)', fontWeight: 'bold', marginBottom: 'var(--space-sm)', fontSize: 'var(--font-size-sm)', textTransform: 'uppercase' }}>Market Readiness</div>
                            <ul style={{ listStyle: 'none', padding: 0, color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                                <li>• Soft Skills & English</li>
                                <li>• Remote Work Best Practices</li>
                                <li>• Career Coaching</li>
                            </ul>
                        </div>
                    </FeatureCard>

                    <FeatureCard title="Community" delay={0.3}>
                        <div style={{ marginTop: 'var(--space-md)' }}>
                            <div style={{ color: 'var(--color-accent-secondary)', fontWeight: 'bold', marginBottom: 'var(--space-sm)', fontSize: 'var(--font-size-sm)', textTransform: 'uppercase' }}>Network & Support</div>
                            <ul style={{ listStyle: 'none', padding: 0, color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                                <li>• Mentorship Matching</li>
                                <li>• Alumni Network</li>
                                <li>• Peer Learning</li>
                            </ul>
                        </div>
                    </FeatureCard>
                </div>

                <motion.div variants={fadeInUp} style={{ textAlign: 'center', background: 'rgba(255,255,255,0.05)', padding: 'var(--space-lg)', borderRadius: 'var(--radius-lg)' }}>
                    <h3 style={{ fontSize: 'var(--font-size-xl)', color: 'var(--color-text-primary)' }}>
                        Training for <strong style={{ color: 'var(--color-accent-secondary)' }}>income, employment, and growth</strong> — not just for training's sake.
                    </h3>
                </motion.div>
            </motion.div>
        </Slide>
    );
}

// Slide 4: Value for Companies
export function Individuals4() {
    return (
        <Slide>
            <motion.div initial="hidden" animate="visible" variants={containerVariants} style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <motion.h2 variants={fadeInUp} style={{ marginBottom: 'var(--space-3xl)' }}>
                    Why This Matters for Companies
                </motion.h2>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'var(--space-lg)', marginBottom: 'auto' }}>
                    <FeatureCard title="Better Talent In" delay={0.1} style={{ flex: 1, height: '220px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                        <div style={{ color: 'var(--color-primary)', marginBottom: 'var(--space-sm)' }}>
                            <Users size={64} strokeWidth={1.5} />
                        </div>
                    </FeatureCard>

                    <motion.div variants={fadeInUp} style={{ color: 'var(--color-border)', display: 'flex', alignItems: 'center' }}>
                        <ArrowRight size={48} />
                    </motion.div>

                    <FeatureCard title="Stronger Companies" delay={0.2} style={{ flex: 1, height: '220px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                        <div style={{ color: 'var(--color-primary)', marginBottom: 'var(--space-sm)' }}>
                            <Building2 size={64} strokeWidth={1.5} />
                        </div>
                    </FeatureCard>

                    <motion.div variants={fadeInUp} style={{ color: 'var(--color-border)', display: 'flex', alignItems: 'center' }}>
                        <ArrowRight size={48} />
                    </motion.div>

                    <FeatureCard title="Real Growth" delay={0.3} style={{ flex: 1, height: '220px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                        <div style={{ color: 'var(--color-primary)', marginBottom: 'var(--space-sm)' }}>
                            <TrendingUp size={64} strokeWidth={1.5} />
                        </div>
                    </FeatureCard>
                </div>

                <div style={{ textAlign: 'center', marginBottom: 'var(--space-xl)', marginTop: 'var(--space-3xl)' }}>
                    <motion.h3 variants={fadeInUp} style={{ fontSize: 'var(--font-size-2xl)', color: 'var(--color-primary)', marginBottom: 'var(--space-md)' }}>
                        Companies succeed because individuals are prepared
                    </motion.h3>
                    <motion.p variants={fadeInUp} style={{ fontSize: 'var(--font-size-xl)', color: 'var(--color-text-secondary)', maxWidth: '800px', margin: '0 auto' }}>
                        Work-ready individuals → reduce onboarding time, fuel innovation and enable Palestinian companies to scale globally.
                    </motion.p>
                </div>
            </motion.div>
        </Slide>
    );
}

// Slide 5: Impact Stats
export function Individuals5() {
    return (
        <Slide>
            <motion.div initial="hidden" animate="visible" variants={containerVariants} style={{ width: '100%', height: '100%' }}>
                <motion.h2 variants={fadeInUp} style={{ marginBottom: 'var(--space-xl)' }}>
                    Impact & Success
                </motion.h2>

                <div className="grid-2" style={{ gap: 'var(--space-lg)', marginBottom: 'var(--space-md)' }}>
                    <StatCard
                        number="4,500"
                        label="Graduates"
                        suffix=""
                        prefix=""
                        delay={0.1}
                    />
                    <StatCard
                        number="20M"
                        label="Annual Income Generated"
                        suffix="+"
                        prefix="$"
                        delay={0.2}
                    />
                </div>

                <div className="grid-2" style={{ alignItems: 'normal' }}>
                    {/* Income Growth Chart - Wrapped in FeatureCard for readability */}
                    <FeatureCard title="Income Growth" delay={0.3}>
                        <div style={{ display: 'flex', alignItems: 'flex-end', height: '180px', gap: 'var(--space-2xl)', justifyContent: 'center', flex: 1, paddingBottom: 'var(--space-sm)' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                                <motion.div
                                    initial={{ height: 0 }} animate={{ height: '70px' }} transition={{ duration: 1, delay: 0.5 }}
                                    style={{ width: '60px', background: 'var(--color-text-secondary)', opacity: 0.3, borderRadius: 'var(--radius-sm)' }}
                                />
                                <span style={{ fontSize: 'var(--font-size-sm)', textAlign: 'center', fontWeight: 'bold', color: 'var(--color-text-secondary)' }}>Avg<br />Graduate</span>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                                <motion.div
                                    initial={{ height: 0 }} animate={{ height: '160px' }} transition={{ duration: 1, delay: 0.7 }}
                                    style={{ width: '60px', background: 'var(--color-accent-secondary)', borderRadius: 'var(--radius-sm)', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                                />
                                <span style={{ fontSize: 'var(--font-size-sm)', fontWeight: 'bold', textAlign: 'center', color: 'var(--color-text-primary)' }}>Specialist<br />Coder</span>
                            </div>
                        </div>
                    </FeatureCard>

                    {/* Gender Balance Chart - Wrapped in FeatureCard for readability */}
                    <FeatureCard title="Gender Balance" delay={0.4}>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 'var(--space-xl)', flex: 1, height: '100%' }}>
                            <div style={{ width: '160px', height: '160px', borderRadius: '50%', background: 'conic-gradient(var(--color-accent-primary) 0% 50%, var(--color-accent-secondary) 50% 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                                <div style={{ width: '90px', height: '90px', background: 'var(--color-surface)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <span style={{ fontWeight: 'bold', color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-xl)' }}>50/50</span>
                                </div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
                                    <div style={{ width: '16px', height: '16px', background: 'var(--color-accent-secondary)', borderRadius: '4px' }} />
                                    <span style={{ fontSize: 'var(--font-size-base)', fontWeight: 'bold' }}>Women</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
                                    <div style={{ width: '16px', height: '16px', background: 'var(--color-accent-primary)', borderRadius: '4px' }} />
                                    <span style={{ fontSize: 'var(--font-size-base)', fontWeight: 'bold' }}>Men</span>
                                </div>
                            </div>
                        </div>
                    </FeatureCard>
                </div>
            </motion.div>
        </Slide>
    );
}
