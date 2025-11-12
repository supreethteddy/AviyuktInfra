
import { useState, useEffect } from 'react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const footer = document.querySelector('footer');
    if (footer) {
      observer.observe(footer);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      {/* Animated Background Decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-32 h-32 rounded-full border border-white/20 animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 rounded-full border border-white/20 animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-brand-400/30 rotate-45 animate-spin" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-1/3 right-1/3 w-20 h-20 rounded-full bg-gradient-to-r from-brand-500/20 to-purple-500/20 animate-ping" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-brand-400/30 rounded-full animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Us */}
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h4 className="text-xl font-semibold mb-6 text-white relative">
              Contact Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-400 transition-all duration-1000 delay-300" style={{ width: isVisible ? '60px' : '0' }}></span>
            </h4>
            <div className="space-y-4">
              <div className="group flex items-start space-x-3 hover:translate-x-2 transition-transform duration-300">
                <i className="ri-map-pin-line text-brand-400 mt-1 flex-shrink-0 group-hover:animate-bounce"></i>
                <p className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                  Aviyukt infra developers, rps more, Patna, India 801503
                </p>
              </div>
              <div className="group flex items-center space-x-3 hover:translate-x-2 transition-transform duration-300">
                <i className="ri-phone-line text-brand-400 flex-shrink-0 group-hover:animate-pulse"></i>
                <a href="tel:+919999910771" className="text-gray-300 hover:text-white transition-colors group-hover:text-brand-300">
                  +91 9999910771
                </a>
              </div>
              <div className="group flex items-center space-x-3 hover:translate-x-2 transition-transform duration-300">
                <i className="ri-mail-line text-brand-400 flex-shrink-0 group-hover:animate-bounce"></i>
                <a href="mailto:info@aviyuktinfra.com" className="text-gray-300 hover:text-white transition-colors group-hover:text-brand-300">
                  info@aviyuktinfra.com
                </a>
              </div>
            </div>
            <a 
              href="https://www.google.com/maps/place/Aviyukt+infra+developer/@25.6165459,85.0470498,17z/data=!3m1!4b1!4m6!3m5!1s0x39ed57bad9b738c3:0xff847cf0d6293cea!8m2!3d25.6165411!4d85.0496247!16s%2Fg%2F11srrwklc9?hl=en-US&entry=ttu&g_ep=EgoyMDI1MTEwOS4wIKXMDSoASAFQAw%3D%3D" 
              target="_blank" 
              rel="nofollow"
              className="group inline-flex items-center mt-4 text-brand-400 hover:text-brand-300 transition-all duration-300 font-medium cursor-pointer hover:translate-x-2"
            >
              GET DIRECTIONS
              <i className="ri-arrow-right-line ml-2 group-hover:translate-x-1 transition-transform duration-300"></i>
            </a>
          </div>

          {/* Our Links */}
          <div className={`transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h4 className="text-xl font-semibold mb-6 text-white relative">
              Our Links
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-400 transition-all duration-1000 delay-500" style={{ width: isVisible ? '60px' : '0' }}></span>
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/", text: "Home" },
                { href: "/about", text: "About Us" },
                { href: "/history", text: "History" },
                { href: "/quality-policy", text: "Quality Policy" },
                { href: "/career", text: "Career" },
                { href: "/contact", text: "Contact" }
              ].map((link, index) => (
                <li key={index} className="group">
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block relative"
                  >
                    <span className="relative">
                      {link.text}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-400 transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div className={`transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h4 className="text-xl font-semibold mb-6 text-white relative">
              Projects
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-400 transition-all duration-1000 delay-700" style={{ width: isVisible ? '60px' : '0' }}></span>
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/running-projects", text: "Running Projects" },
                { href: "/completed-projects", text: "Completed Projects" },
                { href: "/upcoming-project", text: "Upcoming Projects" },
                { href: "/enquiry", text: "Enquiry" }
              ].map((link, index) => (
                <li key={index} className="group">
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block relative"
                  >
                    <span className="relative">
                      {link.text}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-400 transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About Company */}
          <div className={`transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h4 className="text-xl font-semibold mb-6 text-white relative">
              About Company
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-400 transition-all duration-1000 delay-900" style={{ width: isVisible ? '60px' : '0' }}></span>
            </h4>
            <p className="text-gray-300 text-sm leading-relaxed mb-6 hover:text-white transition-colors duration-300">
              Aviyukt Infra is a professional real estate developer focused on quality, trust,
              and customer-first delivery across residential and commercial projects.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                target="_blank" 
                rel="nofollow"
                className="group w-12 h-12 bg-gradient-to-r from-brand-600 to-brand-700 rounded-full flex items-center justify-center hover:from-brand-700 hover:to-brand-800 transition-all duration-300 cursor-pointer transform hover:scale-110 hover:rotate-12 shadow-lg hover:shadow-brand-500/50"
              >
                <i className="ri-facebook-fill text-white group-hover:animate-pulse"></i>
              </a>
              <a 
                href="https://www.instagram.com/aviyuktinfradevelopers" 
                target="_blank" 
                rel="nofollow"
                className="group w-12 h-12 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full flex items-center justify-center hover:from-pink-700 hover:to-purple-700 transition-all duration-300 cursor-pointer transform hover:scale-110 hover:rotate-12 shadow-lg hover:shadow-pink-500/50"
              >
                <i className="ri-instagram-fill text-white group-hover:animate-pulse"></i>
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="nofollow"
                className="group w-12 h-12 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center hover:from-red-700 hover:to-red-800 transition-all duration-300 cursor-pointer transform hover:scale-110 hover:rotate-12 shadow-lg hover:shadow-red-500/50"
              >
                <i className="ri-youtube-fill text-white group-hover:animate-pulse"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`border-t border-gray-700 mt-12 pt-8 transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm hover:text-white transition-colors duration-300">
              Copyright © 2024. <span className="text-brand-400 hover:text-brand-300 transition-colors duration-300">Aviyukt Infra</span> All rights reserved.
            </p>
            <a 
              href="https://readdy.ai/?origin=logo" 
              className="text-gray-400 hover:text-white text-sm transition-all duration-300 mt-4 md:mt-0 cursor-pointer hover:translate-x-1"
            >
              Website Builder
            </a>
          </div>
        </div>
      </div>

      {/* Enhanced Floating Action Buttons */}
      <a 
        href="#"
        onClick={(e) => e.preventDefault()}
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-2xl hover:shadow-green-500/50 hover:from-green-600 hover:to-green-700 transition-all duration-300 z-50 cursor-default transform hover:scale-110 animate-pulse"
        aria-disabled="true"
        role="button"
      >
        <i className="ri-whatsapp-fill text-white text-2xl"></i>
        <div className="absolute inset-0 rounded-full border-2 border-green-400/50 animate-ping"></div>
      </a>
      
      <a 
        href="#"
        onClick={(e) => e.preventDefault()}
        className="fixed bottom-28 right-6 w-16 h-16 bg-gradient-to-r from-brand-500 to-brand-600 rounded-full flex items-center justify-center shadow-2xl hover:shadow-brand-500/50 hover:from-brand-600 hover:to-brand-700 transition-all duration-300 z-50 cursor-default transform hover:scale-110 animate-bounce"
        aria-disabled="true"
        role="button"
        style={{ animationDelay: '1s' }}
      >
        <i className="ri-phone-fill text-white text-2xl"></i>
        <div className="absolute inset-0 rounded-full border-2 border-brand-400/50 animate-ping" style={{ animationDelay: '0.5s' }}></div>
      </a>
    </footer>
  );
};

export default Footer;
