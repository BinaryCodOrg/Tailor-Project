import React, { useState } from "react";
import { Link } from "react-scroll";
import { Button, Drawer } from "antd";
import { HiBars3BottomRight, HiMagnifyingGlass } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/Images/logos/logo.png";
import "./WebLandingPage.css";

const navItems = [
  { to: "wlp-home", label: "Home" },
  { to: "wlp-about", label: "About Us" },
  { to: "wlp-services", label: "Services" },
  { to: "wlp-contact", label: "Contact Us" },
];

const WebLandingNav = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const afterNav = () => setOpen(false);

  const linkProps = {
    spy: true,
    smooth: true,
    duration: 600,
    offset: -72,
    activeClass: "active",
  };

  return (
    <nav className="wlp-nav" aria-label="Main">
      <div className="wlp-nav-inner">
        <a
          href="#/"
          className="wlp-nav-brand"
          onClick={(e) => {
            e.preventDefault();
            navigate("/");
          }}
        >
          <img src={logo} alt="Stitch and Stone" />
          <span>
            Stitch <span style={{ color: "#3b82f6" }}>&</span> Stone
          </span>
        </a>

        <div className="wlp-nav-links">
          {navItems.map((item) => (
            <Link key={item.to} to={item.to} {...linkProps}>
              {item.label}
            </Link>
          ))}
        </div>

        <div className="wlp-nav-right">
          <Button
            type="primary"
            className="wlp-nav-cta-desktop wlp-btn-primary"
            onClick={() => navigate("/auth/login")}
          >
            Get Started
          </Button>
          <Button
            type="text"
            className="wlp-nav-menu-toggle p-0"
            icon={<HiBars3BottomRight size={28} color="#e2e8f0" />}
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          />
        </div>
      </div>

      <Drawer
        title="Menu"
        placement="right"
        onClose={() => setOpen(false)}
        open={open}
        styles={{ body: { paddingTop: 8 } }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              {...linkProps}
              onClick={afterNav}
              style={{
                fontSize: "1rem",
                color: "#0f172a",
                fontWeight: 500,
              }}
            >
              {item.label}
            </Link>
          ))}
          <Button
            type="primary"
            block
            className="wlp-btn-primary mt-2"
            onClick={() => {
              afterNav();
              navigate("/auth/login");
            }}
          >
            Get Started
          </Button>
        </div>
      </Drawer>
    </nav>
  );
};

export default WebLandingNav;
