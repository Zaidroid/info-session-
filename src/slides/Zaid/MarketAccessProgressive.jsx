import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Slide from '../../components/Slide';
import { FeatureCard } from '../../components/Card';
import FeedbackWall from '../../components/FeedbackWall';
import { staggerContainer, fadeInUp } from '../../utils/animations';

/**
 * Progressive Market Access Flow - REDESIGNED
 * 
 * Step 0: Show 3 components in a row (4th hidden)
 * Step 1: Reveal 4th component (ElevateBridge) in the same row
 * Step 2: Zoom into ElevateBridge for details
 */

const containerVariants = staggerContainer(0.15);

export function MarketAccessProgressive({ step = 0 }) {
    // Step 2: Zoomed into ElevateBridge detail
    if (step === 2) {
        return (
            <Slide>
                {/* Background removed/simplified for focus */}
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, opacity: 0.1 }}>
                    <div className="gradient-bg" style={{ width: '100%', height: '100%', opacity: 0.1 }} />
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.3, x: '40%', y: '0%' }}
                    animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                    transition={{
                        duration: 1,
                        ease: [0.25, 0.1, 0.25, 1],
                        opacity: { duration: 0.5, delay: 0.2 }
                    }}
                    style={{ textAlign: 'center', position: 'relative', zIndex: 10, maxWidth: '1100px', margin: '0 auto' }}
                >
                    <motion.div
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6 }}
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
                        transition={{ delay: 0.8 }}
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



                    <motion.div
                        className="glass"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1.2, type: "spring", stiffness: 50 }}
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

    // Step 0 or 1: Grid view with 4 blocks
    return (
        <Slide>
            {/* Feedback Background - Now appearing here */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
                <FeedbackWall />
            </div>

            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                style={{ width: '100%', height: '100%', position: 'relative', zIndex: 1 }}
            >
                <div>
                    <motion.h2 variants={fadeInUp} style={{ marginBottom: 'var(--space-xs)', textAlign: 'center' }}>
                        Market Access Program
                    </motion.h2>
                    <motion.p variants={fadeInUp} style={{
                        marginBottom: 'var(--space-2xl)',
                        textAlign: 'center',
                        fontSize: 'var(--font-size-lg)',
                        fontStyle: 'italic',
                        color: 'var(--color-accent-secondary)'
                    }}>
                        "Collaboration over Competition"
                    </motion.p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: 'var(--space-xl)',
                }}>
                    {/* Component 1 */}
                    <FeatureCard
                        title="C-Suite Coaching"
                        description="Targeted mentoring to strengthen go-to-market & investor readiness."
                        delay={0.1}
                    >
                        <ul style={{ marginTop: 'var(--space-md)', marginBottom: 'var(--space-md)', fontSize: 'var(--font-size-xs)' }}>
                            <li>Pricing Models & GTM Strategy</li>
                            <li>International Advisors</li>
                        </ul>
                        <div style={{ marginTop: 'auto', paddingTop: 'var(--space-sm)', borderTop: '1px solid var(--color-border-subtle)' }}>
                            <strong className="gradient-text" style={{ fontSize: 'var(--font-size-lg)' }}>
                                11 Companies
                            </strong>
                            <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-tertiary)' }}>
                                Strategic consultations delivered
                            </div>
                        </div>
                    </FeatureCard>

                    {/* Component 2 */}
                    <FeatureCard
                        title="Legal Support"
                        description="Navigating international legal, tax, and contracting requirements."
                        delay={0.2}
                    >
                        <ul style={{ marginTop: 'var(--space-md)', marginBottom: 'var(--space-md)', fontSize: 'var(--font-size-xs)' }}>
                            <li>Partner: Andersen Legal Firm</li>
                            <li>3 Companies registering globally</li>
                        </ul>
                        <div style={{ marginTop: 'auto', paddingTop: 'var(--space-sm)', borderTop: '1px solid var(--color-border-subtle)' }}>
                            <strong className="gradient-text" style={{ fontSize: 'var(--font-size-lg)' }}>
                                7 Companies
                            </strong>
                            <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-tertiary)' }}>
                                Supported with contracts & taxes
                            </div>
                        </div>
                    </FeatureCard>

                    {/* Component 3 */}
                    <FeatureCard
                        title="Conferences"
                        description="Direct exposure to global markets and potential partners."
                        delay={0.3}
                    >
                        <ul style={{ marginTop: 'var(--space-md)', marginBottom: 'var(--space-md)', fontSize: 'var(--font-size-xs)' }}>
                            <li>Gitex (Dubai) Participation</li>
                            <li>Signed MOUs & Networking</li>
                        </ul>
                        <div style={{ marginTop: 'auto', paddingTop: 'var(--space-sm)', borderTop: '1px solid var(--color-border-subtle)' }}>
                            <strong className="gradient-text" style={{ fontSize: 'var(--font-size-lg)' }}>
                                6 Companies
                            </strong>
                            <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-tertiary)' }}>
                                Supported for international events
                            </div>
                        </div>
                    </FeatureCard>

                    {/* Component 4 - Conditionally Revealed */}
                    <AnimatePresence>
                        {step >= 1 ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8, x: -30 }}
                                animate={{ opacity: 1, scale: 1, x: 0 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                                style={{ width: '100%' }}
                            >
                                <FeatureCard
                                    title="ElevateBridge"
                                    description="Specialized network of Market Access Hunters."
                                    highlighted={true}
                                    delay={0}
                                >
                                    <p style={{ marginTop: 'var(--space-md)', fontSize: 'var(--font-size-sm)', lineHeight: 'var(--line-height-relaxed)' }}>
                                        Connecting agencies with opportunities.
                                    </p>
                                    <div style={{
                                        marginTop: 'var(--space-lg)',
                                        textAlign: 'center',
                                        fontSize: 'var(--font-size-xs)',
                                        color: 'var(--color-text-tertiary)',
                                        fontStyle: 'italic',
                                    }}>
                                        Click next to see details →
                                    </div>
                                </FeatureCard>
                            </motion.div>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.3 }}
                                style={{
                                    width: '100%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    border: '2px dashed var(--color-border-subtle)',
                                    borderRadius: 'var(--radius-2xl)',
                                    background: 'var(--color-surface)',
                                    backdropFilter: 'blur(var(--glass-blur))',
                                }}
                            >
                                <div style={{ textAlign: 'center', padding: 'var(--space-2xl)' }}>
                                    <div style={{
                                        fontSize: '3rem',
                                        marginBottom: 'var(--space-md)',
                                        opacity: 0.5,
                                    }}>
                                        ?
                                    </div>
                                    <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-tertiary)' }}>
                                        One more thing...
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>
        </Slide>
    );
}
