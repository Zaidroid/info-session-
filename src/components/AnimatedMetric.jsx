import React, { useEffect, useRef, useState } from 'react';
import { motion, useSpring, useTransform, animate } from 'framer-motion';

/**
 * AnimatedMetric Component
 * 
 * Displays an animated number counter with optional progress indicators
 * 
 * Features:
 * - Count-up animation with easing
 * - Prefix/suffix support (%, $, +, etc.)
 * - Progress ring or bar visualization
 * - Icon integration
 * - Configurable animation duration and delay
 */

const AnimatedMetric = ({
    value,
    label,
    icon,
    prefix = '',
    suffix = '',
    decimals = 0,
    duration = 2,
    delay = 0,
    showProgress = false,
    progressType = 'ring', // 'ring' or 'bar'
    progressMax = 100,
    size = 'medium', // 'small', 'medium', 'large'
    color = 'primary', // 'primary', 'secondary', 'success', 'info'
}) => {
    const [displayValue, setDisplayValue] = useState(0);
    const nodeRef = useRef(null);
    const hasAnimated = useRef(false);

    // Size configurations
    const sizes = {
        small: {
            numberSize: 'var(--font-size-3xl)',
            labelSize: 'var(--font-size-xs)',
            iconSize: '2rem',
            ringSize: 80,
            ringStroke: 6,
        },
        medium: {
            numberSize: 'var(--font-size-5xl)',
            labelSize: 'var(--font-size-sm)',
            iconSize: '2.5rem',
            ringSize: 120,
            ringStroke: 8,
        },
        large: {
            numberSize: 'var(--font-size-7xl)',
            labelSize: 'var(--font-size-base)',
            iconSize: '3rem',
            ringSize: 160,
            ringStroke: 10,
        },
    };

    const sizeConfig = sizes[size] || sizes.medium;

    // Color configurations
    const colors = {
        primary: 'var(--color-accent-primary)',
        secondary: 'var(--color-accent-secondary)',
        success: 'var(--color-success)',
        info: 'var(--color-info)',
    };

    const selectedColor = colors[color] || colors.primary;

    // Intersection Observer for triggering animation when in view
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAnimated.current) {
                        hasAnimated.current = true;

                        // Start counter animation after delay
                        setTimeout(() => {
                            const controls = animate(0, value, {
                                duration,
                                ease: [0.25, 0.46, 0.45, 0.94],
                                onUpdate: (latest) => {
                                    setDisplayValue(latest);
                                },
                            });

                            return () => controls.stop();
                        }, delay * 1000);
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (nodeRef.current) {
            observer.observe(nodeRef.current);
        }

        return () => {
            if (nodeRef.current) {
                observer.unobserve(nodeRef.current);
            }
        };
    }, [value, duration, delay]);

    // Format the display value
    const formattedValue = displayValue.toFixed(decimals);
    const progress = (displayValue / progressMax) * 100;

    // Progress Ring SVG
    const ProgressRing = () => {
        const { ringSize, ringStroke } = sizeConfig;
        const radius = (ringSize - ringStroke) / 2;
        const circumference = radius * 2 * Math.PI;
        const offset = circumference - (progress / 100) * circumference;

        return (
            <svg width={ringSize} height={ringSize} style={{ transform: 'rotate(-90deg)' }}>
                {/* Background circle */}
                <circle
                    cx={ringSize / 2}
                    cy={ringSize / 2}
                    r={radius}
                    fill="none"
                    stroke="var(--color-border-subtle)"
                    strokeWidth={ringStroke}
                />
                {/* Progress circle */}
                <motion.circle
                    cx={ringSize / 2}
                    cy={ringSize / 2}
                    r={radius}
                    fill="none"
                    stroke={selectedColor}
                    strokeWidth={ringStroke}
                    strokeLinecap="round"
                    initial={{ strokeDashoffset: circumference }}
                    animate={{ strokeDashoffset: offset }}
                    transition={{ duration, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
                    style={{
                        strokeDasharray: circumference,
                        filter: 'drop-shadow(0 0 8px currentColor)',
                    }}
                />
            </svg>
        );
    };

    // Progress Bar
    const ProgressBar = () => {
        return (
            <div
                style={{
                    width: '100%',
                    height: '8px',
                    background: 'var(--color-border-subtle)',
                    borderRadius: 'var(--radius-full)',
                    overflow: 'hidden',
                    marginTop: 'var(--space-md)',
                }}
            >
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
                    style={{
                        height: '100%',
                        background: `linear-gradient(90deg, ${selectedColor}, var(--color-accent-secondary))`,
                        borderRadius: 'var(--radius-full)',
                        boxShadow: `0 0 12px ${selectedColor}`,
                    }}
                />
            </div>
        );
    };

    // Render with progress ring
    if (showProgress && progressType === 'ring') {
        return (
            <div
                ref={nodeRef}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                }}
            >
                <div style={{ position: 'relative', display: 'inline-flex' }}>
                    <ProgressRing />

                    {/* Content in center of ring */}
                    <div
                        style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        {icon && (
                            <div style={{ fontSize: sizeConfig.iconSize, marginBottom: 'var(--space-xs)' }}>
                                {icon}
                            </div>
                        )}
                        <div
                            className="gradient-text"
                            style={{
                                fontSize: sizeConfig.numberSize,
                                fontWeight: 'var(--font-weight-extrabold)',
                                lineHeight: 'var(--line-height-tight)',
                            }}
                        >
                            {prefix}{formattedValue}{suffix}
                        </div>
                    </div>
                </div>

                {label && (
                    <div
                        style={{
                            marginTop: 'var(--space-md)',
                            fontSize: sizeConfig.labelSize,
                            fontWeight: 'var(--font-weight-semibold)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                            color: 'var(--color-text-secondary)',
                            textAlign: 'center',
                        }}
                    >
                        {label}
                    </div>
                )}
            </div>
        );
    }

    // Render with progress bar or no progress
    return (
        <div
            ref={nodeRef}
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            {icon && (
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay, duration: 0.5, type: 'spring', stiffness: 200 }}
                    style={{ fontSize: sizeConfig.iconSize, marginBottom: 'var(--space-md)' }}
                >
                    {icon}
                </motion.div>
            )}

            <div
                className="gradient-text"
                style={{
                    fontSize: sizeConfig.numberSize,
                    fontWeight: 'var(--font-weight-extrabold)',
                    lineHeight: 'var(--line-height-tight)',
                    marginBottom: 'var(--space-sm)',
                }}
            >
                {prefix}{formattedValue}{suffix}
            </div>

            {label && (
                <div
                    style={{
                        fontSize: sizeConfig.labelSize,
                        fontWeight: 'var(--font-weight-semibold)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        color: 'var(--color-text-secondary)',
                        textAlign: 'center',
                    }}
                >
                    {label}
                </div>
            )}

            {showProgress && progressType === 'bar' && <ProgressBar />}
        </div>
    );
};

export default AnimatedMetric;
