import React, { useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

function Sidebar({ isOpen, toggleSidebar, isMobile, sidebarRef }) {
  const navigate = useNavigate();

  useEffect(() => {
    const sidebarElement = document.getElementById("sidebar");
    if (isOpen) {
      sidebarElement.classList.add("active");
    } else {
      sidebarElement.classList.remove("active");
    }
  }, [isOpen]);

  const handleItemClick = (path) => {
    navigate(path); // Navigate to the selected route
    if (isMobile) toggleSidebar(); // Automatically close sidebar on mobile
  };

  return (
    <aside
      id="sidebar"
      ref={sidebarRef} // Attach the ref here
      className={`sidebar ${isOpen ? "active" : ""}`}
    >
      <ul className="sidebar-nav" id="sidebar-nav">
        {/* Dashboard */}
        <li className="nav-item">
          <NavLink
            to="/dashboard"
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            onClick={() => handleItemClick("/dashboard")}
          >
            <i className="bi bi-grid"></i>
            <span>Dashboard</span>
          </NavLink>
        </li>

        {/* Leaves Section */}
        <li className="nav-item">
          <a className="nav-link collapsed" data-bs-target="#leaves-nav" data-bs-toggle="collapse" href="#">
            <i className="bi bi-calendar"></i>
            <span>Leaves</span>
            <i className="bi bi-chevron-down ms-auto"></i>
          </a>
          <ul id="leaves-nav" className="nav-content collapse" data-bs-parent="#sidebar-nav">
            <li>
              <NavLink
                to="/leave/apply"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={() => handleItemClick("/leave/apply")}
              >
                <i className="bi bi-circle"></i>
                <span>Apply Leave</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/leave/all"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={() => handleItemClick("/leave/all")}
              >
                <i className="bi bi-circle"></i>
                <span>All Leaves</span>
              </NavLink>
            </li>
          </ul>
        </li>

        {/* Outings Section */}
        <li className="nav-item">
          <a className="nav-link collapsed" data-bs-target="#outings-nav" data-bs-toggle="collapse" href="#">
            <i className="bi bi-signpost"></i>
            <span>Outings</span>
            <i className="bi bi-chevron-down ms-auto"></i>
          </a>
          <ul id="outings-nav" className="nav-content collapse" data-bs-parent="#sidebar-nav">
            <li>
              <NavLink
                to="/outing/apply"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={() => handleItemClick("/outing/apply")}
              >
                <i className="bi bi-circle"></i>
                <span>Apply Outing</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/outing/all"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={() => handleItemClick("/outing/all")}
              >
                <i className="bi bi-circle"></i>
                <span>All Outings</span>
              </NavLink>
            </li>
          </ul>
        </li>

        {/* Complaints */}
        <li className="nav-item">
          <NavLink
            to="/complaints"
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            onClick={() => handleItemClick("/complaints")}
          >
            <i className="bi bi-flag"></i>
            <span>Complaints</span>
          </NavLink>
        </li>

        {/* Contact */}
        <li className="nav-item">
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            onClick={() => handleItemClick("/contact")}
          >
            <i className="bi bi-envelope"></i>
            <span>Contact</span>
          </NavLink>
        </li>

        {/* Profile */}
        <li className="nav-item">
          <NavLink
            to="/profile"
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            onClick={() => handleItemClick("/profile")}
          >
            <i className="bi bi-person"></i>
            <span>Profile</span>
          </NavLink>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
