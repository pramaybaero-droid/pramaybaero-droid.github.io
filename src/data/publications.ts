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
  "Conference publications spanning granular mechanics, small-strain properties, curve fitting, and contact-model-based constitutive modelling.";

export const publications: Publication[] = [
  {
    title:
      "Prediction of Small-Strain Properties of Dry Sand Using Curve Fitting and Machine Learning Models",
    authors: "Pramay Bhatpahri and Srinivasan Gopalakrishnan",
    venue: "EPJ Web of Conferences",
    year: "2025",
    note: "Volume 340, article 09013. Published by EDP Sciences.",
    links: []
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
    links: []
  }
];
