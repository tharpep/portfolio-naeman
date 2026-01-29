import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About – Naeman Khatib",
    description: "About Naeman Khatib - Mechanical Engineering student at Purdue University.",
};

export default function About() {
    return (
        <main className="text-neutral-100 min-h-screen px-6 sm:px-8 md:px-16 lg:px-24 py-12">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <h1 className="text-4xl font-bold font-mono text-white mb-8">
                    About
                </h1>

                {/* Introduction */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold font-mono text-amber-400 mb-6">
                        My Journey
                    </h2>
                    <div className="prose prose-invert prose-lg text-neutral-300 max-w-none">
                        <p className="mb-6">
                            I&apos;m a Mechanical Engineering senior at Purdue University focused on the intersection of <span className="text-white font-medium">physical systems and computational modeling</span>. My goal is to simulate, understand, and optimize machines before metal ever touches the manufacturing floor.
                        </p>
                        <p className="mb-6">
                            From designing autonomous rovers to running complex fluid-structure interaction simulations, I thrive on bridging theory and reality. In my senior design collaboration with <span className="text-white font-medium">Wolf Park</span>, I learned that engineering requires empathy, stakeholder communication, and logistics just as much as CAD and stress analysis.
                        </p>
                        <p>
                            Currently, I am targeting the <span className="text-white font-medium">biomedical and aerospace industries</span>. These fields appeal to me because the margin for error is small and the potential for impact is massive.
                        </p>
                    </div>
                </section>

                {/* Global Perspective */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold font-mono text-amber-400 mb-6">
                        Global Perspective
                    </h2>
                    <p className="text-lg text-neutral-300 leading-relaxed mb-6">
                        Engineering does not happen in a vacuum. To build for the world, one must understand it. My academic journey has taken me across the globe to gain that perspective:
                    </p>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-4 bg-neutral-900/50 border border-neutral-800 rounded-lg">
                            <h3 className="font-bold text-white mb-2">🇮🇪 Ireland</h3>
                            <p className="text-sm text-neutral-400">
                                Examined the medical device lifecycle and global manufacturing standards at companies like Abbott and Medtronic.
                            </p>
                        </div>
                        <div className="p-4 bg-neutral-900/50 border border-neutral-800 rounded-lg">
                            <h3 className="font-bold text-white mb-2">🇯🇵 Japan</h3>
                            <p className="text-sm text-neutral-400">
                                Studied AI ethics and how robotics can enhance human capabilities in Hiroshima.
                            </p>
                        </div>
                        <div className="p-4 bg-neutral-900/50 border border-neutral-800 rounded-lg">
                            <h3 className="font-bold text-white mb-2">🇨🇴 Colombia</h3>
                            <p className="text-sm text-neutral-400">
                                Collaborated with local peers to analyze the role of technology in economic development.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Mentorship & Service */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold font-mono text-amber-400 mb-6">
                        Giving Back
                    </h2>
                    <p className="text-lg text-neutral-300 leading-relaxed">
                        I helped mentor the next generation of engineers through Purdue&apos;s <span className="text-white font-medium">Minority Engineering Program</span>. Leading projects for PREFACE and tutoring Calculus has taught me that the best way to master a subject is to teach it. An engineer&apos;s greatest tool is their ability to lift others up.
                    </p>
                </section>

                {/* Skills Grid */}
                <section>
                    <h2 className="text-2xl font-bold font-mono text-white mb-6">
                        Skills
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-6">
                        {/* CAD & Design */}
                        <div className="p-5 rounded-xl border border-neutral-800 bg-neutral-800/30">
                            <h3 className="text-amber-400 font-semibold mb-3">CAD & Design</h3>
                            <div className="flex flex-wrap gap-2">
                                {["Creo Parametric", "NX", "Fusion 360"].map((skill) => (
                                    <span key={skill} className="px-3 py-1 text-sm bg-neutral-800 text-neutral-300 rounded-lg">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Analysis */}
                        <div className="p-5 rounded-xl border border-neutral-800 bg-neutral-800/30">
                            <h3 className="text-amber-400 font-semibold mb-3">Analysis</h3>
                            <div className="flex flex-wrap gap-2">
                                {["MATLAB", "Simulink", "FEniCS", "R"].map((skill) => (
                                    <span key={skill} className="px-3 py-1 text-sm bg-neutral-800 text-neutral-300 rounded-lg">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Fabrication */}
                        <div className="p-5 rounded-xl border border-neutral-800 bg-neutral-800/30">
                            <h3 className="text-amber-400 font-semibold mb-3">Fabrication</h3>
                            <div className="flex flex-wrap gap-2">
                                {["3D Printing", "Laser Cutting", "Arduino", "Prototyping"].map((skill) => (
                                    <span key={skill} className="px-3 py-1 text-sm bg-neutral-800 text-neutral-300 rounded-lg">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Programming */}
                        <div className="p-5 rounded-xl border border-neutral-800 bg-neutral-800/30">
                            <h3 className="text-amber-400 font-semibold mb-3">Programming</h3>
                            <div className="flex flex-wrap gap-2">
                                {["Python", "C", "Java", "LaTeX"].map((skill) => (
                                    <span key={skill} className="px-3 py-1 text-sm bg-neutral-800 text-neutral-300 rounded-lg">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main >
    );
}
