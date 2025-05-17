import React, { useState } from "react";
import AdminSideBar from "../Navigation/AdminSideBar";
import TopBar from "../Navigation/TopBar";
import { Route, Routes } from "react-router-dom";
import DashBoard from "./DashBoard";
import Content from "../../assets/Content";

const LandingPage = () => {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);

    let allRouts = Content.Pages;

    return (
        <div style={{ display: "flex", height: "100vh" }}>
            {/* Sidebar */}
            <div
                style={{
                    width: isSidebarCollapsed ? "80px" : "250px",
                    background: "#fff",
                    transition: "width 0.3s ease",
                    overflow: "hidden",
                    // padding: "16px",
                    boxShadow: "2px 0 5px rgba(0,0,0,0.1)",
                }}
            >
                <AdminSideBar collapsed={isSidebarCollapsed} setCollapsed={setIsSidebarCollapsed} />
            </div>

            {/* Main Body */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                {/* Top Bar */}
                <TopBar collapsed={isSidebarCollapsed} setCollapsed={setIsSidebarCollapsed} />

                {/* Main Content */}
                <div
                    style={{
                        flex: 1,
                        background: "#fff",
                        padding: "16px",
                        overflowY: "auto",
                    }}
                >
                    <Routes>
                        <Route path="/" element={<DashBoard />} />
                        {allRouts.map((elem, index) => {
                            return (<Route path={elem.route} element={elem.component} />)
                        })}
                    </Routes>
                </div>

                {/* Footer */}
                <div
                    style={{
                        background: "#f4f4f4",
                        padding: "10px",
                        textAlign: "center",
                        boxShadow: "0 -2px 5px rgba(0,0,0,0.1)",
                    }}
                >
                    <p style={{ margin: 0 }}>© 2024 Your Company. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
