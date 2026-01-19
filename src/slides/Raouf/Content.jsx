import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Slide from '../../components/Slide';
import { FeatureCard } from '../../components/Card';
import { staggerContainer, fadeInUp } from '../../utils/animations';
import { Megaphone, Palette, Search, Users, ExternalLink, Globe, Wifi, Clock, Zap, Briefcase, TrendingUp, ArrowDown, Compass, Building2 } from 'lucide-react';
import { FloatingBackground } from '../../components/FloatingBackground';
import raoufBg1 from '../../assets/images/backgrounds/raouf/raouf-1.jpg';
import raoufBg2 from '../../assets/images/backgrounds/raouf/raouf-2.jpg';
import raoufBg3 from '../../assets/images/backgrounds/raouf/raouf-3.jpg';
import raoufBg4 from '../../assets/images/backgrounds/raouf/raouf-4.jpg';

const raoufImages = [raoufBg1, raoufBg2, raoufBg3, raoufBg4];

// Animation Variants
const containerVariants = staggerContainer(0.15);

export function CapacityBuilding() {
    return (
        <Slide>
            <FloatingBackground images={raoufImages} />
            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                style={{ width: '100%', height: '100%' }}
            >
                <motion.div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 'var(--space-lg)', flexDirection: 'column' }}>
                    {/* Elevate Logo Concept */}
                    <motion.h2 variants={fadeInUp} style={{ fontSize: '3rem', fontWeight: '900', letterSpacing: '-2px', lineHeight: 1, textAlign: 'center' }}>
                        Capacity <span className="gradient-text">Building</span>
                        <div style={{ fontSize: '1.8rem', marginTop: 'var(--space-xs)', color: 'var(--color-text-secondary)' }}>Elevate 2.0 | 2025</div>
                    </motion.h2>
                </motion.div>

                <div className="grid-3" style={{ gap: 'var(--space-md)' }}>
                    <FeatureCard
                        title="Train-to-Hire"
                        description="Financial support for intern stipends to onboard fresh, pre-vetted talent."
                        delay={0.1}
                    >
                        <div style={{ marginTop: 'var(--space-sm)', display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(255,255,255,0.03)', padding: '10px 12px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                                <div>
                                    <strong className="gradient-text" style={{ fontSize: '1.8rem', fontWeight: 900, lineHeight: 1 }}>38</strong>
                                    <div style={{ fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', color: 'var(--color-text-tertiary)' }}>Total Interns</div>
                                </div>
                                <div style={{ display: 'flex', gap: '8px' }}>
                                    <div style={{ textAlign: 'center' }}>
                                        <div style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--color-text-primary)' }}>18</div>
                                        <div style={{ fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', opacity: 1, color: 'var(--color-text-secondary)' }}>WB</div>
                                    </div>
                                    <div style={{ width: '1px', background: 'rgba(255,255,255,0.1)' }} />
                                    <div style={{ textAlign: 'center' }}>
                                        <div style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--color-text-primary)' }}>20</div>
                                        <div style={{ fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', opacity: 1, color: 'var(--color-text-secondary)' }}>Gaza</div>
                                    </div>
                                </div>
                            </div>

                            {/* Hiring Performance Highlights - High Contrast & Prominent */}
                            <div style={{
                                padding: '16px 12px',
                                background: 'rgba(16, 185, 129, 0.1)',
                                borderRadius: '14px',
                                border: '1px solid rgba(16, 185, 129, 0.2)',
                                textAlign: 'center'
                            }}>
                                <div style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', opacity: 0.7, color: 'var(--color-success)', marginBottom: '4px' }}>
                                    Hiring Success Rate
                                </div>
                                <div style={{ fontSize: '2.2rem', fontWeight: 950, color: 'var(--color-success)', lineHeight: 1, marginBottom: '12px' }}>
                                    55.2%
                                </div>

                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    gap: '16px',
                                    borderTop: '1px solid rgba(255,255,255,0.1)',
                                    paddingTop: '10px'
                                }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                        <span style={{ fontSize: '0.75rem', fontWeight: 800, opacity: 1, color: 'var(--color-text-secondary)' }}>WB:</span>
                                        <span style={{ fontSize: '1rem', fontWeight: 800 }}>83.3%</span>
                                    </div>
                                    <div style={{ width: '1px', background: 'rgba(255,255,255,0.1)' }} />
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                        <span style={{ fontSize: '0.75rem', fontWeight: 800, opacity: 1, color: 'var(--color-text-secondary)' }}>Gaza:</span>
                                        <span style={{ fontSize: '1rem', fontWeight: 800 }}>30%</span>
                                    </div>
                                </div>
                            </div>

                            <div style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: '4px',
                                fontSize: '0.6rem',
                                fontWeight: 600,
                                opacity: 0.5
                            }}>
                                {['ODOO', 'ASP.NET', 'ANGULAR', 'SAP', 'UI/UX'].map(tag => (
                                    <span key={tag} style={{ padding: '2px 6px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.05)' }}>{tag}</span>
                                ))}
                            </div>
                        </div>
                    </FeatureCard >

                    <FeatureCard
                        title="Upskilling"
                        description="Covering training costs for existing staff to meet evolving market demands."
                        delay={0.2}
                    >
                        <div style={{ marginTop: 'var(--space-sm)', display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
                            {/* Primary Impact Stats */}
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(255,255,255,0.03)', padding: '10px 12px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                                <div>
                                    <strong className="gradient-text" style={{ fontSize: '1.8rem', fontWeight: 900, lineHeight: 1 }}>81</strong>
                                    <div style={{ fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.5px', color: 'var(--color-text-tertiary)', marginTop: '4px' }}>Employees Trained</div>
                                </div>
                                <div style={{ textAlign: 'right' }}>
                                    <div style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--color-text-primary)' }}>17</div>
                                    <div style={{ fontSize: '0.6rem', fontWeight: 800, textTransform: 'uppercase', opacity: 1, color: 'var(--color-text-secondary)' }}>Companies</div>
                                </div>
                            </div>

                            {/* Training Highlights Box */}
                            <div style={{
                                padding: '12px',
                                background: 'linear-gradient(135deg, rgba(222, 99, 54, 0.08) 0%, rgba(222, 99, 54, 0.04) 100%)',
                                borderRadius: '12px',
                                border: '1px solid rgba(222, 99, 54, 0.15)'
                            }}>
                                <div style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', opacity: 0.7, color: 'var(--brand-orange)', marginBottom: '8px', textAlign: 'center' }}>
                                    Core Competencies
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                                    {[
                                        'Cloud Architecture & DevOps',
                                        'Digital Marketing Strategy',
                                        'Soft Skills & Management'
                                    ].map(item => (
                                        <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--brand-orange)' }} />
                                            <span style={{ fontSize: '0.75rem', fontWeight: 600, opacity: 0.9 }}>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: '4px',
                                fontSize: '0.6rem',
                                fontWeight: 600,
                                opacity: 0.5
                            }}>
                                {['AWS', 'AZURE', 'SEO', 'PMP', 'AGILE'].map(tag => (
                                    <span key={tag} style={{ padding: '2px 6px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.05)' }}>{tag}</span>
                                ))}
                            </div>
                        </div>
                    </FeatureCard>

                    <FeatureCard
                        title="Talent Recovery"
                        description="Covering salaries to recover war-affected employees in Gaza."
                        highlighted={true}
                        highlightLabel="Gaza Only"
                        delay={0.3}
                    >
                        <div style={{ marginTop: 'var(--space-sm)', display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
                            {/* Impact Narrative Box */}
                            <div style={{
                                padding: '16px 12px',
                                background: 'rgba(0, 210, 170, 0.1)',
                                borderRadius: '14px',
                                border: '1px solid rgba(0, 210, 170, 0.2)',
                                textAlign: 'center'
                            }}>
                                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'white', lineHeight: 1.5, opacity: 0.9 }}>
                                    "Helping Gaza companies <strong>recover and retain</strong> critical talent affected by the ongoing crisis."
                                </div>
                            </div>

                            <div style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: '4px',
                                fontSize: '0.6rem',
                                fontWeight: 700,
                                textTransform: 'uppercase',
                                letterSpacing: '0.5px'
                            }}>
                                <span style={{ padding: '2px 8px', background: 'rgba(0, 210, 170, 0.2)', color: 'var(--color-success)', borderRadius: '4px' }}>Retention Support</span>
                                <span style={{ padding: '2px 8px', background: 'rgba(0, 210, 170, 0.2)', color: 'var(--color-success)', borderRadius: '4px' }}>Sustainability</span>
                                <span style={{ padding: '2px 8px', background: 'rgba(255,255,255,0.05)', color: 'white', opacity: 0.6, borderRadius: '4px' }}>Staff Continuity</span>
                            </div>
                        </div>
                    </FeatureCard>
                </div >


            </motion.div >
        </Slide >
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
            <FloatingBackground images={raoufImages} />

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
                    {/* Top Bar - Delivery Models & Regional Split (MOVED TOP) */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: 'var(--space-xl)'
                    }}>
                        {/* Delivery Models */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
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
                            transition={{ delay: 0.6, duration: 0.6 }}
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
                                    transition={{ delay: 0.8 }}
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
                                    transition={{ delay: 0.9 }}
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

                    {/* Bottom Hero Card - Scope Overview (MOVED BOTTOM) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.0, duration: 0.7 }}
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
                                    transition={{ delay: 1.2 + (idx * 0.08), type: 'spring', stiffness: 150 }}
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
                </div>
            </div>
        </Slide>
    );
}

export function WorkingSpaces() {
    const metrics = [
        { label: 'Monthly Membership', v25: 600, v26: 450, unit: 'ILS', color: 'var(--brand-teal)', max: 700 },
        { label: 'Women-Equipped Spaces', v25: 0, v26: 2, unit: '/5 Facilities', color: 'var(--brand-teal)', max: 5 },
        { label: 'Bandwidth Gain', v25: 125, v26: 162.5, unit: 'Mbps', color: 'var(--brand-teal)', max: 200 },
        { label: 'Individual User Speed', v25: 4.5, v26: 7.5, unit: 'Mbps', color: 'var(--brand-teal)', max: 10 },
        { label: 'Operating Hours', v25: 10, v26: 12.2, unit: 'H/D', color: 'var(--brand-teal)', max: 24 },
        { label: 'Utilization Rate', v25: 50.4, v26: 61.7, unit: '%', color: 'var(--brand-teal)', max: 100 },
        { label: 'Daily Active Users', v25: 22, v26: 33, unit: 'Users', color: 'var(--brand-teal)', max: 50 },
        { label: 'Space Capacity', v25: 45, v26: 54, unit: 'Seats', color: 'var(--brand-teal)', max: 100 },
    ];

    const roadmap = [
        { label: 'Target Spaces', value: '7-10', sub: 'New Strategic Locations', icon: Building2, color: 'var(--brand-teal)' },
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
            <FloatingBackground images={raoufImages} />

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
                            Support impact and <span className="gradient-text">next steps</span>
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
                                <h3 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 900 }}>Impact <span className="gradient-text">insights</span></h3>
                                <p style={{ margin: '4px 0 0', fontSize: '0.8rem', color: 'var(--color-text-tertiary)' }}>2025 Baseline → 2026 Projected Impact</p>
                            </div>
                            <div style={{ display: 'flex', gap: 'var(--space-md)' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'rgba(255,255,255,0.25)' }} />
                                    <span style={{ fontSize: '0.7rem', fontWeight: 700, opacity: 0.6 }}>Before Support</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--brand-teal)' }} />
                                    <span style={{ fontSize: '0.7rem', fontWeight: 700 }}>After Support</span>
                                </div>
                            </div>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-lg)', flex: 1, alignItems: 'center' }}>
                            {metrics.map((m, idx) => (
                                <motion.div
                                    key={m.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.7 + (idx * 0.1), duration: 0.5 }}
                                    style={{
                                        background: 'rgba(255,255,255,0.02)',
                                        padding: 'var(--space-md)',
                                        borderRadius: 'var(--radius-xl)',
                                        border: '1px solid var(--color-border-subtle)'
                                    }}
                                >
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', alignItems: 'flex-end' }}>
                                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                                            <span style={{ fontSize: '0.65rem', fontWeight: 700, color: 'var(--brand-teal)', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '2px' }}>{m.label}</span>
                                            <span style={{ fontSize: '1.2rem', fontWeight: 900, color: 'white' }}>{m.v26} <small style={{ opacity: 0.6, fontSize: '0.75rem', fontWeight: 600 }}>{m.unit}</small></span>
                                        </div>
                                        <div style={{ textAlign: 'right' }}>
                                            <span style={{
                                                fontSize: '0.8rem',
                                                color: m.label === 'Monthly Membership' ? 'var(--color-success)' : 'var(--brand-teal)',
                                                fontWeight: 900,
                                                background: m.label === 'Monthly Membership' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(48, 157, 196, 0.1)',
                                                padding: '2px 8px',
                                                borderRadius: '6px'
                                            }}>
                                                {m.label === 'Monthly Membership' ? '-' : '+'}{Math.abs(Math.round(((m.v26 - m.v25) / (m.v25 || 1)) * 100))}%
                                            </span>
                                        </div>
                                    </div>
                                    <div style={{ height: '8px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px', overflow: 'hidden', position: 'relative' }}>
                                        {/* 2026 Target - The full bar in Branded Teal */}
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${(m.v26 / m.max) * 100}%` }}
                                            transition={{ duration: 1.5, delay: 0.9 + (idx * 0.1), ease: 'easeOut' }}
                                            style={{ height: '100%', background: 'var(--brand-teal)', borderRadius: '10px', position: 'relative', zIndex: 1 }}
                                        />
                                        {/* 2025 Base - Overlay at the start */}
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${(m.v25 / m.max) * 100}%` }}
                                            transition={{ duration: 1.2, delay: 0.7 + (idx * 0.1), ease: 'easeOut' }}
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
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px' }}>
                                        <span style={{ fontSize: '0.65rem', fontWeight: 800, color: 'var(--brand-orange)' }}>Baseline: {m.v25}</span>
                                        <span style={{ fontSize: '0.65rem', fontWeight: 800, color: 'var(--brand-teal)' }}>Current: {m.v26}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: Cohort Cards */}
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 'var(--space-lg)',
                        height: '100%'
                    }}>
                        {/* Cohort 1 Card */}
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
                                flex: 1,
                                background: 'linear-gradient(135deg, rgba(48, 157, 196, 0.05) 0%, transparent 100%)',
                                justifyContent: 'space-between'
                            }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                <div>
                                    <div className="badge" style={{ background: 'var(--brand-teal)', color: 'white', marginBottom: 'var(--space-sm)' }}>CYCLE 1</div>
                                    <h3 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 900, color: 'var(--brand-orange)' }}>Cohort 1</h3>
                                </div>
                                <div style={{ background: 'rgba(48, 157, 196, 0.1)', padding: '12px', borderRadius: '16px' }}>
                                    <Building2 size={24} color="var(--brand-teal)" />
                                </div>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-md)', marginTop: 'var(--space-lg)' }}>
                                <div style={{
                                    padding: 'var(--space-md)',
                                    background: 'rgba(255,255,255,0.03)',
                                    borderRadius: 'var(--radius-2xl)',
                                    border: '1px solid var(--color-border-subtle)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    textAlign: 'center'
                                }}>
                                    <div style={{ fontSize: '2.2rem', fontWeight: 900, color: 'var(--brand-teal)', lineHeight: 1 }}>5</div>
                                    <div style={{ fontSize: '0.7rem', fontWeight: 800, marginTop: '6px', opacity: 0.6, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Spaces Supported</div>
                                </div>
                                <div style={{
                                    padding: 'var(--space-md)',
                                    background: 'rgba(255,255,255,0.03)',
                                    borderRadius: 'var(--radius-2xl)',
                                    border: '1px solid var(--color-border-subtle)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    textAlign: 'center'
                                }}>
                                    <div style={{ fontSize: '1.1rem', fontWeight: 950, color: 'var(--color-success)', letterSpacing: '1px' }}>ACTIVE</div>
                                    <div style={{ fontSize: '0.7rem', fontWeight: 800, marginTop: '4px', opacity: 0.6, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Support Status</div>
                                    <div style={{ fontSize: '0.6rem', fontWeight: 800, marginTop: '8px', color: 'var(--color-success)', opacity: 0.9, background: 'rgba(16, 185, 129, 0.1)', padding: '2px 8px', borderRadius: '4px' }}>Aug 25 — Jan 26</div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Cohort 2 Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.8, duration: 0.7 }}
                            className="glass-strong"
                            style={{
                                borderRadius: 'var(--radius-3xl)',
                                padding: 'var(--space-xl)',
                                display: 'flex',
                                flexDirection: 'column',
                                border: '2px solid rgba(222, 99, 54, 0.3)',
                                flex: 1,
                                background: 'linear-gradient(135deg, rgba(222, 99, 54, 0.1) 0%, transparent 100%)',
                                justifyContent: 'space-between'
                            }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                <div>
                                    <div className="badge" style={{ background: 'var(--brand-orange)', color: 'white', marginBottom: 'var(--space-sm)' }}>NEXT CYCLE</div>
                                    <h3 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 900 }}>Cohort 2</h3>
                                </div>
                                <div style={{ background: 'rgba(222, 99, 54, 0.1)', padding: '12px', borderRadius: '16px' }}>
                                    <Zap size={24} color="var(--brand-orange)" />
                                </div>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-md)', marginTop: 'var(--space-lg)' }}>
                                <div style={{
                                    padding: 'var(--space-md)',
                                    background: 'rgba(255,255,255,0.03)',
                                    borderRadius: 'var(--radius-2xl)',
                                    border: '1px solid var(--color-border-subtle)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    textAlign: 'center'
                                }}>
                                    <div style={{ fontSize: '2.2rem', fontWeight: 900, color: 'var(--brand-orange)', lineHeight: 1 }}>10</div>
                                    <div style={{ fontSize: '0.7rem', fontWeight: 800, marginTop: '6px', opacity: 0.6, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Targeted Spaces</div>
                                </div>
                                <div style={{
                                    padding: 'var(--space-md)',
                                    background: 'rgba(255,255,255,0.03)',
                                    borderRadius: 'var(--radius-2xl)',
                                    border: '1px solid var(--color-border-subtle)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    textAlign: 'center'
                                }}>
                                    <div style={{ fontSize: '1.8rem', fontWeight: 900, color: 'white', lineHeight: 1 }}>FEB 26</div>
                                    <div style={{ fontSize: '0.7rem', fontWeight: 800, marginTop: '6px', opacity: 0.6, textTransform: 'uppercase', letterSpacing: '0.5px' }}>New Cohort Application</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </Slide >
    );
}


