import React from 'react';
import { motion } from 'framer-motion';
import { getSlideTransition } from '../utils/animations';

/**
 * Enhanced Slide Component
 * 
 * Features:
 * - Multiple transition types (spatial, zoom, morph, flip)
 * - Configurable animation presets
 * - Improved 3D depth effects
 * - Centered content with safe padding
 */

export default function Slide({
    children,
    className = '',
    transitionType = 'spatial', // 'spatial', 'zoom', 'morph', 'flip'
    centered = true,
    maxWidth = '1400px',
}) {
    const variants = getSlideTransition(transitionType);

    return (
        <motion.div
            custom={1} // Can be passed as direction from parent
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: centered ? 'center' : 'flex-start',
                justifyContent: 'center',
                padding: 'clamp(2rem, 5vh, 5rem) clamp(2rem, 6vw, 8rem)',
                backfaceVisibility: 'hidden',
                perspective: '1000px',
                overflow: 'hidden',
            }}
            className={className}
        >
            <div
                style={{
                    width: '100%',
                    maxWidth,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}
            >
                {children}
            </div>
        </motion.div>
    );
}

