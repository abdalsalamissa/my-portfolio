export default function DeveloperVisual() {
    return (
        <div className="relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-2xl">

            {/* background glow */}
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[var(--primary)]/10 blur-3xl" aria-hidden="true" />

            {/* editor header */}
            <div className="relative z-10 flex items-center justify-between border-b border-[var(--border)] pb-4">
                {/* window controls */}
                <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-400" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400" />
                    <span className="h-3 w-3 rounded-full bg-green-400" />
                </div>
                
                {/* file name */}
                <span className="font-mono text-sm text-[var(--muted)]">developer.ts</span>
            </div>
            {/* code content */}
            <div className="relative z-10 mt-6 font-mono text-sm leading-8">
                <p className="text-[var(--muted)]">
                    <span className="text-purple-400">const</span>{""} developer = {"{"}
                </p>
                
                <div className="pl-6">
                    <p>
                        <span className="text-blue-400">name</span>:{" "}
                        <span className="text-green-400">&quot;Abdelsalam Issa&quot;</span>,
                    </p>

                    <p>
                        <span className="text-blue-400">role</span>:{" "}
                        <span className="text-green-400">&quot;Software Developer&quot;</span>,
                    </p>

                    <p>
                        <span className="text-blue-400">frontend</span>:{" "}
                        <span className="text-green-400">&quot;React, TypeScript&quot;</span>,
                    </p>

                    <p>
                        <span className="text-blue-400">backend</span>:{" "}
                        <span className="text-green-400">&quot;ASP.NET Core&quot;</span>,
                    </p>

                    <p>
                        <span className="text-blue-400">mindset</span>:{" "}
                        <span className="text-green-400">&quot;Always learning&quot;</span>
                    </p>
                </div>

                <p className="text-[var(--muted)]">{"};"}</p>
            </div>
        </div>
    );
}