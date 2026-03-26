import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  HiOutlineSquares2X2,
  HiOutlineCog6Tooth,
  HiOutlineQuestionMarkCircle,
  HiOutlineArrowRightOnRectangle,
  HiOutlineChevronDown,
  HiOutlineChevronRight,
} from "react-icons/hi2";
import { MdOutlineReceiptLong } from "react-icons/md";
import { FaShirt } from "react-icons/fa6";
import { BsPatchQuestion } from "react-icons/bs";
import AdviserS1 from "../../assets/Images/logos/logo.png";
import "./AdminSideBar.css";

const MENU_ITEMS = [
  { key: "/admin/dashboard", label: "Dashboard", icon: HiOutlineSquares2X2 },
  {
    key: "/admin/orders/new/details",
    label: "New Order",
    icon: FaShirt,
    badge: null,
  },
  {
    key: "/admin/subscriptions",
    label: "Subscriptions",
    icon: MdOutlineReceiptLong,
    badge: null,
  },
  {
    key: "/admin/faq-section",
    label: "Faq Section",
    icon: BsPatchQuestion,
    badge: null,
  },
  // {
  //   key: "/adminsale",
  //   label: "Sale",
  //   icon: FaMoneyBillWave,
  //   children: [
  //     { key: "/admin/Delivery", label: "Delivery", icon: TbTruckDelivery },
  //     { key: "/admin/Cash", label: "Cash", icon: PiHandCoinsFill },
  //     {
  //       key: "/admin/Account",
  //       label: "Account",
  //       icon: MdOutlineAccountBalanceWallet,
  //     },
  //     { key: "/admin/Ikram", label: "Ikram", icon: RiAccountPinCircleFill },
  //     { key: "/admin/islam", label: "islam", icon: RiAccountPinCircleFill },
  //   ],
  // },
];

const BOTTOM_ITEMS = [
  // { key: "/adminsettings", label: "Settings", icon: HiOutlineCog6Tooth },
  { key: "/admin/help", label: "Help", icon: HiOutlineQuestionMarkCircle },
  {
    key: "/auth/login",
    label: "Logout",
    icon: HiOutlineArrowRightOnRectangle,
  },
];

const AdminSideBar = ({ collapsed, setCollapsed }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;
  const [saleOpen, setSaleOpen] = useState(
    pathname.startsWith("/Delivery") ||
      pathname.startsWith("/Cash") ||
      pathname.startsWith("/Account") ||
      pathname === "/Ikram" ||
      pathname === "/islam",
  );

  const isActive = (key) => {
    if (key === "/") return pathname === "/" || pathname === "";
    return pathname === key || pathname.startsWith(key + "/");
  };

  const isSaleChildActive = () =>
    MENU_ITEMS.find((m) => m.children)?.children?.some((c) => isActive(c.key));

  return (
    <div
      className={`admin-sidebar ${collapsed ? "admin-sidebar--collapsed" : ""}`}
    >
      <div className="admin-sidebar-spacer">
        {/* Logo / Brand */}
        <div className="admin-sidebar-brand">
          <div
            className="admin-sidebar-brand-inner"
            role="button"
            tabIndex={0}
            onClick={() => setCollapsed((prev) => !prev)}
            onKeyDown={(e) =>
              e.key === "Enter" && setCollapsed((prev) => !prev)
            }
          >
            <div className="admin-sidebar-logo">
              <img
                src={AdviserS1}
                alt="Logo"
                className={collapsed ? "ps-2" : ""}
              />
            </div>
            {!collapsed && (
              <div className="d-flex flex-column justify-content-center align-itmes-center">
                <span className="admin-sidebar-brand-name">Stitch & Stone</span>
                <sub className="text-muted text-center">Digital Atelier</sub>
              </div>
            )}
          </div>
          {!collapsed && (
            <button
              type="button"
              className="admin-sidebar-toggle"
              onClick={() => setCollapsed((prev) => !prev)}
              aria-label="Collapse"
            >
              <HiOutlineChevronRight size={16} />
            </button>
          )}
        </div>

        {/* MENU section */}
        <nav className="admin-sidebar-nav">
          <div className="admin-sidebar-menu-label">MENU</div>

          {MENU_ITEMS.map((item) => {
            if (item.children) {
              const open = saleOpen;
              const childActive = isSaleChildActive();
              const showPopover = open;

              return (
                <div
                  key={item.key}
                  className="admin-sidebar-submenu"
                  onMouseEnter={() => collapsed && setSaleOpen(true)}
                  onMouseLeave={() => collapsed && setSaleOpen(false)}
                >
                  <button
                    type="button"
                    className={`admin-sidebar-item admin-sidebar-item--parent ${
                      childActive ? "admin-sidebar-item--active" : ""
                    }`}
                    onClick={() => setSaleOpen((prev) => !prev)}
                  >
                    <span className="admin-sidebar-item-pill" />
                    <item.icon className="admin-sidebar-item-icon" size={20} />
                    {!collapsed && (
                      <>
                        <span className="admin-sidebar-item-label">
                          {item.label}
                        </span>
                        <HiOutlineChevronDown
                          className={`admin-sidebar-item-chevron ${open ? "admin-sidebar-item-chevron--open" : ""}`}
                          size={14}
                        />
                      </>
                    )}
                  </button>

                  {/* Pop-out inner menu (both collapsed and expanded) */}
                  {showPopover && (
                    <div className="admin-sidebar-popover">
                      {item.children.map((child) => (
                        <button
                          key={child.key}
                          type="button"
                          className={`admin-sidebar-item admin-sidebar-item--child ${
                            isActive(child.key)
                              ? "admin-sidebar-item--active"
                              : ""
                          }`}
                          onClick={() => {
                            navigate(child.key);
                            setSaleOpen(false);
                          }}
                        >
                          <child.icon
                            className="admin-sidebar-item-icon"
                            size={18}
                          />
                          <span className="admin-sidebar-item-label">
                            {child.label}
                          </span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            const active = isActive(item.key);
            return (
              <button
                key={item.key}
                type="button"
                className={`admin-sidebar-item ${active ? "admin-sidebar-item--active" : ""}`}
                onClick={() => navigate(item.key)}
              >
                <span className="admin-sidebar-item-pill" />
                <item.icon className="admin-sidebar-item-icon" size={20} />
                {!collapsed && (
                  <>
                    <span className="admin-sidebar-item-label">
                      {item.label}
                    </span>
                    {item.badge != null && (
                      <span className="admin-sidebar-item-badge">
                        {item.badge}
                      </span>
                    )}
                  </>
                )}
              </button>
            );
          })}
        </nav>

        {/* Bottom: Settings, Help, Logout */}
        <div className="admin-sidebar-bottom">
          {BOTTOM_ITEMS.map((item) => (
            <button
              key={item.key}
              type="button"
              className="admin-sidebar-item"
              onClick={() => navigate(item.key)}
            >
              <item.icon className="admin-sidebar-item-icon" size={20} />
              {!collapsed && (
                <span className="admin-sidebar-item-label">{item.label}</span>
              )}
            </button>
          ))}
        </div>

        {/* Download card */}
        {!collapsed && (
          <div className="admin-sidebar-download">
            <h4 className="admin-sidebar-download-title">Pro Plan Available</h4>
            <p className="admin-sidebar-download-text">
              Upgrade to our Pro Plan for advanced features and priority
              support.
            </p>
            <button
              type="button"
              className="admin-sidebar-download-btn"
              onClick={() => navigate("/subscriptions")}
            >
              Buy Pro Plan
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminSideBar;
