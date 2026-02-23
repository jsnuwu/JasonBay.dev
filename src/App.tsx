import { useState, useEffect } from 'react';
import './styles/App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import SocialCard from './components/SocialCard';

function AppWrapper() {
  const location = useLocation();
  const isHero = location.pathname === '/'; 

const [darkMode, setDarkMode] = useState(() => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) return savedTheme === 'dark';
  return true; 
});

useEffect(() => {
  const theme = darkMode ? 'dark' : 'light';
  document.body.className = theme;
  localStorage.setItem('theme', theme);
}, [darkMode]);


  return (
    <div className={`app-container ${isHero ? 'hero-page' : ''}`}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode}/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <SocialCard />
    </div>
  );
}

function App() {
  return (
    <Router  basename="/JasonBay.dev">
      <AppWrapper />
    </Router>
  );
}

export default App;
