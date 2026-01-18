import React from 'react';
import { motion } from 'framer-motion';
import { fadeInScale, cardHover, card3DTilt } from '../utils/animations';

/**
 * Unified Card Component with multiple variants
 * 
 * Variants:
 * - default: Standard glass card
 * - stat: Centered content for statistics
 * - feature: Icon + title + description card
 * - highlight: Emphasized card with glow
 * - image: Card with background image overlay
 */

const Card = ({
    children,
    variant = 'default',
    className = '',
    hoverable = true,
    tilt3D = false,
    delay = 0,
    style = {},
    ...props
}) => {
    const [tiltStyle, setTiltStyle] = React.useState({});

    // Card variant styles
    const variantStyles = {
        default: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
        },
        stat: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
        },
        feature: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            gap: 'var(--space-md)',
        },
        highlight: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            border: '2px solid var(--color-accent-primary)',
            boxShadow: 'var(--shadow-glow)',
            position: 'relative',
            overflow: 'hidden',
        },
        image: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            position: 'relative',
            overflow: 'hidden',
        },
    };

    // 3D Tilt effect
    const handleMouseMove = (e) => {
        if (!tilt3D) return;

        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -8; // Max 8 deg rotation
        const rotateY = ((x - centerX) / centerX) * 8;

        setTiltStyle({
            transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        });
    };

    const handleMouseLeave = () => {
        if (!tilt3D) return;
        setTiltStyle({
            transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
        });
    };

    return (
        <motion.div
            className={`card-wrapper ${className}`}
            initial="hidden"
            animate="visible"
            variants={fadeInScale}
            transition={{ delay }}
            whileHover={hoverable ? "hover" : undefined}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                perspective: '1000px',
                height: '100%',
            }}
            {...props}
        >
            <motion.div
                className={`glass card card-${variant}`}
                variants={hoverable ? cardHover : {}}
                style={{
                    ...variantStyles[variant],
                    borderRadius: 'var(--radius-2xl)',
                    padding: 'var(--space-xl)',
                    height: '100%',
                    boxShadow: 'var(--shadow-lg)',
                    position: 'relative',
                    transition: 'all var(--duration-normal) var(--ease-smooth)',
                    transformStyle: 'preserve-3d',
                    ...tiltStyle,
                    ...style,
                }}
            >
                {/* Glass reflection overlay */}
                <div
                    style={{
                        content: '',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'var(--gradient-surface)',
                        borderRadius: 'var(--radius-2xl)',
                        pointerEvents: 'none',
                        zIndex: 0,
                    }}
                />

                {/* Content */}
                <div style={{ position: 'relative', zIndex: 1, height: '100%' }}>
                    {children}
                </div>
            </motion.div>
        </motion.div>
    );
};

// ===== Specialized Card Sub-components =====

export const StatCard = ({ number, label, icon, suffix = '', prefix = '', delay = 0 }) => {
    return (
        <Card variant="stat" delay={delay}>
            {icon && (
                <div style={{ fontSize: '3rem', marginBottom: 'var(--space-md)' }}>
                    {icon}
                </div>
            )}
            <div
                className="gradient-text"
                style={{
                    fontSize: 'var(--font-size-6xl)',
                    fontWeight: 'var(--font-weight-extrabold)',
                    lineHeight: 'var(--line-height-tight)',
                    marginBottom: 'var(--space-sm)',
                }}
            >
                {prefix}{number}{suffix}
            </div>
            <div
                style={{
                    fontSize: 'var(--font-size-sm)',
                    fontWeight: 'var(--font-weight-semibold)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    color: 'var(--color-text-secondary)',
                }}
            >
                {label}
            </div>
        </Card>
    );
};

export const FeatureCard = ({ icon, title, description, children, delay = 0, highlighted = false, highlightLabel = 'Featured', style = {}, highlightStyle = {} }) => {
    return (
        <Card variant={highlighted ? 'highlight' : 'feature'} delay={delay} hoverable={true} tilt3D={true} style={style}>
            {highlighted && highlightLabel && (
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        padding: '0.3rem 1rem',
                        background: style.borderColor || 'var(--color-accent-primary)',
                        color: 'white',
                        fontSize: 'var(--font-size-xs)',
                        fontWeight: 'var(--font-weight-bold)',
                        borderBottomLeftRadius: 'var(--radius-lg)',
                        zIndex: 2,
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        ...highlightStyle
                    }}
                >
                    {highlightLabel}
                </div>
            )}

            <h3
                style={{
                    fontSize: 'var(--font-size-2xl)',
                    fontWeight: 'var(--font-weight-bold)',
                    color: highlighted ? 'var(--color-accent-primary)' : 'var(--color-accent-secondary)',
                    marginBottom: 'var(--space-sm)',
                }}
            >
                {title}
            </h3>

            {description && (
                <p
                    style={{
                        fontSize: 'var(--font-size-base)',
                        color: 'var(--color-text-secondary)',
                        lineHeight: 'var(--line-height-relaxed)',
                        marginBottom: description && children ? 'var(--space-md)' : 0,
                    }}
                >
                    {description}
                </p>
            )}

            {children}
        </Card>
    );
};

export const ImageCard = ({ image, title, subtitle, overlay = true, delay = 0 }) => {
    return (
        <Card variant="image" delay={delay} hoverable={true}>
            {/* Background Image */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: `url(${image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    borderRadius: 'var(--radius-2xl)',
                    zIndex: 0,
                }}
            />

            {/* Overlay */}
            {overlay && (
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)',
                        borderRadius: 'var(--radius-2xl)',
                        zIndex: 1,
                    }}
                />
            )}

            {/* Content */}
            <div style={{ position: 'relative', zIndex: 2 }}>
                {title && (
                    <h3
                        style={{
                            fontSize: 'var(--font-size-3xl)',
                            fontWeight: 'var(--font-weight-bold)',
                            color: 'white',
                            marginBottom: 'var(--space-xs)',
                        }}
                    >
                        {title}
                    </h3>
                )}
                {subtitle && (
                    <p
                        style={{
                            fontSize: 'var(--font-size-lg)',
                            color: 'rgba(255,255,255,0.9)',
                        }}
                    >
                        {subtitle}
                    </p>
                )}
            </div>
        </Card>
    );
};

export default Card;
