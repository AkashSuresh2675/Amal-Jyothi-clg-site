'use client';

import { motion } from 'framer-motion';
import { SectionHeading, AnimatedCard } from '@/components/shared/PageTransition';
import { facilities, clubs } from '@/lib/data';
import { BookOpen, Trophy, Home, Theater, UtensilsCrossed, Lightbulb, HeartPulse, Wifi, Code2, Music, Camera, Users, Palette, Award } from 'lucide-react';

const facilityIcons: Record<string, React.ReactNode> = {
    BookOpen: <BookOpen size={24} />,
    Trophy: <Trophy size={24} />,
    Home: <Home size={24} />,
    Theater: <Theater size={24} />,
    UtensilsCrossed: <UtensilsCrossed size={24} />,
    Lightbulb: <Lightbulb size={24} />,
    HeartPulse: <HeartPulse size={24} />,
    Wifi: <Wifi size={24} />,
};

const clubCategoryIcons: Record<string, React.ReactNode> = {
    Technical: <Code2 size={18} />,
    Cultural: <Music size={18} />,
    Service: <Users size={18} />,
    Innovation: <Lightbulb size={18} />,
    Creative: <Camera size={18} />,
};

const clubCategoryColors: Record<string, string> = {
    Technical: '#3B82F6',
    Cultural: '#EC4899',
    Service: '#10B981',
    Innovation: '#F59E0B',
    Creative: '#8B5CF6',
};

export default function CampusLifePage() {
    return (
        <div>
            {/* Hero */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 gradient-bg opacity-95" />
                <div className="container-custom relative z-10 text-center">
                    <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 text-white/90 border border-white/10 mb-6 font-[family-name:var(--font-accent)]">
                        Campus Life
                    </motion.span>
                    <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-white font-[family-name:var(--font-display)]">
                        Life at <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #fcd34d, var(--secondary-light))' }}>AJCE</span>
                    </motion.h1>
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
                        Experience a vibrant campus life with world-class facilities, diverse clubs, and endless opportunities
                    </motion.p>
                </div>
            </section>

            {/* Facilities */}
            <section className="section-padding">
                <div className="container-custom">
                    <SectionHeading badge="World-Class" title="Campus Facilities" subtitle="Everything you need for a complete learning experience" />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {facilities.map((f, i) => (
                            <AnimatedCard key={f.name} delay={i * 0.08}>
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: 'var(--primary-50)', color: 'var(--primary)' }}>
                                    {facilityIcons[f.icon] || <BookOpen size={24} />}
                                </div>
                                <h3 className="text-base font-semibold mb-2 font-[family-name:var(--font-display)]" style={{ color: 'var(--text-primary)' }}>{f.name}</h3>
                                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{f.description}</p>
                            </AnimatedCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* Clubs & Organizations */}
            <section className="section-padding" style={{ background: 'var(--background-alt)' }}>
                <div className="container-custom">
                    <SectionHeading badge="Get Involved" title="Clubs & Organizations" subtitle="Join student-led communities that match your interests" />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {clubs.map((club, i) => (
                            <motion.div
                                key={club.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="flex items-center gap-4 p-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
                                style={{ background: 'var(--surface)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}
                                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = 'var(--shadow-md)'; }}
                                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; }}
                            >
                                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: `${clubCategoryColors[club.category]}15`, color: clubCategoryColors[club.category] }}>
                                    {clubCategoryIcons[club.category]}
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold font-[family-name:var(--font-display)]" style={{ color: 'var(--text-primary)' }}>{club.name}</h4>
                                    <span className="text-[10px] uppercase font-bold font-[family-name:var(--font-accent)]" style={{ color: clubCategoryColors[club.category] }}>{club.category}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Sports */}
            <section className="section-padding">
                <div className="container-custom">
                    <SectionHeading badge="Athletics" title="Sports & Fitness" subtitle="Stay active with our comprehensive sports infrastructure" />
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
                        {['Cricket', 'Football', 'Basketball', 'Volleyball', 'Athletics', 'Badminton', 'Table Tennis', 'Chess'].map((sport, i) => (
                            <motion.div
                                key={sport}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="text-center p-4 rounded-xl"
                                style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
                            >
                                <div className="w-10 h-10 mx-auto mb-2 rounded-full flex items-center justify-center" style={{ background: 'var(--secondary-50)', color: 'var(--secondary)' }}>
                                    <Trophy size={18} />
                                </div>
                                <p className="text-sm font-medium font-[family-name:var(--font-accent)]" style={{ color: 'var(--text-primary)' }}>{sport}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
