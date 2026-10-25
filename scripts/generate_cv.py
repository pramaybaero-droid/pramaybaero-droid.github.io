"""Build the site's public academic CV from a single, auditable source.
Run: python scripts/generate_cv.py   (requires reportlab>=4,<5)
The published /Pramay_CV.pdf is regenerated during GitHub Pages deployment.
"""
from pathlib import Path
from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import SimpleDocTemplate, Paragraph, HRFlowable, PageBreak

root = Path(__file__).resolve().parents[1]
output = root / "public" / "Pramay_CV.pdf"
output.parent.mkdir(parents=True, exist_ok=True)
navy = colors.HexColor("#17304b")
text = colors.HexColor("#243447")
muted = colors.HexColor("#566575")
styles = {
    "name": ParagraphStyle("name", fontName="Helvetica-Bold", fontSize=18.6, leading=22, textColor=navy, spaceAfter=3),
    "sub": ParagraphStyle("sub", fontName="Helvetica", fontSize=9.3, leading=13, textColor=muted, spaceAfter=3),
    "heading": ParagraphStyle("heading", fontName="Helvetica-Bold", fontSize=10.3, leading=13, textColor=navy, spaceBefore=10, spaceAfter=4, keepWithNext=True),
    "body": ParagraphStyle("body", fontName="Helvetica", fontSize=9.3, leading=13, textColor=text, spaceAfter=4),
    "entry": ParagraphStyle("entry", fontName="Helvetica-Bold", fontSize=9.4, leading=12.8, textColor=navy, spaceAfter=1),
    "small": ParagraphStyle("small", fontName="Helvetica", fontSize=9, leading=12.6, textColor=text, spaceAfter=3),
    "bullet": ParagraphStyle("bullet", fontName="Helvetica", fontSize=9.1, leading=12.6, textColor=text, leftIndent=12, firstLineIndent=-8, spaceAfter=3),
    "paper": ParagraphStyle("paper", fontName="Helvetica", fontSize=8.9, leading=12.3, textColor=text, leftIndent=12, firstLineIndent=-11, spaceAfter=6),
}
story = []
def add(style, value): story.append(Paragraph(value, styles[style]))
def heading(value):
    add("heading", value)
    story.append(HRFlowable(width="100%", thickness=.55, color=colors.HexColor("#b9cbd9"), spaceAfter=5))
def bullet(value): add("bullet", "&#8226; " + value)
def page_footer(canvas, doc):
    canvas.setStrokeColor(colors.HexColor("#d7e0e6"))
    canvas.line(42, 37, A4[0]-42, 37)
    canvas.setFillColor(muted)
    canvas.setFont("Helvetica", 8)
    canvas.drawString(43, 27, "Pramay Bhatpahri | Academic CV | October 2026")
    canvas.drawRightString(A4[0]-43, 27, str(doc.page))

add("name", "Pramay Bhatpahri")
add("sub", "PhD researcher (thesis submitted) | Computational granular mechanics | Indian Institute of Science, Bengaluru")
add("small", '<link href="mailto:pramayb@iisc.ac.in">pramayb@iisc.ac.in</link>  |  <link href="https://pramaybaero-droid.github.io/">Academic website</link>  |  <link href="https://orcid.org/0000-0001-8151-9629">ORCID: 0000-0001-8151-9629</link>  |  <link href="https://scholar.google.com/citations?user=w8A1gMUAAAAJ">Google Scholar</link>')
heading("RESEARCH PROFILE")
add("body", "Computational mechanics researcher developing and assessing physically constrained stiffness surrogates from three-dimensional DEM simulations of dense granular assemblies. Main contributions concern early-loading tangent response, contact-law and packing-state sensitivity, dimensional transfer, statistical model assessment, and fragment-stiffness effects. Interested in expanding this work toward experimental granular mechanics and constitutive identification.")
heading("EDUCATION")
add("entry", "PhD, Aerospace Engineering | Indian Institute of Science, Bengaluru | 2019-present")
add("small", "<b>Thesis submitted on 28 September 2026; PhD degree not yet awarded.</b> Supervisor: Prof. S. Gopalakrishnan. Thesis: <i>Small-Strain Constitutive Models for Dense Granular Materials.</i>")
add("entry", "M.Tech., Machine Design (Honours) | National Institute of Technology Raipur | 2014-2016")
add("small", "Thesis: Fatigue and fracture behaviour of API X65 line-pipe steel; collaboration with Tata Steel R&amp;D, Jamshedpur. CPI 8.35.")
add("entry", "B.E., Mechanical Engineering (First Class with Honours) | CCEM Raipur / CSVTU Bhilai | 2009-2013")
add("small", "CPI 8.63; branch topper.")
heading("DOCTORAL RESEARCH | IISc AEROSPACE ENGINEERING")
bullet("<b>DEM workflow:</b> Prepared and loaded dry spherical packings using YADE triaxial simulations under controlled isotropic confinement; compared Hertz-Mindlin and Cundall-Strack contacts. Screened effective early-loading tangent estimates with finite-window and physical-admissibility diagnostics.")
bullet("<b>Stiffness maps:</b> Calibrated separable tangent-modulus surrogates against confinement and initial void ratio; applied constrained nonlinear least squares, AIC/BIC, grouped cross-validation, and support-sensitivity audits.")
bullet("<b>Particle modulus and transfer:</b> Modelled particle Young's modulus explicitly. Assessed conditional dimensional similarity and normalized learning representations, including transfer tests on withheld particle-modulus levels.")
bullet("<b>Breakage sensitivity:</b> Analysed a particle-replacement/growth DEM campaign, varying the imposed fragment-to-parent stiffness ratio and quantifying effective tangent-modulus and pressure-exponent shifts, including pressure-density interaction tests.")
bullet("<b>Interpretation limits:</b> The fitted relationships describe protocol-specific finite-window tangent properties of dry, cohesionless sphere assemblies; they are neither universal soil laws nor demonstrated fully incremental elastoplastic models. Experimental comparisons in the thesis are qualitative benchmarks.")
heading("SELECTED METHODS AND SOFTWARE")
add("body", "<b>Simulation:</b> YADE, LAMMPS, Abaqus, ANSYS. <b>Programming:</b> Python, MATLAB, C, shell; NumPy, SciPy, pandas, scikit-learn, Matplotlib, ParaView, VTK, Git, LaTeX. <b>Inference:</b> nonlinear least squares, dimensional analysis, information criteria, grouped/leave-one-design-out validation, bootstrap diagnostics, conventional neural networks and other ML surrogates.")
story.append(PageBreak())
heading("PEER-REVIEWED PUBLICATIONS | TWO JOURNAL ARTICLES AND TWO CONFERENCE PAPERS")
add("paper", '<b>1.</b> B. Pramay and S. Gopalakrishnan. "Separable surrogates for DEM-derived elastic moduli of Hertz-Mindlin and Cundall-Strack granular packings." <i>Computers and Geotechnics</i> <b>200</b>, 108453 (2026). <link href="https://doi.org/10.1016/j.compgeo.2026.108453">doi:10.1016/j.compgeo.2026.108453</link>.')
add("paper", '<b>2.</b> B. Pramay, A. M. Shembekar, and S. Gopalakrishnan. "Early-loading tangent modulus maps for dense spherical DEM assemblies across contact laws and particle-modulus regimes." <i>Particuology</i> <b>119</b>, 74-103 (2026). <link href="https://doi.org/10.1016/j.partic.2026.09.014">doi:10.1016/j.partic.2026.09.014</link>.')
add("paper", '<b>3.</b> Pramay Bhatpahri and Srinivasan Gopalakrishnan. "Prediction of Small-Strain Properties of Dry Sand Using Curve Fitting and Machine Learning Models." <i>EPJ Web of Conferences</i> <b>340</b>, 09013 (2025). <link href="https://doi.org/10.1051/epjconf/202534009013">doi:10.1051/epjconf/202534009013</link>.')
add("paper", '<b>4.</b> B. Pramay, S. Gopalakrishnan, and A. M. Shembekar. "Constitutive Modelling of Granular Materials Using Cundall-Strack and Hertz-Mindlin Contact Models." <i>Proceedings of ASME SSDM 2025</i>, V001T03A016. <link href="https://doi.org/10.1115/SSDM2025-152166">doi:10.1115/SSDM2025-152166</link>.')
heading("ONGOING RESEARCH | NOT COUNTED AS PUBLISHED PAPERS")
add("body", "Granular Matter manuscript under review concerning fragment-stiffness and breakage effects on early-loading tangent moduli. Separate in-preparation work examines dimensionless particle-modulus transfer and fabric/force-network descriptors. Manuscript titles and submission status may change; no additional peer-reviewed publication is claimed.")
heading("EARLIER ACADEMIC AND EXPERIMENTAL ENGINEERING EXPERIENCE")
add("entry", "Faculty Member | ICFAI University, Raipur | August 2016-July 2019")
add("small", "Undergraduate engineering teaching, B.Tech project and laboratory supervision, curriculum and examination activities.")
add("entry", "M.Tech. laboratory research | NIT Raipur / Tata Steel R&amp;D | 2015-2016")
add("small", "Tensile, fatigue, impact, fracture toughness, hardness testing and materials microscopy for API X65 steel, with supporting Abaqus modelling.")
document = SimpleDocTemplate(str(output), pagesize=A4, leftMargin=43, rightMargin=43, topMargin=37, bottomMargin=50, title="Pramay Bhatpahri - Academic CV", author="Pramay Bhatpahri", pageCompression=1)
document.build(story, onFirstPage=page_footer, onLaterPages=page_footer)
print("Generated", output)
