// Layout.jsx
import React from "react";
import "../styles/Layout.css";
import {adminMenu, userMenu } from "../data/data";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Badge, message } from 'antd';

const Layout = ({ children }) => {
  const user = useSelector((state) => state.user); // Correct access to the user state
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    message.success("Logout Successfully");
    navigate("/login");
  };

  const SidebarMenu = user?.isAdmin ? adminMenu : userMenu;

  return (
    <div className="main">
      <div className="layout">
        <div className="sidebar">
          <div className="logo">
            <h5>DOC APP</h5>
            <hr />
          </div>
          <div className="menu">
            {SidebarMenu.map((menu, index) => {
              const isActive = location.pathname === menu.path;
              return (
                <div key={index} className={`menu-item ${isActive && "active"}`}>
                  <i className={menu.icon}></i>
                  <Link to={menu.path}>{menu.name}</Link>
                </div>
              );
            })}
            <div className="menu-item" onClick={handleLogout}>
              <i className="fa-solid fa-right-from-bracket"></i>
              <span>Logout</span>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="header">
            <div className="header-content">
              <Badge count={1}>
              {/* notification.length */}
              <i className="fa-solid fa-bell"></i>
              </Badge>
              <Link to="/profile">{user?.name}</Link>
            </div>
          </div>
          <div className="body">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
