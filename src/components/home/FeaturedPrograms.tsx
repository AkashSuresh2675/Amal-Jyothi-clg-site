'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Car, Building2, FlaskConical, Code2, Radio, Zap, Monitor, Cog, Hammer } from 'lucide-react';
import { departments } from '@/lib/data';
import { SectionHeading } from '@/components/shared/PageTransition';

const iconComponents: Record<string, React.ComponentType<{ size?: number }>> = {
    Car, Building2, FlaskConical, Code2, Radio, Zap, Monitor, Cog, Hammer,
};

export default function FeaturedPrograms() {
    const btechDepts = departments.filter((d) => d.level === 'btech');

    return (
        <section className="section-padding">
            <div className="container-custom">
                <SectionHeading
                    badge="Academic Excellence"
                    title="Our B.Tech Programs"
                    subtitle="9 cutting-edge undergraduate programs designed to shape the future of engineering"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {btechDepts.map((dept, i) => {
                        const IconComp = iconComponents[dept.icon] || Code2;
                        return (
                            <motion.div
                                key={dept.slug}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{ duration: 0.5, delay: i * 0.08 }}
                            >
                                <Link href={`/academics/${dept.slug}`} className="group block">
                                    <div
                                        className="relative rounded-2xl p-6 transition-all duration-300 overflow-hidden group-hover:-translate-y-1"
                                        style={{
                                            background: 'var(--surface)',
                                            border: '1px solid var(--border)',
                                            boxShadow: 'var(--shadow-sm)',
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.boxShadow = 'var(--shadow-xl)';
                                            e.currentTarget.style.borderColor = 'var(--primary)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                                            e.currentTarget.style.borderColor = 'var(--border)';
                                        }}
                                    >
                                        {/* Hover gradient overlay */}
                                        <div
                                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                            style={{
                                                background: 'linear-gradient(135deg, var(--primary-50) 0%, transparent 50%)',
                                            }}
                                        />

                                        <div className="relative z-10">
                                            <div className="flex items-start justify-between mb-4">
                                                <div
                                                    className="w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300"
                                                    style={{ background: 'var(--primary-50)', color: 'var(--primary)' }}
                                                >
                                                    <IconComp size={24} />
                                                </div>
                                                <span
                                                    className="text-xs font-bold px-2 py-1 rounded-md font-[family-name:var(--font-accent)]"
                                                    style={{ background: 'var(--primary-50)', color: 'var(--primary)' }}
                                                >
                                                    {dept.shortName}
                                                </span>
                                            </div>

                                            <h3
                                                className="text-lg font-semibold mb-2 font-[family-name:var(--font-display)] group-hover:text-[var(--primary)] transition-colors"
                                                style={{ color: 'var(--text-primary)' }}
                                            >
                                                {dept.name}
                                            </h3>
                                            <p
                                                className="text-sm mb-4 font-[family-name:var(--font-body)]"
                                                style={{ color: 'var(--text-muted)' }}
                                            >
                                                {dept.tagline}
                                            </p>

                                            <div className="flex items-center gap-2 text-sm font-medium font-[family-name:var(--font-accent)] group-hover:gap-3 transition-all" style={{ color: 'var(--primary)' }}>
                                                Learn More <ArrowRight size={14} />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>

                {/* View All Programs CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-center mt-12"
                >
                    <Link
                        href="/academics"
                        className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold text-white gradient-bg hover:opacity-90 transition-all shadow-md hover:shadow-lg font-[family-name:var(--font-accent)]"
                    >
                        View All Programs <ArrowRight size={16} />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
