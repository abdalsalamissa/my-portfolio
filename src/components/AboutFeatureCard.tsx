type AboutFeatureCardProps = {
    symbol: string;
    title: string;
    description: string;
};

export default function AboutFeatureCard({ symbol, title, description }: AboutFeatureCardProps) {
    return (
        <div className="group rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)]/50 hover:shadow-lg hover:shadow-blue-500/5">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--primary)]/10 font-mono text-xl font-bold text-[var(--primary)]">
                {symbol}
            </div>

            <h3 className="mb-3 text-xl font-semibold text-white">{title}</h3>

            <p className="leading-relaxed text-[var(--muted)]">{description}</p>
        </div>
    );
}