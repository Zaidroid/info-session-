/**
 * Animation Utilities - Centralized Framer Motion Configurations
 */

// ===== Custom Easing Functions =====
export const easings = {
    smooth: [0.25, 0.46, 0.45, 0.94],
    spring: [0.175, 0.885, 0.32, 1.275],
    bounce: [0.68, -0.55, 0.265, 1.55],
    inOut: [0.4, 0, 0.2, 1],
    out: [0, 0, 0.2, 1],
    in: [0.4, 0, 1, 1],
};

// ===== Transition Presets =====
export const transitions = {
    fast: { duration: 0.2, ease: easings.out },
    normal: { duration: 0.3, ease: easings.smooth },
    slow: { duration: 0.5, ease: easings.smooth },
    spring: { type: 'spring', stiffness: 300, damping: 30 },
    springBouncy: { type: 'spring', stiffness: 200, damping: 15 },
    springSmooth: { type: 'spring', stiffness: 80, damping: 20 },
};

// ===== Stagger Configurations =====
export const stagger = {
    fast: { staggerChildren: 0.05, delayChildren: 0.1 },
    normal: { staggerChildren: 0.1, delayChildren: 0.2 },
    slow: { staggerChildren: 0.2, delayChildren: 0.3 },
};

// ===== Slide Transition Variants =====
export const slideTransitions = {
    // Elegant 3D spatial transition
    spatial: {
        enter: (direction) => ({
            z: direction > 0 ? -2000 : 2000,
            opacity: 0,
            rotateY: direction > 0 ? -5 : 5,
        }),
        center: {
            z: 0,
            opacity: 1,
            rotateY: 0,
            transition: {
                z: { type: 'spring', stiffness: 60, damping: 25 },
                opacity: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
                rotateY: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
            },
        },
        exit: (direction) => ({
            z: direction > 0 ? 1000 : -1000,
            opacity: 0,
            rotateY: direction > 0 ? 3 : -3,
            transition: {
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1],
            },
        }),
    },

    // Clean zoom transition
    zoom: {
        enter: {
            opacity: 0,
            scale: 1.2,
            filter: 'blur(8px)',
        },
        center: {
            opacity: 1,
            scale: 1,
            filter: 'blur(0px)',
            transition: {
                opacity: { duration: 0.4 },
                scale: { duration: 0.6, ease: easings.out },
                filter: { duration: 0.4 },
            },
        },
        exit: {
            opacity: 0,
            scale: 0.8,
            filter: 'blur(8px)',
            transition: { duration: 0.3 },
        },
    },

    // Morph transition
    morph: {
        enter: (direction) => ({
            opacity: 0,
            scale: 0.5,
            rotate: direction > 0 ? 90 : -90,
            filter: 'blur(20px)',
        }),
        center: {
            opacity: 1,
            scale: 1,
            rotate: 0,
            filter: 'blur(0px)',
            transition: {
                duration: 0.8,
                ease: easings.spring,
            },
        },
        exit: (direction) => ({
            opacity: 0,
            scale: 0.5,
            rotate: direction > 0 ? -90 : 90,
            filter: 'blur(20px)',
            transition: { duration: 0.5 },
        }),
    },

    // Flip transition
    flip: {
        enter: (direction) => ({
            opacity: 0,
            rotateX: direction > 0 ? 90 : -90,
        }),
        center: {
            opacity: 1,
            rotateX: 0,
            transition: {
                duration: 0.6,
                ease: easings.smooth,
            },
        },
        exit: (direction) => ({
            opacity: 0,
            rotateX: direction > 0 ? -90 : 90,
            transition: { duration: 0.4 },
        }),
    },
};

// ===== Component Animation Variants =====

// Fade in from bottom
export const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: easings.out },
    },
};

// Fade in with scale
export const fadeInScale = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: easings.spring },
    },
};

// Scale in from center (0 to 1)
export const scaleIn = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: easings.spring },
    },
};

// Container with stagger children
export const staggerContainer = (staggerDelay = 0.1) => ({
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: staggerDelay,
            delayChildren: 0.2,
        },
    },
});

// Card hover effect
export const cardHover = {
    rest: {
        scale: 1,
        rotateX: 0,
        rotateY: 0,
    },
    hover: {
        scale: 1.05,
        transition: {
            duration: 0.3,
            ease: easings.out,
        },
    },
};

// 3D Tilt effect for cards
export const card3DTilt = {
    rest: {
        scale: 1,
        rotateX: 0,
        rotateY: 0,
        transition: transitions.spring,
    },
};

// Button press effect
export const buttonPress = {
    rest: { scale: 1 },
    hover: { scale: 1.05, transition: transitions.fast },
    tap: { scale: 0.95, transition: transitions.fast },
};

// Icon pulse effect
export const iconPulse = {
    rest: { scale: 1 },
    animate: {
        scale: [1, 1.1, 1],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: easings.inOut,
        },
    },
};

// Progress bar fill
export const progressFill = (delay = 0) => ({
    initial: { width: 0, opacity: 0 },
    animate: {
        width: '100%',
        opacity: 1,
        transition: {
            width: { duration: 1, delay, ease: easings.out },
            opacity: { duration: 0.3, delay },
        },
    },
});

// Number counter animation helper
export const createCounterAnimation = (from, to, duration = 2) => {
    return {
        from,
        to,
        duration,
        ease: easings.out,
    };
};

// Path drawing animation (for SVG)
export const pathDraw = (delay = 0) => ({
    initial: { pathLength: 0, opacity: 0 },
    animate: {
        pathLength: 1,
        opacity: 1,
        transition: {
            pathLength: { duration: 1.5, delay, ease: easings.inOut },
            opacity: { duration: 0.3, delay },
        },
    },
});

// Particle entrance
export const particleEntrance = (index, total) => ({
    hidden: {
        opacity: 0,
        scale: 0,
        x: Math.random() * 100 - 50,
        y: Math.random() * 100 - 50,
    },
    visible: {
        opacity: 1,
        scale: 1,
        x: 0,
        y: 0,
        transition: {
            delay: (index / total) * 0.5,
            duration: 0.8,
            ease: easings.spring,
        },
    },
});

// Slide-specific transition selector
export const getSlideTransition = (type = 'spatial') => {
    return slideTransitions[type] || slideTransitions.spatial;
};

// Export utility function for custom variants
export const customVariant = (config) => ({
    hidden: config.hidden || { opacity: 0 },
    visible: config.visible || { opacity: 1 },
    ...config,
});
