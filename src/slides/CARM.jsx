import React from 'react';
import { motion } from 'framer-motion';
import Slide from '../components/Slide';
import { Mail, Phone, Users, ShieldCheck, Sparkles } from 'lucide-react';

const CARM = () => {
    const channels = [
        {
            icon: Mail,
            label: 'Email Support',
            value: 'Ps-carm@mercycorps.org',
            subValue: 'Primary Channel',
            color: 'var(--color-accent-primary)',
            gradient: 'linear-gradient(135deg, rgba(222, 99, 54, 0.1), rgba(222, 99, 54, 0.05))'
        },
        {
            icon: Mail,
            label: 'Feedback Email',
            value: 'Ps-fcarm@mercycorps.org',
            subValue: 'Feedback & Suggestions',
            color: 'var(--color-accent-secondary)',
            gradient: 'linear-gradient(135deg, rgba(48, 157, 196, 0.1), rgba(48, 157, 196, 0.05))'
        },
        {
            icon: Phone,
            label: 'Hotline',
            value: '1800130131',
            subValue: 'Toll-free Support',
            color: '#3b82f6',
            gradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(59, 130, 246, 0.05))'
        },
        {
            icon: Users,
            label: 'Face to Face',
            value: 'In-Person',
            subValue: 'All GSG Staff Members',
            color: '#10b981',
            gradient: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(16, 185, 129, 0.05))'
        }
    ];

    return (
        <Slide>
            {/* Background Effect */}
            <div style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(circle at 50% 30%, rgba(222, 99, 54, 0.08) 0%, transparent 50%)',
                pointerEvents: 'none',
                zIndex: 0
            }} />

            <div style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                zIndex: 1,
                gap: 'var(--space-2xl)'
            }}>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    style={{
                        textAlign: 'center',
                        maxWidth: '800px'
                    }}
                >
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 'var(--space-xs)',
                        padding: 'var(--space-xs) var(--space-md)',
                        background: 'var(--color-surface)',
                        backdropFilter: 'blur(var(--glass-blur))',
                        WebkitBackdropFilter: 'blur(var(--glass-blur))',
                        borderRadius: 'var(--radius-full)',
                        border: '1px solid var(--color-border-subtle)',
                        marginBottom: 'var(--space-lg)'
                    }}>
                        <ShieldCheck size={16} style={{ color: 'var(--color-accent-secondary)' }} />
                        <span style={{
                            fontSize: 'var(--font-size-xs)',
                            fontWeight: 'var(--font-weight-bold)',
                            textTransform: 'uppercase',
                            letterSpacing: '2px',
                            color: 'var(--color-accent-secondary)'
                        }}>
                            Accountability & Reporting
                        </span>
                    </div>

                    <h2 style={{
                        fontSize: 'clamp(2.5rem, 5vmin, 4rem)',
                        fontWeight: 'var(--font-weight-extrabold)',
                        margin: '0 0 var(--space-md) 0',
                        lineHeight: 'var(--line-height-tight)'
                    }}>
                        CARM: We Are Here <span className="gradient-text">To Listen</span>
                    </h2>
                    <p style={{
                        fontSize: 'var(--font-size-lg)',
                        color: 'var(--color-text-secondary)',
                        lineHeight: 'var(--line-height-relaxed)',
                        margin: 0
                    }}>
                        Community Accountability Reporting Mechanisms (CARM) ensure transparency and trust in all our operations.
                    </p>
                </motion.div>

                {/* Channels Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: 'var(--space-xl)',
                    width: '100%',
                    maxWidth: '1100px'
                }}>
                    {channels.map((channel, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                delay: 0.4 + (idx * 0.1),
                                duration: 0.5,
                                type: 'spring',
                                stiffness: 100
                            }}
                            whileHover={{
                                y: -8,
                                scale: 1.02,
                                transition: { duration: 0.2 }
                            }}
                            style={{
                                background: 'var(--color-surface)',
                                backdropFilter: 'blur(var(--glass-blur))',
                                WebkitBackdropFilter: 'blur(var(--glass-blur))',
                                padding: 'var(--space-xl)',
                                borderRadius: 'var(--radius-2xl)',
                                border: '1px solid var(--color-border-subtle)',
                                boxShadow: 'var(--shadow-lg)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: 'var(--space-lg)',
                                cursor: 'default',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                        >
                            {/* Gradient Background */}
                            <div style={{
                                position: 'absolute',
                                inset: 0,
                                background: channel.gradient,
                                opacity: 0.5,
                                transition: 'opacity 0.3s ease'
                            }} />

                            {/* Icon Container */}
                            <motion.div
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.6 }}
                                style={{
                                    width: '64px',
                                    height: '64px',
                                    borderRadius: 'var(--radius-xl)',
                                    background: `linear-gradient(135deg, ${channel.color}20, ${channel.color}10)`,
                                    border: `2px solid ${channel.color}40`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0,
                                    position: 'relative',
                                    zIndex: 1
                                }}
                            >
                                <channel.icon size={32} style={{ color: channel.color }} />
                            </motion.div>

                            {/* Content */}
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 'var(--space-xs)',
                                flex: 1,
                                position: 'relative',
                                zIndex: 1
                            }}>
                                <span style={{
                                    fontSize: 'var(--font-size-xs)',
                                    color: 'var(--color-text-tertiary)',
                                    fontWeight: 'var(--font-weight-semibold)',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1.5px'
                                }}>
                                    {channel.label}
                                </span>
                                <span style={{
                                    fontSize: 'var(--font-size-xl)',
                                    fontWeight: 'var(--font-weight-bold)',
                                    color: 'var(--color-text-primary)',
                                    lineHeight: '1.2'
                                }}>
                                    {channel.value}
                                </span>
                                <span style={{
                                    fontSize: 'var(--font-size-sm)',
                                    color: 'var(--color-text-secondary)',
                                    opacity: 0.8
                                }}>
                                    {channel.subValue}
                                </span>
                            </div>

                            {/* Sparkle Icon */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                                style={{
                                    position: 'relative',
                                    zIndex: 1
                                }}
                            >
                                <Sparkles size={20} style={{ color: channel.color, opacity: 0.5 }} />
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* Mercy Corps Branding */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'var(--space-md)',
                        opacity: 0.4,
                        filter: 'grayscale(100%)',
                        transition: 'all 0.5s ease'
                    }}
                    whileHover={{
                        opacity: 1,
                        filter: 'grayscale(0%)'
                    }}
                >
                    <div style={{
                        height: '1px',
                        width: '48px',
                        background: 'var(--color-border-medium)'
                    }} />
                    <span style={{
                        fontSize: 'var(--font-size-sm)',
                        fontWeight: 'var(--font-weight-semibold)',
                        textTransform: 'uppercase',
                        letterSpacing: '2px',
                        color: 'var(--color-text-secondary)'
                    }}>
                        Mercy Corps Global
                    </span>
                    <div style={{
                        height: '1px',
                        width: '48px',
                        background: 'var(--color-border-medium)'
                    }} />
                </motion.div>
            </div>
        </Slide>
    );
};

export default CARM;
