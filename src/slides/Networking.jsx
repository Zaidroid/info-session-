import React from 'react';
import { motion } from 'framer-motion';
import Slide from '../components/Slide';
import { fadeInUp, staggerContainer } from '../utils/animations';

export default function Networking() {
    return (
        <Slide>
            <div style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                {/* Abstract Background Shapes */}
                <div style={{
                    position: 'absolute',
                    top: '-10%',
                    right: '-10%',
                    width: '60vw',
                    height: '60vw',
                    background: 'radial-gradient(circle, var(--color-accent-primary) 0%, transparent 60%)',
                    opacity: 0.1,
                    filter: 'blur(80px)',
                    zIndex: 0
                }} />
                <div style={{
                    position: 'absolute',
                    bottom: '-10%',
                    left: '-10%',
                    width: '50vw',
                    height: '50vw',
                    background: 'radial-gradient(circle, var(--color-accent-secondary) 0%, transparent 60%)',
                    opacity: 0.1,
                    filter: 'blur(80px)',
                    zIndex: 0
                }} />

                <motion.div
                    variants={staggerContainer(0.2)}
                    initial="hidden"
                    animate="visible"
                    style={{
                        textAlign: 'center',
                        maxWidth: '900px',
                        zIndex: 1,
                        background: 'rgba(255,255,255,0.03)',
                        backdropFilter: 'blur(20px)',
                        padding: '4rem',
                        borderRadius: '32px',
                        border: '1px solid rgba(255,255,255,0.1)'
                    }}
                >
                    <motion.div variants={fadeInUp}>
                        <h1 style={{
                            fontSize: 'clamp(3rem, 6vw, 6rem)',
                            fontWeight: 900,
                            marginBottom: '1rem',
                            lineHeight: 1.1,
                            letterSpacing: '-0.02em'
                        }}>
                            Networking <span style={{ color: 'var(--color-text-secondary)', fontWeight: 300 }}>&</span> Lunch
                        </h1>
                    </motion.div>

                    <motion.div
                        variants={fadeInUp}
                        style={{
                            marginTop: '2rem'
                        }}
                    >
                        <p style={{
                            fontSize: '1.5rem',
                            color: 'var(--color-text-secondary)',
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase'
                        }}>
                            Connect • Share • Recharge
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </Slide>
    );
}
