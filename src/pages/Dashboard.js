import React from "react";
import "./Dashboard.css";
import "../components/Navigation.css";
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import DashboardCard from "../components/DashboardCard";
import Announcement from "../components/Announcement";
import Schedule from "../components/Schedule";
import RecentActivity from "../components/RecentActivity";
import { BsDisplay } from "react-icons/bs";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Navigation />
      <div className="main">
        <div className="navbox"></div>
        <div className="contentbox">
          <div className="left">
            <div className="lefttop">
              <div className="lefttoptop">
                <DashboardCard
                  title="Available Position "
                  value="24"
                  subtitle1="4 urgently needed"
                  style={{ backgroundColor: "#FFEFE7" }}
                />
                <DashboardCard
                  title="Available Position "
                  value="24"
                  subtitle1="4 urgently needed"
                  style={{ backgroundColor: "#E8F0FB" }}
                />
                <DashboardCard
                  title="Available Position "
                  value="24"
                  subtitle1="4 urgently needed"
                  style={{ backgroundColor: "#FDEBF9" }}
                />
              </div>
              <div className="lefttopbottom">
                <div className="lefttopbottomLeft">
                  <div className="lefttopbottomLeft-1">
                    <DashboardCard
                      title="Available Position "
                      value="24"
                      subtitle1="4 urgently needed"
                      subtitle2="4 urgently needed"
                    />
                  </div>
                  <div className="lefttopbottomLeft-2">
                    <i class="ri-line-chart-line"></i>
                  </div>
                </div>
                <div className="lefttopbottomRight">
                  <div className="lefttopbottomRight-1">
                    <DashboardCard
                      title="Available Position "
                      value="24"
                      subtitle1="4 urgently needed"
                      subtitle2="4 urgently needed"
                    />
                  </div>
                  <div className="lefttopbottomRight-2">
                    <i class="ri-line-chart-line"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="leftbottom">
              <Announcement />
            </div>
          </div>
          <div className="right">
            <div className="righttop">
              <RecentActivity />
            </div>
            <div className="rightbottom">
              <Schedule />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
