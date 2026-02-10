'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowRight, FileText, GraduationCap, Building2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { departments, navigation } from '@/lib/data';

interface SearchResult {
    title: string;
    description: string;
    href: string;
    type: 'page' | 'department' | 'program';
}

function getSearchItems(): SearchResult[] {
    const items: SearchResult[] = [];

    navigation.forEach((nav) => {
        items.push({ title: nav.name, description: `Go to ${nav.name} page`, href: nav.href, type: 'page' });
        nav.children?.forEach((child) => {
            items.push({ title: child.name, description: `Navigate to ${child.name}`, href: child.href, type: 'page' });
        });
    });

    departments.forEach((dept) => {
        items.push({
            title: dept.name,
            description: dept.tagline,
            href: `/academics/${dept.slug}`,
            type: dept.level === 'btech' ? 'department' : 'program',
        });
    });

    return items;
}

const typeIcons = {
    page: <FileText size={16} />,
    department: <Building2 size={16} />,
    program: <GraduationCap size={16} />,
};

export default function SearchDialog() {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState('');
    const [selectedIndex, setSelectedIndex] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);
    const router = useRouter();

    const allItems = getSearchItems();
    const results = query.length > 0
        ? allItems.filter(
            (item) =>
                item.title.toLowerCase().includes(query.toLowerCase()) ||
                item.description.toLowerCase().includes(query.toLowerCase())
        ).slice(0, 8)
        : allItems.slice(0, 6);

    const handleOpen = useCallback(() => {
        setIsOpen(true);
        setQuery('');
        setSelectedIndex(0);
    }, []);

    const handleClose = useCallback(() => {
        setIsOpen(false);
        setQuery('');
    }, []);

    const handleSelect = useCallback((href: string) => {
        handleClose();
        router.push(href);
    }, [handleClose, router]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                handleOpen();
            }
            if (e.key === 'Escape') {
                handleClose();
            }
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [handleOpen, handleClose]);

    useEffect(() => {
        if (isOpen) {
            setTimeout(() => inputRef.current?.focus(), 100);
        }
    }, [isOpen]);

    const handleInputKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            setSelectedIndex((prev) => Math.min(prev + 1, results.length - 1));
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            setSelectedIndex((prev) => Math.max(prev - 1, 0));
        } else if (e.key === 'Enter' && results[selectedIndex]) {
            handleSelect(results[selectedIndex].href);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100]"
                        onClick={handleClose}
                    />

                    {/* Dialog */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed top-[20%] left-1/2 -translate-x-1/2 w-full max-w-xl z-[101]"
                    >
                        <div
                            className="rounded-2xl overflow-hidden shadow-2xl mx-4"
                            style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
                        >
                            {/* Search Input */}
                            <div className="flex items-center gap-3 px-5 py-4" style={{ borderBottom: '1px solid var(--border)' }}>
                                <Search size={20} style={{ color: 'var(--text-muted)' }} />
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={query}
                                    onChange={(e) => { setQuery(e.target.value); setSelectedIndex(0); }}
                                    onKeyDown={handleInputKeyDown}
                                    placeholder="Search pages, departments, programs..."
                                    className="flex-1 bg-transparent border-none outline-none text-base font-[family-name:var(--font-body)]"
                                    style={{ color: 'var(--text-primary)' }}
                                />
                                <button
                                    onClick={handleClose}
                                    className="p-1 rounded-md text-xs font-mono"
                                    style={{ background: 'var(--background-alt)', color: 'var(--text-muted)' }}
                                >
                                    ESC
                                </button>
                            </div>

                            {/* Results */}
                            <div className="max-h-80 overflow-y-auto p-2">
                                {results.length > 0 ? (
                                    results.map((result, i) => (
                                        <button
                                            key={`${result.href}-${i}`}
                                            onClick={() => handleSelect(result.href)}
                                            onMouseEnter={() => setSelectedIndex(i)}
                                            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-150"
                                            style={{
                                                background: i === selectedIndex ? 'var(--primary-50)' : 'transparent',
                                            }}
                                        >
                                            <div
                                                className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                                                style={{
                                                    background: i === selectedIndex ? 'var(--primary)' : 'var(--background-alt)',
                                                    color: i === selectedIndex ? 'white' : 'var(--text-muted)',
                                                }}
                                            >
                                                {typeIcons[result.type]}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm font-medium truncate font-[family-name:var(--font-display)]" style={{ color: 'var(--text-primary)' }}>
                                                    {result.title}
                                                </p>
                                                <p className="text-xs truncate" style={{ color: 'var(--text-muted)' }}>
                                                    {result.description}
                                                </p>
                                            </div>
                                            <ArrowRight size={14} style={{ color: i === selectedIndex ? 'var(--primary)' : 'transparent' }} />
                                        </button>
                                    ))
                                ) : (
                                    <div className="text-center py-8" style={{ color: 'var(--text-muted)' }}>
                                        <Search size={32} className="mx-auto mb-3 opacity-30" />
                                        <p className="text-sm">No results found for &ldquo;{query}&rdquo;</p>
                                    </div>
                                )}
                            </div>

                            {/* Footer */}
                            <div className="flex items-center justify-between px-5 py-3 text-xs" style={{ borderTop: '1px solid var(--border)', color: 'var(--text-muted)' }}>
                                <span>↑↓ Navigate</span>
                                <span>↵ Select</span>
                                <span>ESC Close</span>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
