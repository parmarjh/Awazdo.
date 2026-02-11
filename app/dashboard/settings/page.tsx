
"use client";

import { motion } from "framer-motion";
import { User, Shield, Bell, Key, CreditCard, LayoutGrid, Github, Slack, Zap, AlertTriangle, Plus } from "lucide-react";
import React, { useState } from "react";

const tabs = [
    { id: "profile", label: "Profile", icon: <User size={16} /> },
    { id: "team", label: "Team", icon: <Shield size={16} /> },
    { id: "security", label: "Security", icon: <Key size={16} /> },
    { id: "billing", label: "Billing", icon: <CreditCard size={16} /> },
    { id: "notifications", label: "Notifications", icon: <Bell size={16} /> },
];

export default function SettingsPage() {
    const [activeTab, setActiveTab] = useState("profile");

    return (
        <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Navigation */}
            <aside className="w-full lg:w-64 space-y-1">
                <h2 className="text-xl font-bold text-white mb-6">Settings</h2>
                <div className="space-y-1">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors flex items-center gap-3 ${activeTab === tab.id
                                ? "bg-purple-600/10 text-purple-400 border border-purple-500/20"
                                : "text-neutral-400 hover:text-white hover:bg-white/5"
                                }`}
                        >
                            {tab.icon}
                            {tab.label}
                        </button>
                    ))}
                </div>
            </aside>

            {/* Content Area */}
            <main className="flex-1 max-w-3xl">
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-neutral-900/40 border border-white/5 rounded-2xl p-8 backdrop-blur-sm"
                >
                    {activeTab === "profile" && (
                        <div className="space-y-8">
                            <h3 className="text-lg font-semibold text-white border-b border-white/5 pb-4 mb-6">Profile Information</h3>

                            <div className="flex items-center gap-6">
                                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white text-3xl font-bold ring-4 ring-neutral-900 shadow-xl">
                                    P
                                </div>
                                <div>
                                    <button className="px-4 py-2 bg-white text-neutral-950 font-medium text-sm rounded-lg hover:bg-neutral-200 transition-colors">
                                        Upload Avatar
                                    </button>
                                    <p className="text-xs text-neutral-500 mt-2">Recommended size: 400x400px</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm text-neutral-400">Full Name</label>
                                    <input type="text" defaultValue="Parma" className="w-full bg-neutral-950 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:border-purple-500/50 focus:outline-none transition-colors" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm text-neutral-400">Email Address</label>
                                    <input type="email" defaultValue="parma@example.com" className="w-full bg-neutral-950 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:border-purple-500/50 focus:outline-none transition-colors" />
                                </div>
                                <div className="col-span-2 space-y-2">
                                    <label className="text-sm text-neutral-400">Bio</label>
                                    <textarea rows={3} className="w-full bg-neutral-950 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:border-purple-500/50 focus:outline-none transition-colors resize-none" placeholder="Tell us a bit about yourself..." />
                                </div>
                            </div>

                            <div className="pt-6 border-t border-white/5 flex justify-end">
                                <button className="bg-purple-600 hover:bg-purple-500 text-white px-6 py-2 rounded-lg font-medium transition-colors shadow-lg shadow-purple-500/20">
                                    Save Changes
                                </button>
                            </div>
                        </div>
                    )}

                    {activeTab === "security" && (
                        <div className="space-y-6">
                            <h3 className="text-lg font-semibold text-white border-b border-white/5 pb-4">Security Settings</h3>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center p-4 bg-white/5 rounded-xl border border-white/5">
                                    <div>
                                        <h4 className="text-white font-medium">Two-Factor Authentication</h4>
                                        <p className="text-sm text-neutral-400">Add an extra layer of security to your account.</p>
                                    </div>
                                    <button className="bg-green-600/20 text-green-400 border border-green-500/30 px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-600/30 transition-colors">
                                        Enable
                                    </button>
                                </div>

                                <div className="space-y-4 pt-4">
                                    <h4 className="text-sm font-semibold text-neutral-300 uppercase tracking-wider">API Keys</h4>
                                    <div className="flex items-center justify-between p-3 bg-neutral-950 rounded-lg border border-white/10">
                                        <div className="font-mono text-sm text-neutral-400">sk_live_...9f2A</div>
                                        <div className="flex gap-2">
                                            <button className="text-xs text-neutral-500 hover:text-white px-2 py-1">Copy</button>
                                            <button className="text-xs text-red-500 hover:text-red-400 px-2 py-1">Revoke</button>
                                        </div>
                                    </div>
                                    <button className="text-sm text-purple-400 hover:text-purple-300 flex items-center gap-2">
                                        <Plus size={14} /> Generate New Key
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Placeholder for other tabs */}
                    {(activeTab !== "profile" && activeTab !== "security") && (
                        <div className="flex flex-col items-center justify-center p-12 text-center">
                            <div className="p-4 bg-white/5 rounded-full mb-4">
                                <Zap className="text-yellow-500" size={32} />
                            </div>
                            <h3 className="text-lg font-medium text-white mb-2">Work in Progress</h3>
                            <p className="text-neutral-400 max-w-md">
                                This section is currently under development. Check back later for updates to {activeTab}.
                            </p>
                        </div>
                    )}

                </motion.div>
            </main>
        </div>
    );
}
