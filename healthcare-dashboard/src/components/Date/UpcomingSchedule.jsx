import React from "react";
import SimpleAppointmentCard from "./SimpleAppointmentCard";
import "./styles.css";

const UpcomingSchedule = () => {
  return (
    <div className="upcoming-container">
      <h2>The Upcoming Schedule</h2>

      <div className="day-section">
        <h4>On Thursday</h4>
        <div className="card-row">
          <SimpleAppointmentCard title="Health checkup complete" time="11:00 AM" emoji="💉" />
          <SimpleAppointmentCard title="Ophthalmologist" time="14:00 PM" emoji="👁️" />
        </div>
      </div>

      <div className="day-section">
        <h4>On Saturday</h4>
        <div className="card-row">
          <SimpleAppointmentCard title="Cardiologist" time="12:00 AM" emoji="❤️" />
          <SimpleAppointmentCard title="Neurologist" time="16:00 PM" emoji="🧑‍⚕️" />
        </div>
      </div>
    </div>
  );
};

export default UpcomingSchedule;
