
"use client";

import { motion } from "framer-motion";
import { UploadCloud, Folder, Search, Grid, List, MoreVertical, FileText } from "lucide-react";
import Link from "next/link";

const knowledgeBaseItems = [
    { id: 1, name: "Company Handbook", type: "PDF", size: "2.4 MB", date: "Jan 24, 2026" },
    { id: 2, name: "Product Specs v2", type: "Docx", size: "1.1 MB", date: "Jan 22, 2026" },
    { id: 3, name: "API Reference", type: "Markdown", size: "560 KB", date: "Jan 20, 2026" },
    { id: 4, name: "Sales Scripts", type: "PDF", size: "3.2 MB", date: "Jan 18, 2026" },
];

export default function KnowledgePage() {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-white">Knowledge Base</h1>
                    <p className="text-neutral-400">Manage documents for RAG pipelines.</p>
                </div>
                <button className="bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors flex items-center gap-2 shadow-lg shadow-purple-500/20">
                    <UploadCloud size={16} />
                    Upload Files
                </button>
            </div>

            <div className="flex gap-4 mb-6">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" size={16} />
                    <input
                        type="text"
                        placeholder="Search documents..."
                        className="w-full bg-neutral-900/50 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-sm text-neutral-300 focus:outline-none focus:border-purple-500/50 transition-all placeholder:text-neutral-600"
                    />
                </div>
                <div className="flex bg-neutral-900/50 border border-white/10 rounded-lg p-1">
                    <button className="p-2 hover:bg-white/5 rounded text-neutral-400 hover:text-white transition-colors"><Grid size={16} /></button>
                    <button className="p-2 bg-white/10 rounded text-white transition-colors"><List size={16} /></button>
                </div>
            </div>

            <div className="bg-neutral-900/40 border border-white/5 rounded-2xl overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-white/5 text-neutral-400 text-xs font-medium uppercase tracking-wider">
                        <tr>
                            <th className="px-6 py-4">Name</th>
                            <th className="px-6 py-4">Type</th>
                            <th className="px-6 py-4">Size</th>
                            <th className="px-6 py-4">Date Added</th>
                            <th className="px-6 py-4"></th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        {knowledgeBaseItems.map((item, i) => (
                            <motion.tr
                                key={item.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.05 }}
                                className="hover:bg-white/5 transition-colors group cursor-pointer"
                            >
                                <td className="px-6 py-4 text-sm text-white font-medium flex items-center gap-3">
                                    <FileText className="text-purple-400" size={18} />
                                    {item.name}
                                </td>
                                <td className="px-6 py-4 text-sm text-neutral-400">{item.type}</td>
                                <td className="px-6 py-4 text-sm text-neutral-400">{item.size}</td>
                                <td className="px-6 py-4 text-sm text-neutral-400">{item.date}</td>
                                <td className="px-6 py-4 text-right">
                                    <button className="text-neutral-500 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors opacity-0 group-hover:opacity-100">
                                        <MoreVertical size={16} />
                                    </button>
                                </td>
                            </motion.tr>
                        ))}
                    </tbody>
                </table>

                {knowledgeBaseItems.length === 0 && (
                    <div className="p-12 text-center text-neutral-500">
                        <Folder size={48} className="mx-auto mb-4 opacity-50" />
                        <p>No documents found.</p>
                    </div>
                )}
            </div>

            <div className="bg-purple-900/10 border border-purple-500/20 rounded-xl p-4 flex items-start gap-4">
                <div className="p-2 bg-purple-500/20 rounded-lg text-purple-400">
                    <UploadCloud size={20} />
                </div>
                <div>
                    <h4 className="text-sm font-semibold text-white">Connect Data Sources</h4>
                    <p className="text-xs text-neutral-400 mt-1 max-w-xl">
                        Automatically sync knowledge from Notion, Google Drive, or Slack.
                        <Link href="#" className="ml-1 text-purple-400 hover:underline">Configure Integrations</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
