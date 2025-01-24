import React, { useState, useEffect, useRef } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/SideBar/SideBar";
import Footer from "./components/Footer/Footer";
import PageTitle from "./components/PageTitle/PageTitle";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import DashboardCards from "./components/Dashboard/DashboardCards.jsx";
import LeaveForm from "./components/LeaveForm/LeaveForm.jsx";
import IssueForm from "./components/IssueForm/IssueForm.jsx";
import OutingForm from "./components/OutingForm/OutingForm.jsx";
import OutingList from "./components/OutingList/OutingList.jsx";
import ComplaintForm from "./components/ComplaintForm/ComplaintForm.jsx";
import ContactSection from "./components/ContactSection/ContactSection.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Login from "./components/Login/Login.jsx";

function App() {
const [token,setToken]=useState("")

  const [breadcrumb, setBreadcrumb] = useState("Dashboard");
  const [subBreadcrumb, setSubBreadcrumb] = useState("Home");
  const [isSidebarActive, setSidebarActive] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const sidebarRef = useRef(null);
  const togglerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      const mobileView = window.innerWidth <= 768;
      setIsMobile(mobileView);
      setSidebarActive(!mobileView); // Sidebar active on desktop by default
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const handleClickOutside = (e) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target) &&
        togglerRef.current &&
        !togglerRef.current.contains(e.target)
      ) {
        setSidebarActive(false); // Close sidebar on outside click
      }
    };

    if (isMobile) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  useEffect(() => {
    const path = location.pathname;
    if (path.includes("leave")) {
      if (path.includes("apply")) {
        setBreadcrumb("Apply Leave");
        setSubBreadcrumb("Leaves / Apply Leave");
      } else if (path.includes("all")) {
        setBreadcrumb("All Leaves");
        setSubBreadcrumb("Leaves / All Leaves");
      } else {
        setBreadcrumb("Leaves");
        setSubBreadcrumb("Leaves");
      }
    } else if (path.includes("outing")) {
      if (path.includes("apply")) {
        setBreadcrumb("Apply Outing");
        setSubBreadcrumb("Outings / Apply Outing");
      } else if (path.includes("all")) {
        setBreadcrumb("All Outings");
        setSubBreadcrumb("Outings / All Outings");
      } else {
        setBreadcrumb("Outings");
        setSubBreadcrumb("Outings");
      }
    } else if (path.includes("complaints")) {
      setBreadcrumb("Complaints");
      setSubBreadcrumb("Complaints");
    } else if (path.includes("contact")) {
      setBreadcrumb("Contact");
      setSubBreadcrumb("Contact");
    } else if (path.includes("profile")) {
      setBreadcrumb("Profile");
      setSubBreadcrumb("Profile");
    } else {
      setBreadcrumb("Dashboard");
      setSubBreadcrumb("Dashboard");
    }
  }, [location]);

  const toggleSidebar = () => {
    setSidebarActive(!isSidebarActive);
  };

  const handleHomeClick = () => {
    // Navigate to the home/dashboard page
  };

  return (
    <>
      {token === "" ? (
        <Login setToken={setToken} />
      ) : (
        <div
          className={`App ${isSidebarActive ? "sidebar-active" : "sidebar-inactive"}`}
        >
          <Header toggleSidebar={toggleSidebar} togglerRef={togglerRef} setToken={setToken} />
          <div className="d-flex flex-grow-1">
            <Sidebar
              isOpen={isSidebarActive}
              toggleSidebar={toggleSidebar}
              isMobile={isMobile}
              sidebarRef={sidebarRef}
            />
            <main className="main-content flex-grow-1">
              <PageTitle
                title={breadcrumb}
                subTitle={subBreadcrumb}
                onHomeClick={handleHomeClick}
              />
              <Routes>
                <Route path="/" element={<DashboardCards />} />
                <Route path="/dashboard" element={<DashboardCards />} />
                <Route path="/leave/apply" element={<LeaveForm />} />
                <Route path="/leave/all" element={<IssueForm />} />
                <Route path="/outing/apply" element={<OutingForm />} />
                <Route path="/outing/all" element={<OutingList />} />
                <Route path="/complaints" element={<ComplaintForm />} />
                <Route path="/contact" element={<ContactSection />} />
                <Route path="/profile" element={<Profile />} />
              </Routes>
            </main>
          </div>
          <Footer />
          <ScrollToTop />
        </div>
      )}
    </>
  );
}

export default App;
