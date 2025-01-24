import React from "react";
import "./DashboardCard.css";

function DashboardCard({ style, title, value, subtitle1, subtitle2 }) {
  return (
    <div className="dashboard-card" style={style}>
      <h4>{title}</h4>
      <h1>{value}</h1>
      <p>{subtitle2}</p>
      <small>{subtitle1}</small>
    </div>
  );
}

export default DashboardCard;
