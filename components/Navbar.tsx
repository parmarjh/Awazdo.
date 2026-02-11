'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className={`fixed top-4 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-300 pointer-events-none`}
            >
                <div className={`pointer-events-auto rounded-full transition-all duration-300 ${scrolled ? 'glass-nav py-2 px-6 shadow-2xl shadow-purple-900/10' : 'bg-transparent py-4 px-4'} flex items-center justify-between w-full max-w-5xl`}>
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-white font-bold text-xl group-hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-shadow">
                            A
                        </div>
                        <span className={`text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 group-hover:to-white transition-all`}>
                            Awazdo
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-1">
                        {['Features', 'Integrations', 'Pricing'].map((item) => (
                            <Link
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="px-4 py-2 text-sm text-slate-400 hover:text-white hover:bg-white/5 rounded-full transition-all"
                            >
                                {item}
                            </Link>
                        ))}
                    </div>

                    {/* Actions */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Link href="#" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Sign In</Link>
                        <Button
                            variant="primary"
                            size="sm"
                            onClick={() => document.getElementById('demo-section')?.scrollIntoView({ behavior: 'smooth' })}
                            className="rounded-full shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition-shadow border border-purple-500/20"
                        >
                            Get a Demo
                        </Button>
                    </div>

                    {/* Mobile Toggle */}
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-slate-300 hover:text-white p-2">
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-x-4 top-24 z-40 md:hidden"
                    >
                        <div className="glass-card rounded-2xl p-4 shadow-2xl border border-slate-700/50 overflow-hidden">
                            <div className="flex flex-col space-y-2">
                                {['Features', 'Integrations', 'Pricing'].map((item) => (
                                    <Link
                                        key={item}
                                        href={`#${item.toLowerCase()}`}
                                        onClick={() => setIsOpen(false)}
                                        className="block px-4 py-3 text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
                                    >
                                        {item}
                                    </Link>
                                ))}
                                <div className="h-px bg-slate-800 my-2"></div>
                                <Link href="#" className="block px-4 py-3 text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors">Sign In</Link>
                                <Button variant="primary" className="w-full rounded-xl" onClick={() => { setIsOpen(false); document.getElementById('demo-section')?.scrollIntoView({ behavior: 'smooth' }); }}>
                                    Get a Demo
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
