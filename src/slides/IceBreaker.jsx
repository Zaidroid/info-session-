import React from 'react';
import { motion } from 'framer-motion';
import Slide from '../components/Slide';
import { Sparkles, MessageCircle, Users } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';

export default function IceBreaker() {
    return (
        <Slide>
            <div style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Background Decor */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.05 }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                    style={{
                        position: 'absolute',
                        width: '800px',
                        height: '800px',
                        borderRadius: '50%',
                        background: 'radial-gradient(circle, var(--color-accent-secondary) 0%, transparent 70%)',
                        zIndex: 0
                    }}
                />

                <motion.div
                    variants={staggerContainer(0.2)}
                    initial="hidden"
                    animate="visible"
                    style={{ zIndex: 1, textAlign: 'center' }}
                >
                    <motion.div variants={fadeInUp} style={{ marginBottom: '2rem' }}>
                        <span style={{
                            textTransform: 'uppercase',
                            letterSpacing: '0.2em',
                            color: 'var(--color-accent-secondary)', // Cyan/Teal
                            fontWeight: 700,
                            fontSize: '1rem',
                            display: 'block',
                            marginBottom: '1rem'
                        }}>
                            Interactive Session
                        </span>
                        <h1 style={{
                            fontSize: '5rem',
                            fontWeight: 900,
                            marginBottom: '1rem',
                            lineHeight: 1.1
                        }}>
                            Ice <span className="gradient-text">Breaker</span>
                        </h1>
                    </motion.div>

                    <motion.p
                        variants={fadeInUp}
                        style={{
                            fontSize: '2rem',
                            color: 'var(--color-text-secondary)',
                            maxWidth: '600px',
                            margin: '0 auto 3rem'
                        }}
                    >
                        Let's get to know each other.
                    </motion.p>
                </motion.div>
            </div>
        </Slide>
    );
}
