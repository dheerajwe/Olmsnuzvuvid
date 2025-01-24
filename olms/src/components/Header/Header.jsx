// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import dj from '../../assets/dj.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is included
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Ensure Bootstrap JS is included

// eslint-disable-next-line react/prop-types
function Header({ toggleSidebar,togglerRef,setToken }) {
  return (
    <header id="header" className="header fixed-top d-flex align-items-center">
      <div className="d-flex align-items-center justify-content-between">
        <a href="index.html" className="logo d-flex align-items-center">
          <img src={logo} alt="Logo" style={{ width: '30px' }} />     
          <span className="d-none d-lg-block">OLMS</span>
        </a>
        <button
        ref={togglerRef}
          className="bi bi-list toggle-sidebar-btn"
          type="button"
          onClick={toggleSidebar}
        >
        </button>
      </div>

      <nav className="header-nav ms-auto">
        <ul className="d-flex align-items-center">
          <li className="nav-item dropdown pe-3">
            <a className="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
              <img src={dj} alt="Profile" className="rounded-circle" />
              <span className="d-none d-md-block dropdown-toggle ps-2">M.Dheeraj</span>
            </a>
            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
              <li className="dropdown-header">
                <h6>M.Dheeraj</h6>
                <span>Web Designer</span>
              </li>
              <li><hr className="dropdown-divider" /></li>
              <li>
                <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
                  <i className="bi bi-person"></i>
                  <span>My Profile</span>
                </a>
              </li>
              <li><hr className="dropdown-divider" /></li>
              <li>
                <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
                  <i className="bi bi-gear"></i>
                  <span>Account Settings</span>
                </a>
              </li>
              <li><hr className="dropdown-divider" /></li>
              <li>
                <a className="dropdown-item d-flex align-items-center" href="pages-faq.html">
                  <i className="bi bi-question-circle"></i>
                  <span>Need Help?</span>
                </a>
              </li>
              <li><hr className="dropdown-divider" /></li>
              <li>
                <a className="dropdown-item d-flex align-items-center" href="#"  onClick={()=>setToken("")}>
                  <i className="bi bi-box-arrow-right"></i>
                  <span>Sign Out</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
