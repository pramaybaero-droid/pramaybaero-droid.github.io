export type ProjectStatus =
  | "Workflow"
  | "Model study"
  | "Pipeline"
  | "Surrogate modelling"
  | "Dynamics"
  | "Descriptors";

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
      "Computational workflows for dense granular assemblies under controlled isotropic confinement and deviatoric loading: packing preparation, quasi-static loading control, and contact-force post-processing.",
    tags: ["YADE", "triaxial DEM", "quasi-static loading"],
    status: "Workflow"
  },
  {
    title: "Contact-law comparison",
    description:
      "Hertz-Mindlin and Cundall-Strack contact models implemented side by side to quantify how contact physics affects small-strain stiffness, Poisson's ratio, coordination state, and micromechanical descriptors.",
    tags: ["Hertz-Mindlin", "Cundall-Strack", "coordination"],
    status: "Model study"
  },
  {
    title: "Audited tangent-window extraction",
    description:
      "Effective early-loading tangent properties extracted from finite loading windows with objective selection, quasi-static screens, and elastic-admissibility checks. A unique amplitude-independent zero-strain limit was not established.",
    tags: ["elastic window", "E, G, K", "consistency checks"],
    status: "Pipeline"
  },
  {
    title: "Separable stiffness maps",
    description:
      "Protocol-specific separable interpolation maps for DEM-derived tangent moduli with confinement, void ratio and particle stiffness as predictors, screened for physical admissibility and assessed with information criteria and grouped/design-level validation.",
    tags: ["constitutive modelling", "AIC / BIC", "grouped CV"],
    status: "Surrogate modelling"
  },
  {
    title: "Breakage-aware ensembles",
    description:
      "A particle-replacement/growth DEM campaign used to assess sensitivity of early-loading tangent stiffness to imposed fragment modulus, with condition-matched uncertainty analyses and tests of pressure-density interactions.",
    tags: ["particle breakage", "pressure exponents", "separability"],
    status: "Dynamics"
  },
  {
    title: "Fabric and force-network anisotropy",
    description:
      "Exploratory computational analysis of fabric and force-network descriptors. This separate ongoing work is not presented as a peer-reviewed outcome of the submitted thesis.",
    tags: ["fabric tensor", "force networks", "descriptor families"],
    status: "Descriptors"
  }
];
