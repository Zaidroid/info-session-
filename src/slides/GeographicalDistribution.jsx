import React from 'react';
import { motion } from 'framer-motion';
import Slide from '../components/Slide';
import { MapPin, TrendingUp, Building2 } from 'lucide-react';

const GeographicalDistribution = () => {
    // 2024 Data (Elevate 1.0)
    const data2024 = [
        { city: 'Ramallah / Al-Bireh', count: 59, color: 'var(--color-accent-primary)' },
        { city: 'Nablus', count: 15, color: 'var(--color-accent-secondary)' },
        { city: 'Hebron', count: 13, color: '#8b5cf6' },
        { city: 'Bethlehem', count: 4, color: '#f59e0b' },
        { city: 'Jenin', count: 2, color: '#ec4899' },
        { city: 'Tulkarm', count: 1, color: '#6366f1' },
    ];

    // 2025 Data (Elevate 2.0) - Reordered with Gaza first
    const data2025 = [
        { city: 'Gaza', count: 17, color: 'var(--color-success)', isNew: true },
        { city: 'Ramallah / Al-Bireh', count: 50, color: 'var(--color-accent-primary)' },
        { city: 'Nablus', count: 17, color: 'var(--color-accent-secondary)' },
        { city: 'Hebron', count: 13, color: '#8b5cf6' },
        { city: 'Jenin', count: 1, color: '#ec4899' },
    ];

    const total2024 = 94;
    const total2025 = 98;
    const growth = total2025 - total2024;

    const maxCount = Math.max(...data2024.map(d => d.count), ...data2025.map(d => d.count));

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
                padding: 'var(--space-2xl) var(--space-3xl) var(--space-xs)',
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
                        marginBottom: 'var(--space-lg)'
                    }}
                >
                    <div>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 'var(--space-sm)',
                            marginBottom: 'var(--space-sm)',
                            color: 'var(--color-accent-secondary)'
                        }}>
                            <MapPin size={20} />
                            <span style={{
                                fontSize: 'var(--font-size-sm)',
                                fontWeight: 'var(--font-weight-bold)',
                                textTransform: 'uppercase',
                                letterSpacing: '2px'
                            }}>
                                Ecosystem Reach
                            </span>
                        </div>
                        <h2 style={{
                            fontSize: 'clamp(2.5rem, 5vmin, 4rem)',
                            fontWeight: 'var(--font-weight-extrabold)',
                            margin: 0,
                            lineHeight: 'var(--line-height-tight)'
                        }}>
                            Geographical <span className="gradient-text">Distribution</span>
                        </h2>
                    </div>

                    {/* Growth Badge */}
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.4, type: 'spring', stiffness: 200 }}
                        style={{
                            background: 'var(--color-surface)',
                            backdropFilter: 'blur(var(--glass-blur))',
                            WebkitBackdropFilter: 'blur(var(--glass-blur))',
                            padding: 'var(--space-lg) var(--space-xl)',
                            borderRadius: 'var(--radius-xl)',
                            border: '1px solid var(--color-border-subtle)',
                            boxShadow: 'var(--shadow-lg)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: 'var(--space-xs)'
                        }}
                    >
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 'var(--space-xs)',
                            color: 'var(--color-success)'
                        }}>
                            <TrendingUp size={20} />
                            <span style={{
                                fontSize: 'var(--font-size-2xl)',
                                fontWeight: 'var(--font-weight-extrabold)'
                            }}>
                                +{growth}
                            </span>
                        </div>
                        <span style={{
                            fontSize: 'var(--font-size-xs)',
                            color: 'var(--color-text-tertiary)',
                            textTransform: 'uppercase',
                            letterSpacing: '1px',
                            fontWeight: 'var(--font-weight-semibold)'
                        }}>
                            Companies Growth
                        </span>
                    </motion.div>
                </motion.div>

                {/* Split Comparison View */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: 'var(--space-2xl)',
                    flex: 1
                }}>
                    {/* 2024 Panel */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6, duration: 0.7 }}
                        style={{
                            background: 'var(--color-surface)',
                            backdropFilter: 'blur(var(--glass-blur))',
                            WebkitBackdropFilter: 'blur(var(--glass-blur))',
                            borderRadius: 'var(--radius-2xl)',
                            border: '1px solid var(--color-border-subtle)',
                            boxShadow: 'var(--shadow-lg)',
                            padding: 'var(--space-lg)',
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                    >
                        {/* Panel Header */}
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'flex-start',
                            marginBottom: 'var(--space-md)'
                        }}>
                            <div>
                                <div style={{
                                    fontSize: 'var(--font-size-sm)',
                                    color: 'var(--color-text-tertiary)',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1.5px',
                                    fontWeight: 'var(--font-weight-bold)',
                                    marginBottom: 'var(--space-xs)'
                                }}>
                                    Elevate 1.0
                                </div>
                                <div style={{
                                    fontSize: 'var(--font-size-3xl)',
                                    fontWeight: 'var(--font-weight-extrabold)',
                                    color: 'var(--color-text-primary)'
                                }}>
                                    2024
                                </div>
                                <div style={{
                                    fontSize: 'var(--font-size-lg)',
                                    color: 'var(--color-text-secondary)',
                                    marginTop: 'var(--space-xs)'
                                }}>
                                    {total2024} Companies
                                </div>
                            </div>

                            {/* 2024 Specific Funnel Stats - Compact Right Side */}
                            <div style={{
                                display: 'flex',
                                gap: 'var(--space-md)',
                                background: 'rgba(255,255,255,0.03)',
                                padding: 'var(--space-sm) var(--space-md)',
                                borderRadius: 'var(--radius-lg)',
                                border: '1px solid var(--color-border-subtle)'
                            }}>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                                    <span style={{ fontSize: 'var(--font-size-lg)', fontWeight: '800', color: 'var(--color-text-primary)', lineHeight: 1 }}>43</span>
                                    <span style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.5px', color: 'var(--color-text-tertiary)' }}>Interviewed</span>
                                </div>
                                <div style={{ width: '1px', background: 'var(--color-border-subtle)' }} />
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                                    <span style={{ fontSize: 'var(--font-size-lg)', fontWeight: '800', color: 'var(--color-accent-primary)', lineHeight: 1 }}>27</span>
                                    <span style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.5px', color: 'var(--color-text-tertiary)' }}>Supported</span>
                                </div>
                            </div>
                        </div>

                        {/* Bars */}
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 'var(--space-md)',
                            flex: 1,
                            justifyContent: 'center'
                        }}>
                            {data2024.map((item, index) => (
                                <div key={item.city}>
                                    <div style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        marginBottom: 'var(--space-xs)'
                                    }}>
                                        <div style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 'var(--space-sm)'
                                        }}>
                                            <div style={{
                                                width: '10px',
                                                height: '10px',
                                                borderRadius: '50%',
                                                background: item.color
                                            }} />
                                            <span style={{
                                                fontSize: 'var(--font-size-base)',
                                                fontWeight: 'var(--font-weight-semibold)',
                                                color: 'var(--color-text-primary)'
                                            }}>
                                                {item.city}
                                            </span>
                                        </div>
                                        <span style={{
                                            fontSize: 'var(--font-size-lg)',
                                            fontWeight: 'var(--font-weight-bold)',
                                            color: 'var(--color-text-primary)'
                                        }}>
                                            {item.count}
                                        </span>
                                    </div>
                                    <div style={{
                                        width: '100%',
                                        height: '12px',
                                        background: 'rgba(255,255,255,0.1)',
                                        borderRadius: 'var(--radius-full)',
                                        overflow: 'hidden',
                                        position: 'relative'
                                    }}>
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${(item.count / maxCount) * 100}%` }}
                                            transition={{
                                                duration: 1,
                                                delay: 1.0 + (index * 0.1),
                                                ease: 'easeOut'
                                            }}
                                            style={{
                                                height: '100%',
                                                background: item.color,
                                                borderRadius: 'var(--radius-full)',
                                                position: 'relative'
                                            }}
                                        >
                                            <div style={{
                                                position: 'absolute',
                                                right: 0,
                                                top: 0,
                                                bottom: 0,
                                                width: '3px',
                                                background: 'rgba(255,255,255,0.4)'
                                            }} />
                                        </motion.div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* 2025 Panel */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8, duration: 0.7 }}
                        style={{
                            background: 'var(--color-surface)',
                            backdropFilter: 'blur(var(--glass-blur))',
                            WebkitBackdropFilter: 'blur(var(--glass-blur))',
                            borderRadius: 'var(--radius-2xl)',
                            border: '1px solid var(--color-border-subtle)',
                            boxShadow: 'var(--shadow-lg)',
                            padding: 'var(--space-lg)',
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                    >
                        {/* Panel Header */}
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'flex-start',
                            marginBottom: 'var(--space-md)'
                        }}>
                            <div>
                                <div style={{
                                    fontSize: 'var(--font-size-sm)',
                                    color: 'var(--color-text-tertiary)',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1.5px',
                                    fontWeight: 'var(--font-weight-bold)',
                                    marginBottom: 'var(--space-xs)'
                                }}>
                                    Elevate 2.0
                                </div>
                                <div style={{
                                    fontSize: 'var(--font-size-3xl)',
                                    fontWeight: 'var(--font-weight-extrabold)',
                                    color: 'var(--color-text-primary)'
                                }}>
                                    2025
                                </div>
                                <div style={{
                                    fontSize: 'var(--font-size-lg)',
                                    color: 'var(--color-text-secondary)',
                                    marginTop: 'var(--space-xs)'
                                }}>
                                    {total2025} Companies
                                </div>
                            </div>

                            {/* 2025 Specific Funnel Stats - Compact Right Side */}
                            <div style={{
                                display: 'flex',
                                gap: 'var(--space-md)',
                                background: 'rgba(255,255,255,0.03)',
                                padding: 'var(--space-sm) var(--space-md)',
                                borderRadius: 'var(--radius-lg)',
                                border: '1px solid var(--color-border-subtle)'
                            }}>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                                    <span style={{ fontSize: 'var(--font-size-lg)', fontWeight: '800', color: 'var(--color-text-primary)', lineHeight: 1 }}>48</span>
                                    <span style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.5px', color: 'var(--color-text-tertiary)' }}>Interviewed</span>
                                </div>
                                <div style={{ width: '1px', background: 'var(--color-border-subtle)' }} />
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                                    <span style={{ fontSize: 'var(--font-size-lg)', fontWeight: '800', color: 'var(--color-success)', lineHeight: 1 }}>36</span>
                                    <span style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.5px', color: 'var(--color-text-tertiary)' }}>Supported</span>
                                </div>
                            </div>
                        </div>

                        {/* Bars */}
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 'var(--space-md)',
                            flex: 1,
                            justifyContent: 'center'
                        }}>
                            {data2025.map((item, index) => (
                                <div key={item.city}>
                                    <div style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        marginBottom: 'var(--space-xs)'
                                    }}>
                                        <div style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 'var(--space-sm)'
                                        }}>
                                            <div style={{
                                                width: '10px',
                                                height: '10px',
                                                borderRadius: '50%',
                                                background: item.color
                                            }} />
                                            <span style={{
                                                fontSize: 'var(--font-size-base)',
                                                fontWeight: 'var(--font-weight-semibold)',
                                                color: 'var(--color-text-primary)'
                                            }}>
                                                {item.city}
                                            </span>
                                            {item.isNew && (
                                                <span style={{
                                                    fontSize: 'var(--font-size-xs)',
                                                    fontWeight: 'var(--font-weight-bold)',
                                                    color: 'var(--color-success)',
                                                    background: 'rgba(16, 185, 129, 0.1)',
                                                    padding: '2px 8px',
                                                    borderRadius: 'var(--radius-full)',
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '0.5px'
                                                }}>
                                                    New
                                                </span>
                                            )}
                                        </div>
                                        <span style={{
                                            fontSize: 'var(--font-size-lg)',
                                            fontWeight: 'var(--font-weight-bold)',
                                            color: 'var(--color-text-primary)'
                                        }}>
                                            {item.count}
                                        </span>
                                    </div>
                                    <div style={{
                                        width: '100%',
                                        height: '12px',
                                        background: 'rgba(255,255,255,0.1)',
                                        borderRadius: 'var(--radius-full)',
                                        overflow: 'hidden',
                                        position: 'relative'
                                    }}>
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${(item.count / maxCount) * 100}%` }}
                                            transition={{
                                                duration: 1,
                                                delay: 1.2 + (index * 0.1),
                                                ease: 'easeOut'
                                            }}
                                            style={{
                                                height: '100%',
                                                background: item.color,
                                                borderRadius: 'var(--radius-full)',
                                                position: 'relative'
                                            }}
                                        >
                                            <div style={{
                                                position: 'absolute',
                                                right: 0,
                                                top: 0,
                                                bottom: 0,
                                                width: '3px',
                                                background: 'rgba(255,255,255,0.4)'
                                            }} />
                                        </motion.div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Key Insights - Compact inline badges */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.6, duration: 0.5 }}
                    style={{
                        display: 'flex',
                        gap: 'var(--space-sm)',
                        marginTop: 'var(--space-md)',
                        flexWrap: 'wrap',
                        justifyContent: 'center'
                    }}
                >
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 'var(--space-xs)',
                        padding: 'var(--space-xs) var(--space-md)',
                        background: 'rgba(16, 185, 129, 0.15)',
                        borderRadius: 'var(--radius-full)',
                        border: '1px solid rgba(16, 185, 129, 0.3)',
                        fontSize: 'var(--font-size-xs)',
                        fontWeight: 'var(--font-weight-semibold)',
                        color: 'var(--color-text-primary)'
                    }}>
                        <div style={{
                            width: '6px',
                            height: '6px',
                            borderRadius: '50%',
                            background: 'var(--color-success)'
                        }} />
                        Gaza enters with 17 companies
                    </div>
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 'var(--space-xs)',
                        padding: 'var(--space-xs) var(--space-md)',
                        background: 'rgba(48, 157, 196, 0.15)',
                        borderRadius: 'var(--radius-full)',
                        border: '1px solid rgba(48, 157, 196, 0.3)',
                        fontSize: 'var(--font-size-xs)',
                        fontWeight: 'var(--font-weight-semibold)',
                        color: 'var(--color-text-primary)'
                    }}>
                        <div style={{
                            width: '6px',
                            height: '6px',
                            borderRadius: '50%',
                            background: 'var(--color-accent-secondary)'
                        }} />
                        Better geographic distribution
                    </div>
                </motion.div>


            </div>
        </Slide>
    );
};

export default GeographicalDistribution;
