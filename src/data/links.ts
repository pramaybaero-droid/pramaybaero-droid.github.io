export type ContactLink = {
  label: string;
  value: string;
  href: string;
};

export const contactLinks: ContactLink[] = [
  {
    label: "Email",
    value: "your.email@iisc.ac.in",
    href: "mailto:your.email@iisc.ac.in"
  },
  {
    label: "Google Scholar",
    value: "Google Scholar profile",
    href: "https://scholar.google.com/citations?user=w8A1gMUAAAAJ&hl=en"
  },
  {
    label: "ORCID",
    value: "ORCID profile",
    href: "https://orcid.org/0000-0001-8151-9629"
  },
  {
    label: "GitHub",
    value: "GitHub profile",
    href: "https://github.com/pramaybaero-droid"
  },
  {
    label: "LinkedIn",
    value: "LinkedIn profile",
    href: "https://www.linkedin.com/in/pramay-b-15v11/"
  },
  {
    label: "Institutional profile",
    value: "IISc profile",
    href: "#"
  }
];
