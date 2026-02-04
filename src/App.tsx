import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { FloatingContact } from './components/FloatingContact';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { LeadershipPage } from './pages/LeadershipPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { LifeAtCompanyPage } from './pages/LifeAtCompanyPage';
import { ContactPage } from './pages/ContactPage';
import { CareersPage } from './pages/CareersPage';
import { ChannelPartnersPage } from './pages/ChannelPartnersPage';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { BlogPage } from './pages/BlogPage';
import { BlogDetails } from "./pages/BlogDetails";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Header />

        {/* ADD GLOBAL PAGE TOP PADDING HERE */}
        <main className="flex-grow pt-20   md:pt-24 bg-gray-800">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/leadership" element={<LeadershipPage />} />
            <Route path="/projects/:status?" element={<ProjectsPage />} />
            <Route path="/blog/:id" element={<BlogDetails />} />
            <Route path="/project/:id" element={<ProjectDetailPage />} />
            <Route path="/life" element={<LifeAtCompanyPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/channel-partners" element={<ChannelPartnersPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/blog" element={<BlogPage />} />
          </Routes>
        </main>

        <Footer />
        <FloatingContact />
      </div>
    </Router>
  );
}

export default App;
