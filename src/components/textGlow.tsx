import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import './styles.css'

export default function ScrollGlowText({ children }: any) {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 1 });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [isInView, controls]);

    return (
        <motion.h1
            ref={ref}
            variants={{
                hidden: { opacity: 0.5, filter: "brightness(0.7)" },
                visible: { opacity: 1, filter: "brightness(1.5)" },
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="relative font-extrabold text-transparent bg-clip-text 
                 bg-linear-to-r from-gray-400 via-white to-gray-400 
                 bg-size-[200%_100%] animate-glow-move"
            style={{
                textShadow:
                    "0 0 10px rgba(255,255,255,0.4), 0 0 20px rgba(255,255,255,0.2)",
            }}
        >
            {children}
        </motion.h1>
    );
}
