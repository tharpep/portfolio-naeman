import Link from "next/link";
import type { Metadata } from "next";
import { getProjectsByCategory, type Project, type ProjectCategory } from "@/lib/getProjects";

export const metadata: Metadata = {
    title: "Projects – Naeman Khatib",
    description: "Engineering projects in design, simulation, and robotics.",
};

export default function Projects() {
    const categories = getProjectsByCategory();

    return (
        <main className="text-ink min-h-screen px-6 sm:px-8 md:px-16 lg:px-24 py-12">
            <div className="max-w-6xl">
                <div className="mb-12">
                    <p className="label-technical mb-2">Projects</p>
                    <p className="text-lg text-ink-mid max-w-xl">
                        Design, simulation, and fabrication work from coursework, research, and teams.
                    </p>
                </div>

                <div className="space-y-16">
                    {categories.map((category) => (
                        <CategorySection key={category.id} category={category} />
                    ))}
                </div>
            </div>
        </main>
    );
}

function CategorySection({ category }: { category: ProjectCategory }) {
    return (
        <section>
            <div className="mb-6">
                <p className="label-technical mb-1">{category.name}</p>
                <p className="text-ink-faint text-sm">{category.description}</p>
                <div className="divider-dimension" style={{ margin: '1rem 0 0 0' }} />
            </div>

            {category.projects.length <= 2 ? (
                <div className="space-y-4">
                    {category.projects.map((project) => (
                        <ProjectCardWide key={project.slug} project={project} />
                    ))}
                </div>
            ) : (
                <div className="space-y-4">
                    <ProjectCardWide project={category.projects[0]} />
                    <div className="grid md:grid-cols-2 gap-4">
                        {category.projects.slice(1).map((project) => (
                            <ProjectCard key={project.slug} project={project} />
                        ))}
                    </div>
                </div>
            )}
        </section>
    );
}

function ProjectCardWide({ project }: { project: Project }) {
    return (
        <Link
            href={`/projects/${project.slug}`}
            className="group flex flex-col sm:flex-row sm:items-start gap-4 border border-warm-line bg-cream-card hover:border-teal/40 transition-colors rounded-sm p-5"
        >
            <div className="sm:w-36 flex-shrink-0">
                <span className="label-technical">{project.timeline}</span>
                <div className="mt-1 flex items-center gap-1.5">
                    <span className={`w-1.5 h-1.5 rounded-full ${project.status === 'completed' ? 'bg-green-600' : 'bg-teal'}`} />
                    <span className="text-xs text-ink-faint">
                        {project.status === 'completed' ? 'Done' : 'Active'}
                    </span>
                </div>
            </div>
            <div className="flex-1">
                <h3 className="font-semibold text-ink group-hover:text-teal transition-colors mb-1">
                    {project.title}
                </h3>
                <p className="text-ink-mid text-sm line-clamp-2 mb-2">
                    {project.description}
                </p>
                <div className="flex flex-wrap gap-x-3 gap-y-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                        <span key={tech} className="text-xs font-mono text-ink-faint">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </Link>
    );
}

function ProjectCard({ project }: { project: Project }) {
    return (
        <Link
            href={`/projects/${project.slug}`}
            className="group block rounded-sm border border-warm-line bg-cream-card hover:border-teal/40 transition-colors p-5"
        >
            <span className="label-technical block mb-2">{project.timeline}</span>
            <h3 className="font-semibold text-ink group-hover:text-teal transition-colors mb-1">
                {project.title}
            </h3>
            <p className="text-ink-mid text-sm line-clamp-2 mb-3">
                {project.description}
            </p>
            <div className="flex flex-wrap gap-x-3 gap-y-1">
                {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="text-xs font-mono text-ink-faint">
                        {tech}
                    </span>
                ))}
            </div>
        </Link>
    );
}
