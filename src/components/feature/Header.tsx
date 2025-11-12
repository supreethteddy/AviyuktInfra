
import { useEffect, useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isProjectsDropdownOpen, setIsProjectsDropdownOpen] = useState(false);
  const [isUtilitiesDropdownOpen, setIsUtilitiesDropdownOpen] = useState(false);
  const [logoSrcIndex, setLogoSrcIndex] = useState(0);
  const candidateLogoSources = [
    'https://res.cloudinary.com/dij4v6vtx/image/upload/v1762965770/aviyukt_Logo-removebg-preview_mkvdi3.png',
    '/logo.png',
    '/logo.jpg',
    '/logo.jpeg',
    '/logo.webp',
    '/logo.svg',
  ];
  const [hideOnScroll, setHideOnScroll] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Hide on scroll down, show on scroll up with a small threshold to prevent jitter
  useEffect(() => {
    const threshold = 10;
    let ticking = false;
    const onScroll = () => {
      const currentY = window.scrollY || 0;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (Math.abs(currentY - lastScrollY) > threshold) {
            if (currentY > lastScrollY && currentY > 80) {
              setHideOnScroll(true);
            } else {
              setHideOnScroll(false);
            }
            setLastScrollY(currentY);
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [lastScrollY]);

  return (
    <header className={`bg-white shadow-lg sticky top-0 z-50 transition-all duration-300 ease-out will-change-transform ${hideOnScroll ? 'opacity-0 -translate-y-full pointer-events-none' : 'opacity-100 translate-y-0'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            {logoSrcIndex < candidateLogoSources.length ? (
              <img 
                src={candidateLogoSources[logoSrcIndex]} 
                alt="Aviyukt Infra" 
                className="h-24"
                onError={() => setLogoSrcIndex((i) => i + 1)}
              />
            ) : (
              <span className="text-2xl font-bold text-brand-700">Aviyukt Infra</span>
            )}
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-brand-600 font-medium transition-colors">
              Home
            </a>
            
            {/* About Us Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsAboutDropdownOpen(true)}
              onMouseLeave={() => setIsAboutDropdownOpen(false)}
            >
              <button className="text-gray-700 hover:text-brand-600 font-medium transition-colors flex items-center">
                About Us
                <i className="ri-arrow-down-s-line ml-1"></i>
              </button>
              {isAboutDropdownOpen && (
                <div className="absolute top-full left-0 mt-0 w-48 bg-white shadow-lg rounded-lg py-2 z-50">
                  <a href="/about" className="block px-4 py-2 text-gray-700 hover:bg-brand-50 hover:text-brand-600">About Us</a>
                  <a href="/history" className="block px-4 py-2 text-gray-700 hover:bg-brand-50 hover:text-brand-600">History</a>
                  <a href="/mission-vision" className="block px-4 py-2 text-gray-700 hover:bg-brand-50 hover:text-brand-600">Mission & Vision</a>
                  <a href="/director-message" className="block px-4 py-2 text-gray-700 hover:bg-brand-50 hover:text-brand-600">Director Message</a>
                  <a href="/our-strength" className="block px-4 py-2 text-gray-700 hover:bg-brand-50 hover:text-brand-600">Our Strength</a>
                  <a href="/quality-policy" className="block px-4 py-2 text-gray-700 hover:bg-brand-50 hover:text-brand-600">Quality Policy</a>
                  <a href="/core-values" className="block px-4 py-2 text-gray-700 hover:bg-brand-50 hover:text-brand-600">Core Values</a>
                  <a href="/why-aviyukt" className="block px-4 py-2 text-gray-700 hover:bg-brand-50 hover:text-brand-600">Why Aviyukt</a>
                </div>
              )}
            </div>

            {/* Projects Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsProjectsDropdownOpen(true)}
              onMouseLeave={() => setIsProjectsDropdownOpen(false)}
            >
              <button className="text-gray-700 hover:text-brand-600 font-medium transition-colors flex items-center">
                Projects
                <i className="ri-arrow-down-s-line ml-1"></i>
              </button>
              {isProjectsDropdownOpen && (
                <div className="absolute top-full left-0 mt-0 w-48 bg-white shadow-lg rounded-lg py-2 z-50">
                  <a href="/running-projects" className="block px-4 py-2 text-gray-700 hover:bg-brand-50 hover:text-brand-600">Running Projects</a>
                  <a href="/completed-projects" className="block px-4 py-2 text-gray-700 hover:bg-brand-50 hover:text-brand-600">Completed Projects</a>
                  <a href="/upcoming-project" className="block px-4 py-2 text-gray-700 hover:bg-brand-50 hover:text-brand-600">Upcoming Projects</a>
                  <a href="/construction-update" className="block px-4 py-2 text-gray-700 hover:bg-brand-50 hover:text-brand-600">Construction Update</a>
                </div>
              )}
            </div>

            {/* Utilities Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsUtilitiesDropdownOpen(true)}
              onMouseLeave={() => setIsUtilitiesDropdownOpen(false)}
            >
              <button className="text-gray-700 hover:text-brand-600 font-medium transition-colors flex items-center">
                Utilities
                <i className="ri-arrow-down-s-line ml-1"></i>
              </button>
              {isUtilitiesDropdownOpen && (
                <div className="absolute top-full left-0 mt-0 w-48 bg-white shadow-lg rounded-lg py-2 z-50">
                  <a href="/emi-calculator" className="block px-4 py-2 text-gray-700 hover:bg-brand-50 hover:text-brand-600">EMI Calculator</a>
                  <a href="/download" className="block px-4 py-2 text-gray-700 hover:bg-brand-50 hover:text-brand-600">Download</a>
                  <a href="/photo-gallery" className="block px-4 py-2 text-gray-700 hover:bg-brand-50 hover:text-brand-600">Photo Gallery</a>
                </div>
              )}
            </div>

            <a href="/enquiry" className="text-gray-700 hover:text-brand-600 font-medium transition-colors">
              Enquiry
            </a>
            <a href="/contact" className="text-gray-700 hover:text-brand-600 font-medium transition-colors">
              Contact Us
            </a>
          </nav>

          {/* Book Now Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="bg-brand-600 text-white px-6 py-2 rounded-lg hover:bg-brand-700 transition-colors font-medium whitespace-nowrap cursor-pointer">
              <i className="ri-mail-line mr-2"></i>
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-gray-700 hover:text-brand-600 cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`text-2xl ${isMenuOpen ? 'ri-close-line' : 'ri-menu-line'}`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <a href="/" className="text-gray-700 hover:text-brand-600 font-medium">Home</a>
              <a href="/about" className="text-gray-700 hover:text-brand-600 font-medium">About Us</a>
              <a href="/running-projects" className="text-gray-700 hover:text-brand-600 font-medium">Projects</a>
              <a href="/enquiry" className="text-gray-700 hover:text-brand-600 font-medium">Enquiry</a>
              <a href="/contact" className="text-gray-700 hover:text-brand-600 font-medium">Contact Us</a>
              <button className="bg-brand-600 text-white px-6 py-2 rounded-lg hover:bg-brand-700 transition-colors font-medium whitespace-nowrap cursor-pointer w-fit">
                <i className="ri-mail-line mr-2"></i>
                Book Now
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
