'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function CTABanner() {
    return (
        <section className="relative overflow-hidden">
            <div
                className="absolute inset-0 animate-gradient"
                style={{
                    background: 'linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 30%, #1e40af 60%, var(--primary-dark) 100%)',
                    backgroundSize: '300% 300%',
                }}
            />

            {/* Decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-10" style={{ background: 'var(--secondary-light)' }} />
                <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full opacity-10" style={{ background: 'var(--secondary)' }} />
            </div>

            <div className="container-custom relative z-10 py-20 md:py-28">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-white/10 text-white/90 border border-white/10 mb-6 font-[family-name:var(--font-accent)]">
                            <Sparkles size={14} /> Admissions Open 2026-27
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-white font-[family-name:var(--font-display)]"
                    >
                        Ready to Shape{' '}
                        <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #fcd34d, var(--secondary-light))' }}>
                            Your Future?
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mt-4 text-lg text-white/70 max-w-xl mx-auto"
                    >
                        Join over 5000 alumni who have launched successful careers from AJCE.
                        Apply now for the academic year 2026-27.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Link
                            href="/admissions"
                            className="group px-8 py-4 rounded-xl text-base font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 font-[family-name:var(--font-accent)]"
                            style={{ background: 'white', color: 'var(--primary-dark)' }}
                        >
                            Apply Now
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="/contact"
                            className="px-8 py-4 rounded-xl text-base font-semibold text-white bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300 font-[family-name:var(--font-accent)]"
                        >
                            Contact Us
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
