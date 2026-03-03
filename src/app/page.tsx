import Link from "next/link";
import { getFeaturedProjects, type Project } from "@/lib/getProjects";

export default function Home() {
    const featuredProjects = getFeaturedProjects();

    return (
        <main className="text-ink min-h-screen">
            {/* Hero -- editorial two-column */}
            <section className="px-6 sm:px-8 md:px-16 lg:px-24 pt-16 pb-12 md:pt-24 md:pb-16">
                <div className="max-w-5xl">
                    <p className="label-technical mb-4">Mechanical Engineering, Purdue University</p>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-ink leading-[1.1]">
                        Naeman Khatib
                    </h1>

                    <div className="mt-8 md:mt-10 grid md:grid-cols-[1fr_280px] gap-12 md:gap-16 items-start">
                        <p className="text-lg md:text-xl text-ink-mid leading-relaxed max-w-xl">
                            I design, simulate, and build mechanical systems — from
                            CAD models through FEA to physical prototypes. Currently
                            finishing my senior year and managing the{" "}
                            <Link href="/projects/wolf-park-deer-dash" className="text-teal hover:text-teal-dark border-b border-teal/30 transition-colors">
                                Deer Dash
                            </Link>{" "}
                            senior design project for Wolf Park.
                        </p>

                        <aside className="border-l-2 border-teal/40 pl-5">
                            <p className="label-technical mb-2">Currently</p>
                            <p className="text-ink-mid text-sm leading-relaxed">
                                Senior Design PM at Wolf Park<br />
                                Undergrad researcher — ALE-FSI simulations<br />
                                Graduating May 2026
                            </p>
                            <div className="mt-4 flex gap-4 text-sm">
                                <Link href="/projects" className="text-teal hover:text-teal-dark transition-colors">
                                    Projects
                                </Link>
                                <Link href="/resume" className="text-teal hover:text-teal-dark transition-colors">
                                    Resume
                                </Link>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            {/* Selected Work */}
            <section className="px-6 sm:px-8 md:px-16 lg:px-24 py-14">
                <div className="divider-dimension mb-10" />
                <p className="label-technical mb-6">Selected Work</p>

                {featuredProjects[0] && <LeadProjectCard project={featuredProjects[0]} />}

                <div className="mt-8 grid sm:grid-cols-3 gap-4">
                    {featuredProjects.slice(1).map((project) => (
                        <CompactProjectCard key={project.slug} project={project} />
                    ))}
                </div>

                <div className="mt-8">
                    <Link
                        href="/projects"
                        className="text-sm text-ink-faint hover:text-ink transition-colors"
                    >
                        All projects &rarr;
                    </Link>
                </div>
            </section>

            {/* Contact -- understated inline */}
            <section className="px-6 sm:px-8 md:px-16 lg:px-24 pb-20 pt-8">
                <div className="divider-dimension mb-8" />
                <p className="text-ink-mid text-[0.9375rem]">
                    Open to full-time roles starting summer 2026.{" "}
                    <a href="mailto:nkhatib1022@gmail.com" className="text-teal hover:text-teal-dark transition-colors">
                        nkhatib1022@gmail.com
                    </a>{" "}
                    /{" "}
                    <a href="https://linkedin.com/in/naeman-khatib" target="_blank" rel="noopener noreferrer" className="text-teal hover:text-teal-dark transition-colors">
                        LinkedIn
                    </a>
                </p>
            </section>
        </main >
    );
}

function LeadProjectCard({ project }: { project: Project }) {
    return (
        <Link
            href={`/projects/${project.slug}`}
            className="group block border border-warm-line bg-cream-card hover:border-teal/40 transition-colors rounded-sm overflow-hidden"
        >
            <div className="p-6 md:p-8 md:flex md:gap-10 md:items-start">
                <div className="md:w-48 flex-shrink-0 mb-4 md:mb-0">
                    <span className="label-technical">{project.timeline}</span>
                    <div className="mt-2 flex items-center gap-2">
                        <span className={`w-1.5 h-1.5 rounded-full ${project.status === 'completed' ? 'bg-green-600' : 'bg-teal'}`} />
                        <span className="text-xs text-ink-faint">
                            {project.status === 'completed' ? 'Done' : 'Active'}
                        </span>
                    </div>
                </div>
                <div className="flex-1">
                    <h3 className="text-xl font-bold text-ink group-hover:text-teal transition-colors mb-2">
                        {project.title}
                    </h3>
                    <p className="text-ink-mid text-[0.9375rem] leading-relaxed mb-4">
                        {project.description}
                    </p>
                    <div className="flex flex-wrap gap-x-3 gap-y-1">
                        {project.technologies.map((tech) => (
                            <span key={tech} className="text-xs font-mono text-ink-faint">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </Link>
    );
}

function CompactProjectCard({ project }: { project: Project }) {
    return (
        <Link
            href={`/projects/${project.slug}`}
            className="group block border border-warm-line hover:border-teal/40 bg-cream-card transition-colors rounded-sm p-4"
        >
            <span className="label-technical block mb-2">{project.timeline}</span>
            <h3 className="font-semibold text-ink group-hover:text-teal transition-colors text-[0.9375rem] mb-1">
                {project.title}
            </h3>
            <p className="text-ink-mid text-sm line-clamp-2">
                {project.description}
            </p>
        </Link>
    );
}
