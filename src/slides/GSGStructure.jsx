import React from 'react';
import { motion } from 'framer-motion';
import Slide from '../components/Slide';
import { Users, Briefcase, TrendingUp, Code, Globe, Zap, ArrowRight, Layout, Cpu } from 'lucide-react';

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.2, duration: 0.5, ease: "easeOut" }
    })
};

const PipelineNode = ({ icon: Icon, title, subtitle, color, delay, align = 'center' }) => (
    <motion.div
        custom={delay}
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.1)',
            backdropFilter: 'blur(10px)',
            borderRadius: '16px',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: align === 'left' ? 'flex-start' : (align === 'right' ? 'flex-end' : 'center'),
            textAlign: align,
            minWidth: '280px',
            position: 'relative',
            zIndex: 2
        }}
    >
        <div style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            background: `${color}20`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '1rem',
            boxShadow: `0 0 20px ${color}30`
        }}>
            <Icon size={30} color={color} />
        </div>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--color-text-primary)' }}>{title}</h3>
        <p style={{ fontSize: '1rem', color: 'var(--color-text-secondary)', lineHeight: 1.4 }}>{subtitle}</p>
    </motion.div>
);

const FlowLine = ({ delay }) => (
    <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ delay, duration: 0.8, ease: "circOut" }}
        style={{
            flex: 1,
            height: '4px',
            background: 'linear-gradient(90deg, var(--color-accent-secondary), var(--color-accent-primary))',
            transformOrigin: 'left',
            position: 'relative',
            margin: '0 1rem',
            borderRadius: '2px',
            opacity: 0.5
        }}
    >
        <motion.div
            animate={{ x: ['0%', '100%'], opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '40%',
                height: '100%',
                background: 'linear-gradient(90deg, transparent, white, transparent)',
                opacity: 0.8
            }}
        />
    </motion.div>
);

export default function GSGStructure() {
    return (
        <Slide>
            <div style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '0 var(--space-xl)'
            }}>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '0.5rem' }}>
                        The Talent <span className="gradient-text">Pipeline</span>
                    </h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--color-text-secondary)' }}>
                        Bridging the gap between potential and market demand.
                    </p>
                </motion.div>

                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                    maxWidth: '1400px'
                }}>
                    {/* 1. Supply / Individuals */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <div style={{
                            textTransform: 'uppercase',
                            letterSpacing: '2px',
                            fontSize: '0.8rem',
                            color: 'var(--color-text-tertiary)',
                            marginBottom: '-1.5rem',
                            paddingLeft: '0.5rem'
                        }}>
                            Talent Supply
                        </div>
                        <PipelineNode
                            icon={Users}
                            title="Individuals"
                            subtitle="University Grads & Tech Talent"
                            color="var(--color-accent-secondary)"
                            delay={0.2}
                            align="left"
                        />
                    </div>

                    {/* Flow Connection 1 */}
                    <FlowLine delay={0.6} />

                    {/* 2. The Bridge / Employability */}
                    <div style={{ position: 'relative' }}>

                        <div style={{
                            position: 'absolute',
                            top: '-30px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            textTransform: 'uppercase',
                            letterSpacing: '2px',
                            fontSize: '0.8rem',
                            color: 'var(--color-text-tertiary)',
                            whiteSpace: 'nowrap'
                        }}>
                            The Bridge
                        </div>

                        <PipelineNode
                            icon={Zap}
                            title="Employability"
                            subtitle="Upskilling, Mentorship & Internships"
                            color="#FFFFFF"
                            delay={0.4}
                            align="center"
                        />
                        {/* Connecting vertical lines or sub-nodes could go here conceptually */}
                    </div>

                    {/* Flow Connection 2 */}
                    <FlowLine delay={0.8} />

                    {/* 3. Demand / Elevate */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'flex-end' }}>
                        <div style={{
                            textTransform: 'uppercase',
                            letterSpacing: '2px',
                            fontSize: '0.8rem',
                            color: 'var(--color-text-tertiary)',
                            marginBottom: '-1.5rem',
                            paddingRight: '0.5rem'
                        }}>
                            Market Demand
                        </div>
                        <PipelineNode
                            icon={Globe}
                            title="Elevate Program"
                            subtitle="Tech Companies & Global Market"
                            color="var(--color-accent-primary)"
                            delay={0.6}
                            align="right"
                        />
                    </div>
                </div>

                {/* Bottom Legend/Context */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 1 }}
                    style={{
                        marginTop: '4rem',
                        display: 'flex',
                        gap: '3rem',
                        justifyContent: 'center'
                    }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', opacity: 0.6 }}>
                        <Layout size={16} /> <span>Capacity Building</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', opacity: 0.6 }}>
                        <Cpu size={16} /> <span>Tech Infrastructure</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', opacity: 0.6 }}>
                        <Briefcase size={16} /> <span>Job Creation</span>
                    </div>
                </motion.div>
            </div>
        </Slide>
    );
}
