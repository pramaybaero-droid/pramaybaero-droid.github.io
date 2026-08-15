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
    title: "Audited elastic-window extraction",
    description:
      "Early-loading tangent moduli E, G, and K extracted from stress-strain data using audited elastic-window detection with explicit elastic-consistency checks.",
    tags: ["elastic window", "E, G, K", "consistency checks"],
    status: "Pipeline"
  },
  {
    title: "Separable stiffness maps",
    description:
      "Support-limited separable laws for DEM-derived moduli with explicit dependence on particle Young's modulus, confining stress, and void ratio, calibrated under physics gates and ranked by AIC/BIC and grouped cross-validation.",
    tags: ["constitutive modelling", "AIC / BIC", "grouped CV"],
    status: "Surrogate modelling"
  },
  {
    title: "Breakage-aware ensembles",
    description:
      "Paired no-breakage and particle-breakage DEM ensembles used to analyse breakage-induced shifts in stiffness scaling, pressure exponents, and separability.",
    tags: ["particle breakage", "pressure exponents", "separability"],
    status: "Dynamics"
  },
  {
    title: "Fabric and force-network anisotropy",
    description:
      "Contact-fabric, normal-force, tangential-force, force-support, and cross-tensor anisotropy descriptors computed per regime, connecting stiffness trends to microstructural state.",
    tags: ["fabric tensor", "force networks", "descriptor families"],
    status: "Descriptors"
  }
];
