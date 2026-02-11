'use client';

import { motion } from 'framer-motion';
import { Bot, Check, Database, Lock, Search, Zap, Code, Cpu } from 'lucide-react';
import { cn } from '@/components/ui/Button';

// Refined Bento Grid Item Component
function BentoCard({ title, description, icon: Icon, className, delay }: { title: string, description: string, icon: any, className?: string, delay: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            viewport={{ once: true }}
            className={cn(
                "group relative overflow-hidden rounded-3xl p-8 bg-slate-900/50 border border-slate-800 hover:border-purple-500/30 transition-all duration-300",
                className
            )}
        >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-purple-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10 h-full flex flex-col">
                <div className="w-12 h-12 rounded-2xl bg-slate-800/50 border border-slate-700 group-hover:border-purple-500/50 flex items-center justify-center mb-6 transition-colors shadow-lg shadow-black/20">
                    <Icon className="text-slate-200 group-hover:text-purple-400 transition-colors" size={24} />
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">{title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm flex-grow">{description}</p>

                {/* Decorative corner flash */}
                <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-purple-500/20 blur-2xl rounded-full group-hover:opacity-100 opacity-0 transition-opacity" />
            </div>
        </motion.div>
    );
}

export default function Features() {
    return (
        <section id="features" className="py-32 bg-slate-950 relative overflow-hidden">

            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-block px-4 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/10 text-purple-300 text-sm font-medium mb-6"
                    >
                        Powerful Capabilities
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold text-white mb-6"
                    >
                        Everything you need to <span className="text-gradient">Scale AI</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed"
                    >
                        From simple conversational bots to complex autonomous agent swarms,
                        Awazdo provides the robust infrastructure required for enterprise-grade deployment.
                    </motion.p>
                </div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">
                    {/* Large Item */}
                    <BentoCard
                        title="Auto Agents"
                        description="Describe your objective in natural language, and our engine automatically constructs, configures, and deploys the optimal agent workflow suitable for the task."
                        icon={Bot}
                        className="md:col-span-2 md:row-span-2 bg-gradient-to-br from-slate-900 to-slate-950"
                        delay={0}
                    />

                    <BentoCard
                        title="RAG Pipelines"
                        description="One-click retrieval-augmented generation. Instantly ingest PDFs, Notion docs, and websites to ground your agents."
                        icon={Search}
                        className="md:col-span-1"
                        delay={0.1}
                    />

                    <BentoCard
                        title="Enterprise Security"
                        description="Bank-grade encryption, SOC2 Type II compliance, and private VPC deployment options. Your data never leaves your control."
                        icon={Lock}
                        className="md:col-span-1"
                        delay={0.2}
                    />

                    {/* Medium Width Items */}
                    <BentoCard
                        title="Visual Builder"
                        description="A drag-and-drop canvas for fine-tuning logic. No code required, but fully extensible with Python/JS if needed."
                        icon={Code}
                        className="md:col-span-1"
                        delay={0.3}
                    />

                    <BentoCard
                        title="Multi-Model Routing"
                        description="Automatically route queries to the cheapest or smartest model (GPT-4, Claude 3, Llama 3) based on complexity."
                        icon={Cpu}
                        className="md:col-span-1"
                        delay={0.4}
                    />

                    <BentoCard
                        title="Data Integration"
                        description="Native connectors for over 100 enterprise tools including Salesforce, HubSpot, Zendesk, and SQL Databases."
                        icon={Database}
                        className="md:col-span-1"
                        delay={0.5}
                    />
                </div>
            </div>
        </section>
    );
}
