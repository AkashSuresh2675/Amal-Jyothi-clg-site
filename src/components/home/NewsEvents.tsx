'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Tag } from 'lucide-react';
import { newsItems, events } from '@/lib/data';
import { SectionHeading } from '@/components/shared/PageTransition';

const categoryColors: Record<string, string> = {
    academic: '#3B82F6',
    event: '#8B5CF6',
    placement: '#10B981',
    achievement: '#F59E0B',
};

export default function NewsEvents() {
    return (
        <section className="section-padding" style={{ background: 'var(--background-alt)' }}>
            <div className="container-custom">
                <SectionHeading
                    badge="Stay Updated"
                    title="News & Events"
                    subtitle="Latest happenings at Amal Jyothi College of Engineering"
                />

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                    {/* News - Left Side */}
                    <div className="lg:col-span-3 space-y-5">
                        <h3 className="text-lg font-semibold font-[family-name:var(--font-display)] mb-4" style={{ color: 'var(--text-primary)' }}>
                            Latest News
                        </h3>
                        {newsItems.map((news, i) => (
                            <motion.article
                                key={news.id}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="group rounded-xl p-5 cursor-pointer transition-all duration-300 hover:-translate-y-0.5"
                                style={{
                                    background: 'var(--surface)',
                                    border: '1px solid var(--border)',
                                    boxShadow: 'var(--shadow-sm)',
                                }}
                                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = 'var(--shadow-lg)'; }}
                                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; }}
                            >
                                <div className="flex items-start gap-4">
                                    {/* Date Badge */}
                                    <div className="flex-shrink-0 w-14 h-14 rounded-xl flex flex-col items-center justify-center" style={{ background: 'var(--primary-50)' }}>
                                        <span className="text-lg font-bold font-[family-name:var(--font-display)]" style={{ color: 'var(--primary)' }}>
                                            {new Date(news.date).getDate()}
                                        </span>
                                        <span className="text-[10px] uppercase font-[family-name:var(--font-accent)]" style={{ color: 'var(--primary)' }}>
                                            {new Date(news.date).toLocaleString('en', { month: 'short' })}
                                        </span>
                                    </div>

                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span
                                                className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full text-white font-[family-name:var(--font-accent)]"
                                                style={{ background: categoryColors[news.category] }}
                                            >
                                                {news.category}
                                            </span>
                                        </div>
                                        <h4 className="text-base font-semibold font-[family-name:var(--font-display)] group-hover:text-[var(--primary)] transition-colors" style={{ color: 'var(--text-primary)' }}>
                                            {news.title}
                                        </h4>
                                        <p className="mt-1 text-sm line-clamp-2" style={{ color: 'var(--text-muted)' }}>
                                            {news.excerpt}
                                        </p>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>

                    {/* Events - Right Side */}
                    <div className="lg:col-span-2">
                        <h3 className="text-lg font-semibold font-[family-name:var(--font-display)] mb-4" style={{ color: 'var(--text-primary)' }}>
                            Upcoming Events
                        </h3>
                        <div className="space-y-4">
                            {events.map((event, i) => (
                                <motion.div
                                    key={event.id}
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    className="rounded-xl p-5 transition-all duration-300 hover:-translate-y-0.5"
                                    style={{
                                        background: 'var(--surface)',
                                        border: '1px solid var(--border)',
                                        boxShadow: 'var(--shadow-sm)',
                                    }}
                                    onMouseEnter={(e) => { e.currentTarget.style.boxShadow = 'var(--shadow-lg)'; }}
                                    onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; }}
                                >
                                    {/* Category Tag */}
                                    <div className="flex items-center gap-2 mb-3">
                                        <Tag size={12} style={{ color: 'var(--secondary)' }} />
                                        <span className="text-xs font-semibold uppercase font-[family-name:var(--font-accent)]" style={{ color: 'var(--secondary)' }}>
                                            {event.category}
                                        </span>
                                    </div>

                                    <h4 className="text-base font-semibold font-[family-name:var(--font-display)]" style={{ color: 'var(--text-primary)' }}>
                                        {event.title}
                                    </h4>

                                    <div className="mt-3 space-y-2">
                                        <div className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-muted)' }}>
                                            <Calendar size={14} />
                                            <span>{new Date(event.date).toLocaleDateString('en', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-muted)' }}>
                                            <Clock size={14} />
                                            <span>{event.time}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-muted)' }}>
                                            <MapPin size={14} />
                                            <span>{event.venue}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
