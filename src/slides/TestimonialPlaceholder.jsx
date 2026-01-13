import React from 'react';
import { motion } from 'framer-motion';
import Slide from '../components/Slide';
import { Quote } from 'lucide-react';

export default function TestimonialPlaceholder({ companyName = "Company Name", speakerName = "Speaker Name" }) {
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
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    style={{
                        maxWidth: '800px',
                        padding: 'var(--space-2xl)',
                        background: 'rgba(255, 255, 255, 0.03)',
                        borderRadius: 'var(--radius-xl)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        position: 'relative'
                    }}
                >
                    <Quote
                        size={60}
                        style={{
                            position: 'absolute',
                            top: '-30px',
                            left: '40px',
                            color: 'var(--color-accent-primary)',
                            background: 'var(--color-bg)',
                            padding: '0 10px'
                        }}
                    />

                    <h2 className="gradient-text" style={{ fontSize: 'var(--font-size-3xl)', marginBottom: 'var(--space-lg)' }}>
                        {companyName}
                    </h2>

                    <div style={{ width: '120px', height: '120px', background: '#333', borderRadius: '50%', margin: '0 auto var(--space-lg)', overflow: 'hidden' }}>
                        {/* Placeholder for speaker image */}
                        <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#666' }}>
                            Photo
                        </div>
                    </div>

                    <h3 style={{ fontSize: 'var(--font-size-xl)', color: 'var(--color-text-primary)' }}>
                        {speakerName}
                    </h3>

                    <p style={{ marginTop: 'var(--space-md)', color: 'var(--color-text-secondary)', fontStyle: 'italic' }}>
                        Testimonial content will be added here.
                    </p>
                </motion.div>
            </div>
        </Slide>
    );
}
