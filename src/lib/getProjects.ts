export interface Project {
    slug: string;
    title: string;
    description: string;
    technologies: string[];
    timeline: string;
    category: string;
    status: 'completed' | 'in-progress';
}

export interface ProjectCategory {
    id: string;
    name: string;
    description: string;
    projects: Project[];
}

const projects: Project[] = [
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
        slug: "wolf-enclosure",
        title: "Wolf Enclosure Feeding System",
        description: "Created and manufactured a method to deliver carcasses in an animal enclosure for Wolf Park conservation center. Led meetings, developed test plans, and acted as liaison with park stakeholders.",
        technologies: ["Project Management", "Manufacturing", "Testing", "Communication"],
        timeline: "Jan - May 2026",
        category: "academic",
        status: "in-progress",
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
        projects.find((p) => p.slug === "flying-bison")!,
        projects.find((p) => p.slug === "gears-rover")!,
        projects.find((p) => p.slug === "asme-grand-prix")!,
        projects.find((p) => p.slug === "ale-fsi-simulations")!,
    ];
}
