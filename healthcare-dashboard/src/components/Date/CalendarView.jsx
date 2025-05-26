import React from "react";
import "./styles.css";
import { IoMdAddCircle } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";

const CalendarView = () => {
  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <h2>October 2021</h2>
        <div className="calender-header-con">
          <p className="calender-header-icon">
            <RxAvatar />
          </p>
          <p className="calender-header-icon">
            <IoMdAddCircle />
          </p>
        </div>
      </div>

      <div className="calendar-grid">
        {[
          "Mon 25",
          "Tue 26",
          "Wed 27",
          "Thu 28",
          "Fri 29",
          "Sat 30",
          "Sun 31",
        ].map((day, idx) => (
          <div key={idx} className="calendar-day">
            <strong>{day}</strong>
            {["09:00", "10:00", "11:00", "13:00", "15:00"].map((time, tIdx) => (
              <div
                key={tIdx}
                className={
                  day.includes("Tue", "Thu") && time == "09:00"
                    ? "calendar-slot selected"
                    : "calendar-slot"
                }
              >
                {time}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="appointment-card-con">
        <div className="appointment-card blue-card">
          <h3>Dentist 🦷</h3>
          <p>09:00–11:00</p>
          <p>Dr. Cameron Williamson</p>
        </div>

        <div className="appointment-card light-card">
          <h3>Physiotherapy Appointment 🏋️‍♂️</h3>
          <p>11:00–12:00</p>
          <p>Dr. Kevin Djones</p>
        </div>
      </div>
    </div>
  );
};

export default CalendarView;
