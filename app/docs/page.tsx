import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, BookOpen, Code, Server, Cpu, ShieldCheck, Mail, Globe, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
    title: "Documentation | Mohammed Hayath",
    description: "Official technical documentation, architecture overview, and tech stack specification for Mohammed Hayath's developer portfolio.",
};

export default function DocsPage() {
    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
            <main className="flex-1 max-w-4xl mx-auto px-6 pt-36 pb-24 w-full">
                {/* Back Button */}
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-xs font-mono text-amber-500 hover:text-amber-400 transition-colors mb-8 group"
                >
                    <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                    Back to Portfolio
                </Link>

                {/* Header */}
                <div className="mb-12 border-b border-border pb-8">
                    <div className="flex items-center gap-2 text-amber-500 font-mono text-xs uppercase tracking-widest mb-3">
                        <BookOpen className="w-4 h-4" />
                        Official Documentation
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
                        Developer & System <span className="text-gradient">Docs</span>
                    </h1>
                    <p className="text-muted-foreground text-base max-w-2xl leading-relaxed">
                        Technical overview, system architecture, core technologies, and structural standards powering this developer platform.
                    </p>
                </div>

                {/* Sections */}
                <div className="space-y-12">
                    {/* Overview */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold flex items-center gap-2.5 text-foreground">
                            <Globe className="w-5 h-5 text-amber-500" />
                            1. Platform Overview
                        </h2>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            This platform serves as the central digital hub for **Mohammed Hayath**, showcasing full-stack web applications, technical experience, software architecture designs, and technical publications.
                        </p>
                        <div className="p-4 rounded-lg border border-border bg-card font-mono text-xs space-y-2">
                            <div><span className="text-amber-500 font-bold">Domain:</span> https://amdhayath.dpdns.org</div>
                            <div><span className="text-amber-500 font-bold">Status:</span> Production Operational (99.99% Uptime)</div>
                            <div><span className="text-amber-500 font-bold">AI Crawler Endpoint:</span> /llms.txt</div>
                        </div>
                    </section>

                    {/* Tech Stack */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold flex items-center gap-2.5 text-foreground">
                            <Code className="w-5 h-5 text-amber-500" />
                            2. Core Tech Stack
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-5 rounded-xl border border-border bg-card">
                                <h3 className="text-sm font-bold text-foreground mb-2 flex items-center gap-2">
                                    <Cpu className="w-4 h-4 text-amber-500" /> Frontend & Framework
                                </h3>
                                <ul className="space-y-1.5 text-xs text-muted-foreground">
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-amber-500" /> Next.js 16 (App Router)</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-amber-500" /> React 19 & TypeScript</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-amber-500" /> Tailwind CSS v4</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-amber-500" /> Framer Motion</li>
                                </ul>
                            </div>
                            <div className="p-5 rounded-xl border border-border bg-card">
                                <h3 className="text-sm font-bold text-foreground mb-2 flex items-center gap-2">
                                    <Server className="w-4 h-4 text-amber-500" /> Backend & Infrastructure
                                </h3>
                                <ul className="space-y-1.5 text-xs text-muted-foreground">
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-amber-500" /> Node.js & REST APIs</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-amber-500" /> EmailJS integration</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-amber-500" /> JSON-LD Schema.org SEO</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-amber-500" /> Vercel Cloud Deployment</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* SEO & Machine Readability */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold flex items-center gap-2.5 text-foreground">
                            <ShieldCheck className="w-5 h-5 text-amber-500" />
                            3. Machine Readability & SEO
                        </h2>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            The site implements standard JSON-LD microdata schemas for search engines and an optimized <code className="text-amber-500 font-mono text-xs">/llms.txt</code> manifest for LLMs and autonomous search agents.
                        </p>
                    </section>

                    {/* Contact & Support */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold flex items-center gap-2.5 text-foreground">
                            <Mail className="w-5 h-5 text-amber-500" />
                            4. Inquiries & Services
                        </h2>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            For technical collaboration, custom web engineering, or client inquiries, visit the <Link href="/pricing" className="text-amber-500 underline font-semibold">Pricing & Services page</Link> or send an email directly to <a href="mailto:snmdhayat@gmail.com" className="text-amber-500 underline font-semibold">snmdhayat@gmail.com</a>.
                        </p>
                    </section>
                </div>
            </main>
        </div>
    );
}
