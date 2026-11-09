import ExperienceCard from "@/components/ExperienceCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Experience",
    description: "Discover Abdelsalam Issa's software development training, internships, and technical experience."
};


const experiences = [
    {
        company: "TSME",
        role: "Software Development Trainee",
        type: "Training",
        description: "Completed intensive practical training in full-stack web development, developing frontend applications with React and TypeScript, building RESTful APIs with ASP.NET Core, and integrating both layers in a complete web application. Gained hands-on experience with version control, database management, and containerization.",
        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "TypeScript",
            "React",
            "ASP.NET Core",
            "ASP.NET Web API",
            "Rest APIs",
            "Database",
            "Git",
            "Docker",
            "Next.js",
        ],
    },
    {
        company: "Sky Software",
        role: "Software Development Intern",
        type: "Internship",
        description: "Developed and maintained scalable backend APIs using ASP.NET Core and Entity Framework Core, applying OOP, SOLID principles, and clean architecture. Built responsive frontend components using Angular and TypeScript, collaborating with senior developers to successfully deliver two end-to-end full-stack projects from design to deployment.",
        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "TypeScript",
            "Angular",
            "ASP.NET Core",
            "ASP.NET Web API",
            "Software Design Patterns",
            "Entity Framework (EF) Core",
            "Domain-Driven Design (DDD)",
            "JSON Web Token (JWT)",
            "SOLID Design Principles",
            "REST APIs",
            "Databases",
            "Language Integrated Query (LINQ)",
        ],
    },
    {
        company: "Hikma Pharmaceuticals",
        role: "IT Infrastructure Intern",
        type: "Internship",
        description: "Proactively monitored and managed network infrastructure using SolarWinds, and resolved technical incidents via the Ivanti ticketing system, performing first-level troubleshooting for local and offsite machines. Collaborated with internal IT teams to resolve complex issues, ensured system compliance, and implemented continuous improvements to optimize network performance and infrastructure security.",
        technologies: [
            "SolarWinds",
            "Network Monitoring Tools",
            "Incident Management",
            "Ivanti Ticketing System",
            "Network Troubleshooting",
            "Escalation",
            "Microsoft 365",
            "Remote Support",
            "NOC Monitoring",
        ],
    },
];

export default function ExperiencePage() {
    return (
        <main className="min-h-screen px-6 py-16 animate-fade-in-up">
            <section className="mx-auto max-w-5xl">

                {/* page intro */}
                <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[var(--primary)]">
                    My Journey
                </p>

                <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
                    Experience & Training
                </h1>

                <p className="mb-12 max-w-2xl leading-relaxed text-[var(--muted)]">
                    My professional journey so far, including practical training,
                    internships, and the skills I&apos;ve developed along the way.
                </p>

                {/* experience card */}
                <div className="grid grid-cols-1 gap-6">
                    {experiences.map((experience) =>(
                        <ExperienceCard
                            key={experience.company}
                            company={experience.company}
                            role={experience.role}
                            type={experience.type}
                            description={experience.description}
                            technologies={experience.technologies}
                        />
                    ))}
                </div>
            </section>
        </main>
    );
}