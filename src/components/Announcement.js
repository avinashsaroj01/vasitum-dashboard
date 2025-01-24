import React from "react";
import "./Announcement.css";

const Announcement = () => {
  const announcements = [
    {
      id: 1,
      time: "5 Minutes ago",
      text: "Outing schedule for every department",
    },
    { id: 2, time: "Yesterday, 12:30 PM", text: "Meeting HR Department" },
    {
      id: 3,
      time: "Yesterday, 09:15 AM",
      text: "IT Department needs two more talents for UX/UI Designer position",
    },
  ];

  return (
    <div className="announcement">
      <h3>Announcement</h3>
      <ul>
        {announcements.map((item) => (
          <li key={item.id}>
            <p className="announcement-text">{item.text}</p>
            <span className="announcement-time">{item.time}</span>
          </li>
        ))}
      </ul>
      <button className="see-all-btn">See All Announcements</button>
    </div>
  );
};

export default Announcement;
