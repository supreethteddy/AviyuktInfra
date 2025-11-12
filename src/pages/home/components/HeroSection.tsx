
import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video 
          className="w-full h-full object-cover scale-105 transition-transform duration-[20s] ease-linear"
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src="https://nutanconstruction.com/public/assets/assets_web/video/nutan22.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-brand-900/40"></div>
      </div>

      {/* Floating Geometric Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 border border-brand-400/30 rotate-45 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 border border-white/20 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-brand-500/20 rotate-12 animate-spin" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-20 right-40 w-24 h-24 border-2 border-brand-300/20 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            <span className={`block text-white/90 transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              New Homes
            </span>
            <span className={`block text-white font-extrabold transform transition-all duration-1000 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              Ready To
            </span>
            <span className={`block text-brand-400 font-light italic transform transition-all duration-1000 delay-500 hover:scale-105 transition-transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              Move Into
            </span>
          </h1>
          <p className={`text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed transform transition-all duration-1000 delay-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            We Prepare home with furniture and decorations so you can move in right away.
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center transform transition-all duration-1000 delay-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <button className="group bg-brand-600 text-white px-8 py-4 rounded-lg hover:bg-brand-700 transition-all duration-300 font-semibold text-lg whitespace-nowrap cursor-pointer transform hover:scale-105 hover:shadow-2xl hover:shadow-brand-500/25">
              <i className="ri-home-4-line mr-2 group-hover:animate-bounce"></i>
              <span className="relative">
                Explore Projects
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></span>
              </span>
            </button>
            <button className="group border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold text-lg whitespace-nowrap cursor-pointer transform hover:scale-105 hover:shadow-2xl">
              <i className="ri-phone-line mr-2 group-hover:animate-pulse"></i>
              <span className="relative">
                Contact Us
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-900/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></span>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white">
        <div className="flex flex-col items-center animate-bounce">
          <div className="w-6 h-10 border-2 border-white/60 rounded-full mb-2 relative">
            <div className="w-1 h-3 bg-white/80 rounded-full absolute top-2 left-1/2 transform -translate-x-1/2 animate-pulse"></div>
          </div>
          <i className="ri-arrow-down-line text-xl animate-pulse"></i>
        </div>
      </div>

      {/* Particle Effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-brand-400/40 rounded-full animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
