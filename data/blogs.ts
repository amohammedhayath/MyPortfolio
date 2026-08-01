import type { Blog } from "@/types";

export const blogs: Blog[] = [
    {
        id: "learn-to-code-2026",
        title: "Should You Still Learn to Code in 2026? You’re Asking the Wrong Question.",
        subtitle: "The Honest Answer Nobody Is Giving You",
        description:
            "Every few months, a fresh wave of panic hits the tech community. A new coding model drops, an executive declares that “human programming is dead,” and forums overflow with the exact same anxious thread: “Should I still learn to code?” The answer is not what you think.",
        publishDate: "August 01, 2026",
        readTime: "9 min read",
        url: "https://medium.com/@mohammedhayathc010/should-you-still-learn-to-code-in-2026-youre-asking-the-wrong-question-4cafe3d89b6c",
        tags: ["Software Engineering", "AI", "Career Guidance", "Web Development"],
        featured: true,
    },
    {
        id: "job-hunting-2026",
        title: "The 2026 Tech Hiring Matrix: Why 500 Applications Won’t Get You Hired (And What Will)",
        subtitle: "“Just keep applying. It’s a numbers game.”",
        description:
            "If you graduated recently or are currently hunting for an entry-level tech role, you’ve probably heard this advice a hundred times. You’ve tuned your resume, passed it through ATS checkers, spent late nights grinding DSA problems, and clicked Easy Apply on hundreds of listings only to receive a wall of automated rejection emails.",
        publishDate: "June 5, 2026",
        readTime: "7 min read",
        url: "https://medium.com/@mohammedhayathc010/the-2026-tech-hiring-matrix-why-500-applications-wont-get-you-hired-and-what-will-81816155792d",
        tags: ["Career Guidance", "Job Hunting", "Software Engineering", "AI"],
        featured: true,
    },
];

export const featuredBlogs = blogs.filter((b) => b.featured);
