
import { useState, useEffect, useRef } from 'react';

const RunningProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [projects, setProjects] = useState<Array<{
    id: number;
    name: string;
    location: string;
    image: string;
    logo: string;
    detailsUrl?: string;
  }>>([
    {
      id: 1,
      name: "Lotus Elegance",
      location: "Gola Road, Near St. Karen's School, Patna",
      image: "https://nutanconstruction.com/public/assets/assets_web/images/rp1.jpg",
      logo: "https://nutanconstruction.com/public/assets/assets_web/images/le1.png"
    },
    {
      id: 2,
      name: "CRESCENT",
      location: "Bypass Road, Anishabad, Patna",
      image: "https://nutanconstruction.com/public/assets/assets_web/images/rp2.jpg",
      logo: "https://nutanconstruction.com/public/assets/assets_web/images/cre1.png"
    },
    {
      id: 3,
      name: "LOTUS GARDEN",
      location: "Near T- Point, Gola Road, Patna",
      image: "https://nutanconstruction.com/public/assets/assets_web/images/rp3.jpg",
      logo: "https://nutanconstruction.com/public/assets/assets_web/images/lg1.png"
    },
    {
      id: 4,
      name: "LOTUS PLAZA",
      location: "Near T- Point, Gola Road, Patna",
      image: "https://nutanconstruction.com/public/assets/assets_web/images/rp4.jpg",
      logo: "https://nutanconstruction.com/public/assets/assets_web/images/lp101.png"
    }
  ]);

  // Load projects from public JSON so content can be edited without a rebuild
  useEffect(() => {
    const controller = new AbortController();
    fetch('/data/running-projects.json', { signal: controller.signal })
      .then((res) => res.ok ? res.json() : Promise.reject(res.statusText))
      .then((data) => {
        if (Array.isArray(data) && data.length) {
          setProjects(data);
        }
      })
      .catch(() => {
        // silently keep the fallback data
      });
    return () => controller.abort();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-40 h-40 border border-brand-200 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-brand-100 rounded-full animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 relative">
            RUNNING PROJECTS
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-brand-600 transition-all duration-1000 delay-500" style={{ width: isVisible ? '80px' : '0' }}></span>
          </h2>
          <div className="w-20 h-1 bg-brand-600 mx-auto opacity-0 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'} hover:scale-[1.02]`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/60 transition-all duration-500"></div>
                
                {/* Animated Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-brand-400/50 transition-all duration-500 rounded-2xl"></div>
                
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-all duration-500 group-hover:translate-y-[-10px]">
                  <div className="mb-4 transform transition-all duration-500 group-hover:scale-110">
                    <img 
                      src={project.logo} 
                      alt={project.name}
                      className="h-12 object-contain filter brightness-0 invert"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2 transform transition-all duration-300 group-hover:text-brand-300">{project.name}</h3>
                  <p className="text-gray-200 text-sm flex items-center">
                    <i className="ri-map-pin-line mr-2 text-brand-400"></i>
                    {project.location}
                  </p>
                </div>

                {/* Hover Overlay with Animated Button */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-600/95 via-brand-700/90 to-purple-600/85 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                  <button className="bg-white text-brand-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 whitespace-nowrap cursor-pointer transform scale-75 group-hover:scale-100 shadow-2xl hover:shadow-white/25">
                    <i className="ri-eye-line mr-2"></i>
                    View Details
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] hover:translate-x-[200%] transition-transform duration-700"></span>
                  </button>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-brand-400/60 opacity-0 group-hover:opacity-100 transition-all duration-500 transform rotate-45"></div>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center mt-12 transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <a 
            href="/running-projects" 
            className="group inline-flex items-center bg-gradient-to-r from-brand-600 to-brand-700 text-white px-10 py-4 rounded-full hover:from-brand-700 hover:to-brand-800 transition-all duration-300 font-semibold cursor-pointer transform hover:scale-105 shadow-lg hover:shadow-2xl hover:shadow-brand-500/25"
          >
            <span className="relative">
              View All Projects
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></span>
            </span>
            <i className="ri-arrow-right-line ml-2 group-hover:translate-x-2 transition-transform duration-300"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default RunningProjectsSection;
