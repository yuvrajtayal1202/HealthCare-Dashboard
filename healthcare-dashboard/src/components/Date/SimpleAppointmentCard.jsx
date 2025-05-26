import React from "react";
import "./styles.css";

const SimpleAppointmentCard = ({ title, time, emoji }) => {
  return (
    <div className="simple-card">
      <h4>{title} {emoji}</h4>
      <p>{time}</p>
    </div>
  );
};

export default SimpleAppointmentCard;
