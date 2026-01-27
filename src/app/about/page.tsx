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

                {/* Bio */}
                <section className="mb-12">
                    <p className="text-lg text-neutral-300 leading-relaxed">
                        <span className="text-amber-400">[Write a short bio here - 2-3 sentences about yourself, your interests in mechanical engineering, and what drives you. Keep it personal but professional.]</span>
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
        </main>
    );
}
