import React from 'react';
import './ActivityFeed.css'; 

const Activity = () => {
      const days = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];

  const bars = [
    ['gray', 'cyan', 'indigo'],
    ['cyan', 'indigo', 'gray'],
    ['gray', 'indigo', 'cyan'],
    ['gray', 'cyan', 'indigo'],
    ['cyan', 'indigo', 'gray'],
    ['gray', 'cyan', 'indigo'],
    ['cyan', 'gray', 'indigo'],
  ];

  return (
    <div className="activity-container">
      <div className="activity-header">
        <span className="title">Activity</span>
        <span className="subtitle">3 appointment on this week</span>
      </div>
      <div className="chart">
        {bars.map((barGroup, index) => (
          <div className="day-column" key={index}>
            <div className="bars">
              {barGroup.map((color, i) => (
                <div key={i} className={`bar ${color}`}></div>
              ))}
            </div>
            <div className="day-label">{days[index]}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Activity;
