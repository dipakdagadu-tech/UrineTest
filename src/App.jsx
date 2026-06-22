import { useState } from "react";
import PatientForm from "./components/PatientForm";
import TestEntry from "./components/TestEntry";
import ReportView from "./components/ReportView";
import "./styles/app.css";

export default function App() {
  const [step, setStep] = useState(1);
  const [patient, setPatient] = useState({
    name: "", uhid: "", age: "", gender: "", dob: "",
    doctor: "", ward: "", phone: "",
    collectDate: new Date().toISOString().split("T")[0],
    collectTime: "", reportDate: new Date().toISOString().split("T")[0],
  });
  const [testValues, setTestValues] = useState({});

  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="header-inner">
          <div className="header-brand">
            <div className="brand-icon">🏥</div>
            <div>
              <div className="brand-name">Tiameds Diagnostics</div>
              <div className="brand-sub">Lab Information System</div>
            </div>
          </div>
          <StepIndicator current={step} />
        </div>
      </header>

      <main className="app-main">
        {step === 1 && (
          <PatientForm
            patient={patient}
            onChange={setPatient}
            onNext={() => setStep(2)}
          />
        )}
        {step === 2 && (
          <TestEntry
            testValues={testValues}
            onChange={setTestValues}
            onBack={() => setStep(1)}
            onNext={() => setStep(3)}
          />
        )}
        {step === 3 && (
          <ReportView
            patient={patient}
            testValues={testValues}
            onBack={() => setStep(2)}
            onNew={() => {
              setStep(1);
              setPatient({
                name: "", uhid: "", age: "", gender: "", dob: "",
                doctor: "", ward: "", phone: "",
                collectDate: new Date().toISOString().split("T")[0],
                collectTime: "", reportDate: new Date().toISOString().split("T")[0],
              });
              setTestValues({});
            }}
          />
        )}
      </main>
    </div>
  );
}

function StepIndicator({ current }) {
  const steps = ["Patient Info", "Test Values", "Report"];
  return (
    <div className="step-indicator">
      {steps.map((s, i) => (
        <div key={i} className={`step-item ${current === i + 1 ? "active" : current > i + 1 ? "done" : ""}`}>
          <div className="step-num">{current > i + 1 ? "✓" : i + 1}</div>
          <span className="step-label">{s}</span>
          {i < steps.length - 1 && <div className="step-line" />}
        </div>
      ))}
    </div>
  );
}
