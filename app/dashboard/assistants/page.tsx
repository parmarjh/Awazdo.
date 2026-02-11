
"use client";

import { motion } from "framer-motion";
import { Search, Filter, Plus, MoreHorizontal, MessageSquare, Clock, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const agents = [
    {
        id: 1,
        name: "Customer Support Bot",
        model: "GPT-4o",
        status: "Active",
        created: "2 days ago",
        conversations: 1240,
        avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=cs",
    },
    {
        id: 2,
        name: "Lead Qualifier",
        model: "Claude 3.5 Sonnet",
        status: "Active",
        created: "1 week ago",
        conversations: 85,
        avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=lq",
    },
    {
        id: 3,
        name: "Internal HR Helper",
        model: "Llama 3 70B",
        status: "Inactive",
        created: "2 weeks ago",
        conversations: 342,
        avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=hr",
    },
];

export default function AssistantsPage() {
    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-white">AI Assistants</h1>
                    <p className="text-neutral-400">Manage and deploy your intelligent conversational agents.</p>
                </div>
                <button className="bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors flex items-center gap-2 shadow-lg shadow-purple-500/20">
                    <Plus size={16} />
                    Create Assistant
                </button>
            </div>

            {/* Filters */}
            <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" size={16} />
                    <input
                        type="text"
                        placeholder="Search assistants..."
                        className="w-full bg-neutral-900/50 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-sm text-neutral-300 focus:outline-none focus:border-purple-500/50 transition-all placeholder:text-neutral-600"
                    />
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-neutral-900/50 border border-white/10 rounded-lg text-sm text-neutral-400 hover:text-white hover:bg-white/5 transition-all">
                    <Filter size={16} />
                    Filter
                </button>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {agents.map((agent, i) => (
                    <motion.div
                        key={agent.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="group bg-neutral-900/40 border border-white/5 rounded-2xl p-6 hover:border-purple-500/30 transition-all hover:bg-neutral-900/60 relative"
                    >
                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button className="text-neutral-500 hover:text-white"><MoreHorizontal size={20} /></button>
                        </div>

                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-700 p-1">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={agent.avatar} alt={agent.name} className="w-full h-full rounded-lg bg-neutral-950/50" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-white group-hover:text-purple-400 transition-colors">{agent.name}</h3>
                                <div className="flex items-center gap-2 mt-1">
                                    <span className={`w-2 h-2 rounded-full ${agent.status === 'Active' ? 'bg-green-500' : 'bg-neutral-500'}`} />
                                    <span className="text-xs text-neutral-400">{agent.status}</span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-3 pt-4 border-t border-white/5">
                            <div className="flex justify-between text-sm">
                                <span className="text-neutral-500">Model</span>
                                <span className="text-neutral-300 font-medium">{agent.model}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-neutral-500">Chats</span>
                                <span className="text-neutral-300 font-medium">{agent.conversations}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-neutral-500">Created</span>
                                <span className="text-neutral-300 font-medium">{agent.created}</span>
                            </div>
                        </div>

                        <div className="mt-6 flex gap-2">
                            <Link href={`#`} className="flex-1 bg-white/5 hover:bg-white/10 text-neutral-300 text-xs font-medium py-2 rounded-lg text-center transition-colors border border-white/5">
                                Edit
                            </Link>
                            <Link href={`#`} className="flex-1 bg-purple-500/10 hover:bg-purple-500/20 text-purple-400 text-xs font-medium py-2 rounded-lg text-center transition-colors border border-purple-500/20">
                                Test
                            </Link>
                        </div>
                    </motion.div>
                ))}

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="border-2 border-dashed border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center text-neutral-500 hover:text-white hover:border-white/20 hover:bg-white/5 transition-all cursor-pointer min-h-[280px]"
                >
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Plus size={24} />
                    </div>
                    <span className="font-medium">Create New Assistant</span>
                </motion.div>
            </div>
        </div>
    );
}
