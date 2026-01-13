import React from 'react';
import { motion } from 'framer-motion';
import { feedbackData } from '../data/feedback';

export default function FeedbackWall() {
    //  Scattered "cloud" layout with random vertical start positions via negative delay

    return (
        <div style={{
            position: 'absolute',
            top: 0, left: 0, width: '100%', height: '100%',
            overflow: 'hidden',
            zIndex: -1,
            pointerEvents: 'none'
        }}>
            {/* Background Gradient */}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, var(--color-bg-primary), transparent, var(--color-bg-primary))', zIndex: 1 }} />

            {/* Floating bubbles effect */}
            {feedbackData.map((item, index) => {
                const randomLeft = (index * 13 + 7) % 85;
                const duration = 40 + (index * 2); // Slower, calm drift
                // Negative delay distributes them along the path immediately
                const delay = -1 * (Math.random() * duration);

                return (
                    <motion.div
                        key={index}
                        initial={{ y: '110vh', x: 0, opacity: 0 }}
                        animate={{
                            y: '-20vh',
                            opacity: [0, 1, 1, 0] // Fade in -> Stay visible -> Fade out
                        }}
                        transition={{
                            duration: duration,
                            repeat: Infinity,
                            delay: delay,
                            ease: 'linear',
                            times: [0, 0.1, 0.9, 1] // Quickly fade in, stay visible for most of the ride
                        }}
                        style={{
                            position: 'absolute',
                            left: `${randomLeft}%`,
                            background: 'var(--color-surface)',
                            padding: '0.8rem 1.2rem',
                            borderRadius: '12px',
                            border: '1px solid var(--color-border-subtle)',
                            maxWidth: '220px',
                            boxShadow: 'var(--shadow-sm)',
                            backdropFilter: 'blur(3px)',
                            zIndex: 0
                        }}
                    >
                        <p style={{
                            margin: 0,
                            fontSize: '0.75rem',
                            color: 'var(--color-text-secondary)',
                            fontStyle: 'italic',
                            lineHeight: 1.4
                        }}>"{item.text}"</p>
                    </motion.div>
                );
            })}
        </div>
    );
}
