'use client';

import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { departments } from '@/lib/data';
import { AnimatedCard, SectionHeading } from '@/components/shared/PageTransition';
import { ArrowLeft, FlaskConical, Users, Award, BookOpen, Microscope } from 'lucide-react';

export default function DepartmentPage() {
    const params = useParams();
    const slug = params.department as string;
    const dept = departments.find((d) => d.slug === slug);

    if (!dept) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold font-[family-name:var(--font-display)]" style={{ color: 'var(--text-primary)' }}>Department Not Found</h1>
                    <Link href="/academics" className="mt-4 inline-flex items-center gap-2 text-sm font-[family-name:var(--font-accent)]" style={{ color: 'var(--primary)' }}>
                        <ArrowLeft size={16} /> Back to Academics
                    </Link>
                </div>
            </div>
        );
    }

    const levelLabels: Record<string, string> = { btech: 'B.Tech', mtech: 'M.Tech', mca: 'MCA' };

    return (
        <div>
            {/* Hero */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 gradient-bg opacity-95" />
                <div className="container-custom relative z-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <Link href="/academics" className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white/90 transition-colors mb-6 font-[family-name:var(--font-accent)]">
                            <ArrowLeft size={16} /> Back to All Programs
                        </Link>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/10 text-white/90 font-[family-name:var(--font-accent)]">
                            {levelLabels[dept.level]}
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/10 text-white/90 font-[family-name:var(--font-accent)]">
                            {dept.shortName}
                        </span>
                    </motion.div>
                    <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="text-white font-[family-name:var(--font-display)]" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
                        {dept.name}
                    </motion.h1>
                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-3 text-lg text-white/70 max-w-3xl">
                        {dept.tagline}
                    </motion.p>
                </div>
            </section>

            {/* About */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2">
                            <SectionHeading badge="Overview" title="About The Program" centered={false} />
                            <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{dept.description}</p>

                            {/* Highlights */}
                            <div className="mt-8">
                                <h3 className="text-lg font-semibold mb-4 font-[family-name:var(--font-display)]" style={{ color: 'var(--text-primary)' }}>Program Highlights</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {dept.highlights.map((h, i) => (
                                        <motion.div
                                            key={h}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.1 }}
                                            className="flex items-center gap-3 p-4 rounded-xl"
                                            style={{ background: 'var(--background-alt)' }}
                                        >
                                            <Award size={18} style={{ color: 'var(--secondary)', flexShrink: 0 }} />
                                            <span className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>{h}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-6">
                            <AnimatedCard>
                                <div className="flex items-center gap-3 mb-4">
                                    <Users size={20} style={{ color: 'var(--primary)' }} />
                                    <h4 className="text-base font-semibold font-[family-name:var(--font-display)]" style={{ color: 'var(--text-primary)' }}>Head of Department</h4>
                                </div>
                                <p className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>{dept.hod}</p>
                            </AnimatedCard>
                            <AnimatedCard delay={0.1}>
                                <div className="flex items-center gap-3 mb-4">
                                    <BookOpen size={20} style={{ color: 'var(--primary)' }} />
                                    <h4 className="text-base font-semibold font-[family-name:var(--font-display)]" style={{ color: 'var(--text-primary)' }}>Program Level</h4>
                                </div>
                                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{levelLabels[dept.level]} Program</p>
                                <p className="text-sm mt-1" style={{ color: 'var(--text-muted)' }}>Affiliated to APJ Abdul Kalam Technological University</p>
                            </AnimatedCard>
                            <Link href="/admissions" className="block">
                                <div className="gradient-bg rounded-2xl p-6 text-center text-white hover:opacity-90 transition-opacity">
                                    <h4 className="text-base font-semibold font-[family-name:var(--font-display)]">Interested?</h4>
                                    <p className="text-sm text-white/70 mt-1">Apply for admissions now</p>
                                    <span className="inline-block mt-3 px-5 py-2 bg-white/20 rounded-lg text-sm font-medium font-[family-name:var(--font-accent)]">Apply Now →</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Labs */}
            <section className="section-padding" style={{ background: 'var(--background-alt)' }}>
                <div className="container-custom">
                    <SectionHeading badge="Infrastructure" title="Labs & Facilities" subtitle={`State-of-the-art laboratories for ${dept.name}`} />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {dept.labs.map((lab, i) => (
                            <AnimatedCard key={lab} delay={i * 0.08} className="text-center">
                                <div className="w-12 h-12 mx-auto mb-3 rounded-xl flex items-center justify-center" style={{ background: 'var(--primary-50)', color: 'var(--primary)' }}>
                                    <Microscope size={22} />
                                </div>
                                <h4 className="text-sm font-semibold font-[family-name:var(--font-display)]" style={{ color: 'var(--text-primary)' }}>{lab}</h4>
                            </AnimatedCard>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
