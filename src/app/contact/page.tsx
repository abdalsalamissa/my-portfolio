import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact",
    description: "Get in touch with Abdelsalam Issa to discuss software development opportunities, projects, and professional collaboration."
};

const contactMethods = [
    {
        name: "Email",
        value: "Abdelsalam.Issa@outlook.com",
        href: "mailto:Abdelsalam.Issa@outlook.com",
        description: "Send me an email",
    },
    {
        name: "LinkedIn",
        value: "Abdelsalam Issa",
        href: "https://www.linkedin.com/in/abdelsalam-issa",
        description: "Connect with me professionally",
    },
    {
        name: "GitHub",
        value: "abdalsalamissa",
        href: "https://github.com/abdalsalamissa",
        description: "Explore my projects",
    },
];

export default function ContactPage() {
    return (
        <main className="min-h-screen px-6 py-16 animate-fade-in-up">
            <section className="mx-auto max-w-5xl">

                {/* intro */}
                <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[var(--primary)]">
                    Get in Touch
                </p>

                <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
                    Let&apos;s Work Together
                </h1>

                <p className="mb-12 max-w-2xl leading-relaxed text-[var(--muted)]">
                    I&apos;m always open to discussing new opportunities, interesting
                    projects, and ways to contribute to a development team.
                    Feel free to reach out!
                </p>

                {/* contact methods */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    {contactMethods.map((method) => (
                        <a 
                            key={method.name}
                            href={method.href}
                            target={method.name === "Email" ? undefined : "_blank"}
                            rel={method.name === "Email" ? undefined : "noopener noreferrer"}
                            className="group rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)]/50"
                        >
                            <h2 className="mb-3 text-xl font-bold text-white transition-colors group-hover:text-[var(--primary)]">
                                {method.name}
                            </h2>
                            <p className="mb-2 break-all font-medium text-[var(--primary)]">
                                {method.value}
                            </p>
                            <p className="text-sm text-[var(--muted)]">
                                {method.description}
                            </p>
                        </a>
                    ))}
                </div>
            </section>
        </main>
    );
}