export type PublicationLink = {
  label: "DOI" | "PDF" | "Preprint" | "Code" | "BibTeX";
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
      "Separable surrogates for DEM-derived elastic moduli of Hertz-Mindlin and Cundall-Strack granular packings",
    authors: "Pramay B. and S. Gopalakrishnan",
    venue: "Computers and Geotechnics",
    year: "2026",
    status: "Journal | published",
    note:
      "Volume 200, article 108453. Three-variable separable interpolation surrogates for E, G, and K over particle Young's modulus, isotropic confining stress, and initial void ratio.",
    links: [
      {
        label: "DOI",
        href: "https://doi.org/10.1016/j.compgeo.2026.108453"
      },
      {
        label: "PDF",
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
        href: "https://asmedigitalcollection.asme.org/ssdm/proceedings/SSDM2025/88759/V001T03A016/1219011"
      }
    ]
  },
  {
    title:
      "Early-loading tangent modulus maps for dense spherical DEM assemblies across contact laws and particle-modulus regimes",
    authors: "B. Pramay, A. M. Shembekar, and S. Gopalakrishnan",
    venue: "Particuology",
    year: "2026",
    status: "Journal | accepted for publication",
    note:
      "Accepted for publication on 23 Sep 2026. Article reference PARTIC2709. Maps early-loading tangent moduli for dense spherical DEM assemblies across contact laws and particle-modulus regimes.",
    links: []
  },
  {
    title:
      "Breakage-induced shifts in pressure exponents, void-ratio factors, and separability of small-strain elastic moduli in granular materials",
    authors: "B. Pramay and S. Gopalakrishnan",
    venue: "Springer Nature journal",
    year: "Under review",
    status: "Journal manuscript",
    note:
      "Paired no-breakage and particle-breakage DEM ensembles with Hertz-Mindlin contacts; separable laws for E and G fitted with information criteria, grouped K-fold validation, weak-coupling separability diagnostics, and MLP surrogates.",
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
      "Thirty-six anisotropy invariants grouped into contact-fabric, normal-force, tangential-force, force-support, and cross-tensor descriptor families across HM and CS sphere packings.",
    links: []
  }
];
