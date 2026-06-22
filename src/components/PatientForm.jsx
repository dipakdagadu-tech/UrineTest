export default function PatientForm({ patient, onChange, onNext }) {
  const set = (field) => (e) => onChange({ ...patient, [field]: e.target.value });

  const isValid = patient.name.trim() && patient.uhid.trim() && patient.age && patient.gender;

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Patient Information</h1>
        <p className="page-sub">Enter patient and sample collection details</p>
      </div>

      <div className="form-card">
        <div className="form-section-title">
          <span className="section-icon">👤</span> Patient Details
        </div>
        <div className="form-grid form-grid-2">
          <Field label="Patient Full Name *">
            <input value={patient.name} onChange={set("name")} placeholder="e.g. Ramesh Kumar Sharma" />
          </Field>
          <Field label="UHID / Patient ID *">
            <input value={patient.uhid} onChange={set("uhid")} placeholder="e.g. TM-20240001" />
          </Field>
          <Field label="Age (years) *">
            <input type="number" value={patient.age} onChange={set("age")} placeholder="e.g. 35" min="0" max="120" />
          </Field>
          <Field label="Gender *">
            <select value={patient.gender} onChange={set("gender")}>
              <option value="">Select gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </Field>
          <Field label="Date of Birth">
            <input type="date" value={patient.dob} onChange={set("dob")} />
          </Field>
          <Field label="Phone Number">
            <input value={patient.phone} onChange={set("phone")} placeholder="e.g. 9876543210" />
          </Field>
        </div>
      </div>

      <div className="form-card">
        <div className="form-section-title">
          <span className="section-icon">🏥</span> Clinical & Sample Details
        </div>
        <div className="form-grid form-grid-2">
          <Field label="Referring Doctor">
            <input value={patient.doctor} onChange={set("doctor")} placeholder="e.g. Dr. Priya Mehta" />
          </Field>
          <Field label="Ward / Department">
            <input value={patient.ward} onChange={set("ward")} placeholder="e.g. OPD / Ward 3 / ICU" />
          </Field>
          <Field label="Sample Collection Date">
            <input type="date" value={patient.collectDate} onChange={set("collectDate")} />
          </Field>
          <Field label="Sample Collection Time">
            <input type="time" value={patient.collectTime} onChange={set("collectTime")} />
          </Field>
          <Field label="Report Date">
            <input type="date" value={patient.reportDate} onChange={set("reportDate")} />
          </Field>
        </div>
      </div>

      <div className="form-actions">
        {!isValid && (
          <span className="validation-hint">* Fill name, UHID, age and gender to continue</span>
        )}
        <button className="btn btn-primary" onClick={onNext} disabled={!isValid}>
          Next: Enter Test Values →
        </button>
      </div>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <div className="field">
      <label className="field-label">{label}</label>
      {children}
    </div>
  );
}
