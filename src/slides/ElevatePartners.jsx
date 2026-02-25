import React from 'react';
import { motion } from 'framer-motion';
import Slide from '../components/Slide';
import { Handshake, Sparkles } from 'lucide-react';
import { staggerContainer, fadeInUp } from '../utils/animations';

export default function ElevatePartners() {
    const partners = [
        { name: 'Kasim Legal', logo: '/companies/Kasim-Legal.svg' },
        { name: 'Anderson', logo: '/companies/Anderson.svg' },
        { name: 'Digify', logo: '/companies/Digify.svg' },
        { name: 'Dragon', logo: '/companies/Dragon.svg' },
        { name: 'Kurdi and Co', logo: '/companies/Kurdi-Co.svg' },
        { name: 'Progimix', logo: '/companies/Progimix.svg' }
    ];

    return (
        <Slide>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer(0.15)}
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '0 5%'
                }}
            >
                {/* Header */}
                <motion.div variants={fadeInUp} style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.5rem 1.25rem',
                        background: 'var(--color-surface)',
                        borderRadius: '20px',
                        border: '1px solid var(--color-border-subtle)',
                        marginBottom: '1.5rem'
                    }}>
                        <Handshake size={18} color="var(--color-accent-secondary)" />
                        <span style={{
                            fontSize: '0.85rem',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            letterSpacing: '2px',
                            color: 'var(--color-accent-secondary)'
                        }}>
                            Strategic Partners
                        </span>
                    </div>

                    <h2 style={{ fontSize: 'clamp(3rem, 6vmin, 5rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '1rem' }}>
                        Elevate <span className="gradient-text">Partners</span>
                    </h2>
                    <p style={{ fontSize: '1.3rem', color: 'var(--color-text-secondary)', maxWidth: '750px', margin: '0 auto' }}>
                        Collaborating with industry leaders to deliver world-class support
                    </p>
                </motion.div>

                {/* Partners Grid - 3 columns, 2 rows */}
                <motion.div
                    variants={staggerContainer(0.1)}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: '3rem',
                        width: '100%',
                        maxWidth: '1100px',
                        marginBottom: '3rem'
                    }}
                >
                    {partners.map((partner, idx) => (
                        <motion.div
                            key={idx}
                            variants={fadeInUp}
                            whileHover={{
                                scale: 1.05,
                                y: -10,
                                transition: { duration: 0.2 }
                            }}
                            style={{
                                background: 'var(--color-surface)',
                                backdropFilter: 'blur(var(--glass-blur))',
                                padding: '3rem 2rem',
                                borderRadius: '24px',
                                border: '1px solid var(--color-border-subtle)',
                                boxShadow: 'var(--shadow-lg)',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textAlign: 'center',
                                position: 'relative',
                                overflow: 'hidden',
                                cursor: 'pointer',
                                minHeight: '200px'
                            }}
                        >
                            {/* Gradient accent */}
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                height: '4px',
                                background: 'var(--gradient-accent)',
                                opacity: 0.7
                            }} />

                            {/* Logo Container */}
                            <div style={{
                                width: '100%',
                                height: '120px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '1.5rem'
                            }}>
                                {partner.logo ? (
                                    <img 
                                        src={partner.logo} 
                                        alt={partner.name}
                                        style={{
                                            maxWidth: '100%',
                                            maxHeight: '100%',
                                            objectFit: 'contain'
                                        }}
                                        onError={(e) => {
                                            // Fallback to text if logo fails
                                            e.target.style.display = 'none';
                                            const fallback = document.createElement('div');
                                            fallback.style.cssText = `
                                                font-size: 1.8rem;
                                                font-weight: 800;
                                                color: var(--color-text-primary);
                                                text-align: center;
                                            `;
                                            fallback.textContent = partner.name;
                                            e.target.parentElement.appendChild(fallback);
                                        }}
                                    />
                                ) : (
                                    <div style={{
                                        fontSize: '1.8rem',
                                        fontWeight: 800,
                                        color: 'var(--color-text-primary)',
                                        textAlign: 'center'
                                    }}>
                                        {partner.name}
                                    </div>
                                )}
                            </div>

                            {/* Partner Name (always show) */}
                            <h3 style={{
                                fontSize: '1.3rem',
                                fontWeight: 700,
                                color: 'var(--color-text-primary)',
                                margin: 0
                            }}>
                                {partner.name}
                            </h3>

                            {/* Sparkle decoration */}
                            <motion.div
                                animate={{
                                    opacity: [0.3, 0.7, 0.3],
                                    scale: [1, 1.1, 1]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    delay: idx * 0.2
                                }}
                                style={{
                                    position: 'absolute',
                                    top: '1rem',
                                    right: '1rem'
                                }}
                            >
                                <Sparkles size={16} color="var(--color-accent-secondary)" />
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom Note */}
                <motion.div
                    variants={fadeInUp}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        padding: '1rem 2rem',
                        background: 'rgba(255,255,255,0.03)',
                        borderRadius: '16px',
                        border: '1px solid rgba(255,255,255,0.05)'
                    }}
                >
                    <Sparkles size={20} color="var(--color-accent-secondary)" />
                    <span style={{
                        fontSize: '1rem',
                        color: 'var(--color-text-secondary)',
                        fontStyle: 'italic'
                    }}>
                        Together, we're building a stronger tech ecosystem in Palestine
                    </span>
                </motion.div>
            </motion.div>
        </Slide>
    );
}
