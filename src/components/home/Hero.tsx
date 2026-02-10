'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0">
                {/* Gradient base */}
                <div
                    className="absolute inset-0 animate-gradient"
                    style={{
                        background: 'linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 25%, #1a365d 50%, var(--primary-dark) 75%, #0c1929 100%)',
                        backgroundSize: '400% 400%',
                    }}
                />

                {/* Animated orbs */}
                <motion.div
                    animate={{
                        x: [0, 100, -50, 0],
                        y: [0, -80, 60, 0],
                        scale: [1, 1.2, 0.8, 1],
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20"
                    style={{ background: 'radial-gradient(circle, var(--secondary) 0%, transparent 70%)' }}
                />
                <motion.div
                    animate={{
                        x: [0, -120, 80, 0],
                        y: [0, 60, -100, 0],
                        scale: [1, 0.8, 1.3, 1],
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-15"
                    style={{ background: 'radial-gradient(circle, #60a5fa 0%, transparent 70%)' }}
                />
                <motion.div
                    animate={{
                        x: [0, 60, -80, 0],
                        y: [0, -40, 80, 0],
                    }}
                    transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full opacity-10"
                    style={{ background: 'radial-gradient(circle, var(--secondary-light) 0%, transparent 70%)' }}
                />

                {/* Grid pattern overlay */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                        backgroundSize: '60px 60px',
                    }}
                />
            </div>

            {/* Content */}
            <div className="container-custom relative z-10 text-center px-4">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium bg-white/10 text-white/90 backdrop-blur-sm border border-white/10 font-[family-name:var(--font-accent)]">
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                        NAAC A++ Accredited Institution
                    </span>
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-8 text-white font-[family-name:var(--font-display)] leading-[1.1]"
                    style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
                >
                    Amal Jyothi College
                    <br />
                    <span className="relative">
                        of{' '}
                        <span
                            className="bg-clip-text text-transparent"
                            style={{ backgroundImage: 'linear-gradient(135deg, var(--secondary-light), #fcd34d, var(--secondary))' }}
                        >
                            Engineering
                        </span>
                    </span>
                </motion.h1>

                {/* Tagline */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-6 text-lg md:text-xl text-white/70 max-w-2xl mx-auto font-[family-name:var(--font-body)]"
                >
                    Where tradition meets innovation. Shaping the next generation of engineers,
                    leaders, and visionaries since 2001.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Link
                        href="/academics"
                        className="group px-8 py-4 rounded-xl text-base font-semibold text-white transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 font-[family-name:var(--font-accent)]"
                        style={{ background: 'linear-gradient(135deg, var(--secondary), var(--secondary-dark))' }}
                    >
                        Explore Programs
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                        href="/admissions"
                        className="px-8 py-4 rounded-xl text-base font-semibold text-white bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 font-[family-name:var(--font-accent)]"
                    >
                        Apply Now
                    </Link>
                </motion.div>

                {/* Quick Stats Preview */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                    className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
                >
                    {[
                        { value: '25+', label: 'Years' },
                        { value: '5000+', label: 'Alumni' },
                        { value: '95%', label: 'Placements' },
                        { value: '9', label: 'Departments' },
                    ].map((stat, i) => (
                        <div key={stat.label} className="text-center">
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.5, delay: 1.2 + i * 0.1, type: 'spring' }}
                            >
                                <span className="text-2xl md:text-3xl font-bold text-white font-[family-name:var(--font-display)]">
                                    {stat.value}
                                </span>
                                <p className="text-xs text-white/50 mt-1 font-[family-name:var(--font-accent)] uppercase tracking-wider">
                                    {stat.label}
                                </p>
                            </motion.div>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    className="flex flex-col items-center gap-2 cursor-pointer"
                    onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
                >
                    <span className="text-xs text-white/40 font-[family-name:var(--font-accent)] uppercase tracking-wider">
                        Scroll to explore
                    </span>
                    <ChevronDown size={20} className="text-white/40" />
                </motion.div>
            </motion.div>
        </section>
    );
}
