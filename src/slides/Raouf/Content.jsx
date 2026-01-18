import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Slide from '../../components/Slide';
import { FeatureCard } from '../../components/Card';
import { staggerContainer, fadeInUp } from '../../utils/animations';
import { Megaphone, Palette, Search, Users, ExternalLink, Globe, Wifi, Clock, Zap, Briefcase, TrendingUp, ArrowDown, Compass, Building2 } from 'lucide-react';

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
        { icon: Globe, text: 'Social Media & Creative Production' },
        { icon: Search, text: 'SEO & Digital Visibility' },
        { icon: Users, text: 'Coaching & Training' },
        { icon: Megaphone, text: 'Campaigns Management' },
        { icon: ExternalLink, text: 'Sponsorship Support' },
        { icon: Compass, text: 'Marketing Strategy' },
    ];

    return (
        <Slide>
            {/* Background Effect */}
            <div style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(circle at 30% 20%, rgba(222, 99, 54, 0.08) 0%, transparent 50%)',
                pointerEvents: 'none',
                zIndex: 0
            }} />

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
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-end',
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
                            <Megaphone size={20} />
                            <span style={{
                                fontSize: 'var(--font-size-sm)',
                                fontWeight: 'var(--font-weight-bold)',
                                textTransform: 'uppercase',
                                letterSpacing: '2px'
                            }}>
                                Visibility & Identity
                            </span>
                        </div>
                        <h2 style={{
                            fontSize: 'clamp(2.5rem, 5vmin, 4rem)',
                            fontWeight: 'var(--font-weight-extrabold)',
                            margin: 0,
                            lineHeight: 'var(--line-height-tight)'
                        }}>
                            Marketing & <span className="gradient-text">Branding</span>
                        </h2>
                    </div>

                    {/* Impact Badge */}
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.4, type: 'spring', stiffness: 200 }}
                        className="glass"
                        style={{
                            padding: 'var(--space-lg) var(--space-xl)',
                            borderRadius: 'var(--radius-xl)',
                            border: '1px solid var(--color-border-subtle)',
                            textAlign: 'center'
                        }}
                    >
                        <div style={{ fontSize: '3rem', fontWeight: 900, lineHeight: 1 }} className="gradient-text">9</div>
                        <div style={{ fontSize: '0.75rem', fontWeight: 700, marginTop: '4px', opacity: 0.7, textTransform: 'uppercase', letterSpacing: '1px' }}>
                            Companies
                        </div>
                    </motion.div>
                </motion.div>

                {/* Main Content Area */}
                <div style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'var(--space-xl)'
                }}>
                    {/* Center Hero Card - Scope Overview */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.7 }}
                        className="glass"
                        style={{
                            borderRadius: 'var(--radius-3xl)',
                            padding: 'var(--space-xl)',
                            border: '1px solid var(--color-border-subtle)',
                            flex: 1,
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                    >
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 'var(--space-md)',
                            marginBottom: 'var(--space-lg)'
                        }}>
                            <div style={{
                                padding: '12px',
                                background: 'rgba(48, 157, 196, 0.15)',
                                borderRadius: 'var(--radius-lg)',
                                color: 'var(--brand-teal)',
                                display: 'flex'
                            }}>
                                <Palette size={24} />
                            </div>
                            <div>
                                <h3 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 900 }}>
                                    Scope of <span className="gradient-text">Work</span>
                                </h3>
                                <p style={{ margin: '4px 0 0', fontSize: '0.85rem', color: 'var(--color-text-tertiary)' }}>
                                    7 strategic intervention areas
                                </p>
                            </div>
                        </div>

                        {/* Flowing horizontal scope items */}
                        <div style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: 'var(--space-md)',
                            flex: 1,
                            alignContent: 'center'
                        }}>
                            {scope.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.8 + (idx * 0.08), type: 'spring', stiffness: 150 }}
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 'var(--space-sm)',
                                        padding: 'var(--space-md) var(--space-lg)',
                                        background: 'rgba(48, 157, 196, 0.08)',
                                        borderRadius: 'var(--radius-full)',
                                        border: '1px solid rgba(48, 157, 196, 0.2)',
                                        flex: '0 0 auto'
                                    }}
                                >
                                    <div style={{
                                        color: 'var(--brand-teal)',
                                        display: 'flex',
                                        padding: '6px',
                                        background: 'rgba(48, 157, 196, 0.12)',
                                        borderRadius: '8px'
                                    }}>
                                        <item.icon size={16} />
                                    </div>
                                    <span style={{
                                        fontSize: '0.9rem',
                                        fontWeight: 600,
                                        color: 'var(--color-text-primary)'
                                    }}>
                                        {item.text}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Bottom Bar - Delivery Models & Regional Split */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: 'var(--space-xl)'
                    }}>
                        {/* Delivery Models */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.2, duration: 0.6 }}
                            className="glass"
                            style={{
                                borderRadius: 'var(--radius-2xl)',
                                padding: 'var(--space-lg)',
                                border: '1px solid var(--color-border-subtle)'
                            }}
                        >
                            <h4 style={{
                                textTransform: 'uppercase',
                                fontSize: '0.7rem',
                                letterSpacing: '0.1em',
                                color: 'var(--brand-teal)',
                                margin: '0 0 var(--space-md)',
                                fontWeight: 800
                            }}>
                                Delivery Models
                            </h4>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-md)' }}>
                                <motion.div
                                    whileHover={{ scale: 1.03 }}
                                    style={{
                                        padding: 'var(--space-md)',
                                        background: 'rgba(222, 99, 54, 0.1)',
                                        borderRadius: 'var(--radius-lg)',
                                        border: '1px solid rgba(222, 99, 54, 0.2)',
                                        textAlign: 'center'
                                    }}
                                >
                                    <div style={{
                                        color: 'var(--brand-red)',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        marginBottom: 'var(--space-sm)'
                                    }}>
                                        <ExternalLink size={24} />
                                    </div>
                                    <div style={{ fontSize: '0.85rem', fontWeight: 700 }}>Agency</div>
                                    <div style={{ fontSize: '0.7rem', opacity: 0.7 }}>External</div>
                                </motion.div>

                                <motion.div
                                    whileHover={{ scale: 1.03 }}
                                    style={{
                                        padding: 'var(--space-md)',
                                        background: 'rgba(48, 157, 196, 0.1)',
                                        borderRadius: 'var(--radius-lg)',
                                        border: '1px solid rgba(48, 157, 196, 0.2)',
                                        textAlign: 'center'
                                    }}
                                >
                                    <div style={{
                                        color: 'var(--brand-teal)',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        marginBottom: 'var(--space-sm)'
                                    }}>
                                        <Users size={24} />
                                    </div>
                                    <div style={{ fontSize: '0.85rem', fontWeight: 700 }}>TTH Talent</div>
                                    <div style={{ fontSize: '0.7rem', opacity: 0.7 }}>Train-to-Hire</div>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Regional Breakdown */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.2, duration: 0.6 }}
                            className="glass"
                            style={{
                                borderRadius: 'var(--radius-2xl)',
                                padding: 'var(--space-lg)',
                                border: '1px solid var(--color-border-subtle)'
                            }}
                        >
                            <h4 style={{
                                textTransform: 'uppercase',
                                fontSize: '0.7rem',
                                letterSpacing: '0.1em',
                                color: 'var(--brand-teal)',
                                margin: '0 0 var(--space-md)',
                                fontWeight: 800
                            }}>
                                Regional Distribution
                            </h4>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-md)' }}>
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1.4 }}
                                    style={{
                                        padding: 'var(--space-md)',
                                        background: 'rgba(16, 185, 129, 0.1)',
                                        borderRadius: 'var(--radius-lg)',
                                        border: '1px solid rgba(16, 185, 129, 0.2)',
                                        textAlign: 'center'
                                    }}
                                >
                                    <div style={{ fontSize: '2rem', fontWeight: 900, lineHeight: 1, color: 'var(--color-success)' }}>3</div>
                                    <div style={{ fontSize: '0.75rem', fontWeight: 700, marginTop: '4px', opacity: 0.8 }}>Gaza Strip</div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1.5 }}
                                    style={{
                                        padding: 'var(--space-md)',
                                        background: 'rgba(48, 157, 196, 0.1)',
                                        borderRadius: 'var(--radius-lg)',
                                        border: '1px solid rgba(48, 157, 196, 0.2)',
                                        textAlign: 'center'
                                    }}
                                >
                                    <div style={{ fontSize: '2rem', fontWeight: 900, lineHeight: 1, color: 'var(--brand-teal)' }}>6</div>
                                    <div style={{ fontSize: '0.75rem', fontWeight: 700, marginTop: '4px', opacity: 0.8 }}>West Bank</div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </Slide>
    );
}

export function WorkingSpaces() {
    const metrics = [
        { label: 'Bandwidth Gain', v25: 125, v26: 162.5, unit: 'Mbps', color: 'var(--brand-teal)', max: 200 },
        { label: 'Latency / Exp.', v25: 4.5, v26: 7.5, unit: 'Mbps', color: 'var(--brand-teal)', max: 10 },
        { label: 'Operating Hours', v25: 10, v26: 12.2, unit: 'H/D', color: 'var(--brand-orange)', max: 24 },
        { label: 'Utilization Rate', v25: 50.4, v26: 61.7, unit: '%', color: 'var(--brand-orange)', max: 100 },
        { label: 'Daily Active Users', v25: 22, v26: 33, unit: 'Users', color: 'var(--brand-navy)', max: 50 },
        { label: 'Space Capacity', v25: 45, v26: 54, unit: 'Seats', color: 'var(--brand-navy)', max: 100 },
    ];

    const roadmap = [
        { label: 'Target Hubs', value: '7-10', sub: 'New Strategic Locations', icon: Building2, color: 'var(--brand-teal)' },
        { label: 'Program Price', value: '450 ILS', sub: 'Resilient Rate', icon: Briefcase, color: 'var(--brand-orange)' },
        { label: 'Cohort Support', value: '75%', sub: 'Ops Subsidy Target', icon: TrendingUp, color: 'var(--color-success)' },
        { label: 'Launch Date', value: 'FEB 26', sub: 'Cohort 2 Kickoff', icon: Clock, color: 'var(--brand-red)' },
    ];

    return (
        <Slide>
            {/* Background Effect */}
            <div style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(circle at 20% 30%, rgba(48, 157, 196, 0.08) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(231, 139, 63, 0.06) 0%, transparent 50%)',
                pointerEvents: 'none',
                zIndex: 0
            }} />

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
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-end',
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
                            <Wifi size={20} />
                            <span style={{
                                fontSize: 'var(--font-size-sm)',
                                fontWeight: 'var(--font-weight-bold)',
                                textTransform: 'uppercase',
                                letterSpacing: '2px'
                            }}>
                                Resilience Infrastructure
                            </span>
                        </div>
                        <h2 style={{
                            fontSize: 'clamp(2.5rem, 5vmin, 4rem)',
                            fontWeight: 'var(--font-weight-extrabold)',
                            margin: 0,
                            lineHeight: 'var(--line-height-tight)'
                        }}>
                            Phase <span className="gradient-text">Expansion</span> Roadmap
                        </h2>
                    </div>

                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.4, type: 'spring', stiffness: 200 }}
                        style={{ textAlign: 'right' }}
                    >
                        <div style={{ fontSize: 'var(--font-size-sm)', fontWeight: 700, color: 'var(--color-text-tertiary)', opacity: 0.6, textTransform: 'uppercase', letterSpacing: '1px' }}>Horizon</div>
                        <div style={{ fontSize: 'var(--font-size-2xl)', fontWeight: 900, background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>2025 - 2026</div>
                    </motion.div>
                </motion.div>

                {/* Main Content Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1.2fr 0.8fr',
                    gap: 'var(--space-xl)',
                    flex: 1
                }}>

                    {/* Left: Performance Metrics with 2025 vs 2026 Comparison */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 0.7 }}
                        className="glass"
                        style={{
                            borderRadius: 'var(--radius-3xl)',
                            padding: 'var(--space-xl)',
                            display: 'flex',
                            flexDirection: 'column',
                            border: '1px solid var(--color-border-subtle)'
                        }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-lg)' }}>
                            <div>
                                <h3 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 900 }}>Network <span className="gradient-text">Performance</span></h3>
                                <p style={{ margin: '4px 0 0', fontSize: '0.8rem', color: 'var(--color-text-tertiary)' }}>2025 Baseline → 2026 Projected Impact</p>
                            </div>
                            <div style={{ display: 'flex', gap: 'var(--space-md)' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'rgba(255,255,255,0.25)' }} />
                                    <span style={{ fontSize: '0.7rem', fontWeight: 700, opacity: 0.6 }}>2025</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--brand-teal)' }} />
                                    <span style={{ fontSize: '0.7rem', fontWeight: 700 }}>2026</span>
                                </div>
                            </div>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-lg)', flex: 1, alignItems: 'center' }}>
                            {metrics.map((m, idx) => (
                                <motion.div
                                    key={m.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8 + (idx * 0.1), duration: 0.5 }}
                                    style={{
                                        background: 'rgba(255,255,255,0.02)',
                                        padding: 'var(--space-md)',
                                        borderRadius: 'var(--radius-xl)',
                                        border: '1px solid var(--color-border-subtle)'
                                    }}
                                >
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                                        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-text-secondary)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{m.label}</span>
                                        <span style={{ fontSize: '1rem', fontWeight: 900, color: 'var(--brand-teal)' }}>{m.v26} <small style={{ opacity: 0.5, fontSize: '0.7rem' }}>{m.unit}</small></span>
                                    </div>
                                    <div style={{ height: '10px', background: 'rgba(255,255,255,0.05)', borderRadius: '6px', overflow: 'hidden', position: 'relative' }}>
                                        {/* 2025 Base */}
                                        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: `${(m.v25 / m.max) * 100}%`, background: 'rgba(255,255,255,0.15)', borderRadius: '6px', zIndex: 1 }} />
                                        {/* 2026 Target */}
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${(m.v26 / m.max) * 100}%` }}
                                            transition={{ duration: 1.5, delay: 1.2 + (idx * 0.1), ease: 'easeOut' }}
                                            style={{ height: '100%', background: m.color, borderRadius: '6px', position: 'relative', zIndex: 2 }}
                                        />
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '6px' }}>
                                        <span style={{ fontSize: '0.65rem', opacity: 0.4 }}>Base: {m.v25}</span>
                                        <span style={{ fontSize: '0.7rem', color: 'var(--color-success)', fontWeight: 800 }}>+{Math.round(((m.v26 - m.v25) / m.v25) * 100)}%</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: Roadmap & Capacity */}
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 'var(--space-xl)'
                    }}>
                        {/* Cohort 2 Roadmap */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6, duration: 0.7 }}
                            className="glass"
                            style={{
                                borderRadius: 'var(--radius-3xl)',
                                padding: 'var(--space-xl)',
                                display: 'flex',
                                flexDirection: 'column',
                                border: '1px solid var(--color-border-subtle)',
                                flex: 1
                            }}
                        >
                            <div style={{ marginBottom: 'var(--space-lg)' }}>
                                <div className="badge" style={{ background: 'var(--brand-orange)', color: 'white', marginBottom: 'var(--space-sm)' }}>NEXT CYCLE</div>
                                <h3 style={{ margin: 0, fontSize: '1.4rem', fontWeight: 900 }}>Cohort 2 <span style={{ color: 'var(--brand-orange)' }}>Scale-Up</span></h3>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-md)', flex: 1 }}>
                                {roadmap.map((item, idx) => (
                                    <motion.div
                                        key={item.label}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 1 + (idx * 0.1), type: 'spring', stiffness: 150 }}
                                        whileHover={{ scale: 1.05, y: -3 }}
                                        style={{
                                            padding: 'var(--space-md)',
                                            background: 'rgba(255,255,255,0.03)',
                                            borderRadius: 'var(--radius-xl)',
                                            border: '1px solid var(--color-border-subtle)',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            textAlign: 'center',
                                            gap: 'var(--space-sm)',
                                            position: 'relative',
                                            overflow: 'hidden'
                                        }}
                                    >
                                        <div style={{
                                            width: '40px',
                                            height: '40px',
                                            borderRadius: '12px',
                                            background: `${item.color}20`,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: item.color
                                        }}>
                                            <item.icon size={20} />
                                        </div>
                                        <div>
                                            <div style={{ fontSize: '1.3rem', fontWeight: 900, lineHeight: 1, marginBottom: '4px' }}>{item.value}</div>
                                            <div style={{ fontSize: '0.7rem', fontWeight: 700, opacity: 0.7 }}>{item.label}</div>
                                            <div style={{ fontSize: '0.65rem', opacity: 0.5, marginTop: '2px' }}>{item.sub}</div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Capacity Target Gauge */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.7 }}
                            className="glass-strong"
                            style={{
                                borderRadius: 'var(--radius-3xl)',
                                padding: 'var(--space-lg)',
                                background: 'linear-gradient(135deg, rgba(48, 157, 196, 0.1) 0%, rgba(0, 210, 170, 0.15) 100%)',
                                border: '2px solid rgba(48, 157, 196, 0.3)',
                                textAlign: 'center',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                        >
                            <motion.div
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.3, 0.5, 0.3]
                                }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                style={{
                                    position: 'absolute',
                                    inset: 0,
                                    background: 'radial-gradient(circle at center, rgba(48, 157, 196, 0.2) 0%, transparent 70%)',
                                    pointerEvents: 'none'
                                }}
                            />

                            <div style={{ position: 'relative', zIndex: 1 }}>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'var(--space-xs)', marginBottom: 'var(--space-sm)' }}>
                                    <div style={{
                                        width: 10,
                                        height: 10,
                                        borderRadius: '50%',
                                        background: 'var(--brand-teal)',
                                        boxShadow: '0 0 15px var(--brand-teal)'
                                    }} />
                                    <span style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>TARGET CAPACITY</span>
                                </div>
                                <div style={{ fontSize: '2.5rem', fontWeight: 900, lineHeight: 1, color: 'var(--brand-teal)' }}>10+</div>
                                <div style={{ fontSize: '0.85rem', fontWeight: 600, marginTop: 'var(--space-xs)', opacity: 0.8 }}>Integrated Hubs by 2026</div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
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
