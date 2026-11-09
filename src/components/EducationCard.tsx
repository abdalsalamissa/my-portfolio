type  EducationCardProps = {
    degree: string;
    university: string;
    gpa: number;
};

export default function EducationCard({ degree, university, gpa }: EducationCardProps) {
    return (
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
            
            {/* education icon and label */}
            <div className="flex items-center justify-between mb-4">
                <span className="text-[var(--muted)] font-medium">Education</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[var(--primary)]"
                    aria-hidden="true"
                >
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
            </div>

            {/* degree and university */}
            <h3 className="text-xl font-bold text-white">{degree}</h3>

            <p className="mt-2 text-[var(--muted)]">{university}</p>

            {/* gpa */}
            <div className="mt-6 flex items-center justify-between border-t border-[var(--border)] pt-5">
                <span className="text-[var(--muted)]">GPA</span>
                <span className="text-xl font-bold text-[var(--primary)]">{gpa.toFixed(2)} / 4.00</span>
            </div>
        </div>
    );
}