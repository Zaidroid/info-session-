import React from 'react';
import Slide from '../components/Slide';
import { Building2 } from 'lucide-react';

export default function SupportedCompanies() {
    const companies = [
        'Radix Logo.png',
        'Jaffa.net Logo.png',
        'Scope System Logo.png',
        'Dotline Logo.png',
        'Farabio - Tech360 logo .png',
        'Aeliasoft Logo.jpg',
        'Business Alliance Logo.png',
        'Developers Plus Logo.jpg',
        'ERP Smart Logo.jpg',
        'Evoinsight logo NEW.jpeg',
        'Experts Turnkey Solutions Logo.png',
        'Falak Logo.jpg',
        'Foras Logo.jpg',
        'GIS Plus Logo.png',
        'GoGlobal-Logo.png',
        'Hexa Logo - NEW.png',
        'Iris Logo.jpg',
        'Iztech Valley.jpg',
        'Jobs Logo.png',
        'NewSoft Logo - New.jpg',
        'Offtec Logo.png',
        'Orion Logo.png',
        'Palsoft Logo.jpg',
        'Pillars Logo.png',
        'Sada Intelligent Solutions Logo.png',
        'Safedeny Logo.png',
        'SyncMe Logo.png',
        'Ultimit Advanced Turnkey Solutions logo.png',
        'Yummy Logo.png',
        'Accessline Logo.jpg',
        'Aqlama Logo.png',
        'edubook logo- icon only (1).png',
        'eMicorlearn Logo.png',
        'Examinator Software Solutions - Quiz plus logo.jpg',
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
                padding: '4rem 3rem',
                overflow: 'hidden'
            }}>
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '3rem', zIndex: 10 }}>
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
                        margin: '0 0 0.75rem 0'
                    }}>
                        Supported <span className="gradient-text">Companies</span>
                    </h2>
                    <p style={{
                        fontSize: '1.2rem',
                        color: 'var(--color-text-secondary)',
                        margin: 0,
                        fontWeight: 600
                    }}>
                        35 Palestinian Tech Companies
                    </p>
                </div>

                {/* Scrolling Logo Rows */}
                <div style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2rem',
                    overflow: 'hidden'
                }}>
                    {/* Row 1 - Scroll Right */}
                    <div style={{
                        display: 'flex',
                        gap: '2rem',
                        animation: 'scrollRight 40s linear infinite',
                        width: 'fit-content'
                    }}>
                        {[...companies.slice(0, 12), ...companies.slice(0, 12)].map((logo, idx) => (
                            <div
                                key={idx}
                                style={{
                                    minWidth: '140px',
                                    height: '90px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    background: 'rgba(255,255,255,0.02)',
                                    borderRadius: '12px',
                                    border: '1px solid rgba(255,255,255,0.06)',
                                    padding: '1rem',
                                    flexShrink: 0
                                }}
                            >
                                <img 
                                    src={`/companies/${logo}`}
                                    alt=""
                                    loading="lazy"
                                    style={{
                                        maxWidth: '100%',
                                        maxHeight: '100%',
                                        objectFit: 'contain',
                                        filter: 'brightness(0.95)'
                                    }}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Row 2 - Scroll Left */}
                    <div style={{
                        display: 'flex',
                        gap: '2rem',
                        animation: 'scrollLeft 40s linear infinite',
                        width: 'fit-content'
                    }}>
                        {[...companies.slice(12, 24), ...companies.slice(12, 24)].map((logo, idx) => (
                            <div
                                key={idx}
                                style={{
                                    minWidth: '140px',
                                    height: '90px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    background: 'rgba(255,255,255,0.02)',
                                    borderRadius: '12px',
                                    border: '1px solid rgba(255,255,255,0.06)',
                                    padding: '1rem',
                                    flexShrink: 0
                                }}
                            >
                                <img 
                                    src={`/companies/${logo}`}
                                    alt=""
                                    loading="lazy"
                                    style={{
                                        maxWidth: '100%',
                                        maxHeight: '100%',
                                        objectFit: 'contain',
                                        filter: 'brightness(0.95)'
                                    }}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Row 3 - Scroll Right */}
                    <div style={{
                        display: 'flex',
                        gap: '2rem',
                        animation: 'scrollRight 40s linear infinite',
                        width: 'fit-content'
                    }}>
                        {[...companies.slice(24), ...companies.slice(24)].map((logo, idx) => (
                            <div
                                key={idx}
                                style={{
                                    minWidth: '140px',
                                    height: '90px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    background: 'rgba(255,255,255,0.02)',
                                    borderRadius: '12px',
                                    border: '1px solid rgba(255,255,255,0.06)',
                                    padding: '1rem',
                                    flexShrink: 0
                                }}
                            >
                                <img 
                                    src={`/companies/${logo}`}
                                    alt=""
                                    loading="lazy"
                                    style={{
                                        maxWidth: '100%',
                                        maxHeight: '100%',
                                        objectFit: 'contain',
                                        filter: 'brightness(0.95)'
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer */}
                <div style={{
                    marginTop: '2.5rem',
                    textAlign: 'center',
                    fontSize: '0.95rem',
                    color: 'var(--color-text-tertiary)',
                    fontStyle: 'italic'
                }}>
                    Empowered Through Elevate Program
                </div>
            </div>

            {/* CSS Animations */}
            <style>{`
                @keyframes scrollRight {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }

                @keyframes scrollLeft {
                    0% {
                        transform: translateX(-50%);
                    }
                    100% {
                        transform: translateX(0);
                    }
                }
            `}</style>
        </Slide>
    );
}
