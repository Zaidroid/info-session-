import React from 'react';
import { motion } from 'framer-motion';
import Slide from '../components/Slide';
import { Play, Users } from 'lucide-react';

export default function CompanyTestimonialVideo() {
    const videoUrl = "https://www.youtube.com/embed/BzcTzrnLVGQ";

    return (
        <Slide>
            <div style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '4rem'
            }}>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: 'center', marginBottom: '2rem' }}
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
                        <Users size={18} color="var(--color-accent-secondary)" />
                        <span style={{
                            fontSize: '0.8rem',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            letterSpacing: '2px',
                            color: 'var(--color-accent-secondary)'
                        }}>
                            Success Stories
                        </span>
                    </div>
                    <h2 style={{
                        fontSize: 'clamp(2.5rem, 5vmin, 4rem)',
                        fontWeight: 900,
                        lineHeight: 1.1,
                        margin: '0 0 0.5rem 0'
                    }}>
                        Company <span className="gradient-text">Testimonials</span>
                    </h2>
                    <p style={{
                        fontSize: '1.1rem',
                        color: 'var(--color-text-secondary)',
                        margin: 0
                    }}>
                        Hear from companies transformed by Elevate
                    </p>
                </motion.div>

                {/* Video Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    style={{
                        width: '100%',
                        maxWidth: '1200px',
                        aspectRatio: '16/9',
                        background: 'rgba(0,0,0,0.3)',
                        borderRadius: '24px',
                        overflow: 'hidden',
                        border: '2px solid rgba(255,255,255,0.1)',
                        boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
                        position: 'relative'
                    }}
                >
                    <iframe
                        src={videoUrl}
                        title="Company Testimonials"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{
                            width: '100%',
                            height: '100%',
                            border: 'none'
                        }}
                    />
                </motion.div>

                {/* Footer Note */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    style={{
                        marginTop: '2rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontSize: '0.9rem',
                        color: 'var(--color-text-tertiary)',
                        fontStyle: 'italic'
                    }}
                >
                    <Play size={16} />
                    <span>Real stories from Palestinian tech companies in the Elevate Program</span>
                </motion.div>
            </div>
        </Slide>
    );
}
