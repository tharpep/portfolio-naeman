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
        <main className="text-neutral-100 min-h-screen px-6 sm:px-8 md:px-16 lg:px-24 py-12">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="mb-12">
                    <h1 className="text-4xl font-bold font-mono text-white mb-4">
                        Projects
                    </h1>
                    <p className="text-lg text-neutral-400 max-w-2xl">
                        Design, simulation, and robotics projects from coursework and extracurriculars.
                    </p>
                </div>

                {/* Categories */}
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
            <div className="mb-6 pb-4 border-b border-neutral-800">
                <h2 className="text-2xl font-bold font-mono text-amber-400 mb-2">
                    {category.name}
                </h2>
                <p className="text-neutral-500">{category.description}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {category.projects.map((project) => (
                    <ProjectCard key={project.slug} project={project} />
                ))}
            </div>
        </section>
    );
}

function ProjectCard({ project }: { project: Project }) {
    return (
        <Link
            href={`/projects/${project.slug}`}
            className="group block rounded-xl border border-neutral-800 bg-neutral-800/30 hover:border-amber-500/50 transition-colors overflow-hidden"
        >
            {/* Image Placeholder */}
            <div className="aspect-video bg-neutral-800 flex items-center justify-center border-b border-neutral-700">
                <span className="text-neutral-500 text-sm font-mono">[Project image]</span>
            </div>

            {/* Content */}
            <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                    <h3 className="font-bold text-lg text-white group-hover:text-amber-400 transition-colors">
                        {project.title}
                    </h3>
                    <div className="flex items-center gap-2 ml-2 flex-shrink-0">
                        <span className={`w-2 h-2 rounded-full ${project.status === 'completed' ? 'bg-green-500' : 'bg-amber-500'}`} />
                        <span className="text-xs text-neutral-500">
                            {project.status === 'completed' ? 'Completed' : 'In Progress'}
                        </span>
                    </div>
                </div>
                <p className="text-neutral-400 text-sm line-clamp-2 mb-3">
                    {project.description}
                </p>
                <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 2).map((tech) => (
                            <span
                                key={tech}
                                className="px-2 py-1 text-xs bg-amber-900/20 text-amber-400 rounded border border-amber-800/30"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                    <span className="text-xs text-neutral-500 font-mono">{project.timeline}</span>
                </div>
            </div>
        </Link>
    );
}
