import React from "react";
import "./RecentActivity.css";

const RecentActivity = () => {
  const activities = [
    {
      id: 1,
      time: "10:40 AM, Fri 10 Sept 2021",
      text: "You Posted a New Job. Kindly check.",
    },
  ];

  return (
    <div className="recent-activity">
      <h3>Recently Activity</h3>
      <ul>
        {activities.map((item) => (
          <li key={item.id}>
            <p className="activity-text">{item.text}</p>
            <span className="activity-time">{item.time}</span>
          </li>
        ))}
      </ul>
      <button className="see-all-activity-btn">See All Activity</button>
    </div>
  );
};

export default RecentActivity;
