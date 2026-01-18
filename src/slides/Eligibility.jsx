import React from 'react';
import { motion } from 'framer-motion';
import Slide from '../components/Slide';
import { CheckCircle } from 'lucide-react';
import { staggerContainer, fadeInUp } from '../utils/animations';

export default function Eligibility() {
    const criteria = [
        "Official Ministry of National Economy Licenses",
        "Corporate Registration & Bank Account",
        "Support focus: Established MSMEs (Micro, Small & Medium Enterprises)",
        "Commitment to Youth & Women Employment",
        "Physical HQ in Palestine",
        "Digital Services & Software Focus"
    ];

    return (
        <Slide>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer(0.1)}
                style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
            >
                <motion.h2
                    variants={fadeInUp}
                    style={{ marginBottom: 'var(--space-xl)', textAlign: 'center', fontSize: '3.5rem' }}
                >
                    <span className="gradient-text">Eligibility</span> Criteria
                </motion.h2>

                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem',
                        maxWidth: '800px',
                        width: '100%'
                    }}
                >
                    {criteria.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1.5rem',
                                padding: '1.2rem',
                                background: 'rgba(255,255,255,0.05)',
                                borderRadius: '16px',
                                border: '1px solid rgba(255,255,255,0.1)',
                                backdropFilter: 'blur(10px)'
                            }}
                        >
                            <div style={{
                                width: '32px',
                                height: '32px',
                                borderRadius: '50%',
                                background: 'var(--color-accent-primary)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0
                            }}>
                                <CheckCircle color="white" size={20} />
                            </div>
                            <span style={{ fontSize: '1.2rem', fontWeight: 500, color: 'var(--color-text-primary)' }}>{item}</span>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </Slide>
    );
}
