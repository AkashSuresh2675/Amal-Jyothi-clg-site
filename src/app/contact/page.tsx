'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/shared/PageTransition';
import { contactInfo } from '@/lib/data';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Clock, Globe } from 'lucide-react';

export default function ContactPage() {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }

        setTimeout(() => setStatus('idle'), 5000);
    };

    const inputStyle = {
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        color: 'var(--text-primary)',
        borderRadius: 'var(--radius-md)',
    };

    return (
        <div>
            {/* Hero */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 gradient-bg opacity-95" />
                <div className="container-custom relative z-10 text-center">
                    <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 text-white/90 border border-white/10 mb-6 font-[family-name:var(--font-accent)]">
                        Get in Touch
                    </motion.span>
                    <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-white font-[family-name:var(--font-display)]">
                        Contact <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #fcd34d, var(--secondary-light))' }}>Us</span>
                    </motion.h1>
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
                        We&apos;d love to hear from you. Reach out for admissions, queries, or just to say hello.
                    </motion.p>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="section-padding" style={{ background: 'var(--background-alt)' }}>
                <div className="container-custom">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                        {[
                            { icon: <MapPin size={22} />, label: 'Address', value: 'Kanjirapally, Kottayam, Kerala - 686518' },
                            { icon: <Phone size={22} />, label: 'Phone', value: contactInfo.phone[0] },
                            { icon: <Mail size={22} />, label: 'Email', value: contactInfo.email[0] },
                            { icon: <Clock size={22} />, label: 'Office Hours', value: 'Mon-Sat: 9:00 AM - 5:00 PM' },
                        ].map((item, i) => (
                            <motion.div
                                key={item.label}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="p-5 rounded-xl text-center"
                                style={{ background: 'var(--surface)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}
                            >
                                <div className="w-12 h-12 mx-auto mb-3 rounded-xl flex items-center justify-center" style={{ background: 'var(--primary-50)', color: 'var(--primary)' }}>
                                    {item.icon}
                                </div>
                                <h3 className="text-sm font-semibold font-[family-name:var(--font-accent)]" style={{ color: 'var(--text-muted)' }}>{item.label}</h3>
                                <p className="text-sm mt-1 font-medium" style={{ color: 'var(--text-primary)' }}>{item.value}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Form + Map */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Contact Form */}
                        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                            <SectionHeading badge="Message Us" title="Send a Message" centered={false} />

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-sm font-medium mb-2 font-[family-name:var(--font-accent)]" style={{ color: 'var(--text-secondary)' }}>Full Name *</label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[var(--primary)] transition-all font-[family-name:var(--font-body)]"
                                            style={inputStyle}
                                            placeholder="Your name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2 font-[family-name:var(--font-accent)]" style={{ color: 'var(--text-secondary)' }}>Email *</label>
                                        <input
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[var(--primary)] transition-all font-[family-name:var(--font-body)]"
                                            style={inputStyle}
                                            placeholder="you@example.com"
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-sm font-medium mb-2 font-[family-name:var(--font-accent)]" style={{ color: 'var(--text-secondary)' }}>Phone</label>
                                        <input
                                            type="tel"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            className="w-full px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[var(--primary)] transition-all font-[family-name:var(--font-body)]"
                                            style={inputStyle}
                                            placeholder="+91 XXXXX XXXXX"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2 font-[family-name:var(--font-accent)]" style={{ color: 'var(--text-secondary)' }}>Subject *</label>
                                        <select
                                            required
                                            value={formData.subject}
                                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                            className="w-full px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[var(--primary)] transition-all font-[family-name:var(--font-body)]"
                                            style={inputStyle}
                                        >
                                            <option value="">Select a subject</option>
                                            <option value="admissions">Admissions</option>
                                            <option value="academics">Academics</option>
                                            <option value="placements">Placements</option>
                                            <option value="general">General Inquiry</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2 font-[family-name:var(--font-accent)]" style={{ color: 'var(--text-secondary)' }}>Message *</label>
                                    <textarea
                                        required
                                        rows={5}
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="w-full px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[var(--primary)] transition-all resize-none font-[family-name:var(--font-body)]"
                                        style={inputStyle}
                                        placeholder="How can we help you?"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === 'loading'}
                                    className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-sm font-semibold text-white gradient-bg hover:opacity-90 transition-all shadow-md hover:shadow-lg disabled:opacity-50 flex items-center justify-center gap-2 font-[family-name:var(--font-accent)]"
                                >
                                    {status === 'loading' ? 'Sending...' : <><Send size={16} /> Send Message</>}
                                </button>

                                {status === 'success' && (
                                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 text-sm text-green-600 font-medium">
                                        <CheckCircle2 size={16} /> Message sent successfully! We&apos;ll get back to you soon.
                                    </motion.div>
                                )}
                                {status === 'error' && (
                                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 text-sm text-red-600 font-medium">
                                        <AlertCircle size={16} /> Something went wrong. Please try again.
                                    </motion.div>
                                )}
                            </form>
                        </motion.div>

                        {/* Map */}
                        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                            <SectionHeading badge="Find Us" title="Our Location" centered={false} />
                            <div className="rounded-2xl overflow-hidden shadow-lg" style={{ border: '1px solid var(--border)' }}>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3936.847!2d76.789!3d9.568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07c9f1b5b3c4e9%3A0x6f4e9e3c6c5b5c5!2sAmal%20Jyothi%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1234567890"
                                    width="100%"
                                    height="450"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="AJCE Location Map"
                                />
                            </div>
                            <div className="mt-6 p-5 rounded-xl" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
                                <div className="flex items-start gap-3">
                                    <MapPin size={20} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '2px' }} />
                                    <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{contactInfo.address}</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
