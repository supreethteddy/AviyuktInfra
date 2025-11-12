
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import RunningProjectsSection from './components/RunningProjectsSection';
import AdvantagesSection from './components/AdvantagesSection';
import CompletedProjectsSection from './components/CompletedProjectsSection';
import ProcessSection from './components/ProcessSection';
import VideoTestimonialsSection from './components/VideoTestimonialsSection';
import LifestyleSection from './components/LifestyleSection';
import TestimonialsSection from './components/TestimonialsSection';
import BankingPartnersSection from './components/BankingPartnersSection';
import ProjectInquirySection from './components/ProjectInquirySection';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <RunningProjectsSection />
        <AdvantagesSection />
        <CompletedProjectsSection />
        <ProcessSection />
        <VideoTestimonialsSection />
        <LifestyleSection />
        <TestimonialsSection />
        <BankingPartnersSection />
        <ProjectInquirySection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
