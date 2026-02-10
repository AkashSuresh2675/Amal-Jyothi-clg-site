'use client';

import { motion } from 'framer-motion';
import { SectionHeading, AnimatedCard } from '@/components/shared/PageTransition';
import { researchAreas } from '@/lib/data';
import { Beaker, FileText, FolderOpen, TrendingUp, Award, BookOpen } from 'lucide-react';

const researchStats = [
    { label: 'Research Papers', value: '500+', icon: <FileText size={24} /> },
    { label: 'Funded Projects', value: '57', icon: <FolderOpen size={24} /> },
    { label: 'Research Areas', value: '8', icon: <Beaker size={24} /> },
    { label: 'Patents Filed', value: '15', icon: <Award size={24} /> },
];

export default function ResearchPage() {
    return (
        <div>
            {/* Hero */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 gradient-bg opacity-95" />
                <div className="container-custom relative z-10 text-center">
                    <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 text-white/90 border border-white/10 mb-6 font-[family-name:var(--font-accent)]">
                        Research & Innovation
                    </motion.span>
                    <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-white font-[family-name:var(--font-display)]">
                        Pushing the Boundaries of <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #fcd34d, var(--secondary-light))' }}>Knowledge</span>
                    </motion.h1>
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
                        Driving innovation through cutting-edge research across multiple disciplines
                    </motion.p>
                </div>
            </section>

            {/* Research Stats */}
            <section className="section-padding" style={{ background: 'var(--background-alt)' }}>
                <div className="container-custom">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                        {researchStats.map((stat, i) => (
                            <AnimatedCard key={stat.label} delay={i * 0.1} className="text-center">
                                <div className="w-14 h-14 mx-auto mb-3 rounded-xl flex items-center justify-center" style={{ background: 'var(--primary-50)', color: 'var(--primary)' }}>
                                    {stat.icon}
                                </div>
                                <p className="text-2xl font-bold font-[family-name:var(--font-display)]" style={{ color: 'var(--primary)' }}>{stat.value}</p>
                                <p className="text-sm mt-1 font-[family-name:var(--font-accent)]" style={{ color: 'var(--text-muted)' }}>{stat.label}</p>
                            </AnimatedCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* Research Areas */}
            <section className="section-padding">
                <div className="container-custom">
                    <SectionHeading badge="Focus Areas" title="Research Domains" subtitle="Explore our diverse research areas spanning multiple engineering disciplines" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                        {researchAreas.map((area, i) => (
                            <AnimatedCard key={area.name} delay={i * 0.08}>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'var(--primary-50)', color: 'var(--primary)' }}>
                                        <Beaker size={22} />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-base font-semibold font-[family-name:var(--font-display)]" style={{ color: 'var(--text-primary)' }}>{area.name}</h3>
                                        <div className="flex items-center gap-4 mt-2">
                                            <div className="flex items-center gap-1.5">
                                                <BookOpen size={14} style={{ color: 'var(--text-muted)' }} />
                                                <span className="text-sm" style={{ color: 'var(--text-muted)' }}>{area.papers} Papers</span>
                                            </div>
                                            <div className="flex items-center gap-1.5">
                                                <FolderOpen size={14} style={{ color: 'var(--text-muted)' }} />
                                                <span className="text-sm" style={{ color: 'var(--text-muted)' }}>{area.projects} Projects</span>
                                            </div>
                                        </div>
                                        {/* Progress Bar */}
                                        <div className="mt-3 w-full h-2 rounded-full overflow-hidden" style={{ background: 'var(--background-alt)' }}>
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${Math.min(area.papers / 85 * 100, 100)}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: i * 0.1 }}
                                                className="h-full rounded-full"
                                                style={{ background: 'linear-gradient(90deg, var(--primary), var(--primary-light))' }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </AnimatedCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* Innovation Hub */}
            <section className="section-padding" style={{ background: 'var(--primary-dark)' }}>
                <div className="container-custom text-center">
                    <SectionHeading badge="Incubation" title="Innovation Hub" subtitle="Fostering entrepreneurship and startup culture among students" light />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        {[
                            { title: 'Startups Incubated', value: '12+', desc: 'Student-led ventures launched from campus' },
                            { title: 'Industry Mentors', value: '25+', desc: 'Experienced professionals guiding innovation' },
                            { title: 'Funded Projects', value: '₹2Cr+', desc: 'Total funding received for research projects' },
                        ].map((item, i) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-6 rounded-2xl bg-white/5 border border-white/10"
                            >
                                <p className="text-3xl font-bold text-white font-[family-name:var(--font-display)]">{item.value}</p>
                                <h4 className="text-sm font-semibold text-white/90 mt-2 font-[family-name:var(--font-display)]">{item.title}</h4>
                                <p className="text-xs text-white/50 mt-1">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
