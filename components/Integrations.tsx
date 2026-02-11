'use client';

import { motion } from 'framer-motion';

const integrations = [
    'OpenAI', 'Anthropic', 'Google', 'Meta',
    'Pinecone', 'Weaviate', 'Chroma', 'MongoDB',
    'Notion', 'Slack', 'Discord', 'HubSpot',
    'Salesforce', 'Zendesk', 'Intercom', 'Linear',
    'Github', 'Vercel', 'AWS', 'Azure'
];

export default function Integrations() {
    return (
        <section id="integrations" className="py-20 bg-slate-950/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h3 className="text-2xl font-semibold text-slate-300 mb-12">Trusted by teams at innovative companies</h3>

                <div className="relative overflow-hidden w-full h-20">
                    <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none"></div>

                    <motion.div
                        className="flex space-x-12 absolute whitespace-nowrap"
                        initial={{ x: 0 }}
                        animate={{ x: '-50%' }}
                        transition={{ repeat: Infinity, duration: 40, ease: 'linear' }}
                    >
                        {integrations.concat(integrations).map((item, index) => (
                            <span key={index} className="text-2xl font-bold text-slate-500 hover:text-white transition-colors cursor-default">
                                {item}
                            </span>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
