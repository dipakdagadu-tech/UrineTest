export const URINE_TESTS = {
  physical: {
    label: "Section A — Physical Examination",
    icon: "🔬",
    tests: [
      {
        id: "colour", name: "Colour", unit: "", ref: "Pale yellow to amber",
        type: "select",
        options: ["Pale yellow", "Yellow", "Dark yellow", "Amber", "Orange", "Red", "Brown", "Colourless"],
        abnormals: ["Orange", "Red", "Brown", "Colourless"],
      },
      {
        id: "appearance", name: "Appearance / Turbidity", unit: "", ref: "Clear",
        type: "select",
        options: ["Clear", "Slightly turbid", "Turbid", "Very turbid"],
        abnormals: ["Slightly turbid", "Turbid", "Very turbid"],
      },
      {
        id: "volume", name: "Volume", unit: "mL", ref: "600–2000 mL/day", type: "number",
        numeric: { low: 600, high: 2000 },
      },
      {
        id: "specific_gravity", name: "Specific Gravity", unit: "", ref: "1.005–1.030",
        type: "number", step: "0.001", min: 1.001, max: 1.040,
        numeric: { low: 1.005, high: 1.030 },
      },
      {
        id: "ph", name: "pH", unit: "", ref: "4.6–8.0",
        type: "number", step: "0.1", min: 0, max: 14,
        numeric: { low: 4.6, high: 8.0 },
      },
      {
        id: "odour", name: "Odour", unit: "", ref: "Aromatic",
        type: "select",
        options: ["Aromatic", "Ammoniacal", "Foul", "Fruity / Acetone", "Fishy"],
        abnormals: ["Ammoniacal", "Foul", "Fruity / Acetone", "Fishy"],
      },
    ],
  },
  chemical: {
    label: "Section B — Chemical Examination",
    icon: "⚗️",
    tests: [
      {
        id: "glucose", name: "Glucose", unit: "", ref: "Negative",
        type: "select",
        options: ["Negative", "Trace", "1+ (100 mg/dL)", "2+ (250 mg/dL)", "3+ (500 mg/dL)", "4+ (>1000 mg/dL)"],
        abnormals: ["Trace", "1+ (100 mg/dL)", "2+ (250 mg/dL)", "3+ (500 mg/dL)", "4+ (>1000 mg/dL)"],
      },
      {
        id: "protein", name: "Protein (Albumin)", unit: "", ref: "Negative",
        type: "select",
        options: ["Negative", "Trace", "1+ (30 mg/dL)", "2+ (100 mg/dL)", "3+ (300 mg/dL)", "4+ (>2000 mg/dL)"],
        abnormals: ["Trace", "1+ (30 mg/dL)", "2+ (100 mg/dL)", "3+ (300 mg/dL)", "4+ (>2000 mg/dL)"],
      },
      {
        id: "ketones", name: "Ketones", unit: "", ref: "Negative",
        type: "select",
        options: ["Negative", "Trace", "Small (1+)", "Moderate (2+)", "Large (3+)"],
        abnormals: ["Trace", "Small (1+)", "Moderate (2+)", "Large (3+)"],
      },
      {
        id: "blood", name: "Blood / Haematuria", unit: "", ref: "Negative",
        type: "select",
        options: ["Negative", "Trace", "1+", "2+", "3+"],
        abnormals: ["Trace", "1+", "2+", "3+"],
      },
      {
        id: "bilirubin", name: "Bilirubin", unit: "", ref: "Negative",
        type: "select",
        options: ["Negative", "1+", "2+", "3+"],
        abnormals: ["1+", "2+", "3+"],
      },
      {
        id: "urobilinogen", name: "Urobilinogen", unit: "EU/dL", ref: "0.1–1.0",
        type: "select",
        options: ["Normal (0.1–1.0)", "2 EU/dL", "4 EU/dL", "8 EU/dL", ">8 EU/dL"],
        abnormals: ["2 EU/dL", "4 EU/dL", "8 EU/dL", ">8 EU/dL"],
      },
      {
        id: "nitrite", name: "Nitrite", unit: "", ref: "Negative",
        type: "select",
        options: ["Negative", "Positive"],
        abnormals: ["Positive"],
      },
      {
        id: "leukocyte_esterase", name: "Leukocyte Esterase", unit: "", ref: "Negative",
        type: "select",
        options: ["Negative", "Trace", "1+", "2+", "3+"],
        abnormals: ["Trace", "1+", "2+", "3+"],
      },
      {
        id: "acetone", name: "Acetone", unit: "", ref: "Negative",
        type: "select",
        options: ["Negative", "Positive"],
        abnormals: ["Positive"],
      },
    ],
  },
  microscopic: {
    label: "Section C — Microscopic Examination",
    icon: "🔭",
    tests: [
      {
        id: "pus_cells", name: "Pus Cells (WBC)", unit: "/HPF", ref: "0–5",
        type: "number", numeric: { low: 0, high: 5 },
      },
      {
        id: "rbc", name: "RBC", unit: "/HPF", ref: "0–2",
        type: "number", numeric: { low: 0, high: 2 },
      },
      {
        id: "epithelial", name: "Epithelial Cells", unit: "/HPF", ref: "0–5",
        type: "number", numeric: { low: 0, high: 5 },
      },
      {
        id: "casts", name: "Casts", unit: "", ref: "Absent / Rare hyaline",
        type: "select",
        options: ["Absent", "Rare hyaline", "Hyaline 1–2/LPF", "Granular 1–2/LPF", "RBC casts", "WBC casts", "Waxy casts", "Fatty casts"],
        abnormals: ["Granular 1–2/LPF", "RBC casts", "WBC casts", "Waxy casts", "Fatty casts"],
      },
      {
        id: "crystals", name: "Crystals", unit: "", ref: "Absent",
        type: "select",
        options: ["Absent", "Uric acid", "Calcium oxalate", "Triple phosphate", "Amorphous urates", "Cystine"],
        abnormals: ["Cystine"],
      },
      {
        id: "bacteria", name: "Bacteria", unit: "", ref: "Absent",
        type: "select",
        options: ["Absent", "Rare", "Moderate", "Many"],
        abnormals: ["Moderate", "Many"],
      },
      {
        id: "yeast", name: "Yeast Cells", unit: "", ref: "Absent",
        type: "select",
        options: ["Absent", "Present"],
        abnormals: ["Present"],
      },
      {
        id: "mucus", name: "Mucus Threads", unit: "", ref: "Absent / Rare",
        type: "select",
        options: ["Absent", "Rare", "Present", "Many"],
        abnormals: ["Many"],
      },
      {
        id: "trichomonas", name: "Trichomonas", unit: "", ref: "Absent",
        type: "select",
        options: ["Absent", "Present"],
        abnormals: ["Present"],
      },
      {
        id: "spermatozoa", name: "Spermatozoa", unit: "", ref: "Absent",
        type: "select",
        options: ["Absent", "Present"],
        abnormals: [],
      },
    ],
  },
};

export function getFlag(test, value) {
  if (!value && value !== 0) return null;
  if (test.numeric) {
    const n = parseFloat(value);
    if (isNaN(n)) return null;
    if (n < test.numeric.low) return "L";
    if (n > test.numeric.high) return "H";
    return "N";
  }
  if (test.abnormals) {
    return test.abnormals.includes(value) ? "H" : "N";
  }
  return "N";
}

export function getAllTests() {
  return Object.values(URINE_TESTS).flatMap((s) => s.tests);
}
