"use client";

import { motion } from "framer-motion";

export default function Socials() {
    return (
        <motion.div
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.6,
            }}
            className="fixed bottom-0 left-[52px] z-50 hidden md:flex flex-col items-center gap-6 text-[var(--social-color)] transition-colors duration-500"        >
            <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-60 hover:opacity-100 transition hover:translate-x-1"
            >
                {/* github svg */}
                <svg width="20" height="20" viewBox="0 0 24 24" stroke="currentColor" fill="none">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77 5.44 5.44 0 0 0 3.5 8.52c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" strokeWidth="2"/>
                </svg>
            </a>

            <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-60 hover:opacity-100 transition hover:translate-x-1"
            >
                {/* linkedin svg */}
                <svg width="20" height="20" viewBox="0 0 24 24" stroke="currentColor" fill="none">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" strokeWidth="2"/>
                    <rect width="4" height="12" x="2" y="9" strokeWidth="2"/>
                    <circle cx="4" cy="4" r="2" strokeWidth="2"/>
                </svg>
            </a>

            <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-60 hover:opacity-100 transition hover:translate-x-1"
            >
                {/* instagram svg */}
                <svg width="20" height="20" viewBox="0 0 24 24" stroke="currentColor" fill="none">
                    <rect width="20" height="20" x="2" y="2" rx="5" strokeWidth="2"/>
                    <path d="M16 11.37a4 4 0 1 1-4.63-4.63A4 4 0 0 1 16 11.37z" strokeWidth="2"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" strokeWidth="2"/>
                </svg>
            </a>

            <div className="w-px h-16 mt-10 bg-[var(--social-line)] transition-colors duration-500"></div>
        </motion.div>
    );
}