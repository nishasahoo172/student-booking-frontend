import { useEffect, useState } from "react";
import "../styles/rescheduleModal.css";
import { COURSE_RACKS } from "../data/courseRacks";
import api from "../services/api";

// =========================
// Add helper HERE
// =========================
function formatTime(dateTime) {

  if (!dateTime) return "";

  const timePart = String(dateTime).split(" ")[1];

  const [hour, minute] = timePart.split(":");

  const h = Number(hour);

  const displayHour = h % 12 || 12;

  const ampm = h >= 12 ? "pm" : "am";

  return `${displayHour}:${minute} ${ampm}`;
}
export default function RescheduleBookingModal({
  open,
  booking,
  onClose,
 onSuccess,
}) {

    
//  console.log("✅ RescheduleBookingModal Rendered");

  if (!open) return null;

  const availableRacks =
    COURSE_RACKS[booking?.course] || [];

  const [selectedDate, setSelectedDate] = useState("");
  const [selectedRack, setSelectedRack] = useState("");
  const [availableSlots, setAvailableSlots] = useState([]);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

useEffect(() => {

    if (!selectedDate || !selectedRack)
        return;

    async function loadSlots() {

        setLoadingSlots(true);

   try {

const res = await api.get("/bookings/available-slots", {
  params: {
    vendor: booking.vendor,
    course: booking.course,
    rack: selectedRack,
    date: selectedDate,
    bookingId: booking.id,
  },
});

console.log("Available Slots:", res.data);

setAvailableSlots(res.data.slots || []);

}
catch (err) {

    console.error(err);

}
finally {

    setLoadingSlots(false);

} 
}

    loadSlots();

 }, [selectedDate, selectedRack]);

// ===============================
// ADD THIS HERE (AFTER useEffect)
// ===============================
async function handleReschedule() {

  if (selectedSlot === null) return;

  try {

    const slot = availableSlots[selectedSlot];

    


    await api.patch(`/bookings/${booking.id}/reschedule`, {
      startTime: slot.startTime,
      endTime: slot.endTime,
      rack: selectedRack,
    });



setSuccessMessage("Booking rescheduled successfully.");

if (onSuccess) {
  await onSuccess();
}

setTimeout(() => {
  onClose();
}, 1500);


   } catch (err) {

    console.error(err);

    alert(
      err.response?.data?.message ||
      "Failed to reschedule booking."
    );
  }
}


  return (
    <div className="rbOverlay">
      <div className="rbModal">

        <h2>Reschedule Booking</h2>

        <p>
          Select a new slot for your upcoming lab.
        </p>

        {/* ==========================
            Current Booking
        =========================== */}

        <div className="rbCurrentBooking">

          <h3>Current Booking</h3>

          <div className="rbRow">
            <span>Date</span>
            <strong>{booking?.dateLabel}</strong>
          </div>

          <div className="rbRow">
            <span>Time</span>
            <strong>{booking?.timeLabel}</strong>
          </div>

          <div className="rbRow">
            <span>Rack</span>
            <strong>{booking?.rackLabel}</strong>
          </div>

          <div className="rbRow">
            <span>Duration</span>
            <strong>{booking?.durationLabel}</strong>
          </div>

        </div>

        {/* ==========================
            New Booking
        =========================== */}

        <div className="rbNewBooking">

          <h3>New Booking</h3>

          {/* Date */}

          <div className="rbField">

            <label>New Date</label>

            <input
              type="date"
              value={selectedDate}
              onChange={(e) =>
                setSelectedDate(e.target.value)
              }
            />

          </div>

          {/* Rack */}

          <div className="rbField">

            <label>Rack</label>

            <select
              value={selectedRack}
              onChange={(e) =>
                setSelectedRack(e.target.value)
              }
            >

              <option value="" disabled>
                Select Rack
              </option>

              {availableRacks.map((rack) => (
                <option
                  key={rack}
                  value={rack}
                >
                  Rack {rack}
                </option>
              ))}

            </select>

          </div>

          {/* ==========================
              Available Slots
          =========================== */}

          {selectedDate && selectedRack && (

            <div className="rbAvailableSlots">

              <h3>Available Time Slots</h3>

              <p className="rbSlotHint">
                Select a new available slot.
              </p>

             <div className="rbSlots">

  {loadingSlots ? (

    <div className="rbNoSlots">
      Loading available slots...
    </div>

  ) : availableSlots.length === 0 ? (

    <div className="rbNoSlots">
      No slots found for this date and rack.
    </div>

  ) : (

    availableSlots.map((slot, index) => (

     <button
    key={index}
    type="button"
     className={`rbSlot ${
    selectedSlot === index ? "selected" : ""
     }`}
    onClick={() => setSelectedSlot(index)}
    >
    {formatTime(slot.startTime)}
    {" - "}
    {formatTime(slot.endTime)}
   </button>
     ))

    )}

     </div>

            </div>

          )}

        </div>


  {/* New Booking */}

   {successMessage && (
     <div className="rbSuccessMessage">
      {successMessage}
    </div>
     )}
        {/* ==========================
            Footer
        =========================== */}
<div className="rbActions">

  <button
    type="button"
    onClick={onClose}
  >
    Close
  </button>

  <button
    type="button"
    disabled={selectedSlot === null}
    onClick={handleReschedule}
  >
    Confirm Reschedule
  </button>

</div>

      </div>
    </div>
  );
}