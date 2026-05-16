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
  "Selected publications and preprints will be added here.";

export const publications: Publication[] = [
  {
    title: "[Placeholder] Add publication title",
    authors: "Pramay and co-authors",
    venue: "Journal / conference / preprint",
    year: "TBD",
    note: "Replace this entry with a real publication when available.",
    links: [
      { label: "DOI", href: "#" },
      { label: "PDF", href: "#" },
      { label: "Preprint", href: "#" },
      { label: "Code", href: "#" },
      { label: "BibTeX", href: "#" }
    ]
  }
];
