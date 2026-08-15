export type ProjectStatus = "In progress" | "Research code" | "Coming soon";

export type Project = {
  title: string;
  description: string;
  tags: string[];
  status: ProjectStatus;
  githubUrl?: string;
  demoUrl?: string;
};

export const projects: Project[] = [
  {
    title: "DEM triaxial simulation workflows",
    description:
      "Reusable workflows for preparing, loading, and post-processing granular assemblies under triaxial compression.",
    tags: ["DEM", "triaxial", "post-processing"],
    status: "In progress"
  },
  {
    title: "Hertz-Mindlin vs Cundall-Strack contact-model comparison",
    description:
      "A comparison framework for studying how contact-law choices influence stiffness, strength, and stress-strain response.",
    tags: ["contact models", "Hertz-Mindlin", "Cundall-Strack"],
    status: "Research code"
  },
  {
    title: "Small-strain modulus fitting pipeline",
    description:
      "A fitting pipeline for estimating small-strain moduli from simulation curves using transparent strain-window controls.",
    tags: ["small strain", "modulus", "curve fitting"],
    status: "In progress"
  },
  {
    title: "Stress-strain prediction using ML",
    description:
      "A lightweight modelling workflow for learning stress-strain response trends from simulation-derived descriptors.",
    tags: ["machine learning", "stress-strain", "surrogate modelling"],
    status: "Coming soon"
  },
  {
    title: "Wave propagation in granular media",
    description:
      "Simulation and signal-processing tools for examining wave speed, attenuation, and contact-network effects.",
    tags: ["wave propagation", "dynamic DEM", "signal analysis"],
    status: "Coming soon"
  },
  {
    title: "TDA / force-network analysis",
    description:
      "Exploratory analysis of force-network structure using topological and graph-based descriptors.",
    tags: ["TDA", "force networks", "granular fabric"],
    status: "Research code"
  }
];
