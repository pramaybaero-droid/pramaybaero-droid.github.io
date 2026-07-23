export type PublicationLink = {
  label: "DOI" | "PDF" | "Preprint" | "Code" | "BibTeX";
  href: string;
};

export type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: string;
  note: string;
  links: PublicationLink[];
};

export const publicationNote =
  "Publications spanning granular mechanics, small-strain properties, curve fitting, machine learning, and contact-model-based constitutive modelling.";

export const publications: Publication[] = [
  {
    title:
      "Separable surrogates for DEM-derived elastic moduli of Hertz-Mindlin and Cundall-Strack granular packings",
    authors: "Pramay B. and S. Gopalakrishnan",
    venue: "Computers and Geotechnics",
    year: "2026",
    note: "Volume 200, article 108453.",
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
    note: "Volume 340, article 09013. Published by EDP Sciences.",
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
    note:
      "Volume 88759, paper V001T03A016. Published by the American Society of Mechanical Engineers.",
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
  }
];
