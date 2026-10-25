export type PublicationLink = {
  label: "DOI" | "PDF" | "Article" | "Preprint" | "Code" | "BibTeX";
  href: string;
};

export type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: string;
  status: string;
  note: string;
  links: PublicationLink[];
};

export const publicationNote =
  "Papers and manuscripts spanning granular mechanics, small-strain stiffness, DEM contact laws, curve fitting, machine learning, and constitutive modelling.";

export const publications: Publication[] = [
  {
    title:
      "Early-loading tangent modulus maps for dense spherical DEM assemblies across contact laws and particle-modulus regimes",
    authors: "B. Pramay, Anay Mohan Shembekar, and S. Gopalakrishnan",
    venue: "Particuology 119, 74–103",
    year: "2026",
    status: "Journal | published online",
    note:
      "Published online 3 October 2026; volume 119, pages 74–103. Effective early-loading tangent maps for two contact laws and two particle-modulus regimes, with protocol-specific calibration limits.",
    links: [
      {
        label: "DOI",
        href: "https://doi.org/10.1016/j.partic.2026.09.014"
      },
      {
        label: "Article",
        href: "https://www.sciencedirect.com/science/article/pii/S1674200126003524"
      }
    ]
  },
  {
    title:
      "Separable surrogates for DEM-derived elastic moduli of Hertz-Mindlin and Cundall-Strack granular packings",
    authors: "B. Pramay and S. Gopalakrishnan",
    venue: "Computers and Geotechnics",
    year: "2026",
    status: "Journal | published",
    note:
      "Volume 200, article 108453. Domain-limited, three-variable separable interpolation maps for E, G and K, with explicit particle Young's modulus, isotropic confinement and initial void ratio.",
    links: [
      {
        label: "DOI",
        href: "https://doi.org/10.1016/j.compgeo.2026.108453"
      },
      {
        label: "Article",
        href: "https://www.sciencedirect.com/science/article/pii/S0266352X26005598"
      }
    ]
  },
  {
    title:
      "Prediction of Small-Strain Properties of Dry Sand Using Curve Fitting and Machine Learning Models",
    authors: "Pramay Bhatpahri and Srinivasan Gopalakrishnan",
    venue: "EPJ Web of Conferences",
    year: "2025",
    status: "Conference | published",
    note:
      "Volume 340, article 09013. Small-strain stiffness and Poisson's ratio from Hertz-Mindlin YADE triaxial simulations, comparing empirical curve-fitting laws against neural-network models.",
    links: [
      {
        label: "DOI",
        href: "https://doi.org/10.1051/epjconf/202534009013"
      },
      {
        label: "PDF",
        href: "https://www.epj-conferences.org/articles/epjconf/pdf/2025/25/epjconf_PnG2025_09013.pdf"
      },
      {
        label: "Article",
        href: "https://www.epj-conferences.org/articles/epjconf/abs/2025/25/epjconf_PnG2025_09013/epjconf_PnG2025_09013.html"
      }
    ]
  },
  {
    title:
      "Constitutive Modelling of Granular Materials Using Cundall-Strack and Hertz-Mindlin Contact Models",
    authors:
      "Bhatpahri Pramay, S. Gopalakrishnan, and Anay Mohan Shembekar",
    venue:
      "ASME Aerospace Structures, Structural Dynamics, and Materials Conference",
    year: "2025",
    status: "Conference | published",
    note:
      "Volume 88759, paper V001T03A016. Side-by-side comparison of Cundall-Strack and Hertz-Mindlin contact models in YADE triaxial simulations.",
    links: [
      {
        label: "DOI",
        href: "https://doi.org/10.1115/SSDM2025-152166"
      },
      {
        label: "PDF",
        href: "https://asmedigitalcollection.asme.org/ssdm/proceedings-pdf/doi/10.1115/SSDM2025-152166/7513806/v001t03a016-ssdm2025-152166.pdf"
      },
      {
        label: "Article",
        href: "https://asmedigitalcollection.asme.org/ssdm/proceedings/SSDM2025/88759/V001T03A016/1219011"
      }
    ]
  },
  {
    title:
      "Breakage-induced shifts in pressure exponents, void-ratio factors, and separability of small-strain elastic moduli in granular materials",
    authors: "B. Pramay and S. Gopalakrishnan",
    venue: "Granular Matter (manuscript under review)",
    year: "Under review",
    status: "Journal manuscript",
    note:
      "Breakage/fragment-stiffness response under an audited particle-replacement protocol. This is not counted among published papers; the thesis and online record use different working titles pending editorial revision.",
    links: []
  },
  {
    title:
      "Dimensionless reduction removes learner dependence, not extrapolation error, in machine-learned surrogates of discrete-element granular stiffness",
    authors: "B. Pramay and S. Gopalakrishnan",
    venue: "Manuscript in preparation (thesis Chapter 5)",
    year: "2026",
    status: "Unsubmitted manuscript",
    note:
      "Dimensional target normalization and particle-stiffness transfer for conventional regression and machine-learning surrogates; a thesis-based, unsubmitted study, not a peer-reviewed paper.",
    links: []
  },
  {
    title:
      "Contact-law-dependent coherence of small-strain fabric and force anisotropies in DEM sphere packings",
    authors: "B. Pramay et al.",
    venue: "Manuscript in preparation",
    year: "In preparation",
    status: "In preparation",
    note:
      "Exploratory analysis of fabric and force-network descriptor families in simulated packings; results are not represented as peer-reviewed or part of the submitted thesis.",
    links: []
  }
];
