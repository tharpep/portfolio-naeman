export interface Project {
    slug: string;
    title: string;
    description: string;
    technologies: string[];
    timeline: string;
    category: string;
    status: 'completed' | 'in-progress';
    pdfUrl?: string;
    pdfLabel?: string;
    imageUrl?: string;
}

export interface ProjectCategory {
    id: string;
    name: string;
    description: string;
    projects: Project[];
}

const projects: Project[] = [
    // Case Studies
    {
        slug: "leak-detection-case-study",
        title: "Pipeline Leak Detection Case Study",
        description: "An engineering case study analyzing leak detection methodologies for pipeline systems, covering failure modes, detection techniques, and recommendations.",
        technologies: ["Engineering Analysis", "Technical Writing"],
        timeline: "2025",
        category: "case-study",
        status: "completed",
        pdfUrl: "/Leak%20Detection%20Case%20Study.pdf",
        pdfLabel: "Case Study",
    },
    // Research
    {
        slug: "ale-fsi-simulations",
        title: "ALE-FSI Fluid Simulations",
        description: "Programmed using FEniCS to conduct ALE-FSI fluid simulations in elastic microchannels using the finite element method.",
        technologies: ["FEniCS", "Python", "Finite Element Method"],
        timeline: "Aug 2025 - Present",
        category: "research",
        status: "in-progress",
    },
    // Academic Projects
    {
        slug: "wolf-park-deer-dash",
        title: "Deer Dash – Wolf Park Carcass Feeder",
        description: "Senior design project to build a wholly mechanical device that safely delivers animal carcasses into wolf enclosures at Wolf Park in Indiana. The system enables wolves to exhibit natural leaping and feeding behaviors, improving enrichment and safety for animals, staff, and guests. Serving as Project Manager and Stakeholder Liaison.",
        technologies: ["Mechanical Design", "CAD", "FEA", "Structural Analysis"],
        timeline: "Jan – May 2026",
        category: "academic",
        status: "in-progress",
        pdfUrl: "/PDR_Slides-1.pdf",
        pdfLabel: "Preliminary Design Review",
    },
    {
        slug: "flying-bison",
        title: "Remote Controlled Flying Bison",
        description: "Built a mechanical action animal toy using CAD in Creo Parametric, 3D printed physical prototyping, and microcontroller programming. Designed the mechanism for the DC motor-driven legs using pin-in-slot and linkage joints.",
        technologies: ["Creo Parametric", "3D Printing", "Microcontrollers", "DC Motors"],
        timeline: "Jan - May 2024",
        category: "academic",
        status: "completed",
    },
    {
        slug: "drip-defender",
        title: "Drip Defender Prototype",
        description: "Created a prototype for a dish drying rack for college dorm rooms using CAD in NX, laser-cut Acrylic, and steel wire-frame.",
        technologies: ["NX", "Laser Cutting", "Acrylic", "Prototyping"],
        timeline: "Aug - Dec 2023",
        category: "academic",
        status: "completed",
    },
    {
        slug: "gears-rover",
        title: "GEARS Autonomous Rover",
        description: "Designed, built, and programmed an autonomous rover using BrickPi3, Raspberry Pi, and MINDSTORMS that navigates mazes with physical and IR hazards. Led Python software design implementing PID motor control.",
        technologies: ["Python", "Raspberry Pi", "PID Control", "Sensors", "BrickPi3"],
        timeline: "Jan - May 2023",
        category: "academic",
        status: "completed",
    },
    // Extracurriculars
    {
        slug: "asme-grand-prix",
        title: "ASME Grand Prix Go-Kart",
        description: "Worked with the testing and performance subteam to design and build a go-kart. Conducted tests on the clutch spring mechanism using MATLAB and Excel to optimize tuning.",
        technologies: ["MATLAB", "Excel", "Testing", "Mechanical Design"],
        timeline: "Aug - Dec 2024",
        category: "extracurricular",
        status: "completed",
    },
    {
        slug: "psp-satellites",
        title: "PSP Satellites CubeSat",
        description: "Worked with the mechanical subteam to create components of a 3U CubeSat. Designed the integration of the sun sensor navigational instrument using Fusion 360.",
        technologies: ["Fusion 360", "CubeSat", "Mechanical Design"],
        timeline: "Jan - May 2023",
        category: "extracurricular",
        status: "completed",
    },
];

export function getAllProjects(): Project[] {
    return projects;
}

export function getProjectBySlug(slug: string): Project | undefined {
    return projects.find((p) => p.slug === slug);
}

export function getProjectsByCategory(): ProjectCategory[] {
    const categories: ProjectCategory[] = [
        {
            id: "case-study",
            name: "Case Studies",
            description: "Independent engineering analyses and technical write-ups.",
            projects: projects.filter((p) => p.category === "case-study"),
        },
        {
            id: "research",
            name: "Research",
            description: "Computational mechanics and simulation work.",
            projects: projects.filter((p) => p.category === "research"),
        },
        {
            id: "academic",
            name: "Academic Projects",
            description: "Design and engineering coursework projects.",
            projects: projects.filter((p) => p.category === "academic"),
        },
        {
            id: "extracurricular",
            name: "Extracurriculars",
            description: "Engineering competition and club projects.",
            projects: projects.filter((p) => p.category === "extracurricular"),
        },
    ];

    return categories.filter((c) => c.projects.length > 0);
}

export function getFeaturedProjects(): Project[] {
    return [
        projects.find((p) => p.slug === "wolf-park-deer-dash")!,
        projects.find((p) => p.slug === "ale-fsi-simulations")!,
        projects.find((p) => p.slug === "flying-bison")!,
        projects.find((p) => p.slug === "asme-grand-prix")!,
    ];
}
