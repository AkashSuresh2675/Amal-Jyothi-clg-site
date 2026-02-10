'use client';

import { motion } from 'framer-motion';
import { SectionHeading, AnimatedCard } from '@/components/shared/PageTransition';
import { leadership, accreditations } from '@/lib/data';
import { Target, Eye, Award, Users, BookOpen, History, Shield, Star } from 'lucide-react';

const timelineEvents = [
    { year: '2001', title: 'Foundation', description: 'AJCE established under the patronage of the Diocese of Kanjirapally.' },
    { year: '2004', title: 'First Graduation', description: 'First batch of engineers graduate with distinction.' },
    { year: '2008', title: 'NBA Accreditation', description: 'Multiple programs receive NBA accreditation.' },
    { year: '2012', title: 'Research Wing', description: 'Dedicated research center established for advanced studies.' },
    { year: '2016', title: 'NAAC A Grade', description: 'Awarded A grade by National Assessment and Accreditation Council.' },
    { year: '2020', title: 'Innovation Hub', description: 'Incubation center launched for student startups.' },
    { year: '2024', title: 'NAAC A++', description: 'Upgraded to A++ grade, reflecting academic excellence.' },
];

export default function AboutPage() {
    return (
        <div>
            {/* Hero Banner */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 gradient-bg opacity-95" />
                <div className="absolute inset-0 opacity-[0.03]" style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                }} />
                <div className="container-custom relative z-10 text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 text-white/90 border border-white/10 mb-6 font-[family-name:var(--font-accent)]"
                    >
                        About AJCE
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-white font-[family-name:var(--font-display)]"
                    >
                        A Legacy of Academic
                        <br />
                        <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #fcd34d, var(--secondary-light))' }}>
                            Excellence
                        </span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mt-4 text-lg text-white/70 max-w-2xl mx-auto"
                    >
                        Established in 2001, Amal Jyothi College of Engineering has been shaping the future of engineering education in Kerala.
                    </motion.p>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <AnimatedCard>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'var(--primary-50)', color: 'var(--primary)' }}>
                                    <Eye size={24} />
                                </div>
                                <h3 className="text-xl font-[family-name:var(--font-display)]" style={{ color: 'var(--text-primary)' }}>Our Vision</h3>
                            </div>
                            <p style={{ color: 'var(--text-secondary)' }}>
                                To be a globally recognized institution of excellence in engineering education, fostering innovation,
                                ethical values, and sustainable development for the betterment of society.
                            </p>
                        </AnimatedCard>
                        <AnimatedCard delay={0.1}>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'var(--secondary-50)', color: 'var(--secondary)' }}>
                                    <Target size={24} />
                                </div>
                                <h3 className="text-xl font-[family-name:var(--font-display)]" style={{ color: 'var(--text-primary)' }}>Our Mission</h3>
                            </div>
                            <p style={{ color: 'var(--text-secondary)' }}>
                                To provide quality technical education, promote research and innovation, develop skilled professionals
                                with ethical values, and contribute to the socio-economic development of the nation.
                            </p>
                        </AnimatedCard>
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="section-padding" style={{ background: 'var(--background-alt)' }}>
                <div className="container-custom">
                    <SectionHeading badge="Our Journey" title="25+ Years of Excellence" subtitle="Key milestones in AJCE's journey of academic excellence" />
                    <div className="relative max-w-3xl mx-auto">
                        {/* Vertical Line */}
                        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5" style={{ background: 'var(--border)' }} />

                        {timelineEvents.map((event, i) => (
                            <motion.div
                                key={event.year}
                                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className={`relative flex items-center mb-10 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                            >
                                {/* Dot */}
                                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full -translate-x-1/2 z-10" style={{ background: 'var(--primary)' }} />

                                {/* Content */}
                                <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                                    <div className="rounded-xl p-5" style={{ background: 'var(--surface)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}>
                                        <span className="text-sm font-bold font-[family-name:var(--font-accent)]" style={{ color: 'var(--primary)' }}>{event.year}</span>
                                        <h4 className="text-base font-semibold mt-1 font-[family-name:var(--font-display)]" style={{ color: 'var(--text-primary)' }}>{event.title}</h4>
                                        <p className="text-sm mt-1" style={{ color: 'var(--text-muted)' }}>{event.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Leadership */}
            <section className="section-padding">
                <div className="container-custom">
                    <SectionHeading badge="Leadership" title="Our Leadership Team" subtitle="Guided by visionary leaders committed to academic excellence" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {leadership.map((leader, i) => (
                            <AnimatedCard key={leader.name} delay={i * 0.1} className="text-center">
                                <div className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center text-2xl font-bold text-white font-[family-name:var(--font-display)]"
                                    style={{ background: 'linear-gradient(135deg, var(--primary), var(--primary-light))' }}
                                >
                                    {leader.name.charAt(0)}
                                </div>
                                <h4 className="text-base font-semibold font-[family-name:var(--font-display)]" style={{ color: 'var(--text-primary)' }}>{leader.name}</h4>
                                <p className="text-sm font-[family-name:var(--font-accent)]" style={{ color: 'var(--primary)' }}>{leader.title}</p>
                                <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>{leader.qualification}</p>
                            </AnimatedCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* Accreditations */}
            <section className="section-padding" style={{ background: 'var(--background-alt)' }}>
                <div className="container-custom">
                    <SectionHeading badge="Recognition" title="Accreditations & Affiliations" />
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                        {accreditations.map((acc, i) => (
                            <AnimatedCard key={acc.name} delay={i * 0.1} className="text-center">
                                <div className="w-14 h-14 mx-auto mb-3 rounded-xl flex items-center justify-center" style={{ background: 'var(--primary-50)', color: 'var(--primary)' }}>
                                    <Shield size={28} />
                                </div>
                                <h4 className="text-lg font-bold font-[family-name:var(--font-display)]" style={{ color: 'var(--text-primary)' }}>{acc.name}</h4>
                                <span className="inline-block mt-1 px-3 py-0.5 rounded-full text-xs font-semibold font-[family-name:var(--font-accent)]" style={{ background: 'var(--primary-50)', color: 'var(--primary)' }}>
                                    {acc.grade}
                                </span>
                                <p className="text-xs mt-2" style={{ color: 'var(--text-muted)' }}>{acc.description}</p>
                            </AnimatedCard>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
