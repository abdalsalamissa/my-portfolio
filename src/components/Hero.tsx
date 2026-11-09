import TechBadge from './TechBadge';
import Link from 'next/link';

const frontendTechnologies = [
    "React", "TypeScript", "Next.js", "Angular", "HTML", "CSS", "JavaScript"
]

const backendTechnologies = [
    "ASP.NET Core", "Entity Framework", "SQL Server", "Oracle Database", "PL/SQL", "LINQ", "Web API"
]

export default function Hero() {
    return (
        <section className="bg-[var(--surface)] rounded-2xl max-w-5xl w-full p-8 md:p-12 mx-auto my-8 shadow-2xl animate-fade-in-up">

            {/* main grid layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Column 1: Hero Content */}
                <div className="space-y-6">
                    <p className="text-[var(--primary)] text-sm md:text-base font-semibold tracking-widest uppercase">
                    Hello, I&apos;m Abdelsalam 👋
                    </p>

                    <h1 className="text-white text-4xl md:text-4xl font-bold leading-tight">
                    Where code meets creativity, and problems become possibilities.
                    </h1>

                    <p className="text-[var(--primary)] text-2xl md:text-3xl font-semibold">
                    Software Developer
                    </p>

                    <p className="text-[var(--muted)] text-base md:text-lg leading-relaxed max-w-3xl">
                    Tired of clunky, confusing applications? So am I. That&apos;s why I&apos;m driven by the challenge 
                    of turning complex ideas into powerful, elegant solutions. With React, TypeScript, and .NET, 
                    I bridge the gap between vision and reality—building software that doesn&apos;t just work, but feels effortless.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-4 pt-2">
                        <Link
                            href="/projects"
                            className="inline-flex items-center gap-2 bg-[var(--primary)] hover:bg-blue-600 text-white font-semibold text-base px-7 py-3.5 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/20"
                        >
                            Explore My Work
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2.5}
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M7 17L17 7M17 7H7M17 7v10"
                            />
                            </svg>
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 border border-[var(--muted)]/50 hover:border-[var(--primary)] text-white font-semibold text-base px-7 py-3.5 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/10"
                        >
                            Get in Touch
                        </Link>
                    </div>
                </div>

                {/* Column 2: Developer themed card */}
                <div className="bg-[var(--surface-light)] rounded-2xl p-6 md:p-8 border border-[var(--border)] relative overflow-hidden group">
                    <div className="absolute -right-6 -top-6 text-[var(--primary)] opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                        <svg
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="140"
                            height="140"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1"
                            strokeLinecap="round"
                            strokeLinejoin="round">
                                <polyline points="16 18 22 12 16 6"></polyline>
                                <polyline points="8 6 2 12 8 18"></polyline>
                        </svg>
                    </div>
                    {/* heading */}
                    <h3 className="text-white font-mono text-xl mb-6 flex items-center gap-2 relative z-10">
                        <span className="text-[var(--primary)]">&lt;</span>
                        Developer
                        <span className="text-[var(--primary)]">&gt;</span>
                    </h3>
                    {/* tech stack badges */}
                    <div className="space-y-5 relative z-10">
                        <div className="space-y-2">
                            <p className="text-[var(--muted)] text-sm font-mono">Frontend Stack:</p>
                            <div className="flex flex-wrap gap-2">
                                {frontendTechnologies.map((technology) => (
                                    <TechBadge key={technology} name={technology} />
                                ))}
                            </div>
                        </div>

                        <div className="space-y-2">
                            <p className="text-[var(--muted)] text-sm font-mono">Backend & Database:</p>
                            <div className="flex flex-wrap gap-2">
                                {backendTechnologies.map((technology) => (
                                    <TechBadge key={technology} name={technology} variant="secondary" />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <hr className="border-[var(--surface-light)] mt-12 mb-8" />

            {/* Tech Stack Footer */}
            <footer className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <p className="text-[var(--muted)] text-sm md:text-base tracking-wide">
                REACT · TYPESCRIPT · NEXT.JS
                </p>
                <p className="text-[var(--muted)] text-sm md:text-base tracking-wide">
                ASP.NET CORE
                </p>
            </footer>
        </section>
    );
}

