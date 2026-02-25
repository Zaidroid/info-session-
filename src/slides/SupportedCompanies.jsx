import React from 'react';
import { motion } from 'framer-motion';
import Slide from '../components/Slide';
import { Building2 } from 'lucide-react';

export default function SupportedCompanies() {
    const companies = [
        '/companies/Radix Logo.png',
        '/companies/Jaffa.net Logo.png',
        '/companies/Scope System Logo.png',
        '/companies/Dotline Logo.png',
        '/companies/Farabio - Tech360 logo .png',
        '/companies/Aeliasoft Logo.jpg',
        '/companies/Business Alliance Logo.png',
        '/companies/Developers Plus Logo.jpg',
        '/companies/ERP Smart Logo.jpg',
        '/companies/Evoinsight logo NEW.jpeg',
        '/companies/Experts Turnkey Solutions Logo.png',
        '/companies/Falak Logo.jpg',
        '/companies/Foras Logo.jpg',
        '/companies/GIS Plus Logo.png',
        '/companies/GoGlobal-Logo.png',
        '/companies/Hexa Logo - NEW.png',
        '/companies/Iris Logo.jpg',
        '/companies/Iztech Valley.jpg',
        '/companies/Jobs Logo.png',
        '/companies/NewSoft Logo - New.jpg',
        '/companies/Offtec Logo.png',
        '/companies/Orion Logo.png',
        '/companies/Palsoft Logo.jpg',
        '/companies/Pillars Logo.png',
        '/companies/Sada Intelligent Solutions Logo.png',
        '/companies/Safedeny Logo.png',
        '/companies/SyncMe Logo.png',
        '/companies/Ultimit Advanced Turnkey Solutions logo.png',
        '/companies/Yummy Logo.png',
        '/companies/Accessline Logo.jpg',
        '/companies/Aqlama Logo.png',
        '/companies/edubook logo- icon only (1).png',
        '/companies/eMicorlearn Logo.png',
        '/companies/Examinator Software Solutions - Quiz plus logo.jpg',
    ];

    return (
        <Slide>
            <div style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '4rem 6rem'
            }}>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: 'center', marginBottom: '3rem' }}
                >
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.5rem 1rem',
                        background: 'rgba(255,255,255,0.05)',
                        borderRadius: '20px',
                        border: '1px solid rgba(255,255,255,0.1)',
                        marginBottom: '1rem'
                    }}>
                        <Building2 size={18} color="var(--color-accent-primary)" />
                        <span style={{
                            fontSize: '0.8rem',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            letterSpacing: '2px',
                            color: 'var(--color-accent-primary)'
                        }}>
                            Our Portfolio
                        </span>
                    </div>
                    <h2 style={{
                        fontSize: 'clamp(2.5rem, 5vmin, 4rem)',
                        fontWeight: 900,
                        lineHeight: 1.1,
                        margin: '0 0 1rem 0'
                    }}>
                        Supported <span className="gradient-text">Companies</span>
                    </h2>
                    <p style={{
                        fontSize: '1.1rem',
                        color: 'var(--color-text-secondary)',
                        margin: 0
                    }}>
                        34 Palestinian Tech Companies
                    </p>
                </motion.div>

                {/* Logo Grid - Simple Flex Wrap */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '2rem',
                        maxWidth: '1400px',
                        width: '100%'
                    }}
                >
                    {companies.map((logo, idx) => (
                        <div
                            key={idx}
                            style={{
                                width: '140px',
                                height: '100px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                background: 'rgba(255,255,255,0.02)',
                                borderRadius: '12px',
                                border: '1px solid rgba(255,255,255,0.06)',
                                padding: '1rem',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)';
                                e.currentTarget.style.transform = 'scale(1.05)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
                                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                                e.currentTarget.style.transform = 'scale(1)';
                            }}
                        >
                            <img 
                                src={logo}
                                alt="Company logo"
                                loading="lazy"
                                style={{
                                    maxWidth: '100%',
                                    maxHeight: '100%',
                                    objectFit: 'contain'
                                }}
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </Slide>
    );
}
