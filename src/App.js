import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import TeamPage from './pages/TeamPage';
import ProjectsPage from './pages/ProjectsPage';
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router basename="/Depth">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            {/* <Route path="/gallery" element={<GalleryPage />} /> */}
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            {/* Other routes will be added as their pages are developed */}
            {/* <Route path="/commissions" element={<CommissionsPage />} /> */}
            {/* <Route path="/blog" element={<BlogPage />} /> */}
            {/* <Route path="/testimonials" element={<TestimonialsPage />} /> */}
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
