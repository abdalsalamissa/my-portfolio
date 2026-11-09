type ProjectCardProps = {
    title: string;
    description: string;
    technologies: string[];
    category: string;
    githubUrl?: string;
};

export default function ProjectCard({ title, description, technologies, category, githubUrl}: ProjectCardProps) {
    return (
        <article className="group rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)]/50 hover:shadow-lg hover:shadow-blue-500/5">

            {/* project category */}
            <p className="mb-4 text-sm font-medium text-[var(--primary)]">
                {category}
            </p>

            {/* project title */}
            <h3 className="mb-3 text-xl font-bold text-white">
                {title}
            </h3>

            {/* project description */}
            <p className="mb-6 leading-relaxed text-[var(--muted)]">
                {description}
            </p>

            {/* technologies */}
            <div className="flex flex-wrap gap-2">
                {technologies.map((technology) => (
                    <span key={technology} className="rounded-lg border border-[var(--border)] bg-[var(--surface-light)] px-3 py-1.5 text-sm text-[var(--muted)]">
                        {technology}
                    </span>
                ))}
            </div>

            {githubUrl && (
                <a 
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[var(--primary)] transition-colors hover:text-[var(--primary-light)]"
                >
                    View on GitHub →
                </a>
            )}
        </article>
    );
}