import React from 'react';
import { motion } from 'framer-motion';
import Slide from '../components/Slide';
import { Play } from 'lucide-react';

export default function GazaVideoPlaceholder() {
    return (
        <Slide>
            <div style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center'
            }}>
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    style={{
                        width: '80%',
                        maxWidth: '800px',
                        aspectRatio: '16/9',
                        background: 'rgba(0,0,0,0.3)',
                        borderRadius: 'var(--radius-lg)',
                        border: '2px dashed var(--color-accent-primary)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginBottom: 'var(--space-lg)'
                    }}
                >
                    <div style={{
                        width: '80px',
                        height: '80px',
                        borderRadius: '50%',
                        background: 'var(--color-accent-primary)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        boxShadow: '0 0 30px rgba(222, 99, 54, 0.4)'
                    }}>
                        <Play size={40} color="white" fill="white" style={{ marginLeft: '4px' }} />
                    </div>
                </motion.div>

                <h2 style={{ fontSize: 'var(--font-size-2xl)', marginBottom: 'var(--space-md)' }}>
                    Gaza Resilience Video
                </h2>
                <p style={{ color: 'var(--color-text-secondary)' }}>
                    Video will be inserted here when available.
                </p>
            </div>
        </Slide>
    );
}
