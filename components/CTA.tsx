'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

export default function CTA() {
    const [formState, setFormState] = useState({ name: '', email: '', company: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const res = await fetch('/api/demo', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formState),
            });

            if (res.ok) {
                setMessage("Thanks! We'll be in touch shortly.");
                setFormState({ name: '', email: '', company: '' });
            } else {
                setMessage('Something went wrong. Please try again.');
            }
        } catch (err) {
            setMessage('Network error. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="demo-section" className="py-32 bg-slate-950 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-600/20 filter blur-[100px] rounded-full pointer-events-none"></div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-8 md:p-16 overflow-hidden relative shadow-2xl"
                >
                    {/* Inner Glow */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full mix-blend-overlay filter blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>

                    <div className="text-center mb-12 relative z-10">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            Ready to automate your <br /> <span className="text-gradient-blue">Enterprise Workforce?</span>
                        </h2>
                        <p className="text-slate-400 text-lg max-w-xl mx-auto">
                            Join 500+ forward-thinking companies building their future with Awazdo.
                            Get a personalized walkthrough today.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto relative z-10">
                        <div>
                            <input
                                type="text"
                                placeholder="Full Name"
                                value={formState.name}
                                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                required
                                className="w-full px-5 py-4 bg-slate-950/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-medium"
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                placeholder="Work Email"
                                value={formState.email}
                                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                required
                                className="w-full px-5 py-4 bg-slate-950/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-medium"
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                placeholder="Company Name"
                                value={formState.company}
                                onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                                required
                                className="w-full px-5 py-4 bg-slate-950/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-medium"
                            />
                        </div>

                        <Button
                            type="submit"
                            className="w-full h-14 text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border-none shadow-lg shadow-blue-900/20"
                            size="lg"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Sending Request...' : 'Schedule Demo'}
                        </Button>

                        {message && (
                            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center text-sm text-green-400 mt-4 font-medium bg-green-900/20 py-2 rounded-lg border border-green-900/50">
                                {message}
                            </motion.p>
                        )}
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
