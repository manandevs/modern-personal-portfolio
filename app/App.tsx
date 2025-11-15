
import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

import Home from '../pages/Home';
import Services from '../pages/Services';
import Projects from '../pages/Projects';
import MyProcess from '../pages/MyProcess';
import AboutMe from '../pages/AboutMe';
import Notes from '../pages/Notes';
import NoteDetail from '../pages/NoteDetail';
import Privacy from '../pages/Privacy';
import Terms from '../pages/Terms';

// A helper component to scroll to the top of the page on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <HashRouter>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/process" element={<MyProcess />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/notes/:slug" element={<NoteDetail />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </main>
      <Footer />
    </HashRouter>
  );
}
