type ExperienceCardProps = {
    company: string;
    role: string;
    type: string;
    description: string;
    technologies: string[];
}

export default function ExperienceCard({ company, role, type, description, technologies }: ExperienceCardProps) {
    return (
        <article className="group rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)]/50 hover:shadow-lg hover:shadow-blue-500/5">

            {/* company and experience type */}
            <div className="mb-4 flex items-center justify-between gap-4">
                <span className="font-semibold text-[var(--primary)]">
                    {company}
                </span>
                <span className="rounded-full border border-[var(--border)] bg-[var(--surface-light)] px-3 py-1 text-xs text-[var(--muted)]">
                    {type}
                </span>
            </div>

            {/* role */}
            <h3 className="mb-3 text-xl font-bold text-white">
                {role}
            </h3>

            {/* description */}
            <p className="mb-6 leading-relaxed text-[var(--muted)]">
                {description}
            </p>

            {/* technologies */}
            <div className="flex flex-wrap gap-2">
                {technologies.map((technology) => (
                    <span 
                        key={technology}
                        className="rounded-lg border border-[var(--border)] bg-[var(--surface-light)] px-3 py-1.5 text-sm text-[var(--muted)]"
                    >
                        {technology}
                    </span>
                ))}
            </div>
        </article>
    );
}