
"use client";

import { motion } from "framer-motion";
import {
    ArrowLeft,
    Play,
    Plus,
    Settings,
    Share2,
    Zap,
    MessageSquare,
    Database,
    Mail,
    Slack,
    FileText,
    MoreHorizontal,
    Rocket,
    Bot,
    BarChart3,
    TerminalSquare,
    Users,
    Activity,
    Code,
    Globe,
    ExternalLink
} from "lucide-react";
import Link from "next/link";
import { useState, useRef } from "react";

const NODE_CATEGORIES = [
    { id: 'triggers', label: 'Triggers', icon: <Zap size={16} /> },
    { id: 'ai', label: 'AI Models', icon: <Bot size={16} /> },
    { id: 'data', label: 'Data Sources', icon: <Database size={16} /> },
    { id: 'actions', label: 'Actions', icon: <Rocket size={16} /> },
];

const NODE_TYPES = [
    { id: 'trigger', label: 'Webhook', icon: <Zap size={18} />, color: 'bg-yellow-500', category: 'triggers', inputs: [], outputs: ['json'] },
    { id: 'email_trigger', label: 'New Email', icon: <Mail size={18} />, color: 'bg-blue-500', category: 'triggers', inputs: [], outputs: ['subject', 'body'] },
    { id: 'gpt4', label: 'GPT-4o', icon: <MessageSquare size={18} />, color: 'bg-green-600', category: 'ai', inputs: ['prompt', 'context'], outputs: ['response'] },
    { id: 'claude', label: 'Claude 3.5', icon: <Bot size={18} />, color: 'bg-purple-600', category: 'ai', inputs: ['system', 'user'], outputs: ['text'] },
    { id: 'postgres', label: 'Postgres Query', icon: <Database size={18} />, color: 'bg-blue-600', category: 'data', inputs: ['query'], outputs: ['rows'] },
    { id: 'notion', label: 'Notion Page', icon: <FileText size={18} />, color: 'bg-neutral-600', category: 'data', inputs: ['id'], outputs: ['content'] },
    { id: 'send_email', label: 'Send Email', icon: <Mail size={18} />, color: 'bg-emerald-600', category: 'actions', inputs: ['to', 'subject', 'body'], outputs: ['status'] },
    { id: 'slack', label: 'Slack Message', icon: <Slack size={18} />, color: 'bg-pink-600', category: 'actions', inputs: ['channel', 'text'], outputs: ['ts'] },
];

export default function ProjectBuilder() {
    const constraintsRef = useRef(null);
    const [activeTab, setActiveTab] = useState('workflow');
    const [activeCategory, setActiveCategory] = useState('ai');
    const [isRunning, setIsRunning] = useState(false);

    // Workflow State
    const [nodes, setNodes] = useState([
        { id: 1, type: 'trigger', x: 100, y: 300, label: 'Start Request', inputs: [], outputs: ['json'] },
        { id: 2, type: 'gpt4', x: 400, y: 300, label: 'Classifier Agent', inputs: ['prompt', 'context'], outputs: ['response'] },
        { id: 3, type: 'notion', x: 400, y: 100, label: 'Knowledge Base', inputs: ['id'], outputs: ['content'] },
        { id: 4, type: 'slack', x: 750, y: 300, label: 'Notify Team', inputs: ['channel', 'text'], outputs: ['ts'] },
    ]);

    const handleRun = () => {
        setIsRunning(true);
        setTimeout(() => setIsRunning(false), 2000);
    };

    const TABS = [
        { id: 'workflow', label: 'Workflow', icon: <Activity size={16} /> },
        { id: 'interface', label: 'Interface', icon: <TerminalSquare size={16} /> },
        { id: 'analytics', label: 'Analytics', icon: <BarChart3 size={16} /> },
        { id: 'manager', label: 'Manager', icon: <Database size={16} /> },
        { id: 'evaluators', label: 'Evaluators', icon: <Users size={16} /> },
    ];

    return (
        <div className="flex flex-col h-[calc(100vh-8rem)] bg-neutral-950 overflow-hidden">
            {/* Project Header */}
            <header className="flex flex-col border-b border-white/5 bg-neutral-900/50 backdrop-blur-md z-20">
                <div className="flex items-center justify-between py-3 px-6">
                    <div className="flex items-center gap-4">
                        <Link href="/dashboard/projects" className="p-2 hover:bg-white/5 rounded-lg text-neutral-400 hover:text-white transition-colors">
                            <ArrowLeft size={18} />
                        </Link>
                        <div>
                            <div className="flex items-center gap-2">
                                <h1 className="text-sm font-bold text-white">Support Auto-Flow</h1>
                                <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-green-500/10 text-green-400 border border-green-500/20">Active</span>
                            </div>
                            <p className="text-[10px] text-neutral-500">Last saved 2m ago</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <button className="px-3 py-1.5 bg-neutral-800 border border-white/10 text-neutral-300 rounded-lg text-xs font-medium hover:text-white hover:bg-white/5 transition-colors flex items-center gap-2">
                            <Share2 size={14} /> Share
                        </button>
                        <button
                            onClick={handleRun}
                            className={`px-4 py-1.5 bg-purple-600 text-white rounded-lg text-xs font-medium hover:bg-purple-500 transition-colors flex items-center gap-2 shadow-lg shadow-purple-500/20 ${isRunning ? 'opacity-70 cursor-wait' : ''}`}
                        >
                            {isRunning ? <div className="w-3 h-3 border-2 border-white/50 border-t-white rounded-full animate-spin" /> : <Play size={14} fill="currentColor" />}
                            {isRunning ? 'Running...' : 'Run Test'}
                        </button>
                        <button className="px-4 py-1.5 bg-white text-neutral-950 rounded-lg text-xs font-medium hover:bg-neutral-200 transition-colors">
                            Publish
                        </button>
                    </div>
                </div>

                {/* Navigation Tabs */}
                <div className="px-6 flex gap-6 overflow-x-auto no-scrollbar">
                    {TABS.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center gap-2 pb-3 pt-1 text-xs font-medium border-b-2 transition-colors ${activeTab === tab.id
                                    ? "border-purple-500 text-white"
                                    : "border-transparent text-neutral-400 hover:text-neutral-200"
                                }`}
                        >
                            {tab.icon}
                            {tab.label}
                        </button>
                    ))}
                </div>
            </header>

            {/* Main Content Area */}
            <div className="flex-1 overflow-hidden relative">

                {/* WORKFLOW VIEW */}
                {activeTab === 'workflow' && (
                    <div className="h-full flex relative">
                        {/* Sidebar Toolkit */}
                        <aside className="w-64 bg-neutral-900/30 border-r border-white/5 flex flex-col z-10 glass">
                            <div className="flex p-2 gap-1 border-b border-white/5 overflow-x-auto no-scrollbar">
                                {NODE_CATEGORIES.map(cat => (
                                    <button
                                        key={cat.id}
                                        onClick={() => setActiveCategory(cat.id)}
                                        className={`flex-1 min-w-[60px] flex flex-col items-center justify-center p-2 rounded-lg text-[10px] font-medium transition-colors ${activeCategory === cat.id ? 'bg-white/10 text-white' : 'text-neutral-500 hover:text-white hover:bg-white/5'}`}
                                    >
                                        {cat.icon}
                                        <span className="mt-1">{cat.label}</span>
                                    </button>
                                ))}
                            </div>

                            <div className="flex-1 overflow-y-auto p-4 space-y-3">
                                <h3 className="text-[10px] font-semibold text-neutral-500 uppercase tracking-wider mb-2">Available Nodes</h3>
                                {NODE_TYPES.filter(n => n.category === activeCategory).map((type) => (
                                    <div
                                        key={type.id}
                                        className="p-3 bg-neutral-800/50 border border-white/5 rounded-lg hover:border-purple-500/50 cursor-grab active:cursor-grabbing transition-all group hover:bg-neutral-800"
                                        draggable
                                    >
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className={`w-6 h-6 rounded flex items-center justify-center text-white text-xs ${type.color}`}>
                                                {type.icon}
                                            </div>
                                            <span className="text-xs font-medium text-neutral-300 group-hover:text-white">{type.label}</span>
                                        </div>
                                        <div className="flex justify-between text-[9px] text-neutral-500">
                                            <span>In: {type.inputs.length}</span>
                                            <span>Out: {type.outputs.length}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </aside>

                        {/* Canvas Area */}
                        <div className="flex-1 bg-[#0a0a0a] relative overflow-hidden cursor-crosshair" ref={constraintsRef}>
                            {/* Grid Background */}
                            <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#333 1px, transparent 1px)', backgroundSize: '20px 20px', opacity: 0.2 }} />

                            {/* Connection Lines (SVG) */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible z-0">
                                <defs>
                                    <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                                        <path d="M 0 0 L 10 5 L 0 10 z" fill="#525252" />
                                    </marker>
                                </defs>
                                <path d="M 330 338 C 365 338, 365 338, 400 338" stroke="#525252" strokeWidth="2" fill="none" markerEnd="url(#arrow)" strokeDasharray="5,5" className={isRunning ? "animate-flow" : ""} />
                                <path d="M 520 138 C 550 138, 380 280, 420 280" stroke="#525252" strokeWidth="2" fill="none" markerEnd="url(#arrow)" strokeOpacity="0.5" />
                                <path d="M 640 338 C 700 338, 700 338, 750 338" stroke="#525252" strokeWidth="2" fill="none" markerEnd="url(#arrow)" className={isRunning ? "animate-flow" : ""} />
                            </svg>

                            {/* Nodes */}
                            {nodes.map((node) => {
                                const nodeDef = NODE_TYPES.find(t => t.id === node.type) || NODE_TYPES[0];
                                return (
                                    <motion.div
                                        key={node.id}
                                        drag
                                        dragConstraints={constraintsRef}
                                        dragMomentum={false}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        whileHover={{ scale: 1.01, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.5)" }}
                                        whileTap={{ cursor: "grabbing" }}
                                        className={`absolute w-60 bg-neutral-900 border border-white/10 rounded-xl shadow-xl overflow-hidden cursor-grab z-10 ${isRunning && node.id === 2 ? 'ring-2 ring-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.2)]' : ''}`}
                                        style={{ x: node.x, y: node.y }}
                                    >
                                        <div className={`px-3 py-2 border-b border-white/5 flex items-center justify-between bg-neutral-800/50`}>
                                            <div className="flex items-center gap-2">
                                                <div className={`w-4 h-4 rounded flex items-center justify-center text-white text-[10px] ${nodeDef.color}`}>{nodeDef.icon}</div>
                                                <span className="font-semibold text-xs text-neutral-200">{node.label}</span>
                                            </div>
                                            <button className="text-neutral-500 hover:text-white"><MoreHorizontal size={14} /></button>
                                        </div>
                                        <div className="p-3 space-y-3">
                                            {nodeDef.inputs.length > 0 && (
                                                <div className="space-y-1.5">
                                                    {nodeDef.inputs.map(input => (
                                                        <div key={input} className="flex items-center gap-2">
                                                            <div className="w-2 h-2 rounded-full bg-yellow-500/50 border border-yellow-500/20" />
                                                            <span className="text-[10px] text-neutral-400 capitalize">{input}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                            {nodeDef.outputs.length > 0 && (
                                                <div className="space-y-1.5 pt-2 border-t border-white/5">
                                                    <div className="flex justify-end"><span className="text-[10px] text-neutral-500 uppercase tracking-wider mb-1">Output</span></div>
                                                    {nodeDef.outputs.map(output => (
                                                        <div key={output} className="flex items-center justify-end gap-2">
                                                            <span className="text-[10px] text-neutral-400 capitalize">{output}</span>
                                                            <div className="w-2 h-2 rounded-full bg-purple-500/50 border border-purple-500/20" />
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                )}

                {/* INTERFACE VIEW */}
                {activeTab === 'interface' && (
                    <div className="h-full flex flex-col md:flex-row bg-neutral-950 p-6 gap-6 overflow-y-auto">
                        <div className="w-full md:w-1/3 space-y-6">
                            <div>
                                <h3 className="text-lg font-bold text-white mb-2">Interface Settings</h3>
                                <p className="text-xs text-neutral-400">Customize how your agent looks and behaves.</p>
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-xs font-medium text-neutral-500 mb-1">Agent Name</label>
                                    <input type="text" className="w-full bg-neutral-900 border border-white/10 rounded px-3 py-2 text-sm text-white" defaultValue="Support Assistant" />
                                </div>
                                <div>
                                    <label className="block text-xs font-medium text-neutral-500 mb-1">Welcome Message</label>
                                    <textarea className="w-full bg-neutral-900 border border-white/10 rounded px-3 py-2 text-sm text-white h-24" defaultValue="Hello! How can I help you today?" />
                                </div>
                                <div>
                                    <label className="block text-xs font-medium text-neutral-500 mb-1">Primary Color</label>
                                    <div className="flex gap-2">
                                        {['bg-purple-600', 'bg-blue-600', 'bg-green-600', 'bg-orange-600'].map(c => (
                                            <div key={c} className={`w-8 h-8 rounded-full cursor-pointer border-2 border-white/20 hover:scale-110 transition-transform ${c}`} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-2/3 bg-white text-neutral-900 rounded-xl shadow-2xl overflow-hidden flex flex-col max-w-md mx-auto border border-neutral-200">
                            <div className="bg-purple-600 p-4 flex items-center justify-between text-white">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                                        <Bot size={18} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-sm">Support Assistant</h4>
                                        <div className="flex items-center gap-1 text-[10px] opacity-80">
                                            <span className="w-1.5 h-1.5 rounded-full bg-green-400" /> Online
                                        </div>
                                    </div>
                                </div>
                                <MoreHorizontal size={18} />
                            </div>
                            <div className="flex-1 bg-neutral-50 p-4 space-y-4 overflow-y-auto">
                                <div className="flex gap-3">
                                    <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 flex-shrink-0"><Bot size={16} /></div>
                                    <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-neutral-100 text-sm">Hello! How can I help you today?</div>
                                </div>
                                <div className="flex gap-3 flex-row-reverse">
                                    <div className="w-8 h-8 rounded-full bg-neutral-200 flex items-center justify-center text-neutral-600 flex-shrink-0"><Users size={16} /></div>
                                    <div className="bg-purple-600 text-white p-3 rounded-2xl rounded-tr-none shadow-sm text-sm">I need help resetting my password.</div>
                                </div>
                            </div>
                            <div className="p-3 border-t border-neutral-200 bg-white">
                                <div className="flex gap-2">
                                    <input type="text" placeholder="Type a message..." className="flex-1 bg-neutral-100 rounded-full px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-purple-500/20" />
                                    <button className="w-9 h-9 rounded-full bg-purple-600 text-white flex items-center justify-center hover:bg-purple-700 transition-colors"><Rocket size={16} /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* ANALYTICS VIEW */}
                {activeTab === 'analytics' && (
                    <div className="h-full bg-neutral-950 p-8 overflow-y-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                            {[
                                { label: 'Total Executions', val: '14,205', change: '+12%', color: 'text-green-400' },
                                { label: 'Avg. Response Time', val: '1.2s', change: '-5%', color: 'text-green-400' },
                                { label: 'Total Cost', val: '$45.20', change: '+2%', color: 'text-red-400' },
                            ].map((stat, i) => (
                                <div key={i} className="bg-neutral-900/50 border border-white/5 rounded-xl p-6">
                                    <p className="text-xs text-neutral-500 uppercase tracking-wider mb-2">{stat.label}</p>
                                    <div className="flex items-end justify-between">
                                        <h3 className="text-3xl font-bold text-white">{stat.val}</h3>
                                        <span className={`text-xs font-medium ${stat.color} bg-white/5 px-2 py-1 rounded`}>{stat.change}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="h-64 bg-neutral-900/30 border border-white/5 rounded-xl p-6 flex items-center justify-center text-neutral-600 mb-8">
                            <span className="flex items-center gap-2"><BarChart3 /> Chart Placeholder (Integrate Recharts)</span>
                        </div>
                        <h3 className="text-lg font-bold text-white mb-4">Recent Logs</h3>
                        <div className="bg-neutral-900/30 border border-white/5 rounded-xl overflow-hidden">
                            <table className="w-full text-left text-sm text-neutral-400">
                                <thead className="bg-white/5 text-neutral-300 font-medium">
                                    <tr>
                                        <th className="px-6 py-3">Timestamp</th>
                                        <th className="px-6 py-3">Status</th>
                                        <th className="px-6 py-3">Input</th>
                                        <th className="px-6 py-3">Duration</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5">
                                    {[1, 2, 3, 4, 5].map(i => (
                                        <tr key={i} className="hover:bg-white/5">
                                            <td className="px-6 py-3">2024-02-11 10:30:{10 + i}</td>
                                            <td className="px-6 py-3"><span className="text-green-400 bg-green-400/10 px-2 py-0.5 rounded textxs">Success</span></td>
                                            <td className="px-6 py-3 font-mono text-xs">"Reset password"</td>
                                            <td className="px-6 py-3">0.8s</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                {/* MANAGER VIEW */}
                {activeTab === 'manager' && (
                    <div className="h-full bg-neutral-950 p-8 overflow-y-auto">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-xl font-bold text-white">Knowledge Base</h3>
                            <button className="px-4 py-2 bg-white text-neutral-950 rounded-lg text-sm font-medium hover:bg-neutral-200"><Plus size={16} className="inline mr-2" /> Add Source</button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                { name: 'Company Handbook 2024', type: 'PDF', size: '2.4 MB', date: 'Feb 10' },
                                { name: 'Support FAQs', type: 'Notion', size: 'Link', date: 'Feb 08' },
                                { name: 'Product Pricing', type: 'Google Sheet', size: 'Link', date: 'Jan 25' },
                            ].map((file, i) => (
                                <div key={i} className="bg-neutral-900/50 border border-white/5 rounded-xl p-4 flex items-center justify-between hover:border-purple-500/30 transition-colors group">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center text-neutral-400 group-hover:text-white transition-colors">
                                            {file.type === 'PDF' ? <FileText size={20} /> : <Database size={20} />}
                                        </div>
                                        <div>
                                            <h4 className="text-white font-medium">{file.name}</h4>
                                            <p className="text-xs text-neutral-500">{file.type} • {file.size}</p>
                                        </div>
                                    </div>
                                    <button className="p-2 hover:bg-white/10 rounded-lg text-neutral-500 hover:text-white"><MoreHorizontal size={16} /></button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* EVALUATORS VIEW */}
                {activeTab === 'evaluators' && (
                    <div className="h-full bg-neutral-950 p-8 overflow-y-auto">
                        <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-white/5 rounded-2xl p-8 text-center mb-8">
                            <h3 className="text-2xl font-bold text-white mb-2">Run Evaluations</h3>
                            <p className="text-neutral-400 max-w-lg mx-auto mb-6">Test your agent against a dataset of golden question-answer pairs to ensure quality and accuracy.</p>
                            <button className="px-6 py-3 bg-white text-neutral-950 rounded-lg font-semibold hover:bg-neutral-200 transition-colors">Start Evaluation Run</button>
                        </div>

                        <h3 className="text-lg font-bold text-white mb-4">Past Runs</h3>
                        <div className="space-y-3">
                            {[1, 2].map(i => (
                                <div key={i} className="bg-neutral-900/50 border border-white/5 rounded-xl p-4 flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className={`w-2 h-2 rounded-full ${i === 1 ? 'bg-green-500' : 'bg-yellow-500'}`} />
                                        <div>
                                            <h4 className="text-white font-medium text-sm">Evaluation Run #{i}</h4>
                                            <p className="text-xs text-neutral-500">50 test cases</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <div className="text-right">
                                            <span className="block text-xs text-neutral-500">Accuracy</span>
                                            <span className="text-white font-bold">{i === 1 ? '94%' : '88%'}</span>
                                        </div>
                                        <div className="text-right">
                                            <span className="block text-xs text-neutral-500">Hallucination</span>
                                            <span className="text-white font-bold">{i === 1 ? '2%' : '5%'}</span>
                                        </div>
                                        <button className="text-purple-400 text-xs font-medium hover:underline">View Report</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

            </div>

            <style jsx global>{`
                @keyframes flow {
                0% { stroke-dashoffset: 10; }
                100% { stroke-dashoffset: 0; }
                }
                .animate-flow {
                animation: flow 0.5s linear infinite;
                }
                .no-scrollbar::-webkit-scrollbar {
                display: none;
                }
                .no-scrollbar {
                -ms-overflow-style: none;
                scrollbar-width: none;
                }
            `}</style>
        </div>
    );
}
