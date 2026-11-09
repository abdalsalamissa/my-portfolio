import ProjectCard from "@/components/ProjectCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects",
    description: "Explore projects built by Abdelsalam Issa using React, TypeScript, ASP.NET Core, and related technologies."
};


const projects = [
    {
        title: "My Day - Task Manager",
        category: "Full-Stack Application",
        description: "A task management application built with React and TypeScript, connected to an ASP.NET Core API to manage tasks.",
        technologies: [
            "React",
            "TypeScript",
            "ASP.NET Core",
            "REST API",
        ],
        githubUrl: "https://github.com/abdalsalamissa/my-day-ts",
    },
    {
        title: "Tasks API",
        category: "Backend Development",
        description: "A RESTful API developed with ASP.NET Core, implementing CRUD operations and service-based architecture for task management.",
        technologies: [
            "C#",
            "ASP.NET Core",
            "REST API",
            "Dependency Injection"
        ],
        githubUrl: "https://github.com/abdalsalamissa/WebApplication1",
    },
    {
        title: "Syria Academy",
        category: "Full-Stack Application",
        description: "A web-based e-learning platform designed for Syrian students, enabling personalized learning experiences, progress tracking, and real-time interaction between students and teachers. The platform combines intuitive course management, and collaborative tools to support effective online education.",
        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "C#",
            "ASP.NET Core",
            "REST API",
            "Dependency Injection"
        ],
        githubUrl: "https://github.com/abdalsalamissa/Syria_Academy",
    },
    {
        title: "Tender Management API",
        category: "Backend Development",
        description: "A role-based tender management system with secure authentication, bid submissions, automated bid evaluation, and tender awarding.",
        technologies: [
            "C#",
            "ASP.NET Core",
            "REST API",
            "Dependency Injection"
        ],
        githubUrl: "https://github.com/abdalsalamissa/SkyAcademy",
    },
];

export default function ProjectsPage() {
    return (
        <main className="min-h-screen px-6 py-16 animate-fade-in-up">
            <section className="mx-auto max-w-5xl">

                {/* page into */}
                <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[var(--primary)]">
                    My Work
                </p>

                <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
                    Projects I&apos;ve Built
                </h1>

                <p className="mb-12 max-w-2xl leading-relaxed text-[var(--muted)]">
                    A collection of projects where I&apos;ve applied my development
                    skills, explored new technologies, and turned ideas into
                    working applications.
                </p>

                {/* projects grid */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.title}
                            title={project.title}
                            category={project.category}
                            description={project.description}
                            technologies={project.technologies}
                            githubUrl={project.githubUrl}
                        />
                    ))}
                </div>
            </section>
        </main>
    );
}