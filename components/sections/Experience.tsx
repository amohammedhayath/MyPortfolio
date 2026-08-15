"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar, ExternalLink, CheckCircle2 } from "lucide-react";
import SectionWrapper from "@/components/common/SectionWrapper";
import { experiences } from "@/data/experience";

export default function Experience() {
    return (
        <SectionWrapper id="experience" className="py-32 border-t border-border bg-background">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="text-[10px] font-mono text-amber-500 font-bold uppercase tracking-widest bg-amber-500/5 px-2.5 py-1 border border-amber-500/20 rounded">
                        Career Nodes
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4 tracking-tighter">
                        Work <span className="text-gradient">Experience</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-base leading-relaxed">
                        My professional journey, software engineering roles, and contributions in building web products.
                    </p>
                </motion.div>

                <div className="space-y-12 relative before:absolute before:left-0 before:top-2 before:bottom-2 before:w-[1px] before:bg-border/60">
                    {experiences.map((exp, i) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="relative pl-8 group"
                        >
                            {/* Timeline Node Connector */}
                            <div className="absolute left-[-5px] top-2 w-[9px] h-[9px] rounded-full border-2 border-border bg-background group-hover:border-amber-500 group-hover:bg-amber-500 transition-all duration-300 z-10" />

                            <div className="p-6 md:p-8 rounded-xl border border-border bg-card hover:border-amber-500/30 transition-all duration-300 shadow-sm">
                                {/* Header: Role & Period */}
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-foreground group-hover:text-amber-500 transition-colors flex items-center gap-2">
                                            {exp.role}
                                            {exp.current && (
                                                <span className="px-2 py-0.5 rounded border border-amber-500/30 bg-amber-500/10 text-amber-500 font-mono text-[9px] font-bold uppercase tracking-wider">
                                                    Current
                                                </span>
                                            )}
                                        </h3>
                                        <p className="text-sm font-semibold text-muted-foreground mt-0.5 flex items-center gap-2">
                                            <span>{exp.company}</span>
                                            {exp.companyUrl && (
                                                <a
                                                    href={exp.companyUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center text-amber-500 hover:underline text-xs"
                                                >
                                                    <ExternalLink className="w-3 h-3 ml-0.5" />
                                                </a>
                                            )}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2 text-muted-foreground font-mono text-[10px] font-bold uppercase tracking-wider shrink-0">
                                        <Calendar className="w-3.5 h-3.5" />
                                        {exp.startDate} – {exp.endDate}
                                    </div>
                                </div>

                                {/* Meta details */}
                                <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-6">
                                    <div className="flex items-center gap-1.5 text-xs font-mono">
                                        <Briefcase className="w-3.5 h-3.5 text-amber-500" />
                                        {exp.type}
                                    </div>
                                    <div className="flex items-center gap-1.5 text-xs font-mono">
                                        <MapPin className="w-3.5 h-3.5 text-amber-500" />
                                        {exp.location}
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                                    {exp.description}
                                </p>

                                {/* Responsibilities list */}
                                {exp.responsibilities && exp.responsibilities.length > 0 && (
                                    <ul className="space-y-2 mb-6">
                                        {exp.responsibilities.map((resp, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-xs text-foreground/80 leading-relaxed">
                                                <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                                                <span>{resp}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                {/* Skill tags */}
                                <div className="flex flex-wrap gap-2">
                                    {exp.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-2 py-0.5 font-mono text-[10px] text-muted-foreground rounded border border-border bg-secondary group-hover:border-amber-500/20 transition-colors"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
}
