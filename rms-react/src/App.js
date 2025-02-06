import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import SignUp from "./components/auth/SignUp";
import SignIn from "./components/auth/SignIn";

// ✅ Imports pour le tableau de bord administrateur
import DashboardAdmin from "./components/Admin/DashboardAdmin";
import Reports from "./components/Admin/Reports";
import CompanyList from "./components/Admin/CompanyList";
import UserList from "./components/Admin/UserList";
import PagesManagement from "./components/Admin/PagesManagement";
import TotalRegistere from "./components/Admin/TotalRegistere";

// ✅ Imports pour le tableau de bord candidat
import UserDashboard from "./components/Candidat/UserDashboard";
import EducationForm from "./components/Candidat/EducationForm";
import AddDetail from "./components/Candidat/AddDetail";
import ViewVacancies from "./components/Candidat/ViewVacancies";
import AppliedHistory from "./components/Candidat/AppliedHistory";
import CandidateReports from "./components/Candidat/Reports";
import SearchJobs from "./components/Candidat/SearchJob";

// ✅ Imports pour le tableau de bord recruteur
import RecruiterDashboard from "./components/Recreteur/RecruiterDashboard";
import OffresPubliees from './components/Recreteur/OffresPubliees';
import PublierOffre from './components/Recreteur/PublierOffre';
import Profile from './components/Recreteur/Profile';
import SearchCandidates from './components/Recreteur/SearchCandidates';

import "./assets/style/auth/auth.scss";

const App = () => {
  return (
    <Routes>
      {/* ✅ Page principale */}
      <Route path="/" element={<Main />} />

      {/* ✅ Authentification */}
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/sign-in" element={<SignIn />} />

      {/* ✅ Tableau de bord administrateur avec Outlet pour une navigation fluide */}
      <Route path="/admin-dashboard" element={<DashboardAdmin />}>
        <Route index element={<h2>Bienvenue sur le tableau de bord administrateur</h2>} />
        <Route path="total-registered" element={<TotalRegistere />} />
        <Route path="company" element={<CompanyList />} />
        <Route path="total-registered-users" element={<UserList />} />
        <Route path="pages" element={<PagesManagement />} />
        <Route path="reports" element={<Reports />} />
      </Route>

      {/* ✅ Tableau de bord candidat avec Outlet pour une navigation fluide */}
      <Route path="/candidates-dashboard" element={<UserDashboard />}>
        <Route index element={<h2>Bienvenue sur votre tableau de bord</h2>} />
        <Route path="education-form" element={<EducationForm />} />
        <Route path="add-detail" element={<AddDetail />} />
        <Route path="view-vacancies" element={<ViewVacancies />} />
        <Route path="applied-history" element={<AppliedHistory />} />
        <Route path="reports" element={<CandidateReports />} />
        <Route path="search-jobs" element={<SearchJobs />} />
      </Route>

      {/* ✅ Tableau de bord recruteur avec Outlet pour une navigation fluide */}
      <Route path="/recruiter-dashboard" element={<RecruiterDashboard />}>
      <Route index element={<h2>Bienvenue sur le tableau de bord recruteur</h2>} />
      <Route path="/recruiter-dashboard/offres-publiées" element={<OffresPubliees />} />
      <Route path="/recruiter-dashboard/publier-offre" element={<PublierOffre />} />
      <Route path="/recruiter-dashboard/profile" element={<Profile />} />
      <Route path="/recruiter-dashboard/search-candidates" element={<SearchCandidates />} />
      </Route>
    </Routes>
  );
};

export default App;
