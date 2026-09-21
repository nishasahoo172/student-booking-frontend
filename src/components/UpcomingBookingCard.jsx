import { useState } from "react";
import RescheduleBookingModal from "./RescheduleBookingModal";
import "../styles/upcomingBookingCard.css";

export default function UpcomingBookingCard({
  booking,
  onSuccess,
}) {
const [showReschedule, setShowReschedule] = useState(false);
  if (!booking) {
    return (
      <div className="upcomingBookingCard">
        <div className="ubHeader">
          <h3>📅 Upcoming Lab</h3>
        </div>

        <div className="ubEmpty">
          You don't have any upcoming lab bookings.
        </div>
      </div>
    );
  }

  const start = new Date(booking.startTime);
  const end = new Date(booking.endTime);

  const now = new Date();

  const diff = start - now;

  let countdown = "Started";

  if (diff > 0) {
  const totalMinutes = Math.floor(diff / (1000 * 60));

  const days = Math.floor(totalMinutes / (60 * 24));
  const hours = Math.floor((totalMinutes % (60 * 24)) / 60);
  const minutes = totalMinutes % 60;

  countdown = "";

  if (days > 0) countdown += `${days}d `;
  if (hours > 0) countdown += `${hours}h `;
  countdown += `${minutes}m`;
}

  return (
    <div className="upcomingBookingCard">

      <div className="ubHeader">

        <div className="ubTitle">
          📅 Upcoming Lab
        </div>

        <span className="ubStatus">
          {booking.status}
        </span>

      </div>


      <div className="ubCountdown">

     <div className="ubCountdownLabel">
      Starts In
     </div>

      <div className="ubCountdownValue">
     {countdown}
     </div>

     </div>

      <div className="ubGrid">
        <div className="ubItem">
          <label>Course</label>
          <strong>{booking.courseTitle}</strong>
        </div>

        <div className="ubItem">
          <label>Rack</label>
         <strong>{booking.rackLabel}</strong>
        </div>

        <div className="ubItem">
          <label>Date</label>
         <strong>{booking.dateLabel}</strong>
        </div>

        <div className="ubItem">
          <label>Time</label>
         <strong>{booking.timeLabel}</strong>
        </div>

         <div className="ubItem">
         <label>Duration</label>
         <strong>{booking.durationLabel}</strong>
        </div>
      </div>

    <div className="ubActions">
  <button
  className="ubRescheduleBtn"
  type="button"
  onClick={() => {
    console.log("Button Clicked");
    setShowReschedule(true);
  }}
>
  Reschedule Booking
</button>
    </div>
{showReschedule && (
  <RescheduleBookingModal
    open={showReschedule}
    booking={booking}
    onClose={() => setShowReschedule(false)}
    onSuccess={async () => {
      setShowReschedule(false);

      if (onSuccess) {
        await onSuccess();
      }
    }}
  />
)}
    </div>
  );
}