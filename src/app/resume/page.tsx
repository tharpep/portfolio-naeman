import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Resume – Naeman Khatib",
    description: "Resume for Naeman Khatib - Mechanical Engineering student at Purdue University.",
};

export default function Resume() {
    return (
        <main className="text-neutral-100 min-h-screen px-6 sm:px-8 md:px-16 lg:px-24 py-12">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <h1 className="text-4xl font-bold font-mono text-white mb-2">
                    Naeman Khatib
                </h1>
                <p className="text-neutral-400 mb-8">
                    (317) 998-7538 · nkhatib1022@gmail.com ·{" "}
                    <a href="https://linkedin.com/in/naeman-khatib" className="text-amber-400 hover:text-amber-300">
                        linkedin.com/in/naeman-khatib
                    </a>
                </p>

                <div className="w-full h-px bg-neutral-800 mb-10" />

                {/* Education */}
                <section className="mb-10">
                    <h2 className="text-xl font-bold font-mono text-amber-400 mb-4 pb-2 border-b border-amber-500/30">
                        Education
                    </h2>
                    <div>
                        <div className="flex flex-col sm:flex-row sm:justify-between mb-2">
                            <h3 className="font-bold text-white">Purdue University</h3>
                            <span className="text-neutral-400 font-mono text-sm">Jul 2022 – May 2026</span>
                        </div>
                        <p className="text-neutral-300 italic mb-2">
                            Bachelor of Science in Mechanical Engineering | Minor in Mathematics
                        </p>
                        <p className="text-neutral-400 text-sm">
                            GPA: 3.82 · John Martinson Honors College · Goss Scholars · Dean&apos;s List · National Merit Finalist · Tau Beta Pi
                        </p>
                    </div>
                </section>

                {/* Research */}
                <section className="mb-10">
                    <h2 className="text-xl font-bold font-mono text-amber-400 mb-4 pb-2 border-b border-amber-500/30">
                        Research
                    </h2>
                    <div>
                        <div className="flex flex-col sm:flex-row sm:justify-between mb-2">
                            <h3 className="font-bold text-white">Transport: Modeling, Numerics and Theory Laboratory</h3>
                            <span className="text-neutral-400 font-mono text-sm">Aug 2025 – Present</span>
                        </div>
                        <p className="text-neutral-300 italic mb-2">Undergraduate Researcher</p>
                        <ul className="list-disc list-inside text-neutral-300 space-y-1 ml-2">
                            <li>Programmed using FEniCS to conduct ALE-FSI fluid simulations in elastic microchannels using the finite element method.</li>
                        </ul>
                    </div>
                </section>

                {/* Project Experience */}
                <section className="mb-10">
                    <h2 className="text-xl font-bold font-mono text-amber-400 mb-4 pb-2 border-b border-amber-500/30">
                        Project Experience
                    </h2>
                    <div className="space-y-6">
                        {/* Flying Bison */}
                        <div>
                            <div className="flex flex-col sm:flex-row sm:justify-between mb-2">
                                <h3 className="font-bold text-white">Remote Controlled Flying Bison — Purdue ME 444</h3>
                                <span className="text-neutral-400 font-mono text-sm">Jan – May 2024</span>
                            </div>
                            <ul className="list-disc list-inside text-neutral-300 space-y-1 ml-2">
                                <li>Built a mechanical action animal toy using CAD in Creo Parametric, 3D printed physical prototyping, and microcontroller programming.</li>
                                <li>Designed the mechanism for the DC motor-driven legs using pin-in-slot and linkage joints to create animal-like movement.</li>
                            </ul>
                        </div>

                        {/* Drip Defender */}
                        <div>
                            <div className="flex flex-col sm:flex-row sm:justify-between mb-2">
                                <h3 className="font-bold text-white">Drip Defender Prototype — Purdue ME Sophomore Design</h3>
                                <span className="text-neutral-400 font-mono text-sm">Aug – Dec 2023</span>
                            </div>
                            <ul className="list-disc list-inside text-neutral-300 space-y-1 ml-2">
                                <li>Created a prototype for a dish drying rack for college dorm rooms using CAD in NX, laser-cut Acrylic, and steel wire-frame.</li>
                            </ul>
                        </div>

                        {/* GEARS */}
                        <div>
                            <div className="flex flex-col sm:flex-row sm:justify-between mb-2">
                                <h3 className="font-bold text-white">GEARS Autonomous Rover — Purdue Honors Engineering</h3>
                                <span className="text-neutral-400 font-mono text-sm">Jan – May 2023</span>
                            </div>
                            <ul className="list-disc list-inside text-neutral-300 space-y-1 ml-2">
                                <li>Designed, built, and programmed an autonomous rover using BrickPi3, Raspberry Pi, and MINDSTORMS EV3/NXT that navigates mazes with physical and IR hazards.</li>
                                <li>Led the documentation process and Python software design, implementing PID motor control with distance and IR sensors.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Extracurriculars */}
                <section className="mb-10">
                    <h2 className="text-xl font-bold font-mono text-amber-400 mb-4 pb-2 border-b border-amber-500/30">
                        Extracurriculars
                    </h2>
                    <div className="space-y-6">
                        {/* Ireland */}
                        <div>
                            <div className="flex flex-col sm:flex-row sm:justify-between mb-2">
                                <h3 className="font-bold text-white">Medical Device Development in Ireland — Purdue BME Study Abroad</h3>
                                <span className="text-neutral-400 font-mono text-sm">Mar 2025</span>
                            </div>
                            <ul className="list-disc list-inside text-neutral-300 space-y-1 ml-2">
                                <li>Studied the design and manufacture of medical devices at four biomedical engineering companies.</li>
                            </ul>
                        </div>

                        {/* ASME */}
                        <div>
                            <div className="flex flex-col sm:flex-row sm:justify-between mb-2">
                                <h3 className="font-bold text-white">Purdue ASME Grand Prix Team</h3>
                                <span className="text-neutral-400 font-mono text-sm">Aug – Dec 2024</span>
                            </div>
                            <ul className="list-disc list-inside text-neutral-300 space-y-1 ml-2">
                                <li>Worked with testing and performance subteam to design and build a go-kart for the Purdue Grand Prix competition.</li>
                                <li>Conducted tests on the clutch spring mechanism using MATLAB and Excel to optimize tuning.</li>
                            </ul>
                        </div>

                        {/* Japan */}
                        <div>
                            <div className="flex flex-col sm:flex-row sm:justify-between mb-2">
                                <h3 className="font-bold text-white">AI in Work and Society — Global Leadership Program, Hiroshima</h3>
                                <span className="text-neutral-400 font-mono text-sm">Aug 2024</span>
                            </div>
                            <ul className="list-disc list-inside text-neutral-300 space-y-1 ml-2">
                                <li>Joint program between Purdue, ASU, UT Austin, and Hiroshima University studying AI applications in Japanese society.</li>
                                <li>Performed case study on AI enhancing human capabilities using brain-computer interfaces.</li>
                            </ul>
                        </div>

                        {/* PSP */}
                        <div>
                            <div className="flex flex-col sm:flex-row sm:justify-between mb-2">
                                <h3 className="font-bold text-white">Purdue Space Program — Satellites Subteam</h3>
                                <span className="text-neutral-400 font-mono text-sm">Jan – May 2023</span>
                            </div>
                            <ul className="list-disc list-inside text-neutral-300 space-y-1 ml-2">
                                <li>Created components of a 3U CubeSat with satellite-bus-testing suite and 2U payload.</li>
                                <li>Designed sun sensor navigational instrument integration using Fusion 360.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Additional Experience */}
                <section className="mb-10">
                    <h2 className="text-xl font-bold font-mono text-amber-400 mb-4 pb-2 border-b border-amber-500/30">
                        Additional Experience
                    </h2>
                    <div className="space-y-6">
                        <div>
                            <div className="flex flex-col sm:flex-row sm:justify-between mb-2">
                                <h3 className="font-bold text-white">Purdue Rack and Roll</h3>
                                <span className="text-neutral-400 font-mono text-sm">Jan 2025 – Present</span>
                            </div>
                            <ul className="list-disc list-inside text-neutral-300 space-y-1 ml-2">
                                <li>Managed daily operations and customer experience in a high-responsibility, two-person setting.</li>
                            </ul>
                        </div>

                        <div>
                            <div className="flex flex-col sm:flex-row sm:justify-between mb-2">
                                <h3 className="font-bold text-white">Purdue Minority Engineering Program</h3>
                                <span className="text-neutral-400 font-mono text-sm">Jun – Aug 2023/2024</span>
                            </div>
                            <ul className="list-disc list-inside text-neutral-300 space-y-1 ml-2">
                                <li>Led an electrical engineering project in the PREFACE summer program.</li>
                                <li>Constructed lesson plans, instructed, and tutored Calculus 1 in EABC and MITE summer programs.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Skills */}
                <section className="mb-10">
                    <h2 className="text-xl font-bold font-mono text-amber-400 mb-4 pb-2 border-b border-amber-500/30">
                        Skills
                    </h2>
                    <div className="p-4 rounded-xl border border-neutral-800 bg-neutral-800/30">
                        <p className="text-neutral-300">
                            MATLAB/Simulink, Creo Parametric, NX, Fusion 360, C, Python, Java, LaTeX, R, FEniCS, Arduino, Google Workspace
                        </p>
                    </div>
                </section>

                {/* Download PDF */}
                <div className="text-center pt-4">
                    <a
                        href="/Naeman_Khatib_Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-400 text-neutral-900 font-semibold rounded-lg transition-colors"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                        </svg>
                        Download PDF Resume
                    </a>
                    <p className="text-neutral-500 text-sm mt-3">
                        [Add compiled PDF to /public/Naeman_Khatib_Resume.pdf]
                    </p>
                </div>
            </div>
        </main>
    );
}
