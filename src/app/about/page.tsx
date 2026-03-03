import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About – Naeman Khatib",
    description: "About Naeman Khatib - Mechanical Engineering student at Purdue University.",
};

export default function About() {
    return (
        <main className="text-ink min-h-screen px-6 sm:px-8 md:px-16 lg:px-24 py-12">
            <div className="max-w-4xl">
                <p className="label-technical mb-6">Background</p>

<<<<<<< HEAD
                <div className="max-w-2xl mb-16">
                    <p className="text-lg md:text-xl text-ink leading-relaxed mb-6">
                        I&apos;m a senior Mechanical Engineering student at Purdue with a math minor.
                        My work sits at the intersection of design and computation — I use CAD and
                        FEA to figure out how something should work, then I build it and find out
                        what I got wrong.
=======
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
>>>>>>> 0168429fe85318b9c20629dbcd8bab7d46ab6ec6
                    </p>
                    <p className="text-ink-mid leading-relaxed">
                        Right now I&apos;m managing a senior design team building a mechanical carcass
                        delivery system for Wolf Park in Indiana, and conducting undergraduate
                        research on ALE-FSI simulations in elastic microchannels. Before that I
                        built a remote-controlled flying bison, designed a CubeSat sun sensor,
                        and helped tune a go-kart clutch for the Purdue Grand Prix.
                    </p>
                </div>

                <div className="divider-dimension" />

                <div className="mt-10 md:grid md:grid-cols-[1fr_1fr] md:gap-16">
                    <div>
                        <p className="label-technical mb-4">Tools</p>
                        <ul className="text-ink-mid text-[0.9375rem] leading-loose">
                            <li>Creo Parametric, NX, Fusion 360</li>
                            <li>MATLAB / Simulink</li>
                            <li>FEniCS (finite element)</li>
                            <li>Python, C, Java</li>
                            <li>LaTeX, R</li>
                            <li>Arduino, 3D printing, laser cutting</li>
                        </ul>
                    </div>
                    <div className="mt-8 md:mt-0">
                        <p className="label-technical mb-4">Coursework focus</p>
                        <ul className="text-ink-mid text-[0.9375rem] leading-loose">
                            <li>Mechanism design &amp; kinematics</li>
                            <li>Computational fluid dynamics</li>
                            <li>Finite element analysis</li>
                            <li>Controls &amp; instrumentation</li>
                            <li>Materials &amp; manufacturing</li>
                        </ul>
                    </div>
                </div>
            </div>
        </main >
    );
}
