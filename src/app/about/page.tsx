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

                <div className="max-w-2xl mb-16">
                    <p className="text-lg md:text-xl text-ink leading-relaxed mb-6">
                        I&apos;m a senior Mechanical Engineering student at Purdue with a math minor.
                        My work sits at the intersection of design and computation — I use CAD and
                        FEA to figure out how something should work, then I build it and find out
                        what I got wrong.
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
