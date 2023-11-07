import './App.css';
import { Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
import Home from './roots/Home';
import Courses from './roots/Courses';
import About from './roots/About';
import Contact from './roots/Contact';
import WebCourses from './roots/WebCourse';
import CyberSecurity from './roots/CyberSecurity';
import Mobile from './roots/Mobile';
// import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/avram_academy" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/web-course" element={<WebCourses />} />
        <Route path="/cybersecurity-course" element={<CyberSecurity />} />
        <Route path="/mobile-course" element={<Mobile />} />
      </Routes>
    </div>
  );
}

export default App;
