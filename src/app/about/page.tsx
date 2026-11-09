import AboutFeatureCard from "@/components/AboutFeatureCard";
import EducationCard from "@/components/EducationCard";
import DeveloperVisual from "@/components/DeveloperVisual";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About",
    description: "Learn more about Abdelsalam Issa, his software development background, technical interests, and education."
};


const features = [
    {
        symbol: "⌘",
        title: "Problem Solving",
        description: "Breaking down complex challenges into manageable tasks and finding practical, effective solutions.",
    },
    {
        symbol: "</>",
        title: "Full-Stack Development",
        description: "Building applications across frontend and backend technologies, with a focus on functionality and user experience.",
    },
    {
        symbol: "↗",
        title: "Continuous Learning",
        description: "Exploring new technologies, improving my skills, and staying curious about better ways to build software.",
    },
];

export default function AboutPage() {
    return (
        <main className="min-h-screen px-6 py-16 animate-fade-in-up">
            <section className="mx-auto max-w-5xl">
                
                {/* intro */}
                <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[var(--primary)]">Get to know me</p>
                <h1 className="mb-8 text-4xl font-bold text-white md:text-5xl">More than just code</h1>

                {/* about content */}
                <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
                    <div>
                        <h2 className="mb-4 text-2xl font-semibold text-white">My Story</h2>

                        <p className="leading-relaxed text-[var(--muted)]">
                            I&apos;m a Software Engineering graduate passionate about
                            building useful applications and solving real-world
                            problems through technology.
                        </p>

                        <p className="mt-4 leading-relaxed text-[var(--muted)]">
                            My experience includes working with React, TypeScript,
                            and ASP.NET Core, where I&apos;ve enjoyed exploring both
                            frontend and backend development.
                        </p>
                    
                        <h2 className="mt-8 mb-4 text-2xl font-semibold text-white">What Drives Me</h2>

                        <p className="leading-relaxed text-[var(--muted)]">
                            I enjoy turning ideas into working software, learning
                            new technologies, and understanding how different
                            parts of an application work together.
                        </p>
                    </div>

                    <DeveloperVisual />

                </div>
                {/* my strengths */}
                <div className="mt-16">
                    <div className="mb-8">
                        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[var(--primary)]">
                            What I Bring to the Table
                        </p>

                        <h2 className="text-3xl font-bold text-white">
                            How I approach development
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                        {features.map((feature) => (
                            <AboutFeatureCard
                                key={feature.title}
                                symbol={feature.symbol}
                                title={feature.title}
                                description={feature.description}
                            />
                        ))}
                    </div>
                </div>
                {/* education */}
                <div className="mt-16">
                    <div className="mb-8">
                        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[var(--primary)]">
                            Academic Background
                        </p>

                        <h2 className="text-3xl font-bold text-white">My Education</h2>
                    </div>

                    <EducationCard
                        degree="Software Engineering"
                        university="Amman Arab University"
                        gpa={3.47}
                    />
                </div>
            </section>
        </main>
    )
}