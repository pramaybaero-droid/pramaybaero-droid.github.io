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
    href: "#"
  },
  {
    label: "ORCID",
    value: "ORCID profile",
    href: "#"
  },
  {
    label: "GitHub",
    value: "GitHub profile",
    href: "#"
  },
  {
    label: "LinkedIn",
    value: "LinkedIn profile",
    href: "#"
  },
  {
    label: "Institutional profile",
    value: "IISc profile",
    href: "#"
  }
];
