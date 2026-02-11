import Link from 'next/link';
import { Twitter, Linkedin, Github } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-slate-950 border-t border-slate-800 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 block mb-4">
                            Awazdo
                        </Link>
                        <p className="text-slate-400 text-sm">
                            The Enterprise AI Transformation Platform. Build, deploy, and scale your AI workforce.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Product</h4>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li><Link href="#" className="hover:text-purple-400">Features</Link></li>
                            <li><Link href="#" className="hover:text-purple-400">Integrations</Link></li>
                            <li><Link href="#" className="hover:text-purple-400">Pricing</Link></li>
                            <li><Link href="#" className="hover:text-purple-400">Changelog</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Company</h4>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li><Link href="#" className="hover:text-purple-400">About</Link></li>
                            <li><Link href="#" className="hover:text-purple-400">Blog</Link></li>
                            <li><Link href="#" className="hover:text-purple-400">Careers</Link></li>
                            <li><Link href="#" className="hover:text-purple-400">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Legal</h4>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li><Link href="#" className="hover:text-purple-400">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:text-purple-400">Terms of Service</Link></li>
                            <li><Link href="#" className="hover:text-purple-400">Security</Link></li>
                            <li><Link href="#" className="hover:text-purple-400">DPA</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-sm">
                        © {new Date().getFullYear()} Awazdo Inc. All rights reserved.
                    </p>
                    <div className="flex space-x-6">
                        <Link href="#" className="text-slate-500 hover:text-white"><Twitter size={20} /></Link>
                        <Link href="#" className="text-slate-500 hover:text-white"><Linkedin size={20} /></Link>
                        <Link href="#" className="text-slate-500 hover:text-white"><Github size={20} /></Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
