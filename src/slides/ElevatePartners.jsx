import React from 'react';
import { motion } from 'framer-motion';
import Slide from '../components/Slide';
import { Handshake } from 'lucide-react';

export default function ElevatePartners() {
    const partners = [
        { name: 'Kasim Legal', logo: '/companies/Kasim-Legal.svg' },
        { name: 'Andersen', logo: '/companies/Andersen.svg' },
        { name: 'Digify', logo: '/companies/Digify.svg' },
        { name: 'Dragon', logo: '/companies/Dragon.svg' },
        { name: 'Kurdi and Co', logo: '/companies/Kurdi-Co.svg' },
        { name: 'Progimix', logo: '/companies/Progimix.svg' }
    ];

    return (
        <Slide>
            <div style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '4rem 6rem'
            }}>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.5rem 1.25rem',
                        background: 'rgba(255,255,255,0.05)',
                        borderRadius: '20px',
                        border: '1px solid rgba(255,255,255,0.1)',
                        marginBottom: '1rem'
                    }}>
                        <Handshake size={18} color="var(--color-accent-secondary)" />
                        <span style={{
                            fontSize: '0.8rem',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            letterSpacing: '2px',
                            color: 'var(--color-accent-secondary)'
                        }}>
                            Strategic Partners
                        </span>
                    </div>

                    <h2 style={{
                        fontSize: 'clamp(2.5rem, 5vmin, 4rem)',
                        fontWeight: 900,
                        lineHeight: 1.1,
                        marginBottom: '1rem'
                    }}>
                        Elevate <span className="gradient-text">Partners</span>
                    </h2>
                    <p style={{
                        fontSize: '1.1rem',
                        color: 'var(--color-text-secondary)',
                        maxWidth: '700px',
                        margin: '0 auto'
                    }}>
                        Collaborating with industry leaders to deliver world-class support
                    </p>
                </motion.div>

                {/* Partners Grid - 3x2 */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: '3rem',
                        width: '100%',
                        maxWidth: '1200px'
                    }}
                >
                    {partners.map((partner, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 + (idx * 0.1), duration: 0.6 }}
                            style={{
                                background: 'rgba(255,255,255,0.03)',
                                backdropFilter: 'blur(10px)',
                                padding: '3rem 2rem',
                                borderRadius: '20px',
                                border: '1px solid rgba(255,255,255,0.08)',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textAlign: 'center',
                                position: 'relative',
                                overflow: 'hidden',
                                minHeight: '220px',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-8px)';
                                e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
                                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.2)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            {/* Top accent line */}
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                height: '3px',
                                background: 'linear-gradient(90deg, var(--color-accent-primary), var(--color-accent-secondary))',
                                opacity: 0.6
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
                                <img 
                                    src={partner.logo} 
                                    alt={partner.name}
                                    style={{
                                        maxWidth: '100%',
                                        maxHeight: '100%',
                                        objectFit: 'contain'
                                    }}
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                    }}
                                />
                            </div>

                            {/* Partner Name */}
                            <h3 style={{
                                fontSize: '1.3rem',
                                fontWeight: 700,
                                color: 'var(--color-text-primary)',
                                margin: 0
                            }}>
                                {partner.name}
                            </h3>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Footer Note */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    style={{
                        marginTop: '3rem',
                        fontSize: '0.95rem',
                        color: 'var(--color-text-tertiary)',
                        fontStyle: 'italic',
                        textAlign: 'center'
                    }}
                >
                    Together, we're building a stronger tech ecosystem in Palestine
                </motion.div>
            </div>
        </Slide>
    );
}
