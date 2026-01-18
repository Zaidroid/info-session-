import React from 'react';
import { motion } from 'framer-motion';
import { Target, Handshake, Zap, ShieldCheck } from 'lucide-react';
import Slide from '../../components/Slide';
import FeedbackWall from '../../components/FeedbackWall';

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

export function ElevateBridge() {
    const workflow = [
        { label: 'Lead Generation', icon: Target, color: 'var(--brand-red)', desc: 'Identifying high-intent international opportunities.' },
        { label: 'Partner Matching', icon: Handshake, color: 'var(--brand-teal)', desc: 'Strategic alliances with global tech firms.' },
        { label: 'Deal Closing', icon: Zap, color: 'var(--brand-orange)', desc: 'Negotiation support and contract finalization.' },
    ];

    return (
        <Slide>
            {/* Background Effects */}
            <div style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(circle at 10% 10%, rgba(222, 99, 54, 0.05) 0%, transparent 50%), radial-gradient(circle at 90% 90%, rgba(48, 157, 196, 0.05) 0%, transparent 50%)',
                zIndex: 0,
                pointerEvents: 'none'
            }} />

            <div style={{ position: 'absolute', inset: 0, opacity: 0.05, zIndex: 0 }}>
                <FeedbackWall />
            </div>

            <motion.div
                layoutId="elevate-bridge-hero"
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    padding: 'var(--space-2xl) var(--space-3xl)',
                    position: 'relative',
                    zIndex: 1
                }}
            >
                {/* Top Section: Hero & Mission */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1.2fr 0.8fr',
                    gap: 'var(--space-2xl)',
                    marginBottom: 'var(--space-2xl)',
                    alignItems: 'center'
                }}>
                    <motion.div variants={fadeInUp}>
                        <div className="badge" style={{
                            background: 'var(--brand-orange)',
                            color: 'white',
                            marginBottom: 'var(--space-md)',
                            boxShadow: '0 4px 15px rgba(231, 139, 63, 0.3)'
                        }}>
                            <ShieldCheck size={14} style={{ marginRight: '6px' }} />
                            NEW MODULE 2025
                        </div>
                        <h2 style={{
                            fontSize: 'clamp(3.5rem, 8vmin, 6rem)',
                            fontWeight: 900,
                            margin: 0,
                            letterSpacing: '-0.03em',
                            lineHeight: 1
                        }}>
                            Elevate<span className="gradient-text">Bridge</span>
                        </h2>
                        <p style={{
                            fontSize: 'var(--font-size-xl)',
                            margin: 'var(--space-md) 0 0',
                            fontWeight: 300,
                            fontStyle: 'italic',
                            color: 'var(--color-text-secondary)',
                            opacity: 0.8
                        }}>
                            "Collaboration over Competition"
                        </p>
                    </motion.div>

                    <motion.div
                        variants={fadeInUp}
                        className="glass-strong"
                        style={{
                            padding: 'var(--space-xl)',
                            borderRadius: 'var(--radius-2xl)',
                            borderLeft: '4px solid var(--brand-red)',
                            background: 'var(--color-surface-elevated)'
                        }}
                    >
                        <h4 style={{ textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.1em', color: 'var(--brand-red)', margin: '0 0 var(--space-xs)' }}>
                            Core Concept
                        </h4>
                        <p style={{ margin: 0, fontSize: '1.1rem', lineHeight: 1.5, fontWeight: 500, color: 'var(--color-text-primary)' }}>
                            A specialized network connecting Palestinian agencies with global opportunities through professional <strong className="gradient-text">"Hunters"</strong>.
                        </p>
                    </motion.div>
                </div>

                {/* Bottom Section: Bento Workflow */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: 'var(--space-xl)',
                    flex: 1
                }}>
                    {workflow.map((item, i) => (
                        <motion.div
                            key={item.label}
                            variants={fadeInUp}
                            className="glass"
                            whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                            style={{
                                padding: 'var(--space-2xl)',
                                borderRadius: 'var(--radius-3xl)',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 'var(--space-md)',
                                position: 'relative',
                                overflow: 'hidden',
                                border: '1px solid var(--color-border-subtle)',
                                background: 'var(--color-surface)',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            {/* Icon Stage */}
                            <div style={{
                                width: '64px',
                                height: '64px',
                                borderRadius: '18px',
                                background: `${item.color}15`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: item.color,
                                marginBottom: 'var(--space-sm)'
                            }}>
                                <item.icon size={32} />
                            </div>

                            <h3 style={{ margin: 0, fontSize: '1.8rem', fontWeight: 800, color: 'var(--color-text-primary)' }}>
                                {item.label}
                            </h3>

                            <p style={{ margin: 0, fontSize: '1.05rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                                {item.desc}
                            </p>

                            <div style={{
                                marginTop: 'auto',
                                fontSize: '0.8rem',
                                fontWeight: 700,
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em',
                                color: item.color,
                                opacity: 0.7
                            }}>
                                Phase 0{i + 1}
                            </div>

                            {/* Decorative number in background */}
                            <div style={{
                                position: 'absolute',
                                right: '-10px',
                                bottom: '-20px',
                                fontSize: '10rem',
                                fontWeight: 900,
                                opacity: 0.05,
                                color: 'var(--color-text-primary)',
                                pointerEvents: 'none'
                            }}>
                                {i + 1}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Footer insight */}
                <motion.div
                    variants={fadeInUp}
                    style={{
                        marginTop: 'var(--space-xl)',
                        textAlign: 'center',
                        color: 'var(--color-text-tertiary)',
                        fontSize: 'var(--font-size-sm)',
                        fontWeight: 500
                    }}
                >
                    Designed to close the gap between high-potential Palestinian talent and high-value global demand.
                </motion.div>
            </motion.div>
        </Slide>
    );
}

