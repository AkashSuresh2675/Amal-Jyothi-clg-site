'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { departments } from '@/lib/data';
import { SectionHeading } from '@/components/shared/PageTransition';
import { ArrowRight, Car, Building2, FlaskConical, Code2, Radio, Zap, Monitor, Cog, Hammer, Wifi, BrainCircuit, Sun, Construction, Settings, PlugZap, Atom, AppWindow, GraduationCap } from 'lucide-react';

const iconComponents: Record<string, React.ComponentType<{ size?: number }>> = {
    Car, Building2, FlaskConical, Code2, Radio, Zap, Monitor, Cog, Hammer, Wifi, BrainCircuit, Sun, Construction, Settings, PlugZap, Atom, AppWindow,
};

type Filter = 'all' | 'btech' | 'mtech' | 'mca';

const filters: { label: string; value: Filter }[] = [
    { label: 'All Programs', value: 'all' },
    { label: 'B.Tech', value: 'btech' },
    { label: 'M.Tech', value: 'mtech' },
    { label: 'MCA', value: 'mca' },
];

export default function AcademicsPage() {
    const [activeFilter, setActiveFilter] = useState<Filter>('all');

    const filtered = activeFilter === 'all'
        ? departments
        : departments.filter((d) => d.level === activeFilter);

    return (
        <div>
            {/* Hero */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 gradient-bg opacity-95" />
                <div className="container-custom relative z-10 text-center">
                    <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 text-white/90 border border-white/10 mb-6 font-[family-name:var(--font-accent)]">
                        Academics
                    </motion.span>
                    <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-white font-[family-name:var(--font-display)]">
                        Our <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #fcd34d, var(--secondary-light))' }}>Programs</span>
                    </motion.h1>
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
                        Explore our comprehensive range of undergraduate, postgraduate, and professional programs
                    </motion.p>
                </div>
            </section>

            {/* Filter & Grid */}
            <section className="section-padding">
                <div className="container-custom">
                    {/* Filter Tabs */}
                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        {filters.map((f) => (
                            <button
                                key={f.value}
                                onClick={() => setActiveFilter(f.value)}
                                className="px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 font-[family-name:var(--font-accent)]"
                                style={{
                                    background: activeFilter === f.value ? 'var(--primary)' : 'var(--surface)',
                                    color: activeFilter === f.value ? 'white' : 'var(--text-secondary)',
                                    border: `1px solid ${activeFilter === f.value ? 'var(--primary)' : 'var(--border)'}`,
                                }}
                            >
                                {f.label}
                            </button>
                        ))}
                    </div>

                    {/* Department Grid */}
                    <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filtered.map((dept, i) => {
                            const IconComp = iconComponents[dept.icon] || GraduationCap;
                            const levelColors: Record<string, string> = {
                                btech: 'var(--primary)',
                                mtech: '#8B5CF6',
                                mca: '#10B981',
                            };
                            const levelLabels: Record<string, string> = { btech: 'B.Tech', mtech: 'M.Tech', mca: 'MCA' };

                            return (
                                <motion.div
                                    key={dept.slug}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3, delay: i * 0.05 }}
                                >
                                    <Link href={`/academics/${dept.slug}`} className="group block h-full">
                                        <div
                                            className="h-full rounded-2xl p-6 transition-all duration-300 group-hover:-translate-y-1"
                                            style={{ background: 'var(--surface)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}
                                            onMouseEnter={(e) => { e.currentTarget.style.boxShadow = 'var(--shadow-xl)'; e.currentTarget.style.borderColor = levelColors[dept.level]; }}
                                            onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; e.currentTarget.style.borderColor = 'var(--border)'; }}
                                        >
                                            <div className="flex items-start justify-between mb-4">
                                                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'var(--primary-50)', color: levelColors[dept.level] }}>
                                                    <IconComp size={24} />
                                                </div>
                                                <span className="text-[10px] font-bold px-2.5 py-1 rounded-full uppercase font-[family-name:var(--font-accent)]" style={{ background: `${levelColors[dept.level]}15`, color: levelColors[dept.level] }}>
                                                    {levelLabels[dept.level]}
                                                </span>
                                            </div>
                                            <h3 className="text-lg font-semibold mb-2 font-[family-name:var(--font-display)] group-hover:text-[var(--primary)] transition-colors" style={{ color: 'var(--text-primary)' }}>
                                                {dept.name}
                                            </h3>
                                            <p className="text-sm mb-4" style={{ color: 'var(--text-muted)' }}>{dept.tagline}</p>
                                            <div className="flex flex-wrap gap-1.5 mb-4">
                                                {dept.highlights.slice(0, 2).map((h) => (
                                                    <span key={h} className="text-[10px] px-2 py-1 rounded-md font-[family-name:var(--font-accent)]" style={{ background: 'var(--background-alt)', color: 'var(--text-muted)' }}>
                                                        {h}
                                                    </span>
                                                ))}
                                            </div>
                                            <div className="flex items-center gap-2 text-sm font-medium font-[family-name:var(--font-accent)] group-hover:gap-3 transition-all" style={{ color: levelColors[dept.level] }}>
                                                Explore Program <ArrowRight size={14} />
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
