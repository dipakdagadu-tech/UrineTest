import { URINE_TESTS, getFlag } from "../data/tests";

const FLAG_CONFIG = {
  N: { label: "Normal", className: "flag-normal" },
  H: { label: "Abnormal ↑", className: "flag-high" },
  L: { label: "Low ↓", className: "flag-low" },
};

export default function TestEntry({ testValues, onChange, onBack, onNext }) {
  const setValue = (id, value) => onChange({ ...testValues, [id]: value });

  const allTests = Object.values(URINE_TESTS).flatMap((s) => s.tests);
  const entered = allTests.filter((t) => testValues[t.id] !== undefined && testValues[t.id] !== "").length;
  const abnormal = allTests.filter((t) => {
    const f = getFlag(t, testValues[t.id]);
    return f === "H" || f === "L";
  }).length;

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Urine Test Values</h1>
        <p className="page-sub">23 parameters across 3 examination sections</p>
      </div>

      <div className="test-summary-bar">
        <div className="test-summary-pill total">{entered} / {allTests.length} entered</div>
        {abnormal > 0 && <div className="test-summary-pill abnormal">⚠ {abnormal} abnormal</div>}
        {entered === allTests.length && abnormal === 0 && (
          <div className="test-summary-pill all-normal">✓ All normal</div>
        )}
      </div>

      {Object.entries(URINE_TESTS).map(([sectionKey, section]) => (
        <div className="form-card" key={sectionKey}>
          <div className="form-section-title">
            <span className="section-icon">{section.icon}</span> {section.label}
          </div>
          <div className="test-table">
            <div className="test-table-header">
              <span>Test Name</span>
              <span>Result / Value</span>
              <span>Reference Range</span>
              <span>Flag</span>
            </div>
            {section.tests.map((test) => {
              const val = testValues[test.id] ?? "";
              const flag = val !== "" ? getFlag(test, val) : null;
              return (
                <div className="test-table-row" key={test.id}>
                  <div className="test-name-cell">
                    <span className="test-name">{test.name}</span>
                    {test.unit && <span className="test-unit">{test.unit}</span>}
                  </div>
                  <div className="test-input-cell">
                    {test.type === "select" ? (
                      <select
                        value={val}
                        onChange={(e) => setValue(test.id, e.target.value)}
                        className={flag && flag !== "N" ? "input-abnormal" : ""}
                      >
                        <option value="">— Select —</option>
                        {test.options.map((o) => <option key={o}>{o}</option>)}
                      </select>
                    ) : (
                      <input
                        type="number"
                        value={val}
                        onChange={(e) => setValue(test.id, e.target.value)}
                        placeholder="Enter value"
                        step={test.step || "1"}
                        min={test.min ?? ""}
                        max={test.max ?? ""}
                        className={flag && flag !== "N" ? "input-abnormal" : ""}
                      />
                    )}
                  </div>
                  <div className="test-ref-cell">{test.ref}</div>
                  <div className="test-flag-cell">
                    {flag && (
                      <span className={`flag-badge ${FLAG_CONFIG[flag].className}`}>
                        {FLAG_CONFIG[flag].label}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}

      <div className="form-actions">
        <button className="btn btn-secondary" onClick={onBack}>← Back</button>
        <button className="btn btn-primary" onClick={onNext}>
          Generate Report →
        </button>
      </div>
    </div>
  );
}
