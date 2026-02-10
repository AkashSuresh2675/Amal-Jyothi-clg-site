'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { stats } from '@/lib/data';
import { GraduationCap, Users, TrendingUp, Building2, BookOpen, FileText } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
    'Years of Excellence': <GraduationCap size={28} />,
    'Students & Alumni': <Users size={28} />,
    'Placement Rate': <TrendingUp size={28} />,
    'Departments': <Building2 size={28} />,
    'Faculty Members': <BookOpen size={28} />,
    'Research Papers': <FileText size={28} />,
};

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true });

    useEffect(() => {
        if (!inView) return;

        const duration = 2000;
        const steps = 60;
        const increment = target / steps;
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(Math.floor(current));
            }
        }, duration / steps);

        return () => clearInterval(timer);
    }, [inView, target]);

    return (
        <span ref={ref} className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)]" style={{ color: 'var(--primary)' }}>
            {count.toLocaleString()}{suffix}
        </span>
    );
}

export default function StatsBar() {
    return (
        <section className="section-padding" style={{ background: 'var(--background-alt)' }}>
            <div className="container-custom">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="text-center"
                        >
                            <div
                                className="w-14 h-14 mx-auto mb-4 rounded-xl flex items-center justify-center"
                                style={{ background: 'var(--primary-50)', color: 'var(--primary)' }}
                            >
                                {iconMap[stat.label] || <GraduationCap size={28} />}
                            </div>
                            <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                            <p className="mt-2 text-sm font-[family-name:var(--font-accent)]" style={{ color: 'var(--text-muted)' }}>
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
