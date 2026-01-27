import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, getAllProjects } from "@/lib/getProjects";
import type { Metadata } from "next";

type PageProps = {
    params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
    const projects = getAllProjects();
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        return { title: "Project Not Found" };
    }

    return {
        title: `${project.title} – Naeman Khatib`,
        description: project.description,
    };
}

export default async function ProjectPage({ params }: PageProps) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    return (
        <main className="text-neutral-100 min-h-screen px-6 sm:px-8 md:px-16 lg:px-24 py-12">
            <div className="max-w-4xl mx-auto">
                {/* Back Link */}
                <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 text-neutral-400 hover:text-white mb-8 transition-colors"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                    Back to Projects
                </Link>

                {/* Header */}
                <div className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                        <span className={`px-3 py-1 text-sm rounded-full ${project.status === 'completed'
                                ? 'bg-green-900/30 text-green-400 border border-green-800/30'
                                : 'bg-amber-900/30 text-amber-400 border border-amber-800/30'
                            }`}>
                            {project.status === 'completed' ? 'Completed' : 'In Progress'}
                        </span>
                        <span className="text-neutral-500 font-mono text-sm">{project.timeline}</span>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold font-mono text-white mb-4">
                        {project.title}
                    </h1>
                </div>

                {/* Image Placeholder */}
                <div className="aspect-video bg-neutral-800 rounded-xl flex items-center justify-center border border-neutral-700 mb-8">
                    <span className="text-neutral-500 font-mono">[Add project image/CAD render here]</span>
                </div>

                {/* Description */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold text-amber-400 mb-4">Overview</h2>
                    <p className="text-neutral-300 leading-relaxed">
                        {project.description}
                    </p>
                    <p className="text-amber-400/80 mt-4 text-sm">
                        [Add more detailed description here - what was the challenge, your approach, and results]
                    </p>
                </section>

                {/* Technologies */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold text-amber-400 mb-4">Technologies</h2>
                    <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                            <span
                                key={tech}
                                className="px-3 py-2 bg-neutral-800 text-neutral-300 rounded-lg border border-neutral-700"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </section>

                {/* Additional Images Placeholder */}
                <section>
                    <h2 className="text-xl font-bold text-amber-400 mb-4">Gallery</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="aspect-square bg-neutral-800 rounded-lg flex items-center justify-center border border-neutral-700">
                            <span className="text-neutral-500 text-sm font-mono text-center px-4">[Additional image]</span>
                        </div>
                        <div className="aspect-square bg-neutral-800 rounded-lg flex items-center justify-center border border-neutral-700">
                            <span className="text-neutral-500 text-sm font-mono text-center px-4">[Additional image]</span>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
