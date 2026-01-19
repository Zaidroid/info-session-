import React from 'react';
import { motion } from 'framer-motion';
import { Target, ShieldCheck, Users, Briefcase, Sparkles } from 'lucide-react';
import Slide from '../../components/Slide';
import FeedbackWall from '../../components/FeedbackWall';

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

export function ElevateBridge() {
    return (
        <Slide>
            {/* Background Effects */}
            <div style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(circle at 10% 10%, rgba(48, 157, 196, 0.08) 0%, transparent 50%), radial-gradient(circle at 90% 90%, rgba(222, 99, 54, 0.08) 0%, transparent 50%)',
                zIndex: 0,
                pointerEvents: 'none'
            }} />

            <div style={{ position: 'absolute', inset: 0, opacity: 0.05, zIndex: 0 }}>
                <FeedbackWall />
            </div>

            <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 'var(--space-2xl) var(--space-3xl)',
                    position: 'relative',
                    zIndex: 1,
                    textAlign: 'center'
                }}
            >
                {/* Header Section */}
                <motion.div variants={fadeInUp} style={{ marginBottom: 'var(--space-2xl)', maxWidth: '1000px' }}>
                    <div className="badge" style={{
                        background: 'var(--brand-teal)',
                        color: 'white',
                        marginBottom: 'var(--space-md)',
                        boxShadow: '0 4px 15px rgba(48, 157, 196, 0.3)',
                        display: 'inline-flex',
                        alignItems: 'center'
                    }}>
                        <ShieldCheck size={14} style={{ marginRight: '6px' }} />
                        MARKET ACCESS INTERVENTION
                    </div>

                    <h2 style={{
                        fontSize: 'clamp(3rem, 8vmin, 5rem)',
                        fontWeight: 900,
                        margin: '0 0 var(--space-md)',
                        letterSpacing: '-0.04em',
                        lineHeight: 1,
                        color: 'var(--color-text-primary)'
                    }}>
                        Elevate<span className="gradient-text">Bridge</span>
                    </h2>

                    <p style={{
                        fontSize: 'var(--font-size-lg)',
                        lineHeight: 1.6,
                        fontWeight: 450,
                        color: 'var(--color-text-secondary)',
                        maxWidth: '900px',
                        margin: '0 auto'
                    }}>
                        Bridging Palestinian tech companies with skilled freelancers with a <span className="gradient-text" style={{ fontWeight: 700 }}>"hunter mindset"</span> to acquire new clients on platforms like <span style={{ color: 'var(--brand-teal)', fontWeight: 700 }}>Upwork</span> and <span style={{ color: 'var(--brand-teal)', fontWeight: 700 }}>LinkedIn</span>, boosting revenue and empowering the local ecosystem.
                    </p>
                </motion.div>

                {/* Target Section */}
                <motion.div
                    variants={fadeInUp}
                    style={{
                        display: 'flex',
                        gap: 'var(--space-xl)',
                        width: '100%',
                        maxWidth: '1100px',
                        justifyContent: 'center'
                    }}
                >
                    {/* Target: Companies */}
                    <div className="glass-strong" style={{
                        flex: 1,
                        padding: 'var(--space-xl)',
                        borderRadius: 'var(--radius-3xl)',
                        border: '1px solid rgba(48, 157, 196, 0.3)',
                        background: 'linear-gradient(135deg, rgba(48, 157, 196, 0.1) 0%, rgba(48, 157, 196, 0.05) 100%)',
                        textAlign: 'left'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', marginBottom: 'var(--space-md)' }}>
                            <div style={{ padding: '10px', background: 'rgba(48, 157, 196, 0.2)', borderRadius: '12px' }}>
                                <Briefcase size={24} color="var(--brand-teal)" />
                            </div>
                            <h3 style={{ margin: 0, fontSize: '1.4rem', fontWeight: 800 }}>Target Companies</h3>
                        </div>
                        <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                            Local Palestinian Tech Companies looking to <strong style={{ color: 'white' }}>expand market reach</strong> and increase profitability through strategic client acquisition.
                        </p>
                    </div>

                    {/* Target: Freelancers */}
                    <div className="glass-strong" style={{
                        flex: 1,
                        padding: 'var(--space-xl)',
                        borderRadius: 'var(--radius-3xl)',
                        border: '1px solid rgba(222, 99, 54, 0.3)',
                        background: 'linear-gradient(135deg, rgba(222, 99, 54, 0.1) 0%, rgba(222, 99, 54, 0.05) 100%)',
                        textAlign: 'left'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', marginBottom: 'var(--space-md)' }}>
                            <div style={{ padding: '10px', background: 'rgba(222, 99, 54, 0.2)', borderRadius: '12px' }}>
                                <Users size={24} color="var(--brand-orange)" />
                            </div>
                            <h3 style={{ margin: 0, fontSize: '1.4rem', fontWeight: 800 }}>Target Freelancers</h3>
                        </div>
                        <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                            Skilled Palestinian Freelancers with a proven <strong style={{ color: 'white' }}>'hunter' mindset</strong> and track record of driving revenue on freelance and social platforms.
                        </p>
                    </div>
                </motion.div>

                {/* Decorative Element */}
                <motion.div
                    variants={fadeInUp}
                    style={{
                        marginTop: 'var(--space-3xl)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'var(--space-md)',
                        color: 'var(--brand-teal)',
                        opacity: 0.6
                    }}
                >
                    <Sparkles size={20} />
                    <span style={{ fontWeight: 600, textTransform: 'uppercase', letterSpacing: '4px', fontSize: '0.8rem' }}>
                        Empowering Palestine's Global Reach
                    </span>
                    <Sparkles size={20} />
                </motion.div>
            </motion.div>
        </Slide>
    );
}
