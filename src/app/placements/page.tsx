'use client';

import { motion } from 'framer-motion';
import { SectionHeading, AnimatedCard } from '@/components/shared/PageTransition';
import { topRecruiters, testimonials } from '@/lib/data';
import { TrendingUp, Users, IndianRupee, Building2, Briefcase, Award, Star } from 'lucide-react';

const placementStats = [
    { label: 'Placement Rate', value: '95%', icon: <TrendingUp size={24} /> },
    { label: 'Highest Package', value: '₹24 LPA', icon: <Star size={24} /> },
    { label: 'Average Package', value: '₹6.5 LPA', icon: <IndianRupee size={24} /> },
    { label: 'Recruiting Companies', value: '150+', icon: <Building2 size={24} /> },
    { label: 'Students Placed', value: '450+', icon: <Users size={24} /> },
    { label: 'Internship Offers', value: '300+', icon: <Briefcase size={24} /> },
];

export default function PlacementsPage() {
    return (
        <div>
            {/* Hero */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 gradient-bg opacity-95" />
                <div className="container-custom relative z-10 text-center">
                    <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 text-white/90 border border-white/10 mb-6 font-[family-name:var(--font-accent)]">
                        Career & Placements
                    </motion.span>
                    <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-white font-[family-name:var(--font-display)]">
                        Launch Your <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #fcd34d, var(--secondary-light))' }}>Career</span>
                    </motion.h1>
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
                        Industry-leading placement records with top companies recruiting from our campus every year
                    </motion.p>
                </div>
            </section>

            {/* Placement Stats */}
            <section className="section-padding" style={{ background: 'var(--background-alt)' }}>
                <div className="container-custom">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {placementStats.map((stat, i) => (
                            <AnimatedCard key={stat.label} delay={i * 0.08} className="text-center">
                                <div className="w-12 h-12 mx-auto mb-3 rounded-xl flex items-center justify-center" style={{ background: 'var(--primary-50)', color: 'var(--primary)' }}>
                                    {stat.icon}
                                </div>
                                <p className="text-xl font-bold font-[family-name:var(--font-display)]" style={{ color: 'var(--primary)' }}>{stat.value}</p>
                                <p className="text-xs mt-1 font-[family-name:var(--font-accent)]" style={{ color: 'var(--text-muted)' }}>{stat.label}</p>
                            </AnimatedCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* Top Recruiters */}
            <section className="section-padding">
                <div className="container-custom">
                    <SectionHeading badge="Our Partners" title="Top Recruiters" subtitle="Leading companies that recruit from AJCE campus" />
                    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 max-w-5xl mx-auto">
                        {topRecruiters.map((r, i) => (
                            <motion.div
                                key={r.name}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.03 }}
                                className="flex items-center justify-center p-4 rounded-xl aspect-square transition-all duration-200 hover:scale-105"
                                style={{ background: 'var(--surface)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}
                            >
                                <span className="text-sm font-bold text-center font-[family-name:var(--font-display)]" style={{ color: 'var(--text-primary)' }}>{r.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Placement Process */}
            <section className="section-padding" style={{ background: 'var(--background-alt)' }}>
                <div className="container-custom">
                    <SectionHeading badge="How it Works" title="Placement Process" />
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                        {[
                            { step: '01', title: 'Training', desc: 'Aptitude, soft skills, and technical training from 5th semester' },
                            { step: '02', title: 'Company Registration', desc: 'Companies register through our placement cell for campus drives' },
                            { step: '03', title: 'Selection Process', desc: 'Tests, group discussions, and technical & HR interviews' },
                            { step: '04', title: 'Offer Letter', desc: 'Selected students receive offer letters directly on campus' },
                        ].map((item, i) => (
                            <AnimatedCard key={item.step} delay={i * 0.1} className="text-center">
                                <span className="text-3xl font-bold font-[family-name:var(--font-display)]" style={{ color: 'var(--primary-50)' }}>{item.step}</span>
                                <h3 className="text-base font-semibold mt-2 font-[family-name:var(--font-display)]" style={{ color: 'var(--text-primary)' }}>{item.title}</h3>
                                <p className="text-sm mt-2" style={{ color: 'var(--text-muted)' }}>{item.desc}</p>
                            </AnimatedCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* Alumni Testimonials */}
            <section className="section-padding">
                <div className="container-custom">
                    <SectionHeading badge="Success Stories" title="From Campus to Career" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {testimonials.slice(0, 4).map((t, i) => (
                            <AnimatedCard key={t.id} delay={i * 0.1}>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold text-white flex-shrink-0 font-[family-name:var(--font-display)]"
                                        style={{ background: 'linear-gradient(135deg, var(--primary), var(--primary-light))' }}
                                    >
                                        {t.name.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="text-sm italic leading-relaxed" style={{ color: 'var(--text-secondary)' }}>&ldquo;{t.quote}&rdquo;</p>
                                        <div className="mt-3">
                                            <p className="text-sm font-semibold font-[family-name:var(--font-display)]" style={{ color: 'var(--text-primary)' }}>{t.name}</p>
                                            <p className="text-xs font-[family-name:var(--font-accent)]" style={{ color: 'var(--primary)' }}>{t.role} at {t.company} · Batch {t.batch}</p>
                                        </div>
                                    </div>
                                </div>
                            </AnimatedCard>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
