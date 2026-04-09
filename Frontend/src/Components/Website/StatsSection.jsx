import React from "react";
import { Row, Col, Typography } from "antd";

const { Title, Text } = Typography;

const StatsSection = () => {
  return (
    <div className="wlp-container">
      <div className="wlp-stats-row">
        <div>
          <div className="wlp-stat-num">1,500+</div>
          <div className="wlp-stat-label">Orders coordinated</div>
        </div>
        <div>
          <div className="wlp-stat-num">250+</div>
          <div className="wlp-stat-label">Workshop teams</div>
        </div>
        <div>
          <div className="wlp-stat-num">98%</div>
          <div className="wlp-stat-label">On-time delivery satisfaction</div>
        </div>
      </div>
      <div className="wlp-partners">
        {[
          "Atelier One",
          "Thread & Co",
          "Verve Clothiers",
          "Northline",
          "Maison Cut",
        ].map((name) => (
          <span
            key={name}
            style={{
              fontWeight: 700,
              fontSize: "0.95rem",
              color: "#64748b",
              letterSpacing: "0.04em",
            }}
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;
