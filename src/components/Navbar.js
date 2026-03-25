"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const closeMenu = () => setOpen(false);

    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    return (
        <>
            <header className="fixed top-0 left-0 z-[60] w-full px-5 md:px-8 py-5 md:py-8 flex items-center justify-between">
                <h1 className="text-2xl md:text-3xl tracking-wider font-semibold text-[var(--text-main)]">
                    TASEV
                </h1>

                <nav className="hidden md:flex items-center gap-10 text-sm tracking-[0.35em] uppercase text-[var(--text-main)]">
                    <a href="#projects" className="hover:opacity-70 transition">
                        Projects
                    </a>
                    <a href="#contact" className="hover:opacity-70 transition">
                        Contact
                    </a>
                </nav>
            </header>

            <button
                onClick={() => setOpen((prev) => !prev)}
                className="md:hidden fixed right-5 top-5 z-[100] flex h-10 w-10 items-center justify-center text-[var(--text-main)]"
                aria-label="Toggle menu"
            >
        <span
            className={`absolute h-[2px] w-6 bg-current transition-all duration-300 ${
                open ? "rotate-45" : "-translate-y-2"
            }`}
        />
                <span
                    className={`absolute h-[2px] w-6 bg-current transition-all duration-300 ${
                        open ? "opacity-0" : "opacity-100"
                    }`}
                />
                <span
                    className={`absolute h-[2px] w-6 bg-current transition-all duration-300 ${
                        open ? "-rotate-45" : "translate-y-2"
                    }`}
                />
            </button>

            <AnimatePresence>
                {open && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={closeMenu}
                            className="fixed inset-0 z-[70] bg-black/40 backdrop-blur-sm md:hidden"
                        />

                        <motion.div
                            initial={{ x: "100%", opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: "100%", opacity: 0 }}
                            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                            className="fixed top-0 right-0 z-[80] h-screen w-[45%] max-w-[340px] md:hidden border-l border-white/10 bg-[var(--bg-main)] px-8 pt-28 pb-10 shadow-[-20px_0_60px_rgba(0,0,0,0.25)]"
                        >
                            <div className="flex flex-col gap-8 text-[15px] uppercase tracking-[0.25em] text-[var(--text-main)]">
                                <a href="#projects" onClick={closeMenu} className="hover:opacity-70 transition">
                                    Projects
                                </a>
                                <a href="#contact" onClick={closeMenu} className="hover:opacity-70 transition">
                                    Contact
                                </a>
                            </div>

                            <div className="mt-10 flex items-center gap-5 text-[var(--text-main)]">
                                <a
                                    href="https://github.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="opacity-70 hover:opacity-100 transition"
                                    aria-label="GitHub"
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" stroke="currentColor" fill="none">
                                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77 5.44 5.44 0 0 0 3.5 8.52c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" strokeWidth="2" />
                                    </svg>
                                </a>

                                <a
                                    href="https://linkedin.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="opacity-70 hover:opacity-100 transition"
                                    aria-label="LinkedIn"
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" stroke="currentColor" fill="none">
                                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" strokeWidth="2" />
                                        <rect width="4" height="12" x="2" y="9" strokeWidth="2" />
                                        <circle cx="4" cy="4" r="2" strokeWidth="2" />
                                    </svg>
                                </a>

                                <a
                                    href="https://instagram.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="opacity-70 hover:opacity-100 transition"
                                    aria-label="Instagram"
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" stroke="currentColor" fill="none">
                                        <rect width="20" height="20" x="2" y="2" rx="5" strokeWidth="2" />
                                        <path d="M16 11.37a4 4 0 1 1-4.63-4.63A4 4 0 0 1 16 11.37z" strokeWidth="2" />
                                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" strokeWidth="2" />
                                    </svg>
                                </a>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}