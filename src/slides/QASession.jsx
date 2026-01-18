import React from 'react';
import { motion } from 'framer-motion';
import Slide from '../components/Slide';
import { HelpCircle } from 'lucide-react';
import { fadeInUp } from '../utils/animations';

export default function QASession() {
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
                {/* Giant Background Icon */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
                    animate={{ opacity: 0.03, scale: 1, rotate: -10 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    style={{
                        position: 'absolute',
                        zIndex: 0,
                        pointerEvents: 'none',
                        color: 'var(--color-text-primary)'
                    }}
                >
                    <HelpCircle size={800} strokeWidth={0.5} />
                </motion.div>

                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    style={{ zIndex: 1, textAlign: 'center' }}
                >
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '2rem',
                        padding: '2rem',
                        borderRadius: '50%',
                        background: 'var(--gradient-primary)',
                        boxShadow: '0 10px 30px rgba(231, 139, 63, 0.3)' // Orange glow
                    }}>
                        <HelpCircle size={64} color="white" />
                    </div>

                    <h1 style={{
                        fontSize: '5rem',
                        fontWeight: 900,
                        marginBottom: '1rem',
                        lineHeight: 1.1
                    }}>
                        Q & A <span style={{ color: 'var(--color-accent-primary)' }}>Session</span>
                    </h1>
                    <p style={{
                        fontSize: '1.5rem',
                        color: 'var(--color-text-secondary)',
                        maxWidth: '600px',
                        margin: '0 auto'
                    }}>
                        Discussion, Considerations, and Deep Dives.
                    </p>
                </motion.div>
            </div>
        </Slide>
    );
}
