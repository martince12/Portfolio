"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ScrollIndicator() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight =
                document.documentElement.scrollHeight - window.innerHeight;

            if (docHeight <= 0) {
                setProgress(0);
                return;
            }

            const value = scrollTop / docHeight;
            setProgress(value);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const trackHeight = 240;
    const labelHeight = 120;
    const maxTravel = trackHeight - labelHeight;

    const topPosition = progress * maxTravel;

    return (
        <motion.div
            initial={{ x: 80, opacity: 0, filter: "blur(8px)" }}
            animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
            transition={{
                duration: 0.9,
                delay: 0.6,
                ease: [0.22, 1, 0.36, 1],
            }}
            className="fixed right-8 bottom-[3vh] z-50 hidden md:flex items-center justify-center"
        >
            <div className="relative h-[220px] w-[40px] flex justify-center">
                {/* vertical line */}
                <div className="absolute top-0 h-full w-px bg-[var(--social-line)]" />

                {/* moving SCROLL label */}
                <div
                    className="absolute left-1/2 -translate-x-1/2 transition-all duration-300 ease-out"
                    style={{ top: `${topPosition}px` }}
                >
                    <div className="bg-[var(--bg-main)] px-1 py-3">
            <span
                className="block text-[13px] uppercase tracking-[0.5em] text-[var(--text-soft)]"
                style={{
                    writingMode: "vertical-rl",
                    transform: "rotate(0deg)",
                }}
            >
              SCROLL
            </span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}