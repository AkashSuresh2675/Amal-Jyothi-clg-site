import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Loader, { PageLoader } from './components/common/Loader';
import ErrorBoundary from './components/common/ErrorBoundary';

// Lazy-loaded pages for code-splitting
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Departments = lazy(() => import('./pages/Departments'));
const Faculty = lazy(() => import('./pages/Faculty'));
const Admissions = lazy(() => import('./pages/Admissions'));
const Research = lazy(() => import('./pages/Research'));
const CampusLife = lazy(() => import('./pages/CampusLife'));
const Contact = lazy(() => import('./pages/Contact'));
const Placements = lazy(() => import('./pages/Placements'));
const NotFound = lazy(() => import('./pages/NotFound'));
const ServerError = lazy(() => import('./pages/ServerError'));

function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<PageLoader />}>
        <Routes>
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
            <Route path="/500" element={<ServerError />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
