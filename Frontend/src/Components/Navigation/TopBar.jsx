import React, { useState } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { HiOutlineBell } from "react-icons/hi2";
import avatar1 from "../../assets/Images/logos/logo2.png";
import "./TopBar.css";

const TopBar = ({ collapsed, setCollapsed }) => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <header className="pe-2 py-2">
      <div className="topbar">
        <div className="topbar-inner">
          {/* Search */}
          <div className="topbar-search-wrap">
            <HiMagnifyingGlass className="topbar-search-icon" size={18} />
            <input
              type="text"
              className="topbar-search-input"
              placeholder="Search task"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <span className="topbar-search-shortcut">⌘ F</span>
          </div>

          {/* Right: icons + user */}
          <div className="topbar-right">
            <button
              type="button"
              className="topbar-icon-btn"
              aria-label="Messages"
            >
              <HiOutlineEnvelope size={20} />
            </button>
            <button
              type="button"
              className="topbar-icon-btn"
              aria-label="Notifications"
            >
              <HiOutlineBell size={20} />
            </button>
            <div className="topbar-user">
              <div className="topbar-user-avatar-wrap">
                <img src={avatar1} alt="" className="topbar-user-avatar" />
              </div>
              <div className="topbar-user-info">
                <span className="topbar-user-name">Totok Michael</span>
                <span className="topbar-user-email">tmichaelIC@meil.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
