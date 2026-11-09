type TechBadgeProps = {
    name: string;
    variant?: "primary" | "secondary";
}

export default function TechBadge({ name, variant = "primary" }: TechBadgeProps) {
    const styles = variant === "primary"
        ? "bg-[var(--primary)]/10 text-[var(--primary)] border-[var(--primary)]/20"
        : "bg-[var(--surface)] text-[var(--muted)] border-[var(--border)]";

    return (
        <span className={`px-3 py-1.5 rounded-lg text-sm font-medium border ${styles}`}>{name}</span>
    )
}