import React from "react";
import { Link, Outlet } from "react-router-dom";
import { FaHome, FaBook, FaUserPlus, FaBriefcase, FaHistory, FaChartBar, FaSearch } from "react-icons/fa";

const UserDashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>CRMS</h2>
        <p className="status">🔵 Online</p>
        <nav>
          <ul>
            <li><Link to="/candidates-dashboard"><FaHome /> Dashboard</Link></li>
            <li><Link to="/candidates-dashboard/education-form"><FaBook /> Fill Education Form</Link></li>
            <li><Link to="/candidates-dashboard/add-detail"><FaUserPlus /> Add Detail</Link></li>
            <li><Link to="/candidates-dashboard/view-vacancies"><FaBriefcase /> View Vacancy</Link></li>
            <li><Link to="/candidates-dashboard/applied-history"><FaHistory /> History of Applied Jobs</Link></li>
            <li><Link to="/candidates-dashboard/reports"><FaChartBar /> Reports</Link></li>
            <li><Link to="/candidates-dashboard/search-jobs"><FaSearch /> Search Job</Link></li>
            <li><Link to="/" className="back-button">⬅ Back to Home</Link></li> 
          </ul>
        </nav>
      </aside>

      {/* Contenu principal avec Outlet pour afficher les composants dynamiquement */}
      <main className="dashboard-content">
        <Outlet />
      </main>
    </div>
  );
};

export default UserDashboard;
