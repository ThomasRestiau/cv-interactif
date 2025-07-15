import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import React, { useEffect } from 'react';

interface FadeInProps {
    children: React.ReactNode;
    delay?: number;
}

export default function FadeIn({ children, delay = 0.3 }: FadeInProps) {
    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.2 });

    useEffect(() => {
        if (inView) {
            controls.start('visible').then(r => r);
        } else {
            controls.start('hidden').then(r => r);
        }
    }, [controls, inView]);

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5, delay }}
            variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: -40 }
            }}
        >
            {children}
        </motion.div>
    );
}
