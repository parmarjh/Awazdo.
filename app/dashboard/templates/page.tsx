
"use client";

import { motion } from "framer-motion";
import { Plus, Folder, Search, Grid, List, MoreVertical, LayoutTemplate, Briefcase, GraduationCap, Gavel, BarChart3, MessageSquare, PenTool } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const CATEGORIES = [
    { id: 'all', label: 'All Templates' },
    { id: 'compliance', label: 'Compliance & Legal', icon: <Gavel size={14} /> },
    { id: 'support', label: 'Customer Support', icon: <MessageSquare size={14} /> },
    { id: 'ops', label: 'Operations & HR', icon: <Grid size={14} /> },
    { id: 'finance', label: 'Finance & Accounting', icon: <Briefcase size={14} /> },
    { id: 'healthcare', label: 'Healthcare & Pharma', icon: <Plus size={14} /> },
    { id: 'sales', label: 'Sales & Marketing', icon: <BarChart3 size={14} /> },
    { id: 'analysis', label: 'Data & Analysis', icon: <PenTool size={14} /> },
    { id: 'education', label: 'Education', icon: <GraduationCap size={14} /> },
];

const TEMPLATES = [
    { id: 1, title: 'InfoSec Questionnaire Agent', category: 'compliance', description: 'Automatically draft responses to InfoSec questionnaires.', integration: 'Security', users: 850 },
    { id: 2, title: 'Sales Call Compliance Classifier', category: 'compliance', description: 'Classify the compliance of sales calls.', integration: 'Sales', users: 1200 },
    { id: 3, title: 'Notion Knowledge Base', category: 'ops', description: 'AI Assistant with knowledge over a Notion database.', integration: 'Notion', users: 2400 },
    { id: 4, title: 'Staff Training AI Assistant', category: 'ops', description: 'AI assistant to train staff on a business knowledge.', integration: 'Internal', users: 950 },
    { id: 5, title: 'Evaluator Template', category: 'analysis', description: 'Evaluate a StackAI project using batch runs', integration: 'StackAI', users: 300 },
    { id: 6, title: 'IC Memos AI Assistant', category: 'finance', description: 'AI Assistant with knowledge over Investment Committee (IC) memos.', integration: 'Finance', users: 450 },
    { id: 7, title: 'Public Policy Memo Generator', category: 'compliance', description: 'Enter a policy-related topic and receive a comprehensive memo', integration: 'Legal', users: 600 },
    { id: 8, title: 'Salesforce Assistant', category: 'sales', description: 'Automatically translating your queries into SOQL and searching for relevant information', integration: 'Salesforce', users: 3100 },
    { id: 9, title: 'Company Policy Compliance Chatbot', category: 'compliance', description: 'Ensure compliance with all company policies', integration: 'HR', users: 1500 },
    { id: 10, title: 'Essay Feedback Agent', category: 'education', description: 'Ensure students receive timely feedback on writing assignments', integration: 'Education', users: 800 },
    { id: 11, title: 'Policy Q&A & Coverage Validation Agent', category: 'compliance', description: 'Ready to answer questions about policies and coverage', integration: 'Insurance', users: 700 },
    { id: 12, title: 'Technical Support Assistant', category: 'support', description: 'Automatically answer tech support questions', integration: 'Support', users: 4200 },
    { id: 13, title: 'Course Assistant', category: 'education', description: 'Efficiently answer student questions related to course logistics, assignments, and more', integration: 'Education', users: 1100 },
    { id: 14, title: 'Earnings Call Insight Agent', category: 'finance', description: 'Get insights from earnings calls just by uploading an audio file', integration: 'Finance', users: 1300 },
    { id: 15, title: 'Regulatory Compliance Agent', category: 'compliance', description: 'Check assets across FAR or other regulations instantly', integration: 'Legal', users: 900 },
    { id: 16, title: 'Refund and Expense Agent', category: 'finance', description: "Manage your company's refunds and expenses", integration: 'Finance', users: 1600 },
    { id: 17, title: 'Spreadsheet Comparison Agent', category: 'analysis', description: 'Compare two spreadsheets seamlessly', integration: 'Excel', users: 2100 },
    { id: 18, title: 'Market Research Agent', category: 'analysis', description: 'Assistant for financial and market research', integration: 'Analysis', users: 1800 },
    { id: 19, title: 'Staff Onboarding and Training AI Assistant', category: 'ops', description: 'Answer staff onboarding and training questions, instantly', integration: 'HR', users: 1400 },
    { id: 20, title: 'Advanced Due Diligence', category: 'finance', description: 'Execute advanced due diligence over financial documents and write to Excel', integration: 'Finance', users: 650 },
    { id: 21, title: 'Spreadsheet Chatbot', category: 'analysis', description: 'Ask your spreadsheets questions in plain English', integration: 'Excel', users: 2800 },
    { id: 22, title: 'Chatbot with Routing', category: 'support', description: 'This AI chatbot routes user questions based on their content to give tailored responses.', integration: 'Chat', users: 3500 },
    { id: 23, title: 'Document Comparison Agent', category: 'analysis', description: 'This agent reviews two documents and returns a comparison of the relevant sections in an easy-to-read format.', integration: 'Docs', users: 1900 },
    { id: 24, title: 'Support Desk Agent', category: 'support', description: 'This agent helps support representatives find resources to answer questions.', integration: 'Support', users: 2600 },
    { id: 25, title: 'RFP Response Agent', category: 'sales', description: 'This agent generates a concise and persuasive RFP response based on the provided details and documents.', integration: 'Sales', users: 1000 },
    { id: 26, title: 'Scholarship Matching Agent', category: 'education', description: 'This agent helps students identify scholarships for which they qualify based on GPA, grade level, and more.', integration: 'Education', users: 400 },
    { id: 27, title: 'Contract Analyst', category: 'compliance', description: 'This agent allows users to batch-upload contract files, automatically extracts key metadata and clauses.', integration: 'Legal', users: 1150 },
    { id: 28, title: 'Advising Assistant', category: 'education', description: 'This agent supports academic staff for a department or major, including student and professional advisors', integration: 'Education', users: 550 },
    { id: 29, title: 'Underwriting Submission Assistant', category: 'finance', description: 'This agent helps automate insurance underwriting by collecting and synthesizing information.', integration: 'Insurance', users: 750 },
    { id: 30, title: 'Grant Matching Agent', category: 'finance', description: 'This agent analyzes the applicant’s organizational and project profile, cross-references it with available grant opportunities, and returns a ranked shortlist of grants.', integration: 'NonProfit', users: 380 },
    { id: 31, title: 'Financial Statements Reconciliation Agent', category: 'finance', description: 'This agent compares two financial statements and presents a markdown table with a side-by-side comparison of the balance sheet.', integration: 'Finance', users: 920 },
    { id: 32, title: 'Postgres Chatbot', category: 'analysis', description: 'Easily chat with Postgres and receive instant, cited answers.', integration: 'Database', users: 2300 },
    { id: 33, title: 'Blog Post From Video Agent', category: 'sales', description: 'This agent generates a clear, professional blog post with sections that align to the video content of a given YouTube video.', integration: 'YouTube', users: 1700 },
    { id: 34, title: 'SOAP Notes Agent', category: 'healthcare', description: 'This agent acts as a medical assistant that generates SOAP notes.', integration: 'Healthcare', users: 2500 },
    { id: 35, title: 'MySQL Chatbot', category: 'analysis', description: "This agent receives a user request and the results of a query to the company's data warehouse and answers the user request in natural language.", integration: 'Database', users: 2100 },
    { id: 36, title: 'Slack Knowledge Base Chatbot', category: 'ops', description: 'This agent answers questions using context from Slack messages and from SharePoint.', integration: 'Slack', users: 3300 },
    { id: 37, title: 'Email Compliance Classifier Agent', category: 'compliance', description: 'This agent is triggered by an incoming email and checks it for compliance with a set of guidelines. Compliance feedback is automatically logged in a Google sheet.', integration: 'Email', users: 1050 },
    { id: 38, title: 'Airtable Chatbot', category: 'analysis', description: 'This agent answers natural language questions about data from Airtable.', integration: 'Airtable', users: 2900 },
    { id: 39, title: 'FNOL Reports Intake and Triage Agent', category: 'finance', description: 'This workflow automatically processes incoming "First Notice of Loss" (FNOL) insurance emails.', integration: 'Insurance', users: 600 },
    { id: 40, title: 'IT Support Chatbot', category: 'support', description: 'This agent answers IT questions in a clear, concise manner and automatically sends escalation emails if the answer is unclear.', integration: 'IT', users: 3800 },
    { id: 41, title: 'Call QA and Compliance Agent', category: 'compliance', description: 'This agent assesses recordings of calls for quality assurance and compliance.', integration: 'CallCenter', users: 1350 },
    { id: 42, title: 'Website Compliance Agent', category: 'compliance', description: 'This agent cross-checks websites against relevant government and industry regulations and automatically flags gaps.', integration: 'Web', users: 800 },
    { id: 43, title: 'Transcription and Translation Agent', category: 'ops', description: "This agent intakes a message or transcribes audio, translates it, and adjusts the formality level based on the user's preferences.", integration: 'Language', users: 1950 },
    { id: 44, title: 'Control Checker and Writer Agent', category: 'compliance', description: 'This agent is an expert in control design and helps the user write a control description that meets the requirements in internal control standards.', integration: 'Audit', users: 500 },
    { id: 45, title: 'Client Support Chatbot', category: 'support', description: 'This chatbot answers client questions about financial services products and offerings by referencing official documents in SharePoint.', integration: 'Finance', users: 1750 },
    { id: 46, title: 'Document Classification Agent', category: 'ops', description: 'This agent is responsible for classifying received files into one of ten categories, then writing the given classification to a Google Sheet.', integration: 'Docs', users: 2250 },
    { id: 47, title: 'Project Staffing Agent', category: 'ops', description: 'This agent identifies employees with relevant experience and suggest which employees should be staffed on certain projects.', integration: 'HR', users: 700 },
    { id: 48, title: 'HR Policy Chatbot', category: 'ops', description: 'This agent answers employee questions regarding HR policies by referencing a knowledge base of official HR documents.', integration: 'HR', users: 2900 },
    { id: 49, title: 'Business Partnerships Assistant', category: 'sales', description: 'This AI assistant intakes company information and identifies potential business partnership opportunities based on a given city.', integration: 'Business', users: 550 },
    { id: 50, title: 'Investor Help Desk Agent', category: 'finance', description: 'This agent helps investment managers or financial advisors prepare for client meetings by giving them up-to-date information about products and services.', integration: 'Finance', users: 650 },
    { id: 51, title: 'Proposal Search Agent', category: 'sales', description: 'This agent searches a knowledge base of completed past proposals and pulls them for a user to assist while writing a new proposal.', integration: 'Sales', users: 900 },
    { id: 52, title: 'AI Agent Builder', category: 'ops', description: 'Create intelligent AI agents with custom knowledge bases and tools', integration: 'Custom', users: 5000 },
    { id: 53, title: 'Research Assistant', category: 'healthcare', description: 'Healthcare assistant for research use cases (Clinical Dev, Medical Affairs, Market Access)', integration: 'Research', users: 1100 },
    { id: 54, title: 'EPIC Patient 360', category: 'healthcare', description: 'Agent for benefit navigation', integration: 'EPIC', users: 400 },
    { id: 55, title: 'Quality Control (CAPA)', category: 'compliance', description: 'Agent for quality control and regulation', integration: 'Quality', users: 850 },
    { id: 56, title: 'Knowledge Base Agent', category: 'support', description: 'This agent is designed to answer user questions by searching through one or more knowledge bases and providing a concise, conversational response.', integration: 'Knowledge', users: 3600 },
    { id: 57, title: 'Custom API Knowledge Base Agent', category: 'analysis', description: 'This AI agent loads data from a custom API based on the user request.', integration: 'API', users: 1800 },
    { id: 58, title: 'Typeform Email Lead Gen', category: 'sales', description: 'Drafts respectful and creative email bodies based on lead collection form data.', integration: 'Typeform', users: 1250 },
    { id: 59, title: 'Compliance Control Agent', category: 'compliance', description: 'Run compliance checks automatically', integration: 'Audit', users: 980 },
    { id: 60, title: 'CapEx Classification Agent', category: 'finance', description: 'Classifies a given project as CapEx or OpEx according to standard accounting and company policy.', integration: 'Finance', users: 720 },
    { id: 61, title: 'Website Research Agent', category: 'analysis', description: 'Scrapes a webpage to research the requested items and terms of interest, and returns results in a JSON.', integration: 'Web', users: 2000 },
    { id: 62, title: 'Pharma/Med Device - Safety Signal', category: 'healthcare', description: 'Medical and pharma agent', integration: 'Pharma', users: 350 },
    { id: 63, title: 'Investment Memo Agent', category: 'finance', description: 'Get a comprehensive, accurate investment memo with multiple sections.', integration: 'Finance', users: 580 },
    { id: 64, title: 'Snowflake AI Agent', category: 'analysis', description: 'Chat with a Snowflake data warehouse using plain language. No need for SQL.', integration: 'Snowflake', users: 1550 },
    { id: 65, title: 'Therapist Notes Checker', category: 'healthcare', description: 'Validates clinical documentation against billing policies and CPT guidelines before notes are finalized.', integration: 'Healthcare', users: 850 },
    { id: 66, title: 'Visit Summaries', category: 'healthcare', description: 'Converts audio recordings of patient visits into structured clinical notes and patient-friendly instructions.', integration: 'Healthcare', users: 1300 },
    { id: 67, title: 'Patient Prioritization & Outreach', category: 'healthcare', description: 'Helps care managers prioritize which patients need immediate attention and prepares outreach materials.', integration: 'Healthcare', users: 600 },
    { id: 68, title: 'No-Show Reduction Reminders', category: 'healthcare', description: 'Reduces no-shows by sending smart, multi-touch reminders (SMS/Email) at key intervals.', integration: 'Healthcare', users: 950 },
    { id: 69, title: 'Call Center Compliance', category: 'healthcare', description: 'Automatically audits call center recordings to verify regulatory compliance.', integration: 'CallCenter', users: 1100 },
    { id: 70, title: 'Claim Denial Prevention', category: 'healthcare', description: 'Prevents claim denials by validating claims before submission.', integration: 'Insurance', users: 1400 },
    { id: 71, title: 'Prior Authorization (RCM)', category: 'healthcare', description: 'Automates the assembly of prior authorization packets by pulling patient data and clinical records.', integration: 'Insurance', users: 800 },
    { id: 72, title: 'Patient 360 View', category: 'healthcare', description: 'Aggregates data from multiple systems into a single snapshot view.', integration: 'Healthcare', users: 1700 },
    { id: 73, title: 'Appeal Letter Drafting', category: 'healthcare', description: 'Automates appeal letter drafting by classifying denial reasons and pulling clinical evidence.', integration: 'Insurance', users: 650 },
    { id: 74, title: 'Clinical Trial Competitor Analysis', category: 'healthcare', description: 'Reviews clinical trial websites and send a weekly competition analysis email (Example - Dexcom)', integration: 'Research', users: 200 },
];

export default function TemplatesPage() {
    const [activeCategory, setActiveCategory] = useState('all');

    const filteredTemplates = activeCategory === 'all'
        ? TEMPLATES
        : TEMPLATES.filter(t => t.category === activeCategory);

    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-white">Templates</h1>
                    <p className="text-neutral-400">Jumpstart your workflow with pre-built AI agents.</p>
                </div>
                <div className="flex bg-neutral-900/50 border border-white/10 rounded-lg p-1">
                    <button className="px-3 py-1.5 text-xs font-medium bg-white/10 text-white rounded shadow-sm">Community</button>
                    <button className="px-3 py-1.5 text-xs font-medium text-neutral-400 hover:text-white transition-colors">My Organization</button>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
                {/* Sidebar Filters */}
                <aside className="w-full lg:w-64 space-y-6">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" size={16} />
                        <input
                            type="text"
                            placeholder="Search templates..."
                            className="w-full bg-neutral-900/50 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-sm text-neutral-300 focus:outline-none focus:border-purple-500/50 transition-all placeholder:text-neutral-600"
                        />
                    </div>

                    <div>
                        <h3 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-3">Categories</h3>
                        <div className="space-y-1">
                            {CATEGORIES.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => setActiveCategory(cat.id)}
                                    className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-3 ${activeCategory === cat.id
                                        ? "bg-purple-600/10 text-purple-400 border border-purple-500/20"
                                        : "text-neutral-400 hover:text-white hover:bg-white/5"
                                        }`}
                                >
                                    {cat.icon || <LayoutTemplate size={14} />}
                                    {cat.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </aside>

                {/* Templates Grid */}
                <div className="flex-1">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredTemplates.map((template, i) => (
                            <motion.div
                                key={template.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.05 }}
                                className="group flex flex-col h-full bg-neutral-900/40 border border-white/5 rounded-2xl p-5 hover:border-purple-500/30 transition-all hover:bg-neutral-900/60 relative overflow-hidden cursor-pointer"
                            >
                                <div className="absolute top-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="bg-purple-600 text-white text-[10px] font-bold px-2 py-1 rounded shadow-lg">Use Template</div>
                                </div>

                                <div className="mb-4">
                                    <div className="flex justify-between items-start mb-2">
                                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center text-xl">
                                            {/* Simple Icon placeholder based on first letter */}
                                            {template.integration[0]}
                                        </div>
                                    </div>
                                    <h3 className="font-semibold text-white group-hover:text-purple-400 transition-colors">{template.title}</h3>
                                    <div className="flex items-center gap-2 mt-1">
                                        <span className="text-xs text-neutral-500 bg-white/5 px-2 py-0.5 rounded border border-white/5">{template.integration}</span>
                                        <span className="text-[10px] text-neutral-500">• {template.users} users</span>
                                    </div>
                                </div>

                                <p className="text-sm text-neutral-400 flex-1 mb-4 line-clamp-2">
                                    {template.description}
                                </p>

                                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-neutral-500">
                                    <span>By Awazdo Team</span>
                                    <div className="flex -space-x-1">
                                        {[1, 2, 3].map(u => <div key={u} className="w-4 h-4 rounded-full bg-neutral-700 border border-neutral-900" />)}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {filteredTemplates.length === 0 && (
                        <div className="flex flex-col items-center justify-center py-20 text-neutral-500">
                            <LayoutTemplate size={48} className="mb-4 opacity-20" />
                            <p>No templates found for this category.</p>
                            <button onClick={() => setActiveCategory('all')} className="text-purple-400 hover:underline mt-2 text-sm">Clear filters</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
