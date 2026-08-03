import { useState, useEffect } from "react";
import { COURSE_RACKS } from "../data/courseRacks";
import "../styles/operationModal.css";

export default function OperationModal({
  open,
  onClose,
  onSave,
  initialData = null,
}) 

{
  const [form, setForm] = useState({
  scope: "ENTIRE_PORTAL",
  course: "",
  rack: "",
  severity: "WARNING",
  title: "",
  message: "",
  startTime: "",
  endTime: "",
  enabled: 1,
});

  useEffect(() => {
    if (initialData) {
      setForm({
        ...initialData,
      });
    }
  }, [initialData]);

  if (!open) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

const submit = () => {
  console.log("Form Data:", form);
  onSave(form);
};

  return (
    <div className="modal-overlay">
      <div className="modal-card">

        <h2>System Notice</h2>

        {/* Scope */}
        <div className="form-group">
          <label>Scope</label>

          <select
            name="scope"
            value={form.scope}
            onChange={handleChange}
          >
            <option value="ENTIRE_PORTAL">
              Entire Portal
            </option>

            <option value="COURSE">
              Course
            </option>

            <option value="RACK">
              Rack
            </option>
          </select>
        </div>

        {/* Course */}
        {(form.scope === "COURSE" ||
          form.scope === "RACK") && (
          <div className="form-group">
            <label>Course</label>

           <select
  name="course"
  value={form.course}
  onChange={handleChange}
>
  <option value="">Select Course</option>

  <option value="security-scheduler">
    CCIE Security
  </option>

  <option value="dc-scheduler">
    CCIE Data Center
  </option>

  <option value="ei-scheduler">
    CCIE Enterprise Infrastructure
  </option>

  <option value="wireless-scheduler">
    CCIE Wireless
  </option>

  <option value="fcx-scheduler">
    Fortinet FCX
  </option>
</select>
          </div>
        )}

        {/* Rack */}
        {form.scope === "RACK" && (
          <div className="form-group">
            <label>Rack</label>

       <select
  name="rack"
  value={form.rack}
  onChange={handleChange}
>
  <option value="">Select Rack</option>

  {(COURSE_RACKS[form.course] || []).map((rack) => (
    <option key={rack} value={rack}>
      Rack {rack}
    </option>
  ))}
</select>
          </div>
        )}

        {/* Severity */}
        <div className="form-group">
          <label>Severity</label>

          <select
            name="severity"
            value={form.severity}
            onChange={handleChange}
          >
            <option value="INFO">INFO</option>
            <option value="WARNING">WARNING</option>
            <option value="CRITICAL">CRITICAL</option>
          </select>
        </div>

        {/* Title */}
        <div className="form-group">
          <label>Title</label>

          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Enter Title"
          />
        </div>

        {/* Message */}
        <div className="form-group">
          <label>Message</label>
          <textarea
            rows="4"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Enter Message"
          />
        </div>

    <div className="form-group">
      <label>Start Time</label>
      <input
       type="datetime-local"
       name="startTime"
       value={form.startTime || ""}
       onChange={handleChange}
       />
     </div>

   <div className="form-group">
    <label>End Time</label>
   <input
    type="datetime-local"
    name="endTime"
    value={form.endTime || ""}
    onChange={handleChange}
    />
   </div>

        {/* Buttons */}
        <div className="modal-actions">
          <button
            className="btn-secondary"
            onClick={onClose}
          >
            Cancel
          </button>

          <button
            className="btn-primary"
            onClick={submit}
          >
            Save Notice
          </button>
        </div>

      </div>
    </div>
  );
}