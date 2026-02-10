'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { SectionHeading, AnimatedCard } from '@/components/shared/PageTransition';
import { admissionSteps } from '@/lib/data';
import { ArrowRight, Calendar, CheckCircle2, FileText, GraduationCap, IndianRupee, Clock } from 'lucide-react';

const eligibility = [
    { program: 'B.Tech', criteria: 'Pass in 10+2 with Physics, Chemistry & Mathematics with minimum 50% marks. Valid KEAM score.' },
    { program: 'M.Tech', criteria: 'B.Tech/B.E. degree in relevant discipline with minimum 60% marks. Valid GATE score preferred.' },
    { program: 'MCA', criteria: 'Bachelor\'s degree with Mathematics/Statistics/Computer Science. Minimum 50% marks.' },
];

const importantDates = [
    { event: 'Application Opens', date: 'March 1, 2026' },
    { event: 'KEAM Exam', date: 'April 2026' },
    { event: 'Counselling Begins', date: 'June 2026' },
    { event: 'Classes Commence', date: 'August 2026' },
];

export default function AdmissionsPage() {
    return (
        <div>
            {/* Hero */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 animate-gradient" style={{
                    background: 'linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 30%, #1e40af 60%, var(--primary-dark) 100%)',
                    backgroundSize: '300% 300%',
                }} />
                <div className="container-custom relative z-10 text-center">
                    <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 text-white/90 border border-white/10 mb-6 font-[family-name:var(--font-accent)]">
                        Admissions 2026-27
                    </motion.span>
                    <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-white font-[family-name:var(--font-display)]">
                        Begin Your <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #fcd34d, var(--secondary-light))' }}>Journey</span>
                    </motion.h1>
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
                        Take the first step towards a world-class engineering education
                    </motion.p>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                        <a href="#apply" className="inline-flex items-center gap-2 mt-8 px-8 py-4 rounded-xl text-base font-semibold bg-white text-[var(--primary-dark)] hover:bg-white/90 transition-all shadow-lg font-[family-name:var(--font-accent)]">
                            Start Application <ArrowRight size={18} />
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Admission Process Steps */}
            <section className="section-padding">
                <div className="container-custom">
                    <SectionHeading badge="How to Apply" title="Admission Process" subtitle="Follow these simple steps to secure your seat at AJCE" />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {admissionSteps.map((step, i) => (
                            <AnimatedCard key={step.step} delay={i * 0.1}>
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white font-[family-name:var(--font-display)]" style={{ background: 'linear-gradient(135deg, var(--primary), var(--primary-light))' }}>
                                        {step.step}
                                    </div>
                                    <h3 className="text-base font-semibold font-[family-name:var(--font-display)]" style={{ color: 'var(--text-primary)' }}>
                                        {step.title}
                                    </h3>
                                </div>
                                <p className="text-sm pl-[52px]" style={{ color: 'var(--text-muted)' }}>{step.description}</p>
                            </AnimatedCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* Eligibility */}
            <section className="section-padding" style={{ background: 'var(--background-alt)' }}>
                <div className="container-custom">
                    <SectionHeading badge="Requirements" title="Eligibility Criteria" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {eligibility.map((e, i) => (
                            <AnimatedCard key={e.program} delay={i * 0.1}>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'var(--primary-50)', color: 'var(--primary)' }}>
                                        <GraduationCap size={20} />
                                    </div>
                                    <h3 className="text-lg font-bold font-[family-name:var(--font-display)]" style={{ color: 'var(--primary)' }}>{e.program}</h3>
                                </div>
                                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{e.criteria}</p>
                            </AnimatedCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* Important Dates */}
            <section className="section-padding">
                <div className="container-custom">
                    <SectionHeading badge="Timeline" title="Important Dates" />
                    <div className="max-w-2xl mx-auto space-y-4">
                        {importantDates.map((d, i) => (
                            <motion.div
                                key={d.event}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-center gap-4 p-4 rounded-xl"
                                style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
                            >
                                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'var(--secondary-50)', color: 'var(--secondary)' }}>
                                    <Calendar size={18} />
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-sm font-semibold font-[family-name:var(--font-display)]" style={{ color: 'var(--text-primary)' }}>{d.event}</h4>
                                </div>
                                <span className="text-sm font-medium font-[family-name:var(--font-accent)]" style={{ color: 'var(--primary)' }}>{d.date}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section id="apply" className="section-padding" style={{ background: 'var(--primary-dark)' }}>
                <div className="container-custom text-center">
                    <h2 className="text-white font-[family-name:var(--font-display)]">Ready to Apply?</h2>
                    <p className="mt-4 text-white/70 max-w-xl mx-auto">Download the application form or contact our admissions office for assistance.</p>
                    <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button className="px-8 py-4 rounded-xl text-base font-semibold bg-white text-[var(--primary-dark)] hover:bg-white/90 transition-all shadow-lg font-[family-name:var(--font-accent)] flex items-center gap-2">
                            <FileText size={18} /> Download Application
                        </button>
                        <Link href="/contact" className="px-8 py-4 rounded-xl text-base font-semibold text-white bg-white/10 border border-white/20 hover:bg-white/20 transition-all font-[family-name:var(--font-accent)]">
                            Contact Admissions
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
