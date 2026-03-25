"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function Contact() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.35 });

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [sent, setSent] = useState(false);

    const handleChange = (e) => {
        setForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setSent(false);

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            });

            if (res.ok) {
                setSent(true);
                setForm({
                    name: "",
                    email: "",
                    phone: "",
                    message: "",
                });
            } else {
                alert("Error sending message");
            }
        } catch (error) {
            alert("Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section
            ref={ref}
            id="contact"
            className="relative min-h-screen md:h-[85vh] overflow-hidden flex items-center justify-center px-5 md:px-6 py-24 md:py-0 bg-[var(--bg-main)]"
        >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_-40%,var(--radial-1),var(--radial-2),transparent_72%)] animate-[radialMove_12s_ease-in-out_infinite]" />

            <div className="relative z-10 w-full max-w-[1000px] grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-40 items-start">
                <motion.div
                    initial={{ opacity: 0, x: -80, filter: "blur(10px)" }}
                    animate={isInView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center md:text-left"
                >
                    <h2 className="text-[40px] tracking-[0.06em] uppercase text-[var(--text-soft)]">
                        Contact
                    </h2>

                    <p className="mt-8 max-w-[360px] text-[16px] md:text-[18px] leading-8 tracking-[0.08em] md:tracking-[0.1em] text-[var(--text-soft)] mx-auto md:mx-0">
                        Software engineer focused on building fast, visually refined and
                        user-centered web products.
                        <br />
                        <br />
                        Open for freelance projects, collaborations and innovative ideas.
                        <br />
                        <br />
                        Let’s build something meaningful.
                    </p>

                    <div className="mt-10">
                        <h3 className="text-[22px] tracking-[0.04em] text-[var(--text-soft)]">
                            Phone
                        </h3>
                        <p className="mt-2 text-[13px] tracking-[0.25em] text-[var(--text-soft)]">
                            +389 70 454 343
                        </p>
                    </div>

                    <div className="mt-7">
                        <h3 className="text-[22px] tracking-[0.04em] text-[var(--text-soft)]">
                            E-mail
                        </h3>
                        <p className="mt-2 text-[13px] tracking-[0.12em] md:tracking-[0.25em] text-[var(--text-soft)] break-all md:break-normal">
                            tasevmartin1@gmail.com
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 90, y: 20, filter: "blur(12px)" }}
                    animate={isInView ? { opacity: 1, x: 0, y: 0, filter: "blur(0px)" } : {}}
                    transition={{
                        duration: 1,
                        delay: 0.15,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="w-full max-w-[400px] mx-auto rounded-[20px] border border-white/10 bg-white/[0.02] px-7 py-6 shadow-[0_22px_55px_rgba(0,0,0,0.55)] backdrop-blur-[3px]"
                >
                    <h2 className="text-center text-[32px] md:text-[38px] tracking-[0.06em] uppercase text-[var(--text-soft)]">
                        Contact-Form
                    </h2>

                    <form onSubmit={handleSubmit} className="mt-10">
                        <div className="space-y-6">
                            <div>
                                <label className="block text-[13px] mb-2 text-[var(--text-soft)]">
                                    Name
                                </label>
                                <input
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    type="text"
                                    required
                                    className="w-full bg-transparent border-b border-[var(--text-soft)] pb-2 outline-none text-[var(--text-main)] focus:border-[var(--text-main)] transition"
                                />
                            </div>

                            <div>
                                <label className="block text-[13px] mb-2 text-[var(--text-soft)]">
                                    E-mail
                                </label>
                                <input
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    type="email"
                                    required
                                    className="w-full bg-transparent border-b border-[var(--text-soft)] pb-2 outline-none text-[var(--text-main)] focus:border-[var(--text-main)] transition"
                                />
                            </div>

                            <div>
                                <label className="block text-[13px] mb-2 text-[var(--text-soft)]">
                                    Phone
                                </label>
                                <input
                                    name="phone"
                                    value={form.phone}
                                    onChange={handleChange}
                                    type="text"
                                    className="w-full bg-transparent border-b border-[var(--text-soft)] pb-2 outline-none text-[var(--text-main)] focus:border-[var(--text-main)] transition"
                                />
                            </div>

                            <div>
                                <label className="block text-[13px] mb-2 text-[var(--text-soft)]">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    rows={2}
                                    required
                                    className="w-full bg-transparent border-b border-[var(--text-soft)] pb-2 outline-none text-[var(--text-main)] resize-none focus:border-[var(--text-main)] transition"
                                />
                            </div>
                        </div>

                        <motion.button
                            type="submit"
                            initial={{ opacity: 0, y: 18, scale: 0.96 }}
                            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                            transition={{
                                duration: 0.7,
                                delay: 0.4,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            disabled={loading}
                            className="mt-10 mx-auto block bg-[var(--text-soft)] text-[var(--bg-main)] px-4 py-2 text-[13px] tracking-[0.08em] shadow-[var(--button-shadow)] hover:scale-[1.03] transition disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                            {loading ? "SENDING..." : sent ? "SENT ✓" : "SEND MESSAGE"}
                        </motion.button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}