export type Talk = {
  event: string;
  where: string;
  title: string;
  note: string;
};

export const talks: Talk[] = [
  {
    event: "Powders & Grains 2025",
    where: "Presenter",
    title:
      "Prediction of small-strain properties of dry sand using curve fitting and machine learning models",
    note: "Published in EPJ Web of Conferences, vol. 340, article 09013 (2025)."
  },
  {
    event: "ASME SSDM 2025",
    where: "Houston, TX | May 5-7, 2025",
    title:
      "Constitutive modelling of granular materials using Cundall-Strack and Hertz-Mindlin contact models",
    note: "Published as paper SSDM2025-152166 / V001T03A016."
  }
];
