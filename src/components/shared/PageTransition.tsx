'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface PageTransitionProps {
    children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
        >
            {children}
        </motion.div>
    );
}

// ===== Section Heading Component =====
interface SectionHeadingProps {
    badge?: string;
    title: string;
    subtitle?: string;
    centered?: boolean;
    light?: boolean;
}

export function SectionHeading({ badge, title, subtitle, centered = true, light = false }: SectionHeadingProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className={`mb-12 md:mb-16 ${centered ? 'text-center' : ''}`}
        >
            {badge && (
                <span
                    className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-full mb-4 font-[family-name:var(--font-accent)]"
                    style={{
                        background: light ? 'rgba(255,255,255,0.15)' : 'var(--primary-50)',
                        color: light ? 'white' : 'var(--primary)',
                    }}
                >
                    {badge}
                </span>
            )}
            <h2
                className="font-[family-name:var(--font-display)]"
                style={{ color: light ? 'white' : 'var(--text-primary)' }}
            >
                {title}
            </h2>
            {subtitle && (
                <p
                    className={`mt-4 text-lg max-w-2xl ${centered ? 'mx-auto' : ''}`}
                    style={{ color: light ? 'rgba(255,255,255,0.7)' : 'var(--text-muted)' }}
                >
                    {subtitle}
                </p>
            )}
        </motion.div>
    );
}

// ===== Animated Card Component =====
interface AnimatedCardProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    hover?: boolean;
}

export function AnimatedCard({ children, className = '', delay = 0, hover = true }: AnimatedCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay }}
            whileHover={hover ? { y: -5, boxShadow: 'var(--shadow-xl)' } : {}}
            className={`rounded-2xl p-6 transition-all duration-300 ${className}`}
            style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                boxShadow: 'var(--shadow-sm)',
            }}
        >
            {children}
        </motion.div>
    );
}
