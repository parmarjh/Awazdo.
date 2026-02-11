
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

export default function SignupPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate signup
        setTimeout(() => {
            setIsLoading(false);
            window.location.href = "/dashboard";
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-neutral-950 flex flex-col items-center justify-center p-4 relative overflow-hidden">
            {/* Background gradients */}
            <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-4xl grid md:grid-cols-2 bg-neutral-900/50 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden"
            >
                {/* Left Side: Features */}
                <div className="hidden md:flex flex-col justify-between p-10 bg-gradient-to-br from-purple-900/50 to-blue-900/50 relative">
                    <div className="absolute inset-0 bg-grid-white/[0.05] pointer-events-none" />

                    <div>
                        <div className="flex items-center gap-2 mb-8">
                            <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                                <span className="font-bold text-lg text-white">A</span>
                            </div>
                            <span className="font-bold text-xl text-white tracking-tight">Awazdo</span>
                        </div>

                        <h2 className="text-3xl font-bold text-white mb-4 leading-tight">
                            Build the future of enterprise automation.
                        </h2>
                        <p className="text-purple-200">
                            Join thousands of developers building autonomous agents with Awazdo.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {["Unlimited AI Agents", "Enterprise RAG Pipeline", "Collaborative Workflows", "Bank-grade Security"].map((feature, i) => (
                            <div key={i} className="flex items-center gap-3 text-white/90">
                                <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                                    <Check size={12} strokeWidth={3} />
                                </div>
                                <span className="text-sm font-medium">{feature}</span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 pt-8 border-t border-white/10">
                        <p className="text-xs text-white/60">"Awazdo revolutionized how we handle customer support. It's simply magic."</p>
                        <div className="flex items-center gap-3 mt-4">
                            <div className="w-8 h-8 rounded-full bg-white/20" />
                            <div>
                                <div className="text-xs font-bold text-white">Sarah Jenkins</div>
                                <div className="text-[10px] text-purple-200">CTO at TechFlow</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Form */}
                <div className="p-10 flex flex-col justify-center">
                    <div className="text-center md:text-left mb-8">
                        <h1 className="text-2xl font-bold text-white mb-2">Create an account</h1>
                        <p className="text-neutral-400 text-sm">Start your 14-day free trial. No credit card required.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-medium text-neutral-400 mb-1.5 uppercase tracking-wide">First Name</label>
                                <input type="text" className="w-full bg-neutral-950 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:ring-1 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all placeholder:text-neutral-700" placeholder="Jane" />
                            </div>
                            <div>
                                <label className="block text-xs font-medium text-neutral-400 mb-1.5 uppercase tracking-wide">Last Name</label>
                                <input type="text" className="w-full bg-neutral-950 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:ring-1 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all placeholder:text-neutral-700" placeholder="Doe" />
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-medium text-neutral-400 mb-1.5 uppercase tracking-wide">Work Email</label>
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-neutral-950 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:ring-1 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all placeholder:text-neutral-700"
                                placeholder="jane@company.com"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-medium text-neutral-400 mb-1.5 uppercase tracking-wide">Password</label>
                            <input
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-neutral-950 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:ring-1 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all placeholder:text-neutral-700"
                                placeholder="Min. 8 characters"
                            />
                        </div>

                        <div className="flex items-center gap-2">
                            <input type="checkbox" id="terms" className="rounded bg-neutral-800 border-white/10 text-purple-600 focus:ring-0" />
                            <label htmlFor="terms" className="text-xs text-neutral-500">I agree to the <Link href="#" className="underline hover:text-white">Terms</Link> and <Link href="#" className="underline hover:text-white">Privacy Policy</Link>.</label>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-2.5 rounded-lg hover:brightness-110 transition-all flex items-center justify-center gap-2 mt-4 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-purple-500/20"
                        >
                            {isLoading ? (
                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            ) : (
                                <>Get Started <ArrowRight size={18} /></>
                            )}
                        </button>
                    </form>

                    <p className="text-center mt-6 text-sm text-neutral-500">
                        Already have an account?{" "}
                        <Link href="/login" className="text-white hover:text-purple-400 font-medium hover:underline transition-colors">
                            Log in
                        </Link>
                    </p>
                </div>
            </motion.div>
        </div>
    );
}
