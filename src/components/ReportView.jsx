import { URINE_TESTS, getFlag, getAllTests } from "../data/tests";

const FLAG_CONFIG = {
  N: { label: "Normal", className: "rpt-flag-n" },
  H: { label: "Abnormal ↑", className: "rpt-flag-h" },
  L: { label: "Low ↓", className: "rpt-flag-l" },
};

export default function ReportView({ patient, testValues, onBack, onNew }) {
  const allTests = getAllTests();
  const normal = allTests.filter((t) => getFlag(t, testValues[t.id]) === "N").length;
  const abnormal = allTests.filter((t) => {
    const f = getFlag(t, testValues[t.id]);
    return f === "H" || f === "L";
  }).length;
  const notEntered = allTests.filter((t) => !testValues[t.id] && testValues[t.id] !== 0).length;

  const handlePrint = () => {
    const printContent = document.getElementById("print-report").innerHTML;
    const win = window.open("", "_blank", "width=900,height=700");
    win.document.write(`<!DOCTYPE html>
<html>
<head>
  <title>Urine Report — ${patient.name}</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: Arial, sans-serif; font-size: 12px; color: #111; padding: 24px; }
    .rpt-logo-row { display: flex; justify-content: space-between; align-items: flex-start; border-bottom: 2.5px solid #1565C0; padding-bottom: 12px; margin-bottom: 14px; }
    .rpt-hospital-name { font-size: 20px; font-weight: 700; color: #1565C0; }
    .rpt-hospital-sub { font-size: 11px; color: #555; margin-top: 2px; }
    .rpt-barcode-area { text-align: right; font-size: 10px; color: #777; }
    .rpt-test-title { text-align: center; background: #E3F2FD; color: #1565C0; font-size: 14px; font-weight: 700; padding: 7px 0; border-radius: 4px; letter-spacing: 0.06em; margin-bottom: 14px; text-transform: uppercase; }
    .rpt-patient-block { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; background: #F5F5F5; padding: 10px 14px; border-radius: 6px; margin-bottom: 14px; }
    .rpt-p-field label { font-size: 10px; color: #888; display: block; margin-bottom: 1px; }
    .rpt-p-field strong { font-size: 12px; color: #111; }
    .rpt-section { margin-bottom: 16px; }
    .rpt-section-title { font-size: 11px; font-weight: 700; letter-spacing: 0.07em; text-transform: uppercase; color: #1565C0; border-bottom: 1.5px solid #1565C0; padding-bottom: 4px; margin-bottom: 6px; }
    table { width: 100%; border-collapse: collapse; font-size: 11px; }
    th { background: #E3F2FD; color: #1565C0; text-align: left; padding: 5px 8px; font-size: 10px; font-weight: 700; }
    td { padding: 5px 8px; border-bottom: 0.5px solid #E0E0E0; }
    tr:nth-child(even) td { background: #FAFAFA; }
    .flag-n { background: #E8F5E9; color: #2E7D32; font-size: 10px; font-weight: 700; padding: 1px 6px; border-radius: 3px; }
    .flag-h { background: #FFEBEE; color: #C62828; font-size: 10px; font-weight: 700; padding: 1px 6px; border-radius: 3px; }
    .flag-l { background: #FFF3E0; color: #E65100; font-size: 10px; font-weight: 700; padding: 1px 6px; border-radius: 3px; }
    .remarks-box { background: #FFF8E1; border: 1px solid #FFE082; border-radius: 4px; padding: 10px 14px; margin-bottom: 14px; }
    .remarks-title { font-size: 11px; font-weight: 700; color: #E65100; margin-bottom: 6px; }
    .remarks-box ul { padding-left: 16px; }
    .remarks-box li { font-size: 11px; line-height: 1.9; color: #333; }
    .rpt-footer { margin-top: 20px; display: flex; justify-content: space-between; border-top: 1px solid #DDD; padding-top: 12px; }
    .rpt-sign { text-align: center; font-size: 10px; color: #888; min-width: 140px; }
    .rpt-sign strong { display: block; font-size: 11px; color: #333; margin-bottom: 24px; }
    .sign-line { border-top: 1px solid #999; padding-top: 4px; width: 140px; margin: 0 auto; }
    .disclaimer { text-align: center; font-size: 9px; color: #AAA; margin-top: 12px; }
    .summary-stats { display: flex; gap: 12px; margin-bottom: 12px; }
    .stat-pill { font-size: 11px; padding: 3px 10px; border-radius: 12px; font-weight: 600; }
    .stat-normal { background: #E8F5E9; color: #2E7D32; }
    .stat-abnormal { background: #FFEBEE; color: #C62828; }
    .stat-missing { background: #F5F5F5; color: #757575; }
  </style>
</head>
<body>${printContent}</body>
</html>`);
    win.document.close();
    setTimeout(() => win.print(), 400);
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Lab Report</h1>
        <p className="page-sub">Review and print the generated report</p>
      </div>

      <div className="report-action-bar">
        <div className="report-stats">
          <span className="stat-chip stat-normal">✓ {normal} Normal</span>
          {abnormal > 0 && <span className="stat-chip stat-abnormal">⚠ {abnormal} Abnormal</span>}
          {notEntered > 0 && <span className="stat-chip stat-missing">— {notEntered} Not entered</span>}
        </div>
        <div style={{ display: "flex", gap: "8px" }}>
          <button className="btn btn-secondary" onClick={onBack}>← Edit Values</button>
          <button className="btn btn-outline" onClick={onNew}>+ New Report</button>
          <button className="btn btn-primary" onClick={handlePrint}>🖨 Print / Save PDF</button>
        </div>
      </div>

      <div className="report-preview">
        <div id="print-report">
          {/* Hospital Header */}
          <div className="rpt-logo-row">
            <div>
              <div className="rpt-hospital-name">Tiameds Hospital & Diagnostics</div>
              <div className="rpt-hospital-sub">Department of Laboratory Medicine & Pathology</div>
              <div className="rpt-hospital-sub">NABL Accredited | 24×7 Emergency Lab Services</div>
            </div>
            <div className="rpt-barcode-area">
              <div style={{ fontSize: "22px", letterSpacing: "-1px", fontFamily: "monospace" }}>
                {"█▌█▌██▌█▌▌█▌██▌█"}
              </div>
              <div>{patient.uhid || "—"}</div>
            </div>
          </div>

          {/* Report Title */}
          <div className="rpt-test-title">
            Urine Routine Examination & Microscopy Report
          </div>

          {/* Summary Stats (print) */}
          <div className="summary-stats">
            <span className="stat-pill stat-normal">{normal} Normal</span>
            {abnormal > 0 && <span className="stat-pill stat-abnormal">{abnormal} Abnormal</span>}
          </div>

          {/* Patient Block */}
          <div className="rpt-patient-block">
            <PField label="Patient Name" value={patient.name || "—"} />
            <PField label="UHID" value={patient.uhid || "—"} />
            <PField label="Age / Gender" value={`${patient.age || "—"} yrs / ${patient.gender || "—"}`} />
            <PField label="Date of Birth" value={patient.dob || "—"} />
            <PField label="Referring Doctor" value={patient.doctor || "—"} />
            <PField label="Ward / Dept" value={patient.ward || "—"} />
            <PField label="Collection Date" value={patient.collectDate || "—"} />
            <PField label="Collection Time" value={patient.collectTime || "—"} />
            <PField label="Report Date" value={patient.reportDate || "—"} />
          </div>

          {/* Test Sections */}
          {Object.entries(URINE_TESTS).map(([key, section]) => (
            <div className="rpt-section" key={key}>
              <div className="rpt-section-title">{section.label}</div>
              <table>
                <thead>
                  <tr>
                    <th style={{ width: "35%" }}>Investigation</th>
                    <th style={{ width: "20%" }}>Observed Value</th>
                    <th style={{ width: "30%" }}>Biological Reference Interval</th>
                    <th style={{ width: "15%" }}>Interpretation</th>
                  </tr>
                </thead>
                <tbody>
                  {section.tests.map((test) => {
                    const val = testValues[test.id];
                    const flag = val !== undefined && val !== "" ? getFlag(test, val) : null;
                    return (
                      <tr key={test.id}>
                        <td>
                          {test.name}
                          {test.unit && <span style={{ color: "#888", fontSize: "10px" }}> ({test.unit})</span>}
                        </td>
                        <td style={{ fontWeight: flag && flag !== "N" ? "700" : "400" }}>
                          {val !== undefined && val !== "" ? val : "—"}
                        </td>
                        <td style={{ color: "#555" }}>{test.ref}</td>
                        <td>
                          {flag && (
                            <span className={`flag-badge ${FLAG_CONFIG[flag].className}`}>
                              {FLAG_CONFIG[flag].label}
                            </span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          ))}

          {/* Clinical Remarks */}
          {abnormal > 0 && (
            <div className="remarks-box">
              <div className="remarks-title">⚠ Clinical Remarks — Auto-generated Flags</div>
              <ul>
                {getAllTests()
                  .filter((t) => {
                    const f = getFlag(t, testValues[t.id]);
                    return f === "H" || f === "L";
                  })
                  .map((t) => (
                    <li key={t.id}>
                      <strong>{t.name}:</strong> {testValues[t.id]}{t.unit ? ` ${t.unit}` : ""} —
                      outside reference range ({t.ref})
                    </li>
                  ))}
              </ul>
            </div>
          )}

          {/* Footer */}
          <div className="rpt-footer">
            <div className="rpt-sign">
              <strong>Lab Technician</strong>
              <div className="sign-line">Signature & Date</div>
            </div>
            <div style={{ textAlign: "center", fontSize: "10px", color: "#aaa", alignSelf: "flex-end" }}>
              <div>This is a computer-generated report.</div>
              <div>Please correlate clinically with patient history.</div>
              <div style={{ marginTop: "4px" }}>Tiameds Diagnostics | NABL Accredited Lab</div>
            </div>
            <div className="rpt-sign">
              <strong>Pathologist / CMO</strong>
              <div className="sign-line">Signature & Stamp</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PField({ label, value }) {
  return (
    <div className="rpt-p-field">
      <label>{label}</label>
      <strong>{value}</strong>
    </div>
  );
}
