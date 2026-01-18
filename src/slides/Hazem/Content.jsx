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
                    <span className="gradient-text">The individuals</span> the talent, the learners, the future leaders.
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
                                className="glass"
                                style={{
                                    width: '160px',
                                    height: '160px',
                                    borderRadius: '50%',
                                    border: '4px solid var(--color-accent-primary)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    boxShadow: 'var(--shadow-lg)',
                                    zIndex: 2,
                                    color: 'var(--color-text-primary)'
                                }}
                            >
                                <div style={{ color: 'var(--color-accent-primary)', marginBottom: 'var(--space-xs)' }}>{step.icon}</div>
                                <div style={{ fontSize: 'var(--font-size-xl)', fontWeight: 'bold' }}>{step.label}</div>
                            </motion.div>
                            {index < 3 && (
                                <motion.div
                                    variants={fadeInUp}
                                    style={{
                                        flex: 1,
                                        height: '4px',
                                        background: 'var(--color-border-medium)',
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
                                        borderLeft: '12px solid var(--color-border-medium)'
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
                            <ul style={{ listStyle: 'none', padding: 0, color: 'var(--color-text-secondary)', lineHeight: 1.6, textAlign: 'left', margin: 0 }}>
                                <li>Intensive Bootcamps</li>
                                <li>Advanced Courses</li>
                                <li>Industry Certifications</li>
                            </ul>
                        </div>
                    </FeatureCard>

                    <FeatureCard title="Employability" delay={0.2}>
                        <div style={{ marginTop: 'var(--space-md)' }}>
                            <div style={{ color: 'var(--color-accent-secondary)', fontWeight: 'bold', marginBottom: 'var(--space-sm)', fontSize: 'var(--font-size-sm)', textTransform: 'uppercase' }}>Market Readiness</div>
                            <ul style={{ listStyle: 'none', padding: 0, color: 'var(--color-text-secondary)', lineHeight: 1.6, textAlign: 'left', margin: 0 }}>
                                <li>Soft Skills & English</li>
                                <li>Remote Work Best Practices</li>
                                <li>Career Coaching</li>
                            </ul>
                        </div>
                    </FeatureCard>

                    <FeatureCard title="Community" delay={0.3}>
                        <div style={{ marginTop: 'var(--space-md)' }}>
                            <div style={{ color: 'var(--color-accent-secondary)', fontWeight: 'bold', marginBottom: 'var(--space-sm)', fontSize: 'var(--font-size-sm)', textTransform: 'uppercase' }}>Network & Support</div>
                            <ul style={{ listStyle: 'none', padding: 0, color: 'var(--color-text-secondary)', lineHeight: 1.6, textAlign: 'left', margin: 0 }}>
                                <li>Mentorship Matching</li>
                                <li>Alumni Network</li>
                                <li>Peer Learning</li>
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

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'var(--space-2xl)', marginBottom: 'auto', marginTop: 'auto' }}>
                    {/* Item 1 */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 'var(--space-md)' }}>
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.1, type: 'spring' }}
                            style={{
                                width: '120px',
                                height: '120px',
                                borderRadius: '50%',
                                background: 'var(--color-bg-tertiary)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'var(--color-accent-primary)',
                                boxShadow: 'var(--shadow-lg)'
                            }}
                        >
                            <Users size={56} strokeWidth={1.5} />
                        </motion.div>
                        <h3 style={{ fontSize: 'var(--font-size-xl)', fontWeight: 'bold', color: 'var(--color-text-primary)' }}>Better Talent In</h3>
                    </div>

                    <motion.div variants={fadeInUp} style={{ color: 'var(--color-border-strong)', display: 'flex', alignItems: 'center' }}>
                        <ArrowRight size={40} />
                    </motion.div>

                    {/* Item 2 */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 'var(--space-md)' }}>
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, type: 'spring' }}
                            style={{
                                width: '120px',
                                height: '120px',
                                borderRadius: '50%',
                                background: 'var(--color-bg-tertiary)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'var(--color-accent-secondary)', // Teal
                                boxShadow: 'var(--shadow-lg)'
                            }}
                        >
                            <Building2 size={56} strokeWidth={1.5} />
                        </motion.div>
                        <h3 style={{ fontSize: 'var(--font-size-xl)', fontWeight: 'bold', color: 'var(--color-text-primary)' }}>Stronger Companies</h3>
                    </div>

                    <motion.div variants={fadeInUp} style={{ color: 'var(--color-border-strong)', display: 'flex', alignItems: 'center' }}>
                        <ArrowRight size={40} />
                    </motion.div>

                    {/* Item 3 */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 'var(--space-md)' }}>
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.3, type: 'spring' }}
                            style={{
                                width: '120px',
                                height: '120px',
                                borderRadius: '50%',
                                background: 'var(--color-bg-tertiary)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'var(--color-accent-tertiary)', // Orange
                                boxShadow: 'var(--shadow-lg)'
                            }}
                        >
                            <TrendingUp size={56} strokeWidth={1.5} />
                        </motion.div>
                        <h3 style={{ fontSize: 'var(--font-size-xl)', fontWeight: 'bold', color: 'var(--color-text-primary)' }}>Real Growth</h3>
                    </div>
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
            <motion.div initial="hidden" animate="visible" variants={containerVariants} style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <motion.h2 variants={fadeInUp} style={{ marginBottom: 'var(--space-2xl)', textAlign: 'center' }}>
                    Impact & <span className="gradient-text">Success</span>
                </motion.h2>

                {/* Top Metrics - Hero Style */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-xl)', marginBottom: 'var(--space-xl)' }}>
                    <motion.div
                        variants={scaleIn}
                        className="glass"
                        style={{
                            padding: 'var(--space-xl)',
                            borderRadius: 'var(--radius-2xl)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center',
                            border: '1px solid rgba(255,255,255,0.1)'
                        }}
                    >
                        <Users size={48} color="var(--color-accent-primary)" style={{ marginBottom: 'var(--space-md)' }} />
                        <div className="gradient-text" style={{ fontSize: 'clamp(3rem, 5vmin, 5rem)', fontWeight: 800, lineHeight: 1 }}>4,500</div>
                        <div style={{ fontSize: '1.25rem', color: 'var(--color-text-secondary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px', marginTop: 'var(--space-sm)' }}>Graduates</div>
                        <div style={{ fontSize: '0.9rem', opacity: 0.6, marginTop: 'var(--space-xs)' }}>Ready for the global market</div>
                    </motion.div>

                    <motion.div
                        variants={scaleIn}
                        className="glass"
                        style={{
                            padding: 'var(--space-xl)',
                            borderRadius: 'var(--radius-2xl)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center',
                            border: '1px solid rgba(255,255,255,0.1)'
                        }}
                    >
                        <CircleDollarSign size={48} color="var(--color-accent-secondary)" style={{ marginBottom: 'var(--space-md)' }} />
                        <div className="gradient-text" style={{ fontSize: 'clamp(3rem, 5vmin, 5rem)', fontWeight: 800, lineHeight: 1 }}>$20M+</div>
                        <div style={{ fontSize: '1.25rem', color: 'var(--color-text-secondary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px', marginTop: 'var(--space-sm)' }}>Annual Income</div>
                        <div style={{ fontSize: '0.9rem', opacity: 0.6, marginTop: 'var(--space-xs)' }}>Generated by alumni</div>
                    </motion.div>
                </div>

                {/* Bottom Charts */}
                <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: 'var(--space-xl)', flex: 1 }}>
                    {/* Income Growth Visual */}
                    <motion.div
                        variants={fadeInUp}
                        className="glass"
                        style={{
                            padding: 'var(--space-xl)',
                            borderRadius: 'var(--radius-xl)',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center'
                        }}
                    >
                        <h3 style={{ fontSize: '1.5rem', marginBottom: 'var(--space-xl)', color: 'var(--color-text-primary)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <TrendingUp size={24} color="var(--color-success)" />
                            Income Multiplier
                        </h3>

                        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-around', height: '100%', paddingBottom: 'var(--space-lg)' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                                <motion.div
                                    initial={{ height: 0 }}
                                    animate={{ height: '60px' }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                    style={{
                                        width: '80px',
                                        background: 'rgba(255,255,255,0.1)',
                                        borderRadius: '12px 12px 0 0',
                                        border: '1px solid rgba(255,255,255,0.2)'
                                    }}
                                />
                                <span style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>Avg Graduate</span>
                            </div>

                            <ArrowRight size={32} color="var(--color-text-tertiary)" style={{ paddingBottom: '30px' }} />

                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                                <motion.div
                                    initial={{ height: 0 }}
                                    animate={{ height: '180px' }}
                                    transition={{ duration: 1, delay: 0.7 }}
                                    style={{
                                        width: '100px',
                                        background: 'linear-gradient(to top, var(--color-accent-primary), var(--color-accent-secondary))',
                                        borderRadius: '12px 12px 0 0',
                                        position: 'relative',
                                        boxShadow: '0 0 20px rgba(222, 99, 54, 0.3)'
                                    }}
                                >
                                    <div style={{
                                        position: 'absolute',
                                        top: '-40px',
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        fontSize: '2rem',
                                        fontWeight: 900,
                                        color: 'var(--color-accent-primary)'
                                    }}>
                                        3x
                                    </div>
                                </motion.div>
                                <span style={{ fontSize: '1.1rem', fontWeight: 'bold', color: 'var(--color-text-primary)' }}>Specialist</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Gender Balance */}
                    <motion.div
                        variants={fadeInUp}
                        className="glass"
                        style={{
                            padding: 'var(--space-xl)',
                            borderRadius: 'var(--radius-xl)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)'
                        }}
                    >
                        <h3 style={{ fontSize: '1.5rem', marginBottom: 'var(--space-lg)', color: 'var(--color-text-primary)' }}>
                            Gender Balance
                        </h3>
                        <div style={{ position: 'relative', width: '200px', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <svg width="100%" height="100%" viewBox="0 0 100 100" style={{ transform: 'rotate(-90deg)' }}>
                                <circle cx="50" cy="50" r="42" fill="transparent" stroke="rgba(255,255,255,0.1)" strokeWidth="12" />
                                <motion.circle
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 0.5 }}
                                    transition={{ duration: 1.5, ease: "easeOut" }}
                                    cx="50" cy="50" r="42"
                                    fill="transparent"
                                    stroke="var(--color-accent-secondary)"
                                    strokeWidth="12"
                                    strokeDasharray="1"
                                    strokeLinecap="round"
                                />
                            </svg>
                            <div style={{ position: 'absolute', textAlign: 'center' }}>
                                <div className="gradient-text" style={{ fontSize: '3.5rem', fontWeight: 900, lineHeight: 1 }}>50%</div>
                                <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', opacity: 0.8 }}>Women</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </Slide>
    );
}
