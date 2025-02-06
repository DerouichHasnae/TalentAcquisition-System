import React from "react";
import { Link, Outlet } from "react-router-dom";
import { FaHome, FaBriefcase, FaUsers , FaChartBar, FaSearch } from "react-icons/fa";

const RecruiterDashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>CRMS</h2>
        <p className="status">🔵 Online</p>
        <nav>
          <ul>
            <li><Link to="/recruiter-dashboard"><FaHome /> Dashboard</Link></li>
            <li><Link to="/recruiter-dashboard/offres-publiées"><FaBriefcase />Les offres publiées</Link></li>
            <li><Link to="/recruiter-dashboard/publier-offre"><FaUsers /> Publier une offre</Link></li>
            <li><Link to="/recruiter-dashboard/profile"><FaChartBar />Profile</Link></li>
            <li><Link to="/recruiter-dashboard/search-candidates"><FaSearch /> Search Candidates</Link></li>
            <li><Link to="/" className="back-button">⬅ Logout</Link></li>
          </ul>
        </nav>
      </aside>

      {/* Main Content with Outlet for dynamic component rendering */}
      <main className="dashboard-content">
        <Outlet />
      </main>
    </div>
  );
};

export default RecruiterDashboard;
