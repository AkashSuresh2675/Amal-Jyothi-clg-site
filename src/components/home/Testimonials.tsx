'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '@/lib/data';
import { SectionHeading } from '@/components/shared/PageTransition';

export default function Testimonials() {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setDirection(1);
            setCurrent((prev) => (prev + 1) % testimonials.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const navigate = (dir: number) => {
        setDirection(dir);
        setCurrent((prev) => {
            const next = prev + dir;
            if (next < 0) return testimonials.length - 1;
            if (next >= testimonials.length) return 0;
            return next;
        });
    };

    const t = testimonials[current];

    return (
        <section className="section-padding overflow-hidden">
            <div className="container-custom">
                <SectionHeading
                    badge="Student Voices"
                    title="What Our Alumni Say"
                    subtitle="Hear from the engineers who built their careers at AJCE"
                />

                <div className="max-w-4xl mx-auto relative">
                    <AnimatePresence mode="wait" custom={direction}>
                        <motion.div
                            key={current}
                            custom={direction}
                            initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
                            transition={{ duration: 0.5, ease: 'easeInOut' }}
                            className="text-center"
                        >
                            {/* Quote Icon */}
                            <div
                                className="w-16 h-16 mx-auto mb-8 rounded-2xl flex items-center justify-center"
                                style={{ background: 'var(--primary-50)', color: 'var(--primary)' }}
                            >
                                <Quote size={28} />
                            </div>

                            {/* Quote */}
                            <blockquote
                                className="text-xl md:text-2xl font-medium leading-relaxed font-[family-name:var(--font-body)]"
                                style={{ color: 'var(--text-primary)' }}
                            >
                                &ldquo;{t.quote}&rdquo;
                            </blockquote>

                            {/* Avatar & Info */}
                            <div className="mt-8 flex flex-col items-center gap-3">
                                <div
                                    className="w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold text-white font-[family-name:var(--font-display)]"
                                    style={{ background: 'linear-gradient(135deg, var(--primary), var(--primary-light))' }}
                                >
                                    {t.name.charAt(0)}
                                </div>
                                <div>
                                    <p className="text-base font-semibold font-[family-name:var(--font-display)]" style={{ color: 'var(--text-primary)' }}>
                                        {t.name}
                                    </p>
                                    <p className="text-sm font-[family-name:var(--font-accent)]" style={{ color: 'var(--text-muted)' }}>
                                        {t.role} at {t.company} · Batch of {t.batch}
                                    </p>
                                    <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>
                                        {t.department}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation */}
                    <div className="flex items-center justify-center gap-4 mt-10">
                        <button
                            onClick={() => navigate(-1)}
                            className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                            style={{ background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text-primary)' }}
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft size={18} />
                        </button>

                        {/* Dots */}
                        <div className="flex gap-2">
                            {testimonials.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                                    className="w-2.5 h-2.5 rounded-full transition-all duration-300"
                                    style={{
                                        background: i === current ? 'var(--primary)' : 'var(--border)',
                                        transform: i === current ? 'scale(1.3)' : 'scale(1)',
                                    }}
                                    aria-label={`Go to testimonial ${i + 1}`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={() => navigate(1)}
                            className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                            style={{ background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text-primary)' }}
                            aria-label="Next testimonial"
                        >
                            <ChevronRight size={18} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
