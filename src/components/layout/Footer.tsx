import Link from 'next/link';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { navigation, contactInfo, socialLinks } from '@/lib/data';

export default function Footer() {
    return (
        <footer style={{ background: 'var(--primary-dark)', color: 'var(--text-inverse)' }}>
            {/* Main Footer */}
            <div className="container-custom py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* About Column */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                                <span className="text-white font-bold text-lg font-[family-name:var(--font-display)]">A</span>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white font-[family-name:var(--font-display)]">AJCE</h3>
                                <p className="text-xs text-white/60 font-[family-name:var(--font-accent)]">Amal Jyothi College of Engineering</p>
                            </div>
                        </div>
                        <p className="text-sm text-white/70 leading-relaxed mb-6">
                            A premier engineering institution affiliated to APJ Abdul Kalam Technological University,
                            accredited by NAAC with A++ grade.
                        </p>
                        <div className="flex gap-3">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white/70 hover:bg-white/20 hover:text-white transition-all duration-200"
                                    aria-label={link.name}
                                >
                                    <ExternalLink size={14} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6 font-[family-name:var(--font-accent)]">
                            Quick Links
                        </h4>
                        <ul className="space-y-3">
                            {navigation.slice(0, 5).map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-sm text-white/70 hover:text-white transition-colors duration-200 font-[family-name:var(--font-body)]"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Academics */}
                    <div>
                        <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6 font-[family-name:var(--font-accent)]">
                            Academics
                        </h4>
                        <ul className="space-y-3">
                            {navigation.slice(5).map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-sm text-white/70 hover:text-white transition-colors duration-200 font-[family-name:var(--font-body)]"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <Link href="/academics" className="text-sm text-white/70 hover:text-white transition-colors duration-200">
                                    B.Tech Programs
                                </Link>
                            </li>
                            <li>
                                <Link href="/academics#mtech" className="text-sm text-white/70 hover:text-white transition-colors duration-200">
                                    M.Tech Programs
                                </Link>
                            </li>
                            <li>
                                <Link href="/academics/mca" className="text-sm text-white/70 hover:text-white transition-colors duration-200">
                                    MCA
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6 font-[family-name:var(--font-accent)]">
                            Contact Us
                        </h4>
                        <ul className="space-y-4">
                            <li className="flex gap-3">
                                <MapPin size={18} className="text-white/50 flex-shrink-0 mt-0.5" />
                                <span className="text-sm text-white/70 leading-relaxed">
                                    {contactInfo.address}
                                </span>
                            </li>
                            <li className="flex gap-3">
                                <Phone size={18} className="text-white/50 flex-shrink-0" />
                                <div className="space-y-1">
                                    {contactInfo.phone.map((p) => (
                                        <a key={p} href={`tel:${p}`} className="block text-sm text-white/70 hover:text-white transition-colors">
                                            {p}
                                        </a>
                                    ))}
                                </div>
                            </li>
                            <li className="flex gap-3">
                                <Mail size={18} className="text-white/50 flex-shrink-0" />
                                <div className="space-y-1">
                                    {contactInfo.email.map((e) => (
                                        <a key={e} href={`mailto:${e}`} className="block text-sm text-white/70 hover:text-white transition-colors">
                                            {e}
                                        </a>
                                    ))}
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-white/50">
                        © {new Date().getFullYear()} Amal Jyothi College of Engineering. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <span className="text-xs text-white/40 px-3 py-1 rounded-full" style={{ background: 'rgba(255,255,255,0.05)' }}>
                            NAAC A++ | NBA Accredited | AICTE Approved
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
