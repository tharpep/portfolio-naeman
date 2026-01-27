import Link from "next/link";
import { getFeaturedProjects, type Project } from "@/lib/getProjects";

export default function Home() {
    const featuredProjects = getFeaturedProjects();

    return (
        <main className="text-neutral-100 min-h-screen">
            {/* Hero Section */}
            <section className="px-6 sm:px-8 md:px-16 lg:px-24 py-20 md:py-28">
                <div className="max-w-4xl">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-mono tracking-tight mb-6 text-white">
                        Naeman Khatib
                    </h1>
                    <p className="text-xl md:text-2xl text-neutral-300 mb-8 max-w-2xl">
                        Mechanical Engineering student at Purdue University.
                        <br />
                        <span className="text-amber-400">[Add your tagline here - e.g., &quot;Designing solutions from concept to prototype.&quot;]</span>
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Link
                            href="/projects"
                            className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-neutral-900 font-semibold rounded-lg transition-colors"
                        >
                            View Projects
                        </Link>
                        <Link
                            href="/resume"
                            className="px-6 py-3 border border-neutral-600 hover:border-amber-500 text-neutral-300 hover:text-white font-semibold rounded-lg transition-colors"
                        >
                            Resume
                        </Link>
                    </div>
                </div>
            </section>

            {/* Featured Projects - Large 2-Column Visual Cards */}
            <section className="px-6 sm:px-8 md:px-16 lg:px-24 py-16 border-t border-neutral-800">
                <h2 className="text-2xl md:text-3xl font-bold font-mono text-white mb-10">
                    Featured Projects
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {featuredProjects.map((project) => (
                        <FeaturedProjectCard key={project.slug} project={project} />
                    ))}
                </div>
                <div className="mt-10">
                    <Link
                        href="/projects"
                        className="text-amber-400 hover:text-amber-300 font-medium transition-colors"
                    >
                        View all projects →
                    </Link>
                </div>
            </section>

            {/* Connect Section */}
            <section className="px-6 sm:px-8 md:px-16 lg:px-24 py-16 border-t border-neutral-800">
                <h2 className="text-2xl md:text-3xl font-bold font-mono text-white mb-8">
                    Connect
                </h2>
                <div className="flex flex-wrap gap-4">
                    <a
                        href="https://linkedin.com/in/naeman-khatib"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-3 border border-neutral-700 hover:border-amber-500 text-neutral-300 hover:text-white rounded-lg transition-colors"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                        LinkedIn
                    </a>
                    <a
                        href="mailto:nkhatib1022@gmail.com"
                        className="inline-flex items-center gap-2 px-5 py-3 border border-neutral-700 hover:border-amber-500 text-neutral-300 hover:text-white rounded-lg transition-colors"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Email
                    </a>
                </div>
            </section>
        </main>
    );
}

function FeaturedProjectCard({ project }: { project: Project }) {
    return (
        <Link
            href={`/projects/${project.slug}`}
            className="group block rounded-xl border border-neutral-800 bg-neutral-800/30 hover:border-amber-500/50 transition-colors overflow-hidden"
        >
            {/* Image Placeholder */}
            <div className="aspect-video bg-neutral-800 flex items-center justify-center border-b border-neutral-700">
                <span className="text-neutral-500 text-sm font-mono">[Project image/render]</span>
            </div>

            {/* Content */}
            <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                    <h3 className="font-bold text-lg text-white group-hover:text-amber-400 transition-colors">
                        {project.title}
                    </h3>
                    <span className="text-xs text-neutral-500 font-mono ml-2 flex-shrink-0">
                        {project.timeline}
                    </span>
                </div>
                <p className="text-neutral-400 text-sm line-clamp-2 mb-3">
                    {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                        <span
                            key={tech}
                            className="px-2 py-1 text-xs bg-amber-900/20 text-amber-400 rounded border border-amber-800/30"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </Link>
    );
}
