import React from "react";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import ChartJSComponent from "../../assets/Custom/ChartJSComponent/ChartJSComponent";
import "./DashBoard.css";

const DashBoard = () => {
  const lineData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [
      {
        data: [20, 40, 32, 45, 38, 52, 48],
        fill: true,
        backgroundColor: "rgba(59,130,246,0.18)",
        borderColor: "#2563eb",
        tension: 0.45,
      },
    ],
  };

  const lineOptions = {};

  return (
    <div className="db-root">
      {/* Header */}
      <div className="db-header">
        <div>
          <h1 className="db-title">Dashboard</h1>
          <p className="db-subtitle">
            Here&apos;s your overview of your business sales.
          </p>
        </div>

        <div className="db-header-actions">
          <button type="button" className="db-btn db-btn-ghost">
            Export
          </button>
          <button type="button" className="db-btn db-btn-primary">
            Filter
          </button>
        </div>
      </div>

      {/* Top stats */}
      <div className="db-stats-row">
        <StatCard
          title="Total Profit"
          value="4,439.10"
          note="ve leat momth 89223.458"
        />
        <StatCard
          title="Ended Projects"
          value="3,179.04"
          note="Incfromnt 28.54"
        />
        <StatCard
          title="Running Sales"
          value="12"
          note="Increased from last month"
        />
        <StatCard
          title="Pending Project"
          value="2"
          note="Discus morin"
        />
      </div>

      {/* Middle charts */}
      <div className="db-main-grid">
        {/* Sales report area */}
        <div className="db-card db-card-large">
          <div className="db-card-header">
            <div>
              <h2 className="db-card-title">Sales Report Area</h2>
              <p className="db-card-subtitle">+4.3% vs last years</p>
            </div>
            <div className="db-card-header-right">
              <button type="button" className="db-chip">
                Monthly
              </button>
              <button type="button" className="db-icon-dots">
                •••
              </button>
            </div>
          </div>
          <div className="db-chart-wrapper">
            <ChartJSComponent data={lineData} options={lineOptions} />
          </div>
        </div>

        {/* Select Activity */}
        <div className="db-card">
          <div className="db-card-header">
            <h2 className="db-card-title">Select Activity</h2>
            <button type="button" className="db-chip db-chip-light">
              Import Data
            </button>
          </div>

          <div className="db-activity">
            <div className="db-activity-ring">
              <div className="db-activity-inner">
                <span className="db-activity-value">289K</span>
                <span className="db-activity-label">Total sell count</span>
              </div>
            </div>
            <div className="db-activity-legend">
              <div className="db-legend-item">
                <span className="db-legend-dot db-legend-dot-blue" />
                <span className="db-legend-text">Completed</span>
              </div>
              <div className="db-legend-item">
                <span className="db-legend-dot db-legend-dot-light" />
                <span className="db-legend-text">Pending</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="db-bottom-grid">
        {/* Team collaboration */}
        <div className="db-card">
          <div className="db-card-header">
            <h2 className="db-card-title">Team Collaboration</h2>
            <button type="button" className="db-chip">
              + Add Member
            </button>
          </div>

          <div className="db-team-list">
            {TEAM_MEMBERS.map((m) => (
              <div key={m.name} className="db-team-item">
                <div className="db-team-avatar">{m.initials}</div>
                <div className="db-team-info">
                  <span className="db-team-name">{m.name}</span>
                  <span className="db-team-role">{m.role}</span>
                </div>
                <span className="db-team-status">{m.status}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Meeting card */}
        <div className="db-card db-meeting-card">
          <div className="db-meeting-top">
            <span className="db-meeting-label">Today&apos;s Schedule</span>
          </div>
          <div className="db-meeting-main">
            <div className="db-meeting-avatar">M</div>
            <div className="db-meeting-info">
              <h3 className="db-meeting-title">Meeting Arc Company</h3>
              <p className="db-meeting-subtitle">08:30 pm - 09:40 pm</p>
            </div>
          </div>
          <button type="button" className="db-btn db-btn-meeting">
            Start Meeting
          </button>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ title, value, note }) => {
  return (
    <div className="db-stat-card">
      <div className="db-stat-header">
        <span className="db-stat-title">{title}</span>
        <button type="button" className="db-stat-icon-btn">
          <HiOutlineArrowUpRight size={16} />
        </button>
      </div>
      <div className="db-stat-value-row">
        <span className="db-stat-value">{value}</span>
      </div>
      <p className="db-stat-note">{note}</p>
    </div>
  );
};

const TEAM_MEMBERS = [
  {
    name: "Alskandra Deff",
    role: "Working on Github Project Repository",
    status: "On Track",
    initials: "AD",
  },
  {
    name: "Edwin Adenite",
    role: "Working on Integrate User Authentication System",
    status: "Review",
    initials: "EA",
  },
  {
    name: "Seller",
    role: "Working on UI updates",
    status: "Pending",
    initials: "SL",
  },
  {
    name: "Dsvid Oatbold",
    role: "Working on Homepage Layout",
    status: "Completed",
    initials: "DO",
  },
];

export default DashBoard;

