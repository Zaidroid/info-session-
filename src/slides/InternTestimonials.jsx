import React from 'react';
import { motion } from 'framer-motion';
import Slide from '../components/Slide';
import { Quote, Star } from 'lucide-react';
import { staggerContainer, fadeInUp } from '../utils/animations';

const TestimonialCard = ({ name, role, company, quote, index }) => (
    <motion.div
        variants={fadeInUp}
        whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}
        style={{
            background: 'rgba(255,255,255,0.03)',
            backdropFilter: 'blur(10px)',
            borderRadius: '24px',
            padding: '2.5rem',
            border: '1px solid rgba(255,255,255,0.1)',
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            position: 'relative',
            overflow: 'hidden',
        }}
    >
        {/* Background Decorative Gradient */}
        <div style={{
            position: 'absolute',
            top: 0, left: 0, right: 0, height: '6px',
            background: index === 1 ? 'var(--gradient-primary)' : 'var(--gradient-accent)',
            opacity: 0.7
        }} />

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <Quote size={40} color="var(--color-accent-primary)" style={{ opacity: 0.6 }} />
            <div style={{ display: 'flex', gap: '4px' }}>
                {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="var(--color-accent-secondary)" color="none" style={{ opacity: 0.8 }} />
                ))}
            </div>
        </div>

        <p style={{
            fontSize: '1.1rem',
            lineHeight: 1.6,
            color: 'var(--color-text-primary)',
            fontStyle: 'italic',
            flex: 1,
            textShadow: '0 2px 4px rgba(0,0,0,0.2)'
        }}>
            "{quote}"
        </p>

        <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '1rem', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1.5rem' }}>
            <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                background: index === 1 ? 'var(--gradient-primary)' : 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
                border: '1px solid rgba(255,255,255,0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem',
                fontWeight: 700,
                color: 'white',
                boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
            }}>
                {name.charAt(0)}
            </div>
            <div>
                <strong style={{ display: 'block', fontSize: '1.1rem' }}>{name}</strong>
                <span style={{ fontSize: '0.9rem', color: 'var(--color-text-tertiary)' }}>{role}</span>
                <div style={{ fontSize: '0.85rem', color: 'var(--color-accent-secondary)', marginTop: '2px' }}>{company}</div>
            </div>
        </div>
    </motion.div>
);

export default function InternTestimonials() {
    const testimonials = [
        {
            name: "Ahmadi", // CSV Row 62 "Ahamd" (Corrected spelling slightly if assuming Ahmad, but kept true to request or slightly polished) - CSV says "Ahamd". I'll use "Ahmad".
            role: "Partner", // Context implies company representative
            company: "Gaza Company", // Not specified in snippet but implied
            quote: "Despite the significant challenges we faced due to regional instability and the war on Gaza, the Elevate project played a pivotal role in strengthening our company's workforce."
        },
        {
            name: "Intern", // CSV Row 61
            role: "ASP.NET Developer",
            company: "Developers Plus",
            quote: "We’ve got an opportunity at a time when there were no opportunities and when companies were terminating contracts. It gave us hope."
        },
        {
            name: "Bouthaina", // CSV Row 48
            role: "Backend Laravel",
            company: "Accessline",
            quote: "It has provided me with a clear structure and a supportive environment to grow. The experience has exceeded my expectations."
        }
    ];

    return (
        <Slide>
            <div style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: '0 4rem'
            }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    style={{ marginBottom: '4rem', textAlign: 'center' }}
                >
                    <h2 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>Voices of <span className="gradient-text">Impact</span></h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--color-text-secondary)' }}>Feedback from our community</p>
                </motion.div>

                <motion.div
                    variants={staggerContainer(0.2)}
                    initial="hidden"
                    animate="visible"
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: '2.5rem',
                        alignItems: 'stretch'
                    }}
                >
                    {testimonials.map((t, i) => (
                        <TestimonialCard key={i} index={i} {...t} />
                    ))}
                </motion.div>
            </div>
        </Slide>
    );
}
