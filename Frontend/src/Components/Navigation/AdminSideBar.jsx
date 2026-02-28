import React from "react";
import { Menu } from "antd";
import {
  MdOutlineAccountBalanceWallet,
  MdOutlineDesktopWindows,
} from "react-icons/md";
import {
  RiAccountPinCircleFill,
  RiAppsLine,
  RiMenuFill,
} from "react-icons/ri";
import AdviserS1 from "../../assets/Images/logos/logo.png";
import { useNavigate } from "react-router-dom";
import { FaUsers } from "react-icons/fa";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";
import { PiHandCoinsFill } from "react-icons/pi";
import dashboardTheme from "../../theme/dashboardTheme";
import "./AdminSideBar.css";

const { SubMenu } = Menu;

const AdminSideBar = ({ collapsed, setCollapsed }) => {
  const Nav = useNavigate();

  return (
    <div
      className="admin-sidebar-root"
      style={{ background: dashboardTheme.sidebarBg }}
    >
      <div className="admin-sidebar-header">
        <div className="admin-sidebar-logo">
          <div className="admin-sidebar-logo-icon">T</div>
          {!collapsed && (
            <div className="admin-sidebar-logo-text">
              <span className="admin-sidebar-logo-title">Tailor</span>
              <span className="admin-sidebar-logo-subtitle">Dashboard</span>
            </div>
          )}
        </div>
        <button
          className="admin-sidebar-toggle"
          type="button"
          onClick={() => setCollapsed(!collapsed)}
        >
          <RiMenuFill size={18} />
        </button>
      </div>

      <Menu
        mode="inline"
        inlineCollapsed={collapsed}
        selectable={false}
        className="admin-sidebar-menu"
      >
        <Menu.Item
          onClick={() => {
            Nav("/");
          }}
          key="2"
          icon={<MdOutlineDesktopWindows />}
        >
          Dashboard
        </Menu.Item>

        <Menu.Item
          key="3"
          onClick={() => {
            Nav("/Customers");
          }}
          icon={<FaUsers />}
        >
          Customers
        </Menu.Item>

        <SubMenu key="sub1" icon={<FaMoneyBillTransfer />} title="Sale">
          <Menu.Item
            key="5"
            icon={<TbTruckDelivery />}
            onClick={() => {
              Nav("/Delivery");
            }}
          >
            Delivery
          </Menu.Item>
          <Menu.Item
            key="6"
            icon={<PiHandCoinsFill />}
            onClick={() => {
              Nav("/Cash");
            }}
          >
            Cash
          </Menu.Item>
          <Menu.Item
            key="8"
            icon={<MdOutlineAccountBalanceWallet />}
            onClick={() => {
              Nav("/Account");
            }}
          >
            Account
          </Menu.Item>
          <Menu.Item
            key="9"
            icon={<RiAccountPinCircleFill />}
            onClick={() => {
              Nav("/Ikram");
            }}
          >
            Ikram
          </Menu.Item>
          <Menu.Item
            key="10"
            icon={<RiAccountPinCircleFill />}
            onClick={() => {
              Nav("/islam");
            }}
          >
            islam
          </Menu.Item>
        </SubMenu>

        <SubMenu key="sub2" icon={<RiAppsLine />} title="More">
          <Menu.Item key="11">Analytics</Menu.Item>
          <Menu.Item key="12">Team</Menu.Item>
        </SubMenu>
      </Menu>

      <div className="admin-sidebar-footer-card">
        <div className="admin-sidebar-footer-badge">New</div>
        <h4 className="admin-sidebar-footer-title">Download our mobile app</h4>
        <p className="admin-sidebar-footer-text">
          Track orders, manage customers and stay in sync on the go.
        </p>
        <button className="admin-sidebar-footer-button" type="button">
          Download
        </button>
      </div>
    </div>
  );
};

export default AdminSideBar;
