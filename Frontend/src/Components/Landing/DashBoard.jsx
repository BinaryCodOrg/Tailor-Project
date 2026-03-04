import "./DashBoard.css";
import { Typography } from "antd";
import { IoFilter } from "react-icons/io5";
import StateCards from "../../assets/Custom/StateCards/StateCards";
import SemiCircleChart from "../../assets/Custom/ChartJSComponent/SemiCircleChart";
import SalesReportChart from "../../assets/Custom/ChartJSComponent/SalesReportChart";
import { PiExportLight } from "react-icons/pi";

const DashBoard = () => {
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
            Export <PiExportLight className="ms-2" />
          </button>
          <button type="button" className="db-btn db-btn-primary">
            <IoFilter className="me-2" />
            Filter
          </button>
        </div>
      </div>

      {/* Top stats */}
      <div className="db-stats-row">
        <StateCards
          title="Total Profit"
          value="4,439.10"
          note="ve leat momth 89223.458"
        />
        <StateCards
          title="Ended Projects"
          value="3,179.04"
          note="Incfromnt 28.54"
        />
        <StateCards
          title="Running Sales"
          value="12"
          note="Increased from last month"
        />
        <StateCards title="Pending Project" value="2" note="Discus morin" />
      </div>

      {/* Middle charts */}
      <div className="db-main-grid">
        {/* Sales report area */}
        <div className="db-card db-card-large d-flex flex-column">
          <div className="db-card-header">
            <div>
              <h2 className="db-card-title">Sales Report Area</h2>
              <p className="db-card-subtitle">+4.3% vs last Month</p>
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
          <div className="db-chart-wrapper mt-auto">
            <SalesReportChart />
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
            <SemiCircleChart
              totalCount="289K"
              label="Total sell count"
              data={[60, 40, 30, 20, 10]}
              Colors={["#3b82f6", "#93c5fd", "#1e40af", "#3b82f6", "#93c5fd"]}
            />
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
