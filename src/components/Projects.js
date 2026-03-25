"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

export default function Projects() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.35 });

    const projects = [
        {
            title: "Tasev Ceramics",
            desc: "Modern portfolio website for ceramic installation services with premium visuals and clean interaction.",
            mainImage: "/projects/project-main-1.png",
            leftImage: "/projects/project-left-1.png",
            rightImage: "/projects/project-right-1.png",
            link: "https://tasev-ceramics-site.vercel.app/",
        },
        {
            title: "Tasev Ceramics",
            desc: "Modern portfolio website for ceramic installation services with premium visuals and clean interaction.",
            mainImage: "/projects/project-main-1.png",
            leftImage: "/projects/project-left-1.png",
            rightImage: "/projects/project-right-1.png",
            link: "https://tasev-ceramics-site.vercel.app/",
        },
        {
            title: "Tasev Ceramics",
            desc: "Modern portfolio website for ceramic installation services with premium visuals and clean interaction.",
            mainImage: "/projects/project-main-1.png",
            leftImage: "/projects/project-left-1.png",
            rightImage: "/projects/project-right-1.png",
            link: "https://tasev-ceramics-site.vercel.app/",
        },
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    const prevIndex = (activeIndex - 1 + projects.length) % projects.length;
    const nextIndex = (activeIndex + 1) % projects.length;

    const activeProject = projects[activeIndex];
    const leftProject = projects[prevIndex];
    const rightProject = projects[nextIndex];

    const handlePrev = () => {
        setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
    };

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % projects.length);
    };

    const handleDragEnd = (_, info) => {
        const swipeThreshold = 60;

        if (info.offset.x < -swipeThreshold) {
            handleNext();
        } else if (info.offset.x > swipeThreshold) {
            handlePrev();
        }
    };

    return (
        <section
            ref={sectionRef}
            id="projects"
            className="relative min-h-[85vh] md:min-h-screen overflow-hidden bg-[var(--bg-main)] flex items-center justify-center px-4 md:px-6"
        >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_140%,var(--radial-1),var(--radial-2),transparent_72%)] animate-[radialMove_12s_ease-in-out_infinite]" />

            <div className="relative z-10 w-full max-w-[1200px] mx-auto flex flex-col items-center justify-center">
                {/* arrows desktop only */}
                <motion.button
                    initial={{ opacity: 0, x: -70, filter: "blur(10px)" }}
                    animate={isInView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
                    transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                    onClick={handlePrev}
                    className="absolute left-0 top-[34%] -translate-y-1/2 hidden md:flex h-14 w-14 rounded-full border border-[var(--social-line)] bg-white/10 backdrop-blur-md text-[var(--text-soft)] text-3xl items-center justify-center hover:bg-white/15 hover:scale-[1.05] transition"
                >
                    ‹
                </motion.button>

                <motion.button
                    initial={{ opacity: 0, x: 70, filter: "blur(10px)" }}
                    animate={isInView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
                    transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                    onClick={handleNext}
                    className="absolute right-0 top-[34%] -translate-y-1/2 hidden md:flex h-14 w-14 rounded-full border border-[var(--social-line)] bg-white/10 backdrop-blur-md text-[var(--text-soft)] text-3xl items-center justify-center hover:bg-white/15 hover:scale-[1.05] transition"
                >
                    ›
                </motion.button>

                <div className="relative h-[210px] sm:h-[240px] md:h-[320px] w-full max-w-[860px] flex items-center justify-center">
                    {/* side previews desktop only */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`left-${prevIndex}-${activeIndex}`}
                            initial={{ opacity: 0, x: -60, filter: "blur(12px)" }}
                            animate={{ opacity: 0.55, x: 0, filter: "blur(2px)" }}
                            exit={{ opacity: 0, x: -40, filter: "blur(10px)" }}
                            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                            className="absolute left-[8%] top-[2%] hidden md:block h-[210px] w-[170px] rounded-[14px] overflow-hidden scale-95"
                        >
                            <img
                                src={leftProject.leftImage}
                                alt="Project preview left"
                                className="h-full w-full object-cover"
                            />
                        </motion.div>
                    </AnimatePresence>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`right-${nextIndex}-${activeIndex}`}
                            initial={{ opacity: 0, x: 60, filter: "blur(12px)" }}
                            animate={{ opacity: 0.35, x: 0, filter: "blur(2px)" }}
                            exit={{ opacity: 0, x: 40, filter: "blur(10px)" }}
                            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                            className="absolute right-[8%] top-[2%] hidden md:block h-[210px] w-[170px] rounded-[14px] overflow-hidden scale-95"
                        >
                            <img
                                src={rightProject.rightImage}
                                alt="Project preview right"
                                className="h-full w-full object-cover"
                            />
                        </motion.div>
                    </AnimatePresence>

                    {/* main card swipeable on mobile */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={0.12}
                            onDragEnd={handleDragEnd}
                            initial={{ opacity: 0, y: 40, scale: 0.92, filter: "blur(10px)" }}
                            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                            exit={{ opacity: 0, y: -20, scale: 0.96, filter: "blur(8px)" }}
                            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                            className="relative z-10 h-[150px] w-[280px] sm:h-[170px] sm:w-[320px] md:h-[190px] md:w-[420px] rounded-[20px] overflow-hidden border border-white/10 bg-white/5 shadow-[0_20px_80px_rgba(0,0,0,0.45)] cursor-grab active:cursor-grabbing"
                        >
                            <img
                                src={activeProject.mainImage}
                                alt={activeProject.title}
                                className="h-full w-full object-cover opacity-65"
                            />
                            <div className="absolute inset-0 bg-black/25" />
                        </motion.div>
                    </AnimatePresence>
                </div>

                <AnimatePresence mode="wait">
                    <motion.p
                        key={`desc-${activeIndex}`}
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -16 }}
                        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                        className="mt-5 max-w-[720px] px-2 text-center text-[11px] md:text-[14px] leading-6 md:leading-8 tracking-[0.12em] md:tracking-[0.18em] text-[var(--text-soft)]"
                    >
                        {activeProject.desc}
                    </motion.p>
                </AnimatePresence>

                <AnimatePresence mode="wait">
                    <motion.h2
                        key={`title-${activeIndex}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -14 }}
                        transition={{ duration: 0.45, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
                        className="mt-4 text-[26px] sm:text-[30px] md:text-[54px] leading-none tracking-[0.04em] text-[var(--text-soft)]"
                    >
                        {activeProject.title}
                    </motion.h2>
                </AnimatePresence>

                <AnimatePresence mode="wait">
                    <motion.a
                        key={`button-${activeIndex}`}
                        href={activeProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 18, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.98 }}
                        transition={{ duration: 0.45, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                        className="mt-6 inline-flex items-center justify-center bg-[var(--text-soft)] text-[var(--bg-main)] px-4 py-2 text-[14px] tracking-[0.08em] shadow-[var(--button-shadow)] hover:scale-[1.02] transition"
                    >
                        VIEW PROJECT
                    </motion.a>
                </AnimatePresence>
            </div>
        </section>
    );
}