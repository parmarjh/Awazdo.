
"use client";

import { motion } from "framer-motion";
import {
    Bot,
    Code,
    Database,
    MessageSquare,
    ArrowUpRight,
    Clock,
    Plus,
    MoreHorizontal
} from "lucide-react";
import Link from "next/link";

const projects = [
    {
        id: 1,
        name: "Customer Support Agent",
        description: "Automated responses for Zendesk tickets.",
        status: "Active",
        type: "AI Agent",
        lastActive: "2 min ago",
        icon: <Bot className="text-purple-400" size={24} />,
        color: "bg-purple-500/10 border-purple-500/20",
        stats: { calls: "1.2k", latency: "240ms" }
    },
    {
        id: 2,
        name: "Email Parser Bot",
        description: "Extracts invoice data from emails.",
        status: "Training",
        type: "Workflow",
        lastActive: "4 hours ago",
        icon: <Code className="text-blue-400" size={24} />,
        color: "bg-blue-500/10 border-blue-500/20",
        stats: { calls: "850", latency: "120ms" }
    },
    {
        id: 3,
        name: "Knowledge Base - Docs",
        description: "Indexed documentation for RAG pipeline.",
        status: "Indexing",
        type: "Knowledge",
        lastActive: "1 day ago",
        icon: <Database className="text-emerald-400" size={24} />,
        color: "bg-emerald-500/10 border-emerald-500/20",
        stats: { calls: "N/A", latency: "N/A" }
    },
];

const activity = [
    { id: 1, action: "Deployed version 2.4", project: "Customer Support Agent", time: "2 mins ago" },
    { id: 2, action: "Upload completed (54 files)", project: "Knowledge Base - Docs", time: "4 hours ago" },
    { id: 3, action: "API Key created", project: "System Settings", time: "1 day ago" },
];

export default function DashboardPage() {
    return (
        <div className="space-y-8">
            {/* Welcome Section */}
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-neutral-200 to-neutral-500">
                        Welcome back, Parma
                    </h1>
                    <p className="text-neutral-400 mt-2">Here's what's happening with your AI workforce.</p>
                </div>
                <div className="flex gap-3">
                    <button className="bg-neutral-800 hover:bg-neutral-700 text-white px-4 py-2 rounded-lg border border-white/10 text-sm font-medium transition-colors">
                        View Analytics
                    </button>
                    <button className="bg-white hover:bg-neutral-200 text-neutral-950 px-4 py-2 rounded-lg font-medium text-sm transition-colors flex items-center gap-2 shadow-lg shadow-white/10">
                        <Plus size={16} />
                        New Agent
                    </button>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    { label: "Total GPU Usage", value: "24.5 hrs", change: "+12%", trend: "up" },
                    { label: "Active Agents", value: "8", change: "+2", trend: "up" },
                    { label: "API Requests", value: "142k", change: "-5%", trend: "down" },
                ].map((stat, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="p-6 rounded-2xl bg-neutral-900/40 border border-white/5 backdrop-blur-sm hover:border-white/10 transition-colors group"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <span className="text-neutral-500 text-sm font-medium">{stat.label}</span>
                            <span className={`text-xs font-semibold px-2 py-1 rounded-full ${stat.trend === 'up' ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'}`}>
                                {stat.change}
                            </span>
                        </div>
                        <div className="text-3xl font-bold text-white group-hover:scale-105 origin-left transition-transform">
                            {stat.value}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Projects Section */}
            <div>
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold text-white">Recent Projects</h2>
                    <Link href="/dashboard/projects" className="text-sm text-purple-400 hover:text-purple-300 flex items-center gap-1 transition-colors">
                        View all <ArrowUpRight size={14} />
                    </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {projects.map((project, i) => (
                        <Link href={`/dashboard/projects/${project.id}`} key={project.id} className="block h-full group">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 + i * 0.1 }}
                                className="h-full p-6 rounded-2xl bg-neutral-900/40 border border-white/5 hover:border-purple-500/30 transition-all hover:bg-neutral-900/60 relative overflow-hidden"
                            >
                                <div className={`absolute top-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity`}>
                                    <button className="text-neutral-400 hover:text-white"><MoreHorizontal size={20} /></button>
                                </div>

                                <div className="flex items-start gap-4 mb-6">
                                    <div className={`p-3 rounded-xl ${project.color} group-hover:scale-110 transition-transform duration-500`}>
                                        {project.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg text-white group-hover:text-purple-400 transition-colors">{project.name}</h3>
                                        <p className="text-sm text-neutral-400 line-clamp-1">{project.description}</p>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                                    <div className="flex items-center gap-4 text-xs text-neutral-500">
                                        <span className="flex items-center gap-1">
                                            <Clock size={12} /> {project.lastActive}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <MessageSquare size={12} /> {project.stats.calls} calls
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className={`w-2 h-2 rounded-full ${project.status === 'Active' ? 'bg-green-500 animate-pulse' :
                                            project.status === 'Training' ? 'bg-blue-500' : 'bg-yellow-500'
                                            }`} />
                                        <span className="text-xs font-medium text-neutral-300">{project.status}</span>
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}

                    {/* Create New Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 }}
                        className="flex flex-col items-center justify-center p-6 rounded-2xl border-2 border-dashed border-white/10 hover:border-white/20 hover:bg-white/5 transition-all text-neutral-500 hover:text-white cursor-pointer group h-full min-h-[180px]"
                    >
                        <div className="p-3 rounded-full bg-white/5 group-hover:bg-white/10 mb-3 transition-colors">
                            <Plus size={24} />
                        </div>
                        <span className="font-medium">Create New Project</span>
                    </motion.div>
                </div>
            </div>

            {/* Activity Feed and Quick Actions */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    <h2 className="text-lg font-semibold text-white mb-4">Activity Feed</h2>
                    <div className="bg-neutral-900/30 border border-white/5 rounded-2xl p-1">
                        {activity.map((item, i) => (
                            <div key={item.id} className="flex items-center gap-4 p-4 hover:bg-white/5 rounded-xl transition-colors border-b border-white/5 last:border-0">
                                <div className="w-2 h-2 rounded-full bg-purple-500 mt-1" />
                                <div className="flex-1">
                                    <p className="text-sm text-neutral-200 font-medium">{item.action}</p>
                                    <p className="text-xs text-neutral-500">{item.project}</p>
                                </div>
                                <span className="text-xs text-neutral-600">{item.time}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h2 className="text-lg font-semibold text-white mb-4">Quick Resources</h2>
                    <div className="space-y-3">
                        {[
                            "Documentation", "API Reference", "Community Support", "Status Page"
                        ].map((resource, i) => (
                            <Link
                                key={i}
                                href="#"
                                className="block p-4 rounded-xl bg-neutral-900/30 border border-white/5 hover:border-purple-500/30 hover:bg-neutral-900/50 transition-all text-sm text-neutral-400 hover:text-white group"
                            >
                                <div className="flex justify-between items-center">
                                    {resource}
                                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
