export type QualificationKey =
  | "a-level"
  | "a-level-double"
  | "a-level-with-as"
  | "as-level"
  | "as-level-double"
  | "epq"
  | "t-level"
  | "t-level-full"
  | "t-level-component"
  | "btec-extended"
  | "btec-diploma"
  | "btec-subsidiary"
  | "btec-certificate"
  | "btec-qcf-90credit"
  | "btec-qcf-certificate"
  | "btec-qcf-diploma"
  | "btec-qcf-extended-diploma"
  | "btec-qcf-subsidiary-diploma"
  | "btec-national-award"
  | "btec-national-certificate"
  | "btec-national-extcert"
  | "btec-national-diploma"
  | "btec-national-extdiploma"
  | "btec-national-founddiploma"
  | "btec-national-540diploma"
  | "ocr-cam-tech-intro"
  | "ocr-cam-tech-diploma"
  | "ocr-cam-tech-extended"
  | "ibcp-reflective-project"
  | "ibcp-language-development"
  | "ibcp-core-bonus"
  | "ibcp-overall"
  | "ib"
  | "scottish-higher"
  | "scottish-advanced-higher"
  | "access-to-he"
  | "access-to-he-ni"
  | "core-maths"
  | "irish-leaving-cert"
  | "cambridge-pre-u"
  | "cambridge-pre-u-principal"
  | "cambridge-pre-u-short"
  | "cambridge-pre-u-gpir"
  | "welsh-bacc-core-skills"
  | "welsh-bacc-advanced-skills"
  | "welsh-bacc-advanced-diploma"
  | string;

export interface GradeOption {
  label: string;
  value: string;
  points: number;
}

export interface QualificationDef {
  key: QualificationKey;
  name: string;
  shortName: string;
  icon: string;
  description: string;
  grades: GradeOption[];
  available: boolean;
}

export interface AddedQualification {
  id: string;
  qualKey: QualificationKey;
  gradeValue: string;
  gradeLabel: string;
  points: number;
}

export const REFERENCE_MAX_POINTS = 200;

export const QUALIFICATIONS: Record<QualificationKey, QualificationDef> = {
  "a-level": {
    key: "a-level",
    name: "A-Level",
    shortName: "A-Level",
    icon: "",
    description: "GCE Advanced Level (UK)",
    available: true,
    grades: [
      { label: "A*", value: "astar", points: 56 },
      { label: "A", value: "a", points: 48 },
      { label: "B", value: "b", points: 40 },
      { label: "C", value: "c", points: 32 },
      { label: "D", value: "d", points: 24 },
      { label: "E", value: "e", points: 16 },
    ],
  },
  "as-level": {
    key: "as-level",
    name: "AS-Level",
    shortName: "AS",
    icon: "",
    description: "Advanced Subsidiary Level",
    available: true,
    grades: [
      { label: "A", value: "a", points: 24 },
      { label: "B", value: "b", points: 20 },
      { label: "C", value: "c", points: 16 },
      { label: "D", value: "d", points: 12 },
      { label: "E", value: "e", points: 8 },
    ],
  },
  "btec-extended": {
    key: "btec-extended",
    name: "BTEC Extended Diploma",
    shortName: "BTEC Ext Dip",
    icon: "",
    description: "BTEC Level 3 National Extended Diploma (120 credits)",
    available: true,
    grades: [
      { label: "D*D*D*", value: "d3d3d3", points: 168 },
      { label: "D*D*D", value: "d3d3d2", points: 160 },
      { label: "D*DD", value: "d3d2d2", points: 152 },
      { label: "DDD", value: "d2d2d2", points: 144 },
      { label: "DDM", value: "d2d2m2", points: 136 },
      { label: "DMM", value: "d2m2m2", points: 128 },
      { label: "MMM", value: "m2m2m2", points: 120 },
      { label: "MMP", value: "m2m2p2", points: 112 },
      { label: "MPP", value: "m2p2p2", points: 104 },
      { label: "PPP", value: "p2p2p2", points: 96 },
    ],
  },
  "btec-diploma": {
    key: "btec-diploma",
    name: "BTEC Diploma",
    shortName: "BTEC Dip",
    icon: "",
    description: "BTEC Level 3 National Diploma (80 credits)",
    available: true,
    grades: [
      { label: "D*D*", value: "d3d3", points: 112 },
      { label: "D*D", value: "d3d2", points: 104 },
      { label: "DD", value: "d2d2", points: 96 },
      { label: "DM", value: "d2m2", points: 88 },
      { label: "MM", value: "m2m2", points: 80 },
      { label: "MP", value: "m2p2", points: 72 },
      { label: "PP", value: "p2p2", points: 64 },
    ],
  },
  "btec-subsidiary": {
    key: "btec-subsidiary",
    name: "BTEC Subsidiary Diploma",
    shortName: "BTEC Sub Dip",
    icon: "",
    description: "BTEC Level 3 National Subsidiary Diploma (40 credits)",
    available: true,
    grades: [
      { label: "D*", value: "d3", points: 56 },
      { label: "D", value: "d2", points: 48 },
      { label: "M", value: "m2", points: 40 },
      { label: "P", value: "p2", points: 32 },
    ],
  },
  "btec-certificate": {
    key: "btec-certificate",
    name: "BTEC Certificate",
    shortName: "BTEC Cert",
    icon: "",
    description: "BTEC Level 3 National Certificate (30 credits)",
    available: true,
    grades: [
      { label: "D*", value: "d3", points: 42 },
      { label: "D", value: "d2", points: 36 },
      { label: "M", value: "m2", points: 30 },
      { label: "P", value: "p2", points: 24 },
    ],
  },
  ib: {
    key: "ib",
    name: "International Baccalaureate (IB)",
    shortName: "IB",
    icon: "",
    description: "IB Diploma Programme – Higher Level subjects (SL also listed)",
    available: true,
    grades: [
      { label: "HL Grade 7", value: "hl7", points: 56 },
      { label: "HL Grade 6", value: "hl6", points: 48 },
      { label: "HL Grade 5", value: "hl5", points: 40 },
      { label: "HL Grade 4", value: "hl4", points: 32 },
      { label: "SL Grade 7", value: "sl7", points: 28 },
      { label: "SL Grade 6", value: "sl6", points: 24 },
      { label: "SL Grade 5", value: "sl5", points: 20 },
      { label: "SL Grade 4", value: "sl4", points: 16 },
      { label: "HL Grade 3", value: "hl3", points: 24 },
      { label: "SL Grade 3", value: "sl3", points: 12 },
      { label: "IB Core (Extended Essay / TOK bonus max)", value: "core-max", points: 3 },
    ],
  },
  "t-level": {
    key: "t-level",
    name: "T-Level",
    shortName: "T-Level",
    icon: "",
    description: "Technical Level Qualification (England)",
    available: true,
    grades: [
      { label: "Distinction*", value: "dstar", points: 168 },
      { label: "Distinction", value: "distinction", points: 144 },
      { label: "Merit", value: "merit", points: 120 },
      { label: "Pass (C or above)", value: "pass-c", points: 96 },
      { label: "Pass (below C)", value: "pass-below-c", points: 72 },
    ],
  },
  "scottish-higher": {
    key: "scottish-higher",
    name: "Scottish Higher",
    shortName: "Scottish Higher",
    icon: "",
    description: "SQA Higher Grade (Scotland)",
    available: true,
    grades: [
      { label: "A (Band 1)", value: "a1", points: 36 },
      { label: "A (Band 2)", value: "a2", points: 33 },
      { label: "B (Band 1)", value: "b1", points: 30 },
      { label: "B (Band 2)", value: "b2", points: 27 },
      { label: "C (Band 1)", value: "c1", points: 24 },
      { label: "C (Band 2)", value: "c2", points: 21 },
      { label: "D", value: "d", points: 18 },
    ],
  },
  "scottish-advanced-higher": {
    key: "scottish-advanced-higher",
    name: "Scottish Advanced Higher",
    shortName: "Advanced Higher",
    icon: "",
    description: "SQA Advanced Higher (Scotland)",
    available: true,
    grades: [
      { label: "A (Band 1)", value: "a1", points: 56 },
      { label: "A (Band 2)", value: "a2", points: 52 },
      { label: "B (Band 1)", value: "b1", points: 48 },
      { label: "B (Band 2)", value: "b2", points: 44 },
      { label: "C (Band 1)", value: "c1", points: 40 },
      { label: "C (Band 2)", value: "c2", points: 36 },
      { label: "D", value: "d", points: 32 },
    ],
  },
  "access-to-he": {
    key: "access-to-he",
    name: "Access to HE Diploma",
    shortName: "Access to HE",
    icon: "",
    description: "Access to Higher Education Diploma (graded units at Distinction / Merit / Pass)",
    available: true,
    grades: [
      { label: "45 Credits at Distinction", value: "45d", points: 144 },
      { label: "30 Distinction + 15 Merit", value: "30d15m", points: 136 },
      { label: "24 Distinction + 21 Merit", value: "24d21m", points: 130 },
      { label: "15 Distinction + 30 Merit", value: "15d30m", points: 122 },
      { label: "45 Credits at Merit", value: "45m", points: 108 },
      { label: "30 Merit + 15 Pass", value: "30m15p", points: 100 },
      { label: "15 Merit + 30 Pass", value: "15m30p", points: 88 },
      { label: "45 Credits at Pass", value: "45p", points: 72 },
    ],
  },
  epq: {
    key: "epq",
    name: "EPQ (Extended Project Qualification)",
    shortName: "EPQ",
    icon: "",
    description: "Extended Project Qualification (Level 3)",
    available: true,
    grades: [
      { label: "A*", value: "astar", points: 28 },
      { label: "A", value: "a", points: 24 },
      { label: "B", value: "b", points: 20 },
      { label: "C", value: "c", points: 16 },
      { label: "D", value: "d", points: 12 },
      { label: "E", value: "e", points: 8 },
    ],
  },
  "irish-leaving-cert": {
    key: "irish-leaving-cert",
    name: "Irish Leaving Certificate",
    shortName: "Leaving Cert",
    icon: "",
    description: "Irish Leaving Certificate – Higher Level common UCAS mappings",
    available: true,
    grades: [
      { label: "H1", value: "h1", points: 56 },
      { label: "H2", value: "h2", points: 52 },
      { label: "H3", value: "h3", points: 48 },
      { label: "H4", value: "h4", points: 44 },
      { label: "H5", value: "h5", points: 40 },
      { label: "O1", value: "o1", points: 36 },
      { label: "H6", value: "h6", points: 32 },
      { label: "O2", value: "o2", points: 28 },
      { label: "O3", value: "o3", points: 24 },
      { label: "H7 / O4", value: "h7-o4", points: 20 },
      { label: "O5", value: "o5", points: 16 },
      { label: "O6", value: "o6", points: 12 },
      { label: "O7 / O8", value: "o7-o8", points: 0 },
    ],
  },
  "cambridge-pre-u": {
    key: "cambridge-pre-u",
    name: "Cambridge Pre-U (Diploma)",
    shortName: "Pre-U Diploma",
    icon: "",
    description: "Cambridge International Level 3 Diploma in Pre-U",
    available: true,
    grades: [
      { label: "D1D1D1 (Distinction 1, all 3)", value: "d1d1d1", points: 174 },
      { label: "D1D1D2", value: "d1d1d2", points: 170 },
      { label: "D2D2D2", value: "d2d2d2", points: 162 },
      { label: "D2D2D3", value: "d2d2d3", points: 156 },
      { label: "D3D3D3", value: "d3d3d3", points: 144 },
      { label: "D3D3M1", value: "d3d3m1", points: 140 },
      { label: "M1M1M1", value: "m1m1m1", points: 120 },
      { label: "M1M1M2", value: "m1m1m2", points: 116 },
      { label: "M2M2M2", value: "m2m2m2", points: 108 },
      { label: "M2M2M3", value: "m2m2m3", points: 104 },
      { label: "M3M3M3", value: "m3m3m3", points: 96 },
      { label: "M3M3P1", value: "m3m3p1", points: 92 },
      { label: "P1P1P1", value: "p1p1p1", points: 72 },
      { label: "P1P1P2", value: "p1p1p2", points: 68 },
      { label: "P2P2P2", value: "p2p2p2", points: 60 },
    ],
  },
  "cambridge-pre-u-principal": {
    key: "cambridge-pre-u-principal",
    name: "Cambridge Pre-U Certificate – Principal Subject",
    shortName: "Pre-U Principal",
    icon: "",
    description: "Cambridge International Pre-U Principal Subject (single subject)",
    available: true,
    grades: [
      { label: "Distinction 1 (D1)", value: "d1", points: 58 },
      { label: "Distinction 2 (D2)", value: "d2", points: 56 },
      { label: "Distinction 3 (D3)", value: "d3", points: 48 },
      { label: "Merit 1 (M1)", value: "m1", points: 44 },
      { label: "Merit 2 (M2)", value: "m2", points: 40 },
      { label: "Merit 3 (M3)", value: "m3", points: 32 },
      { label: "Pass 1 (P1)", value: "p1", points: 24 },
      { label: "Pass 2 (P2)", value: "p2", points: 20 },
      { label: "Pass 3 (P3)", value: "p3", points: 12 },
    ],
  },
  "cambridge-pre-u-short": {
    key: "cambridge-pre-u-short",
    name: "Cambridge Pre-U Certificate – Short Course",
    shortName: "Pre-U Short",
    icon: "",
    description: "Cambridge International Pre-U Short Course (half size of Principal)",
    available: true,
    grades: [
      { label: "D1", value: "d1", points: 28 },
      { label: "D2", value: "d2", points: 28 },
      { label: "D3", value: "d3", points: 24 },
      { label: "M1", value: "m1", points: 22 },
      { label: "M2", value: "m2", points: 20 },
      { label: "M3", value: "m3", points: 16 },
      { label: "P1", value: "p1", points: 12 },
      { label: "P2", value: "p2", points: 10 },
      { label: "P3", value: "p3", points: 6 },
    ],
  },
  "cambridge-pre-u-gpir": {
    key: "cambridge-pre-u-gpir",
    name: "Cambridge Pre-U Certificate: Global Perspectives & Independent Research",
    shortName: "Pre-U GPIR",
    icon: "",
    description: "Cambridge International Pre-U Global Perspectives & Independent Research (500/4010/8)",
    available: true,
    grades: [
      { label: "D1", value: "d1", points: 28 },
      { label: "D2", value: "d2", points: 28 },
      { label: "D3", value: "d3", points: 24 },
      { label: "M1", value: "m1", points: 22 },
      { label: "M2", value: "m2", points: 20 },
      { label: "M3", value: "m3", points: 16 },
      { label: "P1", value: "p1", points: 12 },
      { label: "P2", value: "p2", points: 10 },
      { label: "P3", value: "p3", points: 6 },
    ],
  },
  "a-level-double": {
    key: "a-level-double",
    name: "A level (Double Award)",
    shortName: "A-Level Double",
    icon: "",
    description: "Double Award A-Level – twice the size, two letter grades combined",
    available: true,
    grades: [
      { label: "A*A*", value: "a-a-a", points: 112 },
      { label: "A*A", value: "a-a", points: 104 },
      { label: "AA", value: "aa", points: 96 },
      { label: "AB", value: "ab", points: 88 },
      { label: "BB", value: "bb", points: 80 },
      { label: "BC", value: "bc", points: 72 },
      { label: "CC", value: "cc", points: 64 },
      { label: "CD", value: "cd", points: 56 },
      { label: "DD", value: "dd", points: 48 },
      { label: "DE", value: "de", points: 40 },
      { label: "EE", value: "ee", points: 32 },
    ],
  },
  "a-level-with-as": {
    key: "a-level-with-as",
    name: "A level with AS (additional)",
    shortName: "A-Level + AS add",
    icon: "",
    description: "Taken when A-Level is awarded with an additional AS grade (combined award)",
    available: true,
    grades: [
      { label: "A*a", value: "astar-a", points: 80 },
      { label: "A*b", value: "astar-b", points: 76 },
      { label: "Aa", value: "a-a", points: 72 },
      { label: "Ab", value: "a-b", points: 68 },
      { label: "Ac", value: "a-c", points: 64 },
      { label: "Ba", value: "b-a", points: 64 },
      { label: "Bb", value: "b-b", points: 60 },
      { label: "Bc", value: "b-c", points: 56 },
      { label: "Bd", value: "b-d", points: 52 },
      { label: "Cb", value: "c-b", points: 52 },
      { label: "Cc", value: "c-c", points: 48 },
      { label: "Cd", value: "c-d", points: 44 },
      { label: "Ce", value: "c-e", points: 40 },
      { label: "Dc", value: "d-c", points: 40 },
      { label: "Dd", value: "d-d", points: 36 },
      { label: "De", value: "d-e", points: 32 },
      { label: "Ed", value: "e-d", points: 32 },
      { label: "Ee", value: "e-e", points: 24 },
    ],
  },
  "as-level-double": {
    key: "as-level-double",
    name: "AS (Double Award)",
    shortName: "AS Double",
    icon: "",
    description: "Advanced Subsidiary Double Award – two combined AS grades",
    available: true,
    grades: [
      { label: "AA", value: "aa", points: 48 },
      { label: "AB", value: "ab", points: 44 },
      { label: "BB", value: "bb", points: 40 },
      { label: "BC", value: "bc", points: 36 },
      { label: "CC", value: "cc", points: 32 },
      { label: "CD", value: "cd", points: 28 },
      { label: "DD", value: "dd", points: 24 },
      { label: "DE", value: "de", points: 20 },
      { label: "EE", value: "ee", points: 16 },
    ],
  },
  "t-level-full": {
    key: "t-level-full",
    name: "T level (Full T Level achieved)",
    shortName: "Full T-Level",
    icon: "",
    description: "Full T-Level Programme (combined core, occupational specialism, industry placement achieved)",
    available: true,
    grades: [
      { label: "Distinction*", value: "dstar", points: 168 },
      { label: "Distinction", value: "distinction", points: 144 },
      { label: "Merit", value: "merit", points: 120 },
      { label: "Pass (C or above)", value: "pass-c", points: 96 },
      { label: "Pass (below C)", value: "pass-below-c", points: 72 },
    ],
  },
  "t-level-component": {
    key: "t-level-component",
    name: "T Level – Core component + Industry placement only",
    shortName: "T-Level Core",
    icon: "",
    description: "Partial T-Level – Core component plus mandatory Industry placement only (occupational specialism not yet achieved)",
    available: true,
    grades: [
      { label: "Distinction*", value: "dstar", points: 84 },
      { label: "Distinction", value: "distinction", points: 72 },
      { label: "Merit", value: "merit", points: 60 },
      { label: "Pass (C or above)", value: "pass-c", points: 48 },
      { label: "Pass (below C)", value: "pass-below-c", points: 36 },
      { label: "Unclassified", value: "u", points: 0 },
    ],
  },
  "btec-qcf-90credit": {
    key: "btec-qcf-90credit",
    name: "Pearson BTEC 90-Credit Diploma (QCF)",
    shortName: "BTEC 90cr Dip",
    icon: "",
    description: "Pearson BTEC Level 3 90-Credit Diploma (QCF) – half Extended Diploma",
    available: true,
    grades: [
      { label: "D*D*", value: "d3d3", points: 112 },
      { label: "D*D", value: "d3d2", points: 104 },
      { label: "DD", value: "d2d2", points: 96 },
      { label: "DM", value: "d2m2", points: 88 },
      { label: "MM", value: "m2m2", points: 80 },
      { label: "MP", value: "m2p2", points: 72 },
      { label: "PP", value: "p2p2", points: 64 },
    ],
  },
  "btec-qcf-certificate": {
    key: "btec-qcf-certificate",
    name: "Pearson BTEC Certificate (QCF)",
    shortName: "BTEC Cert (QCF)",
    icon: "",
    description: "Pearson BTEC Level 3 Certificate (QCF) – 30 credits",
    available: true,
    grades: [
      { label: "D*", value: "d3", points: 42 },
      { label: "D", value: "d2", points: 36 },
      { label: "M", value: "m2", points: 30 },
      { label: "P", value: "p2", points: 24 },
    ],
  },
  "btec-qcf-diploma": {
    key: "btec-qcf-diploma",
    name: "Pearson BTEC Diploma (QCF)",
    shortName: "BTEC Dip (QCF)",
    icon: "",
    description: "Pearson BTEC Level 3 Diploma (QCF) – 80 credits",
    available: true,
    grades: [
      { label: "D*D*", value: "d3d3", points: 112 },
      { label: "D*D", value: "d3d2", points: 104 },
      { label: "DD", value: "d2d2", points: 96 },
      { label: "DM", value: "d2m2", points: 88 },
      { label: "MM", value: "m2m2", points: 80 },
      { label: "MP", value: "m2p2", points: 72 },
      { label: "PP", value: "p2p2", points: 64 },
    ],
  },
  "btec-qcf-extended-diploma": {
    key: "btec-qcf-extended-diploma",
    name: "Pearson BTEC Extended Diploma (QCF)",
    shortName: "BTEC Ext Dip (QCF)",
    icon: "",
    description: "Pearson BTEC Level 3 Extended Diploma (QCF) – 180 credits",
    available: true,
    grades: [
      { label: "D*D*D*", value: "d3d3d3", points: 168 },
      { label: "D*D*D", value: "d3d3d2", points: 160 },
      { label: "D*DD", value: "d3d2d2", points: 152 },
      { label: "DDD", value: "d2d2d2", points: 144 },
      { label: "DDM", value: "d2d2m2", points: 136 },
      { label: "DMM", value: "d2m2m2", points: 128 },
      { label: "MMM", value: "m2m2m2", points: 120 },
      { label: "MMP", value: "m2m2p2", points: 112 },
      { label: "MPP", value: "m2p2p2", points: 104 },
      { label: "PPP", value: "p2p2p2", points: 96 },
    ],
  },
  "btec-qcf-subsidiary-diploma": {
    key: "btec-qcf-subsidiary-diploma",
    name: "Pearson BTEC Subsidiary Diploma (QCF)",
    shortName: "BTEC Sub Dip (QCF)",
    icon: "",
    description: "Pearson BTEC Level 3 Subsidiary Diploma (QCF) – 60 credits",
    available: true,
    grades: [
      { label: "D*", value: "d3", points: 56 },
      { label: "D", value: "d2", points: 48 },
      { label: "M", value: "m2", points: 40 },
      { label: "P", value: "p2", points: 32 },
    ],
  },
  "btec-national-award": {
    key: "btec-national-award",
    name: "Pearson BTEC Level 3 National Award",
    shortName: "BTEC Nat Award",
    icon: "",
    description: "Pearson BTEC Level 3 National Award (RQF) – smallest size",
    available: true,
    grades: [
      { label: "D*", value: "d3", points: 28 },
      { label: "D", value: "d2", points: 24 },
      { label: "M", value: "m2", points: 20 },
      { label: "P", value: "p2", points: 16 },
    ],
  },
  "btec-national-certificate": {
    key: "btec-national-certificate",
    name: "Pearson BTEC Level 3 National Certificate",
    shortName: "BTEC Nat Cert",
    icon: "",
    description: "Pearson BTEC Level 3 National Certificate (RQF)",
    available: true,
    grades: [
      { label: "D*", value: "d3", points: 42 },
      { label: "D", value: "d2", points: 36 },
      { label: "M", value: "m2", points: 30 },
      { label: "P", value: "p2", points: 24 },
    ],
  },
  "btec-national-extcert": {
    key: "btec-national-extcert",
    name: "Pearson BTEC Level 3 National Extended Certificate",
    shortName: "BTEC Nat ExtCert",
    icon: "",
    description: "Pearson BTEC Level 3 National Extended Certificate (RQF) – equivalent to one A-Level",
    available: true,
    grades: [
      { label: "D*", value: "d3", points: 56 },
      { label: "D", value: "d2", points: 48 },
      { label: "M", value: "m2", points: 40 },
      { label: "P", value: "p2", points: 32 },
    ],
  },
  "btec-national-diploma": {
    key: "btec-national-diploma",
    name: "Pearson BTEC Level 3 National Diploma",
    shortName: "BTEC Nat Dip",
    icon: "",
    description: "Pearson BTEC Level 3 National Diploma (RQF) – equivalent to two A-Levels",
    available: true,
    grades: [
      { label: "D*D*", value: "d3d3", points: 112 },
      { label: "D*D", value: "d3d2", points: 104 },
      { label: "DD", value: "d2d2", points: 96 },
      { label: "DM", value: "d2m2", points: 88 },
      { label: "MM", value: "m2m2", points: 80 },
      { label: "MP", value: "m2p2", points: 72 },
      { label: "PP", value: "p2p2", points: 64 },
    ],
  },
  "btec-national-extdiploma": {
    key: "btec-national-extdiploma",
    name: "Pearson BTEC Level 3 National Extended Diploma",
    shortName: "BTEC Nat ExtDip",
    icon: "",
    description: "Pearson BTEC Level 3 National Extended Diploma (RQF) – equivalent to three A-Levels",
    available: true,
    grades: [
      { label: "D*D*D*", value: "d3d3d3", points: 168 },
      { label: "D*D*D", value: "d3d3d2", points: 160 },
      { label: "D*DD", value: "d3d2d2", points: 152 },
      { label: "DDD", value: "d2d2d2", points: 144 },
      { label: "DDM", value: "d2d2m2", points: 136 },
      { label: "DMM", value: "d2m2m2", points: 128 },
      { label: "MMM", value: "m2m2m2", points: 120 },
      { label: "MMP", value: "m2m2p2", points: 112 },
      { label: "MPP", value: "m2p2p2", points: 104 },
      { label: "PPP", value: "p2p2p2", points: 96 },
    ],
  },
  "btec-national-founddiploma": {
    key: "btec-national-founddiploma",
    name: "Pearson BTEC Level 3 National Foundation Diploma",
    shortName: "BTEC Found Dip",
    icon: "",
    description: "Pearson BTEC Level 3 National Foundation Diploma (RQF)",
    available: true,
    grades: [
      { label: "D*", value: "d3", points: 84 },
      { label: "D", value: "d2", points: 72 },
      { label: "M", value: "m2", points: 60 },
      { label: "P", value: "p2", points: 48 },
    ],
  },
  "btec-national-540diploma": {
    key: "btec-national-540diploma",
    name: "Pearson BTEC Level 3 National 540 Diploma (540)",
    shortName: "BTEC 540 Dip",
    icon: "",
    description: "Pearson BTEC Level 3 National 540 Diploma (RQF) – largest size",
    available: true,
    grades: [
      { label: "D*D*D*D", value: "d3d3d3d2", points: 224 },
      { label: "D*D*DD", value: "d3d3d2d2", points: 216 },
      { label: "D*DDD", value: "d3d2d2d2", points: 208 },
      { label: "DDDD", value: "d2d2d2d2", points: 200 },
      { label: "DDDM", value: "d2d2d2m2", points: 192 },
      { label: "DDMM", value: "d2d2m2m2", points: 184 },
      { label: "DMMM", value: "d2m2m2m2", points: 176 },
      { label: "MMMM", value: "m2m2m2m2", points: 168 },
      { label: "MMMP", value: "m2m2m2p2", points: 160 },
      { label: "MMPP", value: "m2m2p2p2", points: 152 },
      { label: "MPPP", value: "m2p2p2p2", points: 144 },
      { label: "PPPP", value: "p2p2p2p2", points: 136 },
    ],
  },
  "core-maths": {
    key: "core-maths",
    name: "Core Maths / Certificate in Mathematical Studies",
    shortName: "Core Maths",
    icon: "",
    description: "Level 3 Certificate in Mathematical Studies / Core Maths (AQA Certificate 601/4945/0, OCR MEI Quantitative Reasoning A/B)",
    available: true,
    grades: [
      { label: "A", value: "a", points: 20 },
      { label: "B", value: "b", points: 16 },
      { label: "C", value: "c", points: 12 },
      { label: "D", value: "d", points: 10 },
      { label: "E", value: "e", points: 6 },
    ],
  },
  "access-to-he-ni": {
    key: "access-to-he-ni",
    name: "NI Access Diploma (Northern Ireland Access Diploma)",
    shortName: "NI Access",
    icon: "",
    description: "Northern Ireland Access Diploma – grade profile credits same tariff scale as Access to HE Diploma",
    available: true,
    grades: [
      { label: "45 Credits at Distinction", value: "45d", points: 144 },
      { label: "30 Distinction + 15 Merit", value: "30d15m", points: 136 },
      { label: "24 Distinction + 21 Merit", value: "24d21m", points: 130 },
      { label: "15 Distinction + 30 Merit", value: "15d30m", points: 122 },
      { label: "45 Credits at Merit", value: "45m", points: 108 },
      { label: "30 Merit + 15 Pass", value: "30m15p", points: 100 },
      { label: "15 Merit + 30 Pass", value: "15m30p", points: 88 },
      { label: "45 Credits at Pass", value: "45p", points: 72 },
    ],
  },
  "welsh-bacc-core-skills": {
    key: "welsh-bacc-core-skills",
    name: "Welsh Baccalaureate Advanced – Core Skills",
    shortName: "Welsh Bacc Core",
    icon: "",
    description: "Welsh Baccalaureate Advanced Level 3 Core Skills Challenge and Individual Project",
    available: true,
    grades: [
      { label: "A*", value: "astar", points: 28 },
      { label: "A", value: "a", points: 24 },
      { label: "B", value: "b", points: 20 },
      { label: "C", value: "c", points: 16 },
      { label: "D", value: "d", points: 12 },
      { label: "E", value: "e", points: 8 },
      { label: "Pass", value: "pass", points: 6 },
    ],
  },
  "welsh-bacc-advanced-skills": {
    key: "welsh-bacc-advanced-skills",
    name: "Welsh Baccalaureate Advanced – Skills Certificate",
    shortName: "Welsh Bacc Skills",
    icon: "",
    description: "Welsh Baccalaureate Advanced Level 3 Skills Certificate (RQF standalone)",
    available: true,
    grades: [
      { label: "A*", value: "astar", points: 28 },
      { label: "A", value: "a", points: 24 },
      { label: "B", value: "b", points: 20 },
      { label: "C", value: "c", points: 16 },
      { label: "D", value: "d", points: 12 },
      { label: "E", value: "e", points: 8 },
      { label: "Pass", value: "pass", points: 6 },
    ],
  },
  "welsh-bacc-advanced-diploma": {
    key: "welsh-bacc-advanced-diploma",
    name: "Welsh Baccalaureate Advanced Diploma",
    shortName: "Welsh Bacc Adv Dip",
    icon: "",
    description: "Welsh Baccalaureate Advanced Diploma (combined A-Level equivalents + Core)",
    available: true,
    grades: [
      { label: "A*A*A", value: "a-a-a-a", points: 160 },
      { label: "A*AA", value: "a-aa", points: 152 },
      { label: "AAA", value: "aaa", points: 144 },
      { label: "AAB", value: "aab", points: 136 },
      { label: "ABB", value: "abb", points: 128 },
      { label: "BBB", value: "bbb", points: 120 },
      { label: "BBC", value: "bbc", points: 112 },
      { label: "BCC", value: "bcc", points: 104 },
      { label: "CCC", value: "ccc", points: 96 },
    ],
  },
  "ocr-cam-tech-intro": {
    key: "ocr-cam-tech-intro",
    name: "OCR Cambridge Technicals — Introductory Diploma / Certificate (1 Unit)",
    shortName: "OCR Cam Tech 1U",
    icon: "",
    description: "OCR Cambridge Technicals Level 3 — 1-unit (Subsidiary/Intro) size per the 2017 UCAS Tariff reform vocational per-unit scale.",
    available: true,
    grades: [
      { label: "Distinction*", value: "dstar", points: 56 },
      { label: "Distinction", value: "distinction", points: 48 },
      { label: "Merit", value: "merit", points: 40 },
      { label: "Pass", value: "pass", points: 32 },
    ],
  },
  "ocr-cam-tech-diploma": {
    key: "ocr-cam-tech-diploma",
    name: "OCR Cambridge Technicals — Diploma (2 Units)",
    shortName: "OCR Cam Tech Dip 2U",
    icon: "",
    description: "OCR Cambridge Technicals Level 3 Diploma — 2-unit size (2 × 1-unit grade).",
    available: true,
    grades: [
      { label: "D*D*", value: "dstar-dstar", points: 112 },
      { label: "D*D", value: "dstar-d", points: 104 },
      { label: "DD", value: "dd", points: 96 },
      { label: "DM", value: "dm", points: 88 },
      { label: "MM", value: "mm", points: 80 },
      { label: "MP", value: "mp", points: 72 },
      { label: "PP", value: "pp", points: 64 },
    ],
  },
  "ocr-cam-tech-extended": {
    key: "ocr-cam-tech-extended",
    name: "OCR Cambridge Technicals — Extended Diploma (3 Units)",
    shortName: "OCR Cam Tech Ext 3U",
    icon: "",
    description: "OCR Cambridge Technicals Level 3 Extended Diploma — 3-unit size, three-A-Level equivalent grade summation.",
    available: true,
    grades: [
      { label: "D*D*D*", value: "dstar-dstar-dstar", points: 168 },
      { label: "D*D*D", value: "dstar-dstar-d", points: 160 },
      { label: "D*DD", value: "dstar-dd", points: 152 },
      { label: "DDD", value: "ddd", points: 144 },
      { label: "DDM", value: "ddm", points: 136 },
      { label: "DMM", value: "dmm", points: 128 },
      { label: "MMM", value: "mmm", points: 120 },
      { label: "MMP", value: "mmp", points: 112 },
      { label: "MPP", value: "mpp", points: 104 },
      { label: "PPP", value: "ppp", points: 96 },
    ],
  },
  "ibcp-reflective-project": {
    key: "ibcp-reflective-project",
    name: "IBCP — Reflective Project",
    shortName: "IBCP RP",
    icon: "",
    description: "IB Career-related Programme Reflective Project — single A-Level-half Tariff scale per UCAS 2025/26.",
    available: true,
    grades: [
      { label: "Distinction*", value: "dstar", points: 28 },
      { label: "Distinction", value: "distinction", points: 24 },
      { label: "Merit", value: "merit", points: 20 },
      { label: "Pass", value: "pass", points: 16 },
    ],
  },
  "ibcp-language-development": {
    key: "ibcp-language-development",
    name: "IBCP — Language Development (SL)",
    shortName: "IBCP Lang Dev SL",
    icon: "",
    description: "IBCP Language Development SL scale — mapped to IB Diploma SL Tariff per UCAS 2025/26.",
    available: true,
    grades: [
      { label: "7 (Highest)", value: "s7", points: 28 },
      { label: "6", value: "s6", points: 24 },
      { label: "5", value: "s5", points: 20 },
      { label: "4", value: "s4", points: 16 },
      { label: "3", value: "s3", points: 12 },
    ],
  },
  "ibcp-core-bonus": {
    key: "ibcp-core-bonus",
    name: "IBCP — CP Core Bonus Points",
    shortName: "IBCP Core Bonus",
    icon: "",
    description: "IBCP CP Core (Personal & Professional Skills + Service Learning + Reflective Project portfolio) bonus points per the published 2025/26 band.",
    available: true,
    grades: [
      { label: "A (Exemplary)", value: "a", points: 3 },
      { label: "B (Proficient)", value: "b", points: 2 },
      { label: "C (Developing)", value: "c", points: 1 },
      { label: "D (Not Awarded bonus)", value: "d", points: 0 },
    ],
  },
  "ibcp-overall": {
    key: "ibcp-overall",
    name: "IBCP — Overall Programme Band",
    shortName: "IBCP Overall",
    icon: "",
    description: "IBCP overall combined CRS+RP Tariff total band per UCAS 2025/26 Career-related Programme aggregated reference.",
    available: true,
    grades: [
      { label: "Band 1 — 45+ combined points", value: "b1-45", points: 120 },
      { label: "Band 2 — 40–44", value: "b2-40", points: 104 },
      { label: "Band 3 — 35–39", value: "b3-35", points: 88 },
      { label: "Band 4 — 30–34", value: "b4-30", points: 72 },
    ],
  },
};

export const UCAS_DROPDOWN_QUAL_KEY_ORDER: QualificationKey[] = [
  "a-level",
  "a-level-double",
  "a-level-with-as",
  "as-level",
  "as-level-double",
  "epq",
  "t-level-full",
  "t-level-component",
  "t-level",
  "btec-qcf-90credit",
  "btec-qcf-certificate",
  "btec-qcf-diploma",
  "btec-qcf-extended-diploma",
  "btec-qcf-subsidiary-diploma",
  "btec-national-award",
  "btec-national-certificate",
  "btec-national-diploma",
  "btec-national-extcert",
  "btec-national-extdiploma",
  "btec-national-founddiploma",
  "btec-national-540diploma",
  "btec-extended",
  "btec-diploma",
  "btec-subsidiary",
  "btec-certificate",
  "ocr-cam-tech-intro",
  "ocr-cam-tech-diploma",
  "ocr-cam-tech-extended",
  "access-to-he",
  "access-to-he-ni",
  "cambridge-pre-u",
  "cambridge-pre-u-principal",
  "cambridge-pre-u-short",
  "cambridge-pre-u-gpir",
  "core-maths",
  "ib",
  "ibcp-reflective-project",
  "ibcp-language-development",
  "ibcp-core-bonus",
  "ibcp-overall",
  "scottish-higher",
  "scottish-advanced-higher",
  "irish-leaving-cert",
  "welsh-bacc-core-skills",
  "welsh-bacc-advanced-skills",
  "welsh-bacc-advanced-diploma",
];

export const QUALIFICATION_LIST: QualificationDef[] = UCAS_DROPDOWN_QUAL_KEY_ORDER
  .filter((k) => QUALIFICATIONS[k])
  .map((k) => QUALIFICATIONS[k]);

export function getQualification(key: QualificationKey): QualificationDef {
  return QUALIFICATIONS[key];
}

export function getGradePoints(qualKey: QualificationKey, gradeValue: string): number {
  const q = QUALIFICATIONS[qualKey];
  if (!q) return 0;
  const g = q.grades.find((x) => x.value === gradeValue);
  return g ? g.points : 0;
}

export function getGradeLabel(qualKey: QualificationKey, gradeValue: string): string {
  const q = QUALIFICATIONS[qualKey];
  if (!q) return gradeValue;
  const g = q.grades.find((x) => x.value === gradeValue);
  return g ? g.label : gradeValue;
}

export interface ReferenceBenchmark {
  label: string;
  points: number;
  context: string;
}

export const REFERENCE_BENCHMARKS: ReferenceBenchmark[] = [
  {
    label: "1 A-Level Grade E",
    points: 16,
    context:
      "Minimum passing A-Level grade. Single E alone rarely meets a course offer; combined with other results contributes to the total.",
  },
  {
    label: "BBC at A-Level (typical clearing offer)",
    points: 112,
    context:
      "Common baseline for clearing and adjustment 2025/2026 at many post-1992 and mid-tariff UK universities.",
  },
  {
    label: "BBB at A-Level",
    points: 120,
    context:
      "Typical minimum offer for mainstream undergraduate degrees, including most vocational and general BSc / BA courses outside Russell Group.",
  },
  {
    label: "ABB at A-Level",
    points: 128,
    context:
      "Common Russell Group baseline for non-STEM courses and many STEM foundation-entry pathways.",
  },
  {
    label: "AAB at A-Level",
    points: 136,
    context:
      "Competitive entry band for high-tariff humanities, social sciences and mid-range STEM courses at Russell Group universities.",
  },
  {
    label: "AAA at A-Level (common Russell Group offer)",
    points: 144,
    context:
      "Standard baseline offer for the large majority of Russell Group STEM, economics, law and medical-school adjacent degrees.",
  },
  {
    label: "A*AA at A-Level",
    points: 152,
    context:
      "Competitive top-tariff band for strong Russell Group courses and selective Oxbridge college interviews.",
  },
  {
    label: "A*A*A at A-Level",
    points: 160,
    context:
      "Very high competitive band used by medicine, dentistry, theoretical STEM and the top Oxford / Cambridge colleges.",
  },
  {
    label: "A*A*A* at A-Level (maximum 3 A-Levels)",
    points: 168,
    context:
      "Maximum achievable with three A-Levels. Matches D*D*D* BTEC Extended Diploma and is the competitive ceiling for most course offers.",
  },
];

export function interpretPoints(total: number): string {
  if (total === 0) return "Add your first qualification above to see your UCAS Tariff score.";
  if (total < 48) {
    return `Your score of ${total} UCAS points is a useful starting block, roughly equal to a single A-Level grade A (48 points) or below. Some foundation-year courses and apprenticeships accept this range.`;
  }
  if (total < 80) {
    return `Your score of ${total} UCAS points broadly equals two grades at B (BB) or C (CC) at A-Level. This range typically qualifies for foundation-entry courses at many UK universities.`;
  }
  if (total < 112) {
    return `Your score of ${total} UCAS points is broadly equivalent to CCD–BCC at A-Level. Many post-clearing and modern-university courses fall in this band.`;
  }
  if (total < 128) {
    return `Your score of ${total} UCAS points roughly equals BBC to ABB at A-Level — the typical entry range for a large number of mainstream undergraduate degrees in 2025–2026.`;
  }
  if (total < 152) {
    return `Your score of ${total} UCAS points sits in the ABB–AAA at A-Level bracket, which covers most Russell Group and high-tariff undergraduate degrees.`;
  }
  if (total < 176) {
    return `Your score of ${total} UCAS points is broadly AAA–A*A*A at A-Level, which is competitive for the highest-tariff courses including medicine, law, Oxbridge and STEM.`;
  }
  return `Your score of ${total} UCAS points places you in the highest-tariff bracket (above A*A*A*A at A-Level). You will meet or exceed published entry requirements for nearly every undergraduate course.`;
}
