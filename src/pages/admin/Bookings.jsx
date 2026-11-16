import { useEffect, useState } from "react";
import { getBookings } from "../../services/adminApi";
import "../../styles/bookings.css";

export default function Bookings() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadBookings();
  }, []);

  const loadBookings = async () => {
    try {
      setLoading(true);
      const res = await getBookings();
          console.log(res.data);
      setRows(res.data);
    } catch (error) {
      console.error("Error loading bookings:", error);
    } finally {
      setLoading(false);
    }
  };

  const formatDateTime = (dateTime) => {
    const date = new Date(dateTime);
    return date.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

//   const formatDateTime = (dateTime) => {
//   return new Date(dateTime).toLocaleString("en-IN", {
//     timeZone: "Asia/Kolkata",
//     day: "numeric",
//     month: "short",
//     year: "numeric",
//     hour: "numeric",
//     minute: "2-digit",
//     hour12: true,
//   });
// };

const getCourseTitle = (course) => {
  const courseMap = {
    "dc-scheduler": "CCIE Data Center",
    "security-scheduler": "CCIE Security",
    "ei-scheduler": "CCIE Enterprise Infrastructure",
    "wireless-scheduler": "CCIE Wireless",
  };

  return courseMap[course] || course;
};

  return (
    <div className="bookings-container">
      <div className="bookings-header">
        <h1 className="bookings-title">Bookings</h1>
        <div className="bookings-count">
          <span className="count-label">Total Bookings:</span>
          <span className="count-value">{rows.length}</span>
        </div>
      </div>

      {loading ? (
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Loading bookings...</p>
        </div>
      ) : (
        <div className="table-wrapper">
          <table className="bookings-table">
            <thead>
              <tr>
                <th>Course</th>
                 <th>Lab / Rack</th>
                 <th>Rack</th>
                <th>Start</th>
                <th>End</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {rows.length === 0 ? (
                <tr>
                  <td colSpan="6" className="no-data">
                    No bookings found
                  </td>
                </tr>
              ) : (
                rows.map(b => (
                  <tr key={b.id}>
                    <td data-label="User">
                      <div className="user-cell">
                        <span className="user-avatar">
                          {b.userEmail.charAt(0).toUpperCase()}
                        </span>
                        <span className="user-email">{b.userEmail}</span>
                      </div>
                    </td>
                    <td data-label="Course">
                    <span className="course-badge">
                    {getCourseTitle(b.course)}
                   </span>
                    </td>
                 <td data-label="Lab / Rack">
                {b.course === "dc-scheduler" ? (
                  <div>
              <div className="rack-badge">
               Lab: {b.labTopic || "Data Center Lab"}
             </div>

             <div style={{ marginTop: "4px", fontSize: "12px", opacity: 0.7 }}>
              Internal Rack: {b.rack}
             </div>
              </div>
              ) : (
             <span className="rack-badge">
            Rack {b.rack}
          </span>
            )}
            </td>
                    <td data-label="Start">
                      <div className="datetime-cell">
                        <span className="datetime-icon">📅</span>
                        <span>{formatDateTime(b.startTime)}</span>
                      </div>
                    </td>
                    <td data-label="End">
                      <div className="datetime-cell">
                        <span className="datetime-icon">🏁</span>
                        <span>{formatDateTime(b.endTime)}</span>
                      </div>
                    </td>
                    <td data-label="Status">
                      <span className={`status-badge status-${b.status.toLowerCase()}`}>
                        {b.status}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}