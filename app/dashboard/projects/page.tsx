
"use client";

import { motion } from "framer-motion";
import {
    Plus,
    Search,
    MoreHorizontal,
    Folder,
    FileText,
    MessageSquare,
    Workflow,
    LayoutGrid,
    List as ListIcon,
    Clock,
    Filter,
    Cloud
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

// Mock Data
const FOLDERS = [
    { id: 1, name: "My Projects", count: 12 },
    { id: 2, name: "Marketing Campaigns", count: 5 },
    { id: 3, name: "HR Automation", count: 3 },
    { id: 4, name: "Finance Workflows", count: 8 },
    { id: 5, name: "Archive", count: 0 },
];

const PROJECTS = [
    {
        id: 1,
        title: "Automated Diligence Engine",
        type: "Form",
        status: "active",
        nodes: 34,
        updatedAt: "21 hours ago",
        integrations: ["openai", "python"]
    },
    {
        id: 2,
        title: "LinkedIn Scraper Job",
        type: "AI Agent",
        status: "idle",
        nodes: 45,
        updatedAt: "yesterday",
        integrations: ["linkedin", "openai"]
    },
    {
        id: 3,
        title: "YT Blog Post From Video",
        type: "Workflow",
        status: "error",
        nodes: 12,
        updatedAt: "2 days ago",
        integrations: ["youtube", "wordpress"]
    },
    {
        id: 4,
        title: "Green Building Agent",
        type: "Chat Assistant",
        status: "active",
        nodes: 7,
        updatedAt: "5 days ago",
        integrations: ["openai"]
    },
    {
        id: 5,
        title: "Solar Powered Local Server",
        type: "Backend",
        status: "idle",
        nodes: 16,
        updatedAt: "3 days ago",
        integrations: ["python", "aws"]
    },
    {
        id: 6,
        title: "AI Energy/Water Usage",
        type: "Form",
        status: "active",
        nodes: 5,
        updatedAt: "7 days ago",
        integrations: ["sheets"]
    }
];

export default function ProjectsPage() {
    const [activeFolder, setActiveFolder] = useState(1);
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

    return (
        <div className="flex h-[calc(100vh-8rem)] -mt-4">
            {/* Inner Sidebar - Folders */}
            <aside className="w-64 border-r border-white/5 pr-6 hidden lg:flex flex-col gap-6">
                <div className="flex items-center justify-between">
                    <h2 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider">Folders</h2>
                    <button className="text-neutral-500 hover:text-white transition-colors">
                        <Plus size={16} />
                    </button>
                </div>

                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" size={14} />
                    <input
                        type="text"
                        placeholder="Search folders..."
                        className="w-full bg-neutral-900/50 border border-white/10 rounded-lg pl-9 pr-3 py-2 text-xs text-neutral-300 focus:outline-none focus:border-purple-500/50 transition-all placeholder:text-neutral-600"
                    />
                </div>

                <div className="space-y-1 flex-1 overflow-y-auto">
                    {FOLDERS.map((folder) => (
                        <button
                            key={folder.id}
                            onClick={() => setActiveFolder(folder.id)}
                            className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-all group ${activeFolder === folder.id
                                    ? "bg-purple-500/10 text-purple-400 border border-purple-500/20"
                                    : "text-neutral-400 hover:text-white hover:bg-white/5 border border-transparent"
                                }`}
                        >
                            <div className="flex items-center gap-2">
                                <Folder size={16} className={activeFolder === folder.id ? "fill-purple-500/20" : "group-hover:fill-neutral-500/20"} />
                                <span className="truncate max-w-[120px]">{folder.name}</span>
                            </div>
                            {folder.count > 0 && (
                                <span className="text-[10px] bg-white/5 px-1.5 py-0.5 rounded text-neutral-500">{folder.count}</span>
                            )}
                        </button>
                    ))}
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 lg:pl-6 overflow-y-auto">
                {/* Header Actions */}
                <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                        <h1 className="text-2xl font-bold text-white mb-1">{FOLDERS.find(f => f.id === activeFolder)?.name}</h1>
                        <p className="text-xs text-neutral-500 font-mono">/ dashboard / folders / {FOLDERS.find(f => f.id === activeFolder)?.name?.toLowerCase().replace(/ /g, '-')}</p>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="flex bg-neutral-900/50 border border-white/10 rounded-lg p-1">
                            <button
                                onClick={() => setViewMode('grid')}
                                className={`p-2 rounded transition-colors ${viewMode === 'grid' ? "bg-white/10 text-white" : "text-neutral-500 hover:text-white"}`}
                            >
                                <LayoutGrid size={16} />
                            </button>
                            <button
                                onClick={() => setViewMode('list')}
                                className={`p-2 rounded transition-colors ${viewMode === 'list' ? "bg-white/10 text-white" : "text-neutral-500 hover:text-white"}`}
                            >
                                <ListIcon size={16} />
                            </button>
                        </div>

                        <div className="h-8 w-[1px] bg-white/10 mx-1" />

                        <button className="flex items-center gap-2 px-3 py-2 bg-neutral-900 border border-white/10 text-neutral-400 hover:text-white rounded-lg text-sm transition-colors">
                            <Filter size={16} /> Filters
                        </button>

                        <button className="flex items-center gap-2 px-4 py-2 bg-white text-neutral-950 hover:bg-neutral-200 rounded-lg text-sm font-semibold transition-colors">
                            <Plus size={16} /> New Project
                        </button>
                    </div>
                </div>

                {/* Create Cards (Stack AI Style "Get Started") */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                    <Link href="/dashboard/templates" className="group">
                        <motion.div
                            whileHover={{ y: -2 }}
                            className="p-6 bg-gradient-to-br from-neutral-900 to-neutral-950 border border-white/5 rounded-2xl relative overflow-hidden group-hover:border-blue-500/30 transition-all"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400 border border-blue-500/20">
                                    <MessageSquare size={24} />
                                </div>
                                <span className="text-[10px] font-medium px-2 py-1 bg-blue-500/10 text-blue-300 rounded-full border border-blue-500/20">Basic</span>
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-2">Quick Start</h3>
                            <p className="text-sm text-neutral-400 mb-6">Easily build an agent that reads from your company knowledge base.</p>
                            <div className="px-4 py-2 bg-neutral-800 text-white text-sm font-medium rounded-lg inline-flex items-center gap-2 group-hover:bg-blue-600 transition-colors">
                                <Plus size={16} /> Create
                            </div>
                        </motion.div>
                    </Link>

                    <Link href="/dashboard/projects/new" className="group">
                        <motion.div
                            whileHover={{ y: -2 }}
                            className="p-6 bg-gradient-to-br from-neutral-900 to-neutral-950 border border-white/5 rounded-2xl relative overflow-hidden group-hover:border-purple-500/30 transition-all"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className="p-3 bg-purple-500/10 rounded-xl text-purple-400 border border-purple-500/20">
                                    <Workflow size={24} />
                                </div>
                                <span className="text-[10px] font-medium px-2 py-1 bg-purple-500/10 text-purple-300 rounded-full border border-purple-500/20">Powerful</span>
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-2">Workflow Builder</h3>
                            <p className="text-sm text-neutral-400 mb-6">Craft an assistant from scratch with our powerful workflow builder.</p>
                            <div className="px-4 py-2 bg-neutral-800 text-white text-sm font-medium rounded-lg inline-flex items-center gap-2 group-hover:bg-purple-600 transition-colors">
                                <Plus size={16} /> Create
                            </div>
                        </motion.div>
                    </Link>
                </div>

                {/* Projects Grid */}
                <h3 className="text-sm font-medium text-neutral-500 mb-4 uppercase tracking-wider">All Projects</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {PROJECTS.map((project, i) => (
                        <Link href={`/dashboard/projects/${project.id}`} key={project.id}>
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.05 }}
                                className="group h-full bg-neutral-900/40 border border-white/5 rounded-xl p-5 hover:border-purple-500/30 transition-all hover:bg-neutral-900/60 flex flex-col justify-between"
                            >
                                {/* Top Row */}
                                <div className="flex justify-between items-start mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-neutral-300">
                                            {project.type === 'Form' ? <FileText size={18} /> :
                                                project.type === 'AI Agent' ? <MessageSquare size={18} /> :
                                                    <Workflow size={18} />}
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-white text-sm group-hover:text-purple-400 transition-colors line-clamp-1">{project.title}</h4>
                                            <div className="flex items-center gap-2 mt-1">
                                                <span className={`w-1.5 h-1.5 rounded-full ${project.status === 'active' ? 'bg-green-500' : project.status === 'error' ? 'bg-red-500' : 'bg-neutral-500'}`} />
                                                <span className="text-xs text-neutral-500">{project.type}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="text-neutral-500 hover:text-white p-1 rounded hover:bg-white/5">
                                        <MoreHorizontal size={16} />
                                    </button>
                                </div>

                                {/* Bottom Row */}
                                <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-auto">
                                    <div className="flex items-center -space-x-1.5">
                                        {/* Fake Integrations Icons */}
                                        {project.integrations.map((_, idx) => (
                                            <div key={idx} className="w-5 h-5 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center text-[8px] text-white">
                                                {String(_)[0].toUpperCase()}
                                            </div>
                                        ))}
                                        {project.nodes > 0 && <span className="ml-3 text-[10px] text-neutral-500">{project.nodes} Nodes</span>}
                                    </div>

                                    <span className="text-[10px] text-neutral-500 flex items-center gap-1">
                                        <Clock size={10} /> {project.updatedAt}
                                    </span>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
