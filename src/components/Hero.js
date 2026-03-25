"use client";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center px-6 sm:px-10 md:px-16 bg-[var(--bg-main)]">
            <div className="absolute w-[140%] h-[140%] -top-[-0%] -left-[40%] bg-[radial-gradient(circle_at_40%_-100%,var(--radial-1),var(--radial-2),transparent_72%)] animate-radialFloat" />

            <div className="max-w-[1200px] mx-auto">

                {/* TOP LINE */}
                <motion.div
                    initial={{opacity: 0, y: 30}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 1}}
                    className="flex justify-start"
                >
                    <p className="text-[14px] sm:text-[14px] md:text-[18px] tracking-[0.5em] sm:tracking-[0.6em] uppercase text-[var(--text-soft)] ml-5 md:ml-15">
                        I AM
                    </p>
                </motion.div>

                {/* NAME */}
                <motion.h1
                    initial={{opacity: 0, filter: "blur(10px)"}}
                    animate={{opacity: 1, filter: "blur(0px)"}}
                    transition={{duration: 1.2}}
                    className="mt-6 text-[42px] sm:text-[56px] md:text-[72px] lg:text-[96px] tracking-[0.1em] uppercase text-[var(--text-soft)]"
                >
                    Martin Tasev
                </motion.h1>

                {/* BOTTOM RIGHT */}
                <motion.div
                    initial={{opacity: 0, x: 40}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: 1}}
                    className="mt-6 flex justify-end"
                >
                    <p className="text-[14px] sm:text-[14px] md:text-[18px] tracking-[0.5em] sm:tracking-[0.6em] uppercase text-[var(--text-soft)] mr-5 md:mr-15" >
                        Web Developer
                    </p>
                </motion.div>

            </div>
        </section>
    );
}