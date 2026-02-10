'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Sun, Moon, Search } from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';
import { navigation } from '@/lib/data';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isMobileOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [isMobileOpen]);

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                        ? 'glass shadow-lg'
                        : 'bg-transparent'
                    }`}
            >
                <div className="container-custom">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-3 group">
                            <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                                <span className="text-white font-bold text-lg font-[family-name:var(--font-display)]">A</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-lg font-bold font-[family-name:var(--font-display)]" style={{ color: 'var(--text-primary)' }}>
                                    AJCE
                                </span>
                                <span className="text-[10px] tracking-wider uppercase font-[family-name:var(--font-accent)]" style={{ color: 'var(--text-muted)' }}>
                                    Amal Jyothi
                                </span>
                            </div>
                        </Link>

                        {/* Desktop Nav */}
                        <nav className="hidden lg:flex items-center gap-1">
                            {navigation.map((item) => (
                                <div
                                    key={item.name}
                                    className="relative"
                                    onMouseEnter={() => item.children && setActiveDropdown(item.name)}
                                    onMouseLeave={() => setActiveDropdown(null)}
                                >
                                    <Link
                                        href={item.href}
                                        className="px-4 py-2 text-sm font-medium font-[family-name:var(--font-accent)] rounded-lg transition-all duration-200 flex items-center gap-1 hover:bg-[var(--surface-hover)]"
                                        style={{ color: 'var(--text-secondary)' }}
                                    >
                                        {item.name}
                                        {item.children && <ChevronDown size={14} className={`transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} />}
                                    </Link>

                                    {/* Dropdown */}
                                    <AnimatePresence>
                                        {item.children && activeDropdown === item.name && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                                transition={{ duration: 0.2 }}
                                                className="absolute top-full left-0 mt-1 w-64 rounded-xl shadow-xl overflow-hidden"
                                                style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
                                            >
                                                <div className="p-2">
                                                    {item.children.map((child) => (
                                                        <Link
                                                            key={child.name}
                                                            href={child.href}
                                                            className="block px-4 py-2.5 text-sm rounded-lg transition-all duration-200 hover:bg-[var(--surface-hover)]"
                                                            style={{ color: 'var(--text-secondary)' }}
                                                        >
                                                            {child.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </nav>

                        {/* Right Actions */}
                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => {
                                    const event = new KeyboardEvent('keydown', { key: 'k', metaKey: true });
                                    document.dispatchEvent(event);
                                }}
                                className="hidden md:flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all duration-200 hover:bg-[var(--surface-hover)]"
                                style={{ color: 'var(--text-muted)', border: '1px solid var(--border)' }}
                            >
                                <Search size={14} />
                                <span className="font-[family-name:var(--font-accent)]">Search</span>
                                <kbd className="text-xs px-1.5 py-0.5 rounded" style={{ background: 'var(--background-alt)', color: 'var(--text-muted)' }}>⌘K</kbd>
                            </button>

                            <button
                                onClick={toggleTheme}
                                className="p-2.5 rounded-lg transition-all duration-200 hover:bg-[var(--surface-hover)]"
                                style={{ color: 'var(--text-secondary)' }}
                                aria-label="Toggle theme"
                            >
                                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                            </button>

                            <Link
                                href="/admissions"
                                className="hidden md:block px-5 py-2.5 text-sm font-semibold text-white rounded-lg gradient-bg hover:opacity-90 transition-all duration-200 shadow-md hover:shadow-lg font-[family-name:var(--font-accent)]"
                            >
                                Apply Now
                            </Link>

                            {/* Mobile menu button */}
                            <button
                                onClick={() => setIsMobileOpen(!isMobileOpen)}
                                className="lg:hidden p-2.5 rounded-lg transition-all duration-200 hover:bg-[var(--surface-hover)]"
                                style={{ color: 'var(--text-primary)' }}
                                aria-label="Toggle menu"
                            >
                                {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
                            </button>
                        </div>
                    </div>
                </div>
            </motion.header>

            {/* Mobile Nav Drawer */}
            <AnimatePresence>
                {isMobileOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                            onClick={() => setIsMobileOpen(false)}
                        />
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 w-80 h-full z-50 overflow-y-auto lg:hidden"
                            style={{ background: 'var(--surface)' }}
                        >
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-8">
                                    <span className="text-lg font-bold font-[family-name:var(--font-display)]" style={{ color: 'var(--text-primary)' }}>
                                        Menu
                                    </span>
                                    <button
                                        onClick={() => setIsMobileOpen(false)}
                                        className="p-2 rounded-lg hover:bg-[var(--surface-hover)]"
                                        style={{ color: 'var(--text-primary)' }}
                                    >
                                        <X size={22} />
                                    </button>
                                </div>

                                <nav className="space-y-1">
                                    {navigation.map((item) => (
                                        <div key={item.name}>
                                            <Link
                                                href={item.href}
                                                onClick={() => setIsMobileOpen(false)}
                                                className="block px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 hover:bg-[var(--surface-hover)] font-[family-name:var(--font-accent)]"
                                                style={{ color: 'var(--text-secondary)' }}
                                            >
                                                {item.name}
                                            </Link>
                                            {item.children && (
                                                <div className="pl-6 space-y-1">
                                                    {item.children.map((child) => (
                                                        <Link
                                                            key={child.name}
                                                            href={child.href}
                                                            onClick={() => setIsMobileOpen(false)}
                                                            className="block px-4 py-2 text-sm rounded-lg transition-all duration-200 hover:bg-[var(--surface-hover)]"
                                                            style={{ color: 'var(--text-muted)' }}
                                                        >
                                                            {child.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </nav>

                                <div className="mt-8 pt-6" style={{ borderTop: '1px solid var(--border)' }}>
                                    <Link
                                        href="/admissions"
                                        onClick={() => setIsMobileOpen(false)}
                                        className="block w-full px-5 py-3 text-center text-white font-semibold rounded-lg gradient-bg font-[family-name:var(--font-accent)]"
                                    >
                                        Apply Now
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
