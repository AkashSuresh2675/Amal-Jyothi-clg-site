import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Departments from './pages/Departments';
import Faculty from './pages/Faculty';
import Admissions from './pages/Admissions';
import Research from './pages/Research';
import CampusLife from './pages/CampusLife';
import Contact from './pages/Contact';
import Placements from './pages/Placements';
import Academics from './pages/Academics';
import NotFound from './pages/NotFound';

// Admin Imports
import Login from './pages/admin/Login';
import Dashboard from './pages/admin/Dashboard';
import ManageNews from './pages/admin/ManageNews';
import ManageEvents from './pages/admin/ManageEvents';
import ManageDepartments from './pages/admin/ManageDepartments';
import ManageFaculty from './pages/admin/ManageFaculty';
import AdminLayout from './layouts/AdminLayout';
import ProtectedRoute from './components/ProtectedRoute';

// Scroll to top
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Public Routes */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/research" element={<Research />} />
          <Route path="/campus-life" element={<CampusLife />} />
          <Route path="/placements" element={<Placements />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/academics" element={<Academics />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin/login" element={<Login />} />

        <Route path="/admin" element={<ProtectedRoute />}>
          <Route element={<AdminLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="news" element={<ManageNews />} />
            <Route path="events" element={<ManageEvents />} />
            <Route path="departments" element={<ManageDepartments />} />
            <Route path="faculty" element={<ManageFaculty />} />
          </Route>
        </Route>

        {/* 404 Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
