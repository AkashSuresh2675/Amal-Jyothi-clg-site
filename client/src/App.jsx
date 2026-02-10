import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Departments from './pages/Departments';
import Faculty from './pages/Faculty';
import Admissions from './pages/Admissions';
import CampusLife from './pages/CampusLife';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/campus-life" element={<CampusLife />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
