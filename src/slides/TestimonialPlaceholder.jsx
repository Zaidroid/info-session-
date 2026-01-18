import React from 'react';
import { motion } from 'framer-motion';
import Slide from '../components/Slide';
import { Quote } from 'lucide-react';

export default function TestimonialPlaceholder({ companyName = "Company Name", speakerName = "Speaker Name", role = "", photo, photoPosition = "center" }) {
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

                    <div style={{
                        width: '150px',
                        height: '150px',
                        borderRadius: '50%',
                        margin: '0 auto var(--space-lg)',
                        overflow: 'hidden',
                        border: '4px solid var(--color-accent-primary)',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                        background: '#f0f0f0',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        {photo ? (
                            <img
                                src={photo}
                                alt={speakerName}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    objectPosition: photoPosition
                                }}
                            />
                        ) : (
                            <div style={{
                                width: '100%',
                                height: '100%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                color: '#999',
                                fontSize: '0.9rem',
                                fontWeight: '500'
                            }}>
                                No Photo
                            </div>
                        )}
                    </div>

                    <h3 style={{ fontSize: 'var(--font-size-2xl)', color: 'var(--color-text-primary)', marginBottom: 'var(--space-xs)', fontWeight: 'bold' }}>
                        {speakerName}
                    </h3>

                    {role && (
                        <div style={{ fontSize: 'var(--font-size-lg)', color: 'var(--color-accent-secondary)', fontWeight: '500' }}>
                            {role}
                        </div>
                    )}

                    <p style={{ marginTop: 'var(--space-md)', color: 'var(--color-text-secondary)', fontStyle: 'italic' }}>
                        Testimonial content will be added here.
                    </p>
                </motion.div>
            </div>
        </Slide>
    );
}
