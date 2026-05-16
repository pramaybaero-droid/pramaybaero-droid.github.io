export type ResearchArea = {
  title: string;
  description: string;
  keywords: string[];
  methods: string[];
};

export const researchAreas: ResearchArea[] = [
  {
    title: "Granular materials",
    description:
      "Granular media show complex macroscopic response because force transmission emerges from particle-scale contacts, fabric, and rearrangements. This work focuses on linking measurable simulation response to interpretable mechanics.",
    keywords: ["granular media", "fabric", "packing", "force chains"],
    methods: ["DEM analysis", "triaxial loading", "micro-macro interpretation"]
  },
  {
    title: "DEM and contact mechanics",
    description:
      "Discrete element simulations make it possible to examine how local contact laws influence bulk stress, stiffness, and deformation. Contact-model comparison is used to identify where idealized assumptions affect predicted response.",
    keywords: ["DEM", "contact mechanics", "Hertz-Mindlin", "Cundall-Strack"],
    methods: ["particle simulations", "contact-law studies", "parameter sweeps"]
  },
  {
    title: "Constitutive modelling",
    description:
      "Constitutive models provide compact descriptions of stress-strain response for use at continuum scale. The goal is to connect model structure and fitted parameters to granular mechanisms rather than treating curves as black boxes.",
    keywords: ["constitutive laws", "continuum response", "model calibration"],
    methods: ["model fitting", "simulation-informed calibration", "sensitivity checks"]
  },
  {
    title: "Stress-strain behaviour",
    description:
      "Stress-strain curves contain information about stiffness evolution, yielding, hardening, and post-yield response. Analysis focuses on robust curve processing and comparison across contact laws, densities, and loading paths.",
    keywords: ["triaxial response", "yielding", "hardening", "strain paths"],
    methods: ["curve analysis", "loading-path comparison", "feature extraction"]
  },
  {
    title: "Small-strain stiffness",
    description:
      "Small-strain response is sensitive to contact stiffness, coordination, and initial fabric. Modelling this regime helps connect wave speeds, modulus evolution, and the early part of the stress-strain curve.",
    keywords: ["small strain", "modulus", "stiffness", "wave speed"],
    methods: ["modulus fitting", "initial tangent estimates", "strain-window studies"]
  },
  {
    title: "Machine learning and curve fitting",
    description:
      "Data-driven models can help summarize simulation families and identify low-dimensional structure in mechanics data. The emphasis is on transparent fitting, validation, and physics-aware interpretation.",
    keywords: ["machine learning", "curve fitting", "surrogates", "validation"],
    methods: ["regression", "feature engineering", "physics-informed fitting"]
  },
  {
    title: "Wave propagation in granular media",
    description:
      "Wave propagation provides a dynamic probe of contact networks and stiffness in granular assemblies. Simulations can connect wave speed, attenuation, and dispersion to particle-scale mechanical state.",
    keywords: ["wave propagation", "attenuation", "dispersion", "dynamic response"],
    methods: ["dynamic DEM", "signal analysis", "contact-network diagnostics"]
  }
];
