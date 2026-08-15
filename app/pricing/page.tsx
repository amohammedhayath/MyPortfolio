import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, DollarSign, Code, Zap, Layers, Mail, CheckCircle2, MessageSquare } from "lucide-react";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
    title: "Pricing & Services | Mohammed Hayath",
    description: "Custom web development services, project pricing model, and contact information for Mohammed Hayath.",
};

const SERVICES = [
    {
        icon: Code,
        title: "Custom Developer Portfolios & Websites",
        description: "Modern, high-performance, and responsive personal or company websites crafted with Next.js, React, and Tailwind CSS.",
        features: ["Fully Responsive Design", "SEO & JSON-LD Microdata", "Dark/Light Mode", "Fast Performance & Animations"],
    },
    {
        icon: Layers,
        title: "Full-Stack Web Applications",
        description: "End-to-end web applications built with scalable frontend architectures, backend APIs, and database integrations.",
        features: ["Next.js App Router & React", "TypeScript & State Management", "Database & Auth Integration", "Production Cloud Deployment"],
    },
    {
        icon: Zap,
        title: "API & Backend System Design",
        description: "RESTful API engineering, backend service optimization, database design, and microservices architecture.",
        features: ["Node.js & Express / Python", "Database Schema Design", "RESTful API Endpoints", "Performance Optimization"],
    },
];

export default function PricingPage() {
    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
            <main className="flex-1 max-w-4xl mx-auto px-6 pt-36 pb-12 w-full">
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
                        <DollarSign className="w-4 h-4" />
                        Services & Custom Quotes
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
                        Web Development <span className="text-gradient">Pricing & Services</span>
                    </h1>
                    <p className="text-muted-foreground text-base max-w-2xl leading-relaxed">
                        I build tailored, high-performance web applications and websites. Every project is scoped based on your specific requirements and goals.
                    </p>
                </div>

                {/* Pricing Notice Card */}
                <div className="mb-12 p-6 rounded-xl border border-amber-500/30 bg-amber-500/5 backdrop-blur-sm">
                    <h2 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                        <MessageSquare className="w-5 h-5 text-amber-500" />
                        Custom Quote Model
                    </h2>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        Pricing depends on project scope, features, and timeline. Contact me with your project details to get a free consultation and customized project estimate.
                    </p>
                    <a
                        href="mailto:snmdhayat@gmail.com"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded bg-amber-500 hover:bg-amber-600 text-black font-mono text-xs font-bold transition-all"
                    >
                        <Mail className="w-4 h-4" />
                        Email Me: snmdhayat@gmail.com
                    </a>
                </div>

                {/* Services Grid */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold text-foreground mb-6">Services Offered</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {SERVICES.map((service) => {
                            const IconComponent = service.icon;
                            return (
                                <div key={service.title} className="p-6 rounded-xl border border-border bg-card flex flex-col justify-between hover:border-amber-500/30 transition-all">
                                    <div>
                                        <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 mb-4">
                                            <IconComponent className="w-5 h-5" />
                                        </div>
                                        <h3 className="text-base font-bold text-foreground mb-2">{service.title}</h3>
                                        <p className="text-xs text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                                    </div>
                                    <ul className="space-y-2 border-t border-border/60 pt-4">
                                        {service.features.map((feat) => (
                                            <li key={feat} className="flex items-center gap-2 text-[11px] text-foreground/80 font-mono">
                                                <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                                                <span>{feat}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Embedded Contact Section */}
                <div className="border-t border-border pt-12">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-foreground">Get a <span className="text-gradient">Custom Estimate</span></h2>
                        <p className="text-muted-foreground text-sm mt-2">Fill out the form below or send a message directly.</p>
                    </div>
                    <Contact />
                </div>
            </main>
        </div>
    );
}
