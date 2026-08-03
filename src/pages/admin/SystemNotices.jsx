import { useEffect, useState } from "react";
import "../../styles/systemNotices.css";
import {
  getOperations,
  toggleOperation,
  deleteOperation,
  createOperation,
  updateOperation,
} from "../../services/adminApi";

import OperationModal from "../../components/OperationModal"

const badgeStyle = (enabled) => ({
  padding: "4px 10px",
  borderRadius: "20px",
  fontSize: "12px",
  fontWeight: "600",
  color: "#fff",
  background: enabled ? "#16a34a" : "#dc2626",
});

export default function SystemNotices() {
  const [operations, setOperations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [editingNotice, setEditingNotice] = useState(null);
  const [deleteId, setDeleteId] = useState(null);

  const [toast, setToast] = useState({
  show: false,
  type: "success",
  message: "",
});

  const loadOperations = async () => {
    try {
      const res = await getOperations();
      setOperations(res.data.data || []);
    } catch (err) {
      console.error(err);
     showToast("error", "Failed to load notices.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadOperations();
  }, []);

  const handleToggle = async (id) => {
    try {
      await toggleOperation(id);
      loadOperations();
    } catch (err) {
      console.error(err);
     showToast("error", "Failed to update notice.");
    }
  };

  const handleEdit = (notice) => {
  setEditingNotice(notice);
  setOpenModal(true);
};

  const handleDelete = async () => {
  if (!deleteId) return;

  try {
    await deleteOperation(deleteId);

    showToast("success", "Notice deleted successfully.");

    setDeleteId(null);

    loadOperations();
  } catch (err) {
    console.error(err);

    showToast("error", "Failed to delete notice.");
  }
};
// Create / Update Notice
const handleSave = async (form) => {
  try {
    const payload = {
      scope: form.scope,

      course:
        form.scope === "ENTIRE_PORTAL"
          ? null
          : form.course.trim() || null,

      rack:
        form.scope === "RACK"
          ? form.rack.trim() || null
          : null,

      severity: form.severity,

      title: form.title.trim(),

      message: form.message.trim(),

      // NEW
      startTime: form.startTime || null,

      // NEW
      endTime: form.endTime || null,

      enabled: form.enabled ?? 1,
    };

    console.log("Payload:", payload);

    let res;

    if (editingNotice) {
      // Update existing notice
      res = await updateOperation(editingNotice.id, payload);

     showToast("success", "Notice updated successfully.");
    } else {
      // Create new notice
      res = await createOperation(payload);

 showToast("success", "Notice created successfully.");
    }

    console.log("Response:", res.data);

    setOpenModal(false);
    setEditingNotice(null);

    loadOperations();
  } catch (err) {
    console.error("Save Notice Error:", err);

    if (err.response) {
      console.log("Status:", err.response.status);
      console.log("Backend Response:", err.response.data);

      showToast(
  "error",
  err.response.data.message ||
    "Failed to save notice."
);
    } else {
    showToast(
  "error",
  err.message || "Failed to save notice."
);
    }
  }
};

const showToast = (type, message) => {
  setToast({
    show: true,
    type,
    message,
  });

  setTimeout(() => {
    setToast({
      show: false,
      type: "success",
      message: "",
    });
  }, 3000);
};

if (loading) {
  return <h3>Loading...</h3>;
}

  return (
    <div style={{ padding: 30 }}>

       {toast.show && (
      <div
        style={{
          marginBottom: 20,
          padding: "14px 18px",
          borderRadius: "8px",
          fontWeight: 600,
          color: "#fff",
          background:
            toast.type === "success"
              ? "#16a34a"
              : "#dc2626",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        }}
      >
        {toast.message}
      </div>
    )}


      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 20,
        }}
      >
        <h2>System Notices</h2>

     <button
    onClick={() => setOpenModal(true)}
     style={{
    background: "#6d67ca",
    color: "#ffffff",
    border: "1px solid #715ab7",
    padding: "10px 18px",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "600",
    transition: "0.2s ease",
    }}
    onMouseEnter={(e) => {
    e.target.style.background = "#5f58bf";
    }}
    onMouseLeave={(e) => {
    e.target.style.background = "#6d67ca";
    }}
   >
    + Create Notice
    </button>
      </div>

      <table
        border="1"
        cellPadding="10"
        width="100%"
        style={{
         
        }}
      >

        <thead>
        <tr>
       <th>Status</th>
       <th>Scope</th>
       <th>Course</th>
      <th>Rack</th>
      <th>Title</th>
      <th>Severity</th>
      <th>Start</th>
      <th>End</th>
      <th>Actions</th>
      </tr>
        </thead>

        <tbody>
          {operations.length === 0 && (
            <tr>
            <td colSpan="9" align="center">
                No notices found.
              </td>
            </tr>
          )}

          {operations.map((item) => (
            <tr key={item.id}>
              <td>
                <span style={badgeStyle(item.enabled)}>
                  {item.enabled ? "Enabled" : "Disabled"}
                </span>
              </td>

              <td>{item.scope}</td>

              <td>{item.course || "-"}</td>

              <td>{item.rack || "-"}</td>

              <td>{item.title}</td>

              <td>{item.severity}</td>
              <td>
            {item.startTime
             ? new Date(item.startTime).toLocaleString()
            : "-"}
              </td>

             <td>
         {item.endTime
        ? new Date(item.endTime).toLocaleString()
        : "-"}
        </td>

           <td>
     <div className="action-buttons">

    <button
      className="btn-edit"
      onClick={() => handleEdit(item)}
    >
      Edit
    </button>

    <button
      className="btn-toggle"
      onClick={() => handleToggle(item.id)}
    >
      {item.enabled ? "Disable" : "Enable"}
    </button>

    <button
    className="btn-delete"
    onClick={() => setDeleteId(item.id)}
    >
   Delete
   </button>



   {deleteId && (
  <div className="modal-overlay">
    <div className="modal-card" style={{ maxWidth: 420 }}>

      <h3>Delete Notice</h3>

      <p style={{ margin: "20px 0" }}>
        Are you sure you want to delete this notice?
      </p>

      <div className="modal-actions">
        <button
          className="btn-secondary"
          onClick={() => setDeleteId(null)}
        >
          Cancel
        </button>

        <button
          className="btn-delete"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>

    </div>
    </div>
   )}
   </div>
   </td>
            </tr>
          ))}
        </tbody>
     </table>

<OperationModal
  open={openModal}
  onClose={() => {
    setOpenModal(false);
    setEditingNotice(null);
  }}
  onSave={handleSave}
  initialData={editingNotice}
/>
    </div>
  );
}