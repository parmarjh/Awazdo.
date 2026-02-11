
import React from "react";
import Link from "next/link";
import {
    Layers, // Use this for icon placeholder if Lucide doesn't fail
    LayoutDashboard,
    Settings,
    Bot,
    Code,
    Database,
    Search,
    Plus,
    Bell,
    User,
    LogOut,
    ChevronDown
} from "lucide-react";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen bg-neutral-950 text-white font-sans selection:bg-purple-500/30">
            {/* Sidebar */}
            <aside className="w-64 border-r border-white/10 flex flex-col fixed inset-y-0 left-0 bg-neutral-950/50 backdrop-blur-xl z-50">
                <div className="p-6 border-b border-white/5">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-lg shadow-purple-500/20">
                            <span className="font-bold text-lg">A</span>
                        </div>
                        <span className="font-semibold text-lg tracking-tight group-hover:text-purple-400 transition-colors">Awazdo</span>
                    </Link>
                </div>

                <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
                    <div className="text-xs font-medium text-neutral-500 uppercase px-3 py-2">Platform</div>
                    <NavLink href="/dashboard" icon={<LayoutDashboard size={18} />}>Overview</NavLink>
                    <NavLink href="/dashboard/projects" icon={<Code size={18} />}>Projects</NavLink>
                    <NavLink href="/dashboard/assistants" icon={<Bot size={18} />}>AI Assistants</NavLink>
                    <NavLink href="/dashboard/knowledge" icon={<Database size={18} />}>Knowledge Base</NavLink>
                    <NavLink href="/dashboard/templates" icon={<LayoutDashboard size={18} />}>Templates</NavLink>

                    <div className="mt-8 text-xs font-medium text-neutral-500 uppercase px-3 py-2">Settings</div>
                    <NavLink href="/dashboard/settings" icon={<Settings size={18} />}>Configuration</NavLink>
                </nav>

                <div className="p-4 border-t border-white/5">
                    <div className="bg-neutral-900/50 rounded-xl p-4 mb-4 border border-white/5">
                        <div className="flex justify-between text-xs mb-2">
                            <span className="text-neutral-400">Monthly Usage</span>
                            <span className="text-white font-medium">64%</span>
                        </div>
                        <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-purple-500 to-blue-500 w-[64%] rounded-full" />
                        </div>
                        <div className="mt-2 text-[10px] text-neutral-500">24,500 / 38,000 credits</div>
                    </div>

                    <button className="flex items-center gap-3 w-full p-2 hover:bg-white/5 rounded-lg transition-colors text-sm text-neutral-400 hover:text-white group">
                        <div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center border border-white/10 group-hover:border-purple-500/50 transition-colors">
                            <User size={14} />
                        </div>
                        <div className="flex-1 text-left">
                            <div className="font-medium">Parma</div>
                            <div className="text-[10px]">Pro Plan</div>
                        </div>
                        <LogOut size={14} />
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 ml-64 min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-900 via-neutral-950 to-neutral-950">
                {/* Top Header */}
                <header className="sticky top-0 z-40 h-16 border-b border-white/5 bg-neutral-950/80 backdrop-blur-md flex items-center justify-between px-8">
                    <div className="flex items-center gap-4">
                        <h1 className="text-lg font-medium text-neutral-200">Dashboard</h1>
                        <span className="text-neutral-600">/</span>
                        <span className="text-sm text-neutral-400">Overview</span>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" size={16} />
                            <input
                                type="text"
                                placeholder="Search projects..."
                                className="bg-neutral-900/50 border border-white/10 rounded-full pl-10 pr-4 py-1.5 text-sm text-neutral-300 focus:outline-none focus:border-purple-500/50 focus:bg-neutral-900 transition-all w-64 placeholder:text-neutral-600"
                            />
                        </div>

                        <button className="relative p-2 text-neutral-400 hover:text-white transition-colors rounded-full hover:bg-white/5">
                            <Bell size={18} />
                            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-neutral-950" />
                        </button>

                        <button className="bg-white text-neutral-950 px-4 py-1.5 rounded-full text-xs font-semibold hover:bg-neutral-200 transition-colors flex items-center gap-2">
                            <Plus size={14} />
                            New Project
                        </button>
                    </div>
                </header>

                <div className="p-8 pb-20 max-w-7xl mx-auto">
                    {children}
                </div>
            </main>
        </div>
    );
}

function NavLink({ href, icon, children }: { href: string; icon: React.ReactNode; children: React.ReactNode }) {
    return (
        <Link
            href={href}
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-neutral-400 hover:text-white hover:bg-white/5 transition-all hover:pl-4 group relative overflow-hidden"
        >
            <span className="text-neutral-500 group-hover:text-purple-400 transition-colors">{icon}</span>
            {children}
            {/* Hover glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
        </Link>
    );
}
