import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Slide from '../../components/Slide';
import { FeatureCard } from '../../components/Card';
import FeedbackWall from '../../components/FeedbackWall';
import { staggerContainer, fadeInUp } from '../../utils/animations';
import { Sparkles } from 'lucide-react';

/**
 * Progressive Market Access Flow - ENHANCED
 * 
 * Step 0: Show 3 components in a row (4th hidden)
 * Step 1: Reveal 4th component (ElevateBridge) in the same row
 * Step 2: ElevateBridge morphs and expands to fill the entire screen
 */

const containerVariants = staggerContainer(0.15);

export function MarketAccessProgressive({ step = 0 }) {
    return (
        <Slide>
            {/* Background - FeedbackWall for steps 0-1, simplified for step 2 */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0,
                opacity: step === 2 ? 0.05 : 1,
                transition: 'opacity 0.8s ease'
            }}>
                {step < 2 ? (
                    <FeedbackWall />
                ) : (
                    <div className="gradient-bg" style={{ width: '100%', height: '100%', opacity: 0.1 }} />
                )}
            </div>

            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                style={{
                    width: '100%',
                    height: '100%',
                    position: 'relative',
                    zIndex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                {/* Header - Hidden on Step 2 */}
                <AnimatePresence>
                    {step < 2 && (
                        <motion.div
                            exit={{ opacity: 0, y: -30 }}
                            transition={{ duration: 0.4 }}
                        >
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
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Grid Container */}
                <motion.div
                    layout
                    style={{
                        display: 'grid',
                        gridTemplateColumns: step === 2 ? '1fr' : 'repeat(4, 1fr)',
                        gap: step === 2 ? 0 : 'var(--space-xl)',
                        width: step === 2 ? '100%' : '100%',
                        maxWidth: step === 2 ? '1100px' : '100%',
                        transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                >
                    {/* Components 1-3 - Exit on Step 2 */}
                    <AnimatePresence>
                        {step < 2 && (
                            <>
                                <motion.div
                                    exit={{ opacity: 0, scale: 0.8, y: 20 }}
                                    transition={{ duration: 0.5 }}
                                >
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
                                </motion.div>

                                <motion.div
                                    exit={{ opacity: 0, scale: 0.8, y: 20 }}
                                    transition={{ duration: 0.5, delay: 0.05 }}
                                >
                                    <FeatureCard
                                        title="Legal Support"
                                        description="Navigating international legal, tax, and contracting requirements."
                                        delay={0.2}
                                    >
                                        <ul style={{ marginTop: 'var(--space-md)', marginBottom: 'var(--space-md)', fontSize: 'var(--font-size-xs)' }}>
                                            <li>Partner: International Legal Firm</li>
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
                                </motion.div>

                                <motion.div
                                    exit={{ opacity: 0, scale: 0.8, y: 20 }}
                                    transition={{ duration: 0.5, delay: 0.1 }}
                                >
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
                                </motion.div>
                            </>
                        )}
                    </AnimatePresence>

                    {/* Component 4 / Expanded View - Conditionally Revealed & Morphed */}
                    <AnimatePresence mode="wait">
                        {step === 0 && (
                            <motion.div
                                key="placeholder"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{
                                    opacity: 0.7,
                                    scale: 1,
                                    boxShadow: ['0 0 0px rgba(222, 99, 54, 0)', '0 0 20px rgba(222, 99, 54, 0.2)', '0 0 0px rgba(222, 99, 54, 0)']
                                }}
                                transition={{
                                    opacity: { duration: 0.5 },
                                    scale: { duration: 0.5 },
                                    boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                                }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                style={{
                                    width: '100%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    border: '2px dashed var(--brand-orange)',
                                    borderRadius: 'var(--radius-2xl)',
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    backdropFilter: 'blur(10px)',
                                    cursor: 'default'
                                }}
                            >
                                <div style={{ textAlign: 'center', padding: 'var(--space-2xl)' }}>
                                    <motion.div
                                        animate={{
                                            rotate: [0, 10, -10, 0],
                                            scale: [1, 1.1, 1]
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: "linear"
                                        }}
                                        style={{
                                            marginBottom: 'var(--space-md)',
                                            color: 'var(--brand-orange)',
                                            display: 'flex',
                                            justifyContent: 'center'
                                        }}
                                    >
                                        <Sparkles size={48} strokeWidth={1.5} />
                                    </motion.div>
                                    <div style={{
                                        fontSize: 'var(--font-size-md)',
                                        fontWeight: 'var(--font-weight-bold)',
                                        color: 'var(--brand-navy)',
                                        letterSpacing: '0.02em'
                                    }}>
                                        One more thing...
                                    </div>
                                    <div style={{
                                        fontSize: 'var(--font-size-xs)',
                                        color: 'var(--color-text-tertiary)',
                                        marginTop: 'var(--space-xs)'
                                    }}>
                                        The missing link for agencies
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {step >= 1 && (
                            <motion.div
                                key="card"
                                layoutId="elevate-bridge-hero"
                                initial={{ opacity: 0, scale: 0.8, x: -30 }}
                                animate={{ opacity: 1, scale: 1, x: 0 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{
                                    opacity: { duration: 0.4 },
                                    layout: { duration: 0.8, ease: [0.4, 0, 0.2, 1] }
                                }}
                                style={{ width: '100%' }}
                            >
                                <FeatureCard
                                    title="ElevateBridge"
                                    description="Specialized network of Market Access Hunters."
                                    highlighted={true}
                                    highlightLabel={null}
                                    style={{
                                        borderColor: 'var(--brand-orange)',
                                        boxShadow: '0 0 25px rgba(231, 139, 63, 0.3)',
                                        animation: 'pulse 2s infinite ease-in-out'
                                    }}
                                    delay={0}
                                >
                                    <p style={{ marginTop: 'var(--space-md)', fontSize: 'var(--font-size-sm)', lineHeight: 'var(--line-height-relaxed)' }}>
                                        Connecting agencies with global opportunities.
                                    </p>
                                    <div style={{ marginTop: 'auto', paddingTop: 'var(--space-sm)', borderTop: '1px solid var(--color-border-subtle)' }}>
                                        <strong className="gradient-text" style={{ fontSize: 'var(--font-size-lg)' }}>
                                            Lead Generation
                                        </strong>
                                        <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-tertiary)' }}>
                                            Partner Matching • Deal Closing
                                        </div>
                                    </div>
                                </FeatureCard>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </motion.div>
        </Slide>
    );
}
