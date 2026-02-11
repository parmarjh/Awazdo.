
"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Box, Bot, Database, Zap, FileText, LayoutTemplate, PlusCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const WORKFLOW_TYPES = [
    { id: 'agent', name: 'AI Assistant', icon: <Bot size={24} />, desc: 'Simple chatbot with knowledge base access' },
    { id: 'workflow', name: 'Workflow', icon: <Zap size={24} />, desc: 'Complex process with multiple steps and logic' },
    { id: 'form', name: 'Smart Form', icon: <FileText size={24} />, desc: 'Process user input and extract data' },
    { id: 'api', name: 'API Agent', icon: <Box size={24} />, desc: 'Headless agent accessible via API' },
];

export default function NewProjectPage() {
    const [selectedType, setSelectedType] = useState('workflow');
    const [projectName, setProjectName] = useState('');

    return (
        <div className="max-w-4xl mx-auto py-10">
            <div className="mb-8">
                <Link href="/dashboard/projects" className="text-neutral-500 hover:text-white flex items-center gap-2 mb-4 text-sm transition-colors">
                    <ArrowLeft size={16} /> Back to Projects
                </Link>
                <h1 className="text-2xl font-bold text-white">Create New Project</h1>
                <p className="text-neutral-400">Choose a starting point for your new AI automation.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {/* Left: Project Details */}
                <div className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-neutral-300 mb-2">Project Name</label>
                        <input
                            type="text"
                            value={projectName}
                            onChange={(e) => setProjectName(e.target.value)}
                            placeholder="e.g., Customer Support Bot"
                            className="w-full bg-neutral-900 border border-white/10 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 outline-none transition-all placeholder:text-neutral-600"
                            autoFocus
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-neutral-300 mb-2">Folder</label>
                        <select className="w-full bg-neutral-900 border border-white/10 rounded-lg px-4 py-3 text-white outline-none">
                            <option>My Projects</option>
                            <option>Marketing</option>
                            <option>HR</option>
                        </select>
                    </div>

                    <div className="pt-4">
                        <Link href={`/dashboard/projects/${Math.floor(Math.random() * 1000)}`}>
                            <button className="w-full bg-purple-600 hover:bg-purple-500 text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg shadow-purple-500/20">
                                <PlusCircle size={18} /> Create Project
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Right: Type Selection */}
                <div className="space-y-3">
                    <label className="block text-sm font-medium text-neutral-300 mb-2">Project Type</label>
                    {WORKFLOW_TYPES.map((type) => (
                        <div
                            key={type.id}
                            onClick={() => setSelectedType(type.id)}
                            className={`p-4 rounded-xl border flex items-center gap-4 cursor-pointer transition-all ${selectedType === type.id
                                    ? "bg-purple-500/10 border-purple-500 text-white"
                                    : "bg-neutral-900/40 border-white/5 text-neutral-400 hover:border-white/20 hover:bg-neutral-900/60"
                                }`}
                        >
                            <div className={`p-3 rounded-lg ${selectedType === type.id ? "bg-purple-500 text-white shadow-lg shadow-purple-500/30" : "bg-neutral-800 text-neutral-500"}`}>
                                {type.icon}
                            </div>
                            <div>
                                <h3 className={`font-medium ${selectedType === type.id ? "text-white" : "text-neutral-300"}`}>{type.name}</h3>
                                <p className="text-xs text-neutral-500">{type.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="border-t border-white/5 pt-8 mt-8">
                <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-4">Or start from a template</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {['Document Q&A', 'Email Drafter', 'Data Extraction'].map((t, i) => (
                        <Link href="/dashboard/templates" key={i} className="p-4 rounded-lg bg-neutral-900/30 border border-white/5 hover:border-purple-500/30 text-sm text-neutral-400 hover:text-white transition-colors flex items-center gap-3 group">
                            <LayoutTemplate size={16} />
                            <span>{t}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
