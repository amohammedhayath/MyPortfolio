import type { Experience } from "@/types";

export const experiences: Experience[] = [
    {
        id: "exp-1",
        role: "Software Development Intern",
        company: "Sony India Software Centre",
        location: "Bengaluru, India",
        type: "Internship",
        startDate: "May 2025",
        endDate: "June 2026",
        current: false,
        description: "Contributed to Python-based automation framework and AI-assisted BDD automation features, supporting expandable testing architectures across diverse mobile and desktop platforms.",
        responsibilities: [
            "Contributed to a Python-based automation framework, a core component of development infrastructure, supporting expandable testing architectures across diverse mobile and desktop platforms.",
            "Developed AI-assisted BDD automation features converting natural language test scenarios into Gherkin-format test cases and generating reusable step definitions.",
            "Implemented backend utilities, API workflows, and automation components using Python, focusing on development best practices for maintainability and workflow efficiency."
        ],
        skills: ["Python", "RAG", "LLM", "Automation", "BDD", "Gherkin", "API Workflows", "Testing Frameworks", "AI-assisted Automation"],
        companyUrl: "https://www.sonyindiasoftware.co.in/"
    }
];
