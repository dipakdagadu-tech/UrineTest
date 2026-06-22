# 🏥 Tiameds Lab Report System — React App

Full-featured **Urine Routine Examination Report** app built with React + Vite.

---

## 📁 Project Structure

```
lab-report-app/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── App.jsx                    ← Main app + step indicator
    ├── index.jsx                  ← React root entry
    ├── styles/
    │   └── app.css               ← All styles
    ├── data/
    │   └── tests.js              ← All 23 test configs + getFlag logic
    └── components/
        ├── PatientForm.jsx        ← Step 1: Patient entry
        ├── TestEntry.jsx          ← Step 2: Enter 23 test values
        └── ReportView.jsx         ← Step 3: View + Print report
```

---

## 🚀 How to Run (Step-by-step)

### Step 1 — Node.js install karo (if not already)
Download from: https://nodejs.org (LTS version)

### Step 2 — Project folder mein jao
```bash
cd lab-report-app
```

### Step 3 — Dependencies install karo
```bash
npm install
```

### Step 4 — Dev server start karo
```bash
npm run dev
```

Browser mein open karo: **http://localhost:5173**

---

## 🖨 PDF Report Generate karna
- Step 3 (Report screen) pe "Print / Save PDF" button click karo
- Browser print dialog aayega
- **"Save as PDF"** choose karo destination mein
- Done! ✅

---

## 🧪 Tests Included (23 Parameters)

### Section A — Physical (6)
- Colour, Appearance, Volume, Specific Gravity, pH, Odour

### Section B — Chemical (9)
- Glucose, Protein, Ketones, Blood, Bilirubin, Urobilinogen, Nitrite, Leukocyte Esterase, Acetone

### Section C — Microscopic (10)
- Pus Cells, RBC, Epithelial Cells, Casts, Crystals, Bacteria, Yeast, Mucus, Trichomonas, Spermatozoa

---

## ➕ Future Additions (easy to add)

1. **More test panels** — CBC, LFT, KFT, Lipid Profile (add in `tests.js`)
2. **Spring Boot API integration** — POST patient + results to your backend
3. **Print logo** — Hospital logo image add karo report header mein
4. **Local storage** — Save drafts in browser

---

## 🛠 Tech Stack
- **React 18** — UI framework
- **Vite 4** — Build tool (fast dev server)
- **Pure CSS** — No Tailwind, no UI library (full control)
- **No backend needed** — Fully frontend app

---

Built for **Tiameds Healthcare** | Lab Information System v1.0
"# LabTest" 
"# UrineTest" 
"# UrineTest" 
