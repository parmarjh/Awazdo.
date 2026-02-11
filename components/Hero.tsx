'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 pt-24 pb-12">
            {/* Dynamic Background */}
            <div className="absolute inset-0 w-full h-full pointer-events-none">
                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>

                {/* Gradient Blobs */}
                <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-purple-500/30 rounded-full mix-blend-screen filter blur-[100px] animate-blob"></div>
                <div className="absolute bottom-[0%] right-[10%] w-[400px] h-[400px] bg-indigo-500/20 rounded-full mix-blend-screen filter blur-[80px] animate-blob animation-delay-2000"></div>
                <div className="absolute top-[40%] left-[40%] w-[300px] h-[300px] bg-pink-500/20 rounded-full mix-blend-screen filter blur-[60px] animate-blob animation-delay-4000"></div>

                {/* Vignette */}
                <div className="absolute inset-0 bg-slate-950/80 bg-[radial-gradient(ellipse_at_center,transparent_20%,#020617_100%)]"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8 flex justify-center"
                >
                    <div className="flex items-center space-x-2 bg-slate-900/50 backdrop-blur-md border border-slate-700/50 rounded-full px-4 py-1.5 text-sm text-slate-300 shadow-lg shadow-purple-900/20 hover:border-purple-500/30 transition-colors cursor-default">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                        </span>
                        <span>The Future of Enterprise AI</span>
                    </div>
                </motion.div>


                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 leading-tight"
                >
                    Build <span className="text-gradient">Intelligent Agents</span> <br />
                    <span className="text-slate-500">for the Modern Enterprise</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    Deploy autonomous AI workflows that integrate seamlessly with your existing stack.
                    Zero friction, infinite scalability, and enterprise-grade security.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="flex flex-col sm:flex-row justify-center gap-4 mb-20"
                >
                    <Button
                        size="lg"
                        onClick={() => document.getElementById('demo-section')?.scrollIntoView({ behavior: 'smooth' })}
                        className="text-lg px-8 py-6 rounded-full bg-white text-black hover:bg-slate-200 transition-all font-semibold shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
                    >
                        Start Building Free <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                    <Button
                        variant="outline"
                        size="lg"
                        className="text-lg px-8 py-6 rounded-full border-slate-700 bg-slate-900/50 backdrop-blur-sm text-white hover:bg-slate-800 hover:border-slate-600 transition-all"
                    >
                        View Documentation
                    </Button>
                </motion.div>

                {/* Floating UI Elements Mockup - GOD MODE */}
                <motion.div
                    initial={{ opacity: 0, y: 100, rotateX: 20 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{ duration: 1.2, delay: 0.6, type: "spring", bounce: 0.4 }}
                    className="relative mx-auto max-w-6xl perspective-1000"
                >
                    <div className="relative z-10 bg-[#0d1117] border border-slate-800/60 rounded-xl p-2 shadow-2xl overflow-hidden ring-1 ring-white/10">
                        {/* Header */}
                        <div className="flex items-center justify-between px-4 py-3 bg-[#161b22] border-b border-slate-800 rounded-t-lg">
                            <div className="flex space-x-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                            </div>
                            <div className="bg-slate-900 text-slate-400 text-xs px-3 py-1 rounded-full border border-slate-700/50 font-mono">
                                awazdo_agent_v4.py
                            </div>
                            <div className="w-16"></div>
                        </div>

                        {/* Body */}
                        <div className="grid grid-cols-12 gap-0 h-[500px] bg-slate-950">
                            {/* Sidebar */}
                            <div className="col-span-2 border-r border-slate-800/60 bg-[#0d1117] p-4 hidden md:flex flex-col gap-4">
                                <div className="h-2 w-20 bg-slate-800 rounded-full mb-4"></div>
                                {[1, 2, 3, 4, 5].map(i => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded bg-slate-800/50"></div>
                                        <div className="h-2 w-16 bg-slate-800/30 rounded-full"></div>
                                    </div>
                                ))}
                                <div className="mt-auto h-24 bg-gradient-to-t from-slate-900 to-transparent rounded-lg"></div>
                            </div>

                            {/* Canvas */}
                            <div className="col-span-12 md:col-span-7 bg-[#0d1117] p-8 relative overflow-hidden">
                                <div className="absolute inset-0 bg-grid-small-white/[0.2] z-0"></div>

                                {/* Workflow Nodes */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg aspect-video">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: 1.5, duration: 0.5 }}
                                        className="absolute top-0 left-[40%] w-32 h-16 bg-slate-800 rounded-lg border border-purple-500/50 shadow-[0_0_15px_rgba(168,85,247,0.2)] flex items-center justify-center gap-2"
                                    >
                                        <Sparkles className="w-4 h-4 text-purple-400" />
                                        <span className="text-xs text-white">Trigger</span>
                                    </motion.div>

                                    {/* Connecting Line 1 */}
                                    <motion.div
                                        initial={{ height: 0 }}
                                        animate={{ height: 60 }}
                                        transition={{ delay: 2, duration: 0.5 }}
                                        className="absolute top-16 left-[50%] w-0.5 bg-gradient-to-b from-purple-500 to-blue-500"
                                    ></motion.div>

                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: 2.3, duration: 0.5 }}
                                        className="absolute top-[120px] left-[10%] w-32 h-20 bg-slate-800 rounded-lg border border-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.2)] flex flex-col items-center justify-center p-2"
                                    >
                                        <div className="w-FULL h-1 bg-green-500 rounded mb-2"></div>
                                        <span className="text-[10px] text-slate-400 mb-1">Processing</span>
                                        <div className="w-16 h-2 bg-slate-700 rounded-full"></div>
                                    </motion.div>

                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: 2.5, duration: 0.5 }}
                                        className="absolute top-[120px] right-[10%] w-32 h-20 bg-slate-800 rounded-lg border border-pink-500/50 shadow-[0_0_15px_rgba(236,72,153,0.2)] flex flex-col items-center justify-center p-2"
                                    >
                                        <span className="text-[10px] text-slate-400 mb-1">LLM Analysis</span>
                                        <div className="flex gap-1">
                                            <span className="w-1 h-1 bg-red-400 rounded-full animate-bounce"></span>
                                            <span className="w-1 h-1 bg-red-400 rounded-full animate-bounce delay-100"></span>
                                            <span className="w-1 h-1 bg-red-400 rounded-full animate-bounce delay-200"></span>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>

                            {/* Right Panel */}
                            <div className="col-span-3 border-l border-slate-800/60 bg-[#11161d] p-4 hidden md:block">
                                <div className="flex justify-between items-center mb-6">
                                    <div className="h-3 w-16 bg-slate-700 rounded-full"></div>
                                    <div className="h-3 w-8 bg-green-500/20 rounded-full"></div>
                                </div>
                                <div className="space-y-4">
                                    <div className="p-3 rounded bg-slate-800/30 border border-slate-800">
                                        <div className="h-2 w-20 bg-slate-700 rounded-full mb-2"></div>
                                        <div className="h-2 w-full bg-slate-700/50 rounded-full"></div>
                                    </div>
                                    <div className="p-3 rounded bg-slate-800/30 border border-slate-800">
                                        <div className="h-2 w-20 bg-slate-700 rounded-full mb-2"></div>
                                        <div className="h-2 w-full bg-slate-700/50 rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Glow Effect under the dashboard */}
                    <div className="absolute -bottom-10 left-0 right-0 h-20 bg-purple-500/20 filter blur-[50px] z-[-1] rounded-full mx-20"></div>
                </motion.div>
            </div>
        </section>
    );
}
