import React from 'react';
import { motion } from 'framer-motion';
import Slide from '../components/Slide';
import { MessageSquareQuote } from 'lucide-react';
import { staggerContainer, fadeInUp, scaleIn } from '../utils/animations';

const IntroTestimonials = () => {
    return (
        <Slide>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer(0.2)}
                className="w-full h-full flex flex-col items-center justify-center p-8"
            >
                <motion.div variants={scaleIn} className="mb-8 text-accent-primary">
                    <MessageSquareQuote size={80} strokeWidth={1.5} />
                </motion.div>

                <motion.h2 variants={fadeInUp} className="text-6xl font-bold mb-6 text-center">
                    Company <span className="gradient-text">Testimonials</span>
                </motion.h2>

                <motion.p variants={fadeInUp} className="text-2xl text-text-secondary text-center max-w-2xl font-light">
                    Hearing directly from the Elevate companies who are driving change.
                </motion.p>
            </motion.div>
        </Slide>
    );
};

export default IntroTestimonials;
