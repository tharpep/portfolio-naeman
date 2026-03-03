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
        <main className="text-ink min-h-screen px-6 sm:px-8 md:px-16 lg:px-24 py-12">
            <div className="max-w-4xl">
                <Link
                    href="/projects"
                    className="inline-flex items-center gap-1.5 text-sm text-ink-faint hover:text-ink mb-10 transition-colors"
                >
                    &larr; Projects
                </Link>

                <div className="mb-8">
                    <div className="flex items-center gap-3 mb-3">
                        <span className="label-technical">{project.timeline}</span>
                        <span className="text-ink-faint">&middot;</span>
                        <span className={`text-xs font-mono ${project.status === 'completed' ? 'text-green-700' : 'text-teal'}`}>
                            {project.status === 'completed' ? 'Completed' : 'In Progress'}
                        </span>
                    </div>
                    <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-ink mb-4">
                        {project.title}
                    </h1>
                    <div className="flex flex-wrap gap-x-3 gap-y-1">
                        {project.technologies.map((tech) => (
                            <span key={tech} className="text-sm font-mono text-ink-faint">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Image */}
                {project.imageUrl && !project.pdfUrl && (
                    <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full aspect-video object-cover rounded-sm border border-warm-line mb-8"
                    />
                )}

                <div className="divider-dimension" />

                <p className="text-ink-mid text-lg leading-relaxed mt-8 mb-10 max-w-2xl">
                    {project.description}
                </p>

                {/* PDF Embed */}
                {project.pdfUrl && (
                    <section className="mb-8">
                        <p className="label-technical mb-4">{project.pdfLabel ?? "Document"}</p>
                        <div className="w-full rounded-sm overflow-hidden border border-warm-line" style={{ height: "780px" }}>
                            <iframe
                                src={project.pdfUrl}
                                className="w-full h-full"
                                title={project.pdfLabel ?? project.title}
                            />
                        </div>
                        <a
                            href={project.pdfUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 mt-3 text-sm text-teal hover:text-teal-dark transition-colors"
                        >
                            Open in new tab &rarr;
                        </a>
                    </section>
                )}
            </div>
        </main>
    );
}
