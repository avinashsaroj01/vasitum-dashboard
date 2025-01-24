import React from "react";
import "./Schedule.css";

const Schedule = () => {
  const schedules = [
    { id: 1, time: "11:30 AM", text: "Meeting with client" },
    { id: 2, time: "10:30 AM", text: "Interview " },
    {
      id: 3,
      time: "09:15 AM",
      text: "Short meeting scheduled",
    },
  ];

  return (
    <div className="schedule">
      <h3>Upcoming Schedule</h3>
      <ul>
        {schedules.map((item) => (
          <li key={item.id}>
            <p className="schedule-text">{item.text}</p>
            <span className="schedule-time">{item.time}</span>
          </li>
        ))}
      </ul>
      <button className="create-schedule-btn">Create a New Schedule</button>
    </div>
  );
};

export default Schedule;
