import React from "react";
import { Button, Typography } from "antd";
import { useNavigate } from "react-router-dom";

const { Title, Paragraph } = Typography;

const HeroSection = ({ image }) => {
  let navigate = useNavigate();
  return (
    <section className="wlp-hero" aria-label="Hero">
      <div
        className="wlp-hero-bg"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="wlp-hero-inner">
        <h1 className="wlp-serif">
          Deeper understanding.
          <br />
          Better fittings.
        </h1>
        <p>
          Stitch &amp; Stone helps tailoring teams digitise measurements,
          orders, and delivery timelines—so you resolve more jobs with less
          chaos.
        </p>
        <div className="wlp-hero-actions">
          <Button
            type="primary"
            size="large"
            className="wlp-btn-primary"
            onClick={() => navigate("/auth/login")}
          >
            Get Started
          </Button>
          <Button
            size="large"
            className="wlp-btn-ghost"
            onClick={() => navigate("/admin/dashboard")}
          >
            View dashboard
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
