
import { useState, useEffect, useRef } from 'react';
import AnimatedCounter from '../../../components/base/AnimatedCounter';

const ExperienceSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  const stats = [
    {
      number: 30,
      suffix: '+',
      label: 'Years of Experience',
      icon: 'ri-calendar-line',
      color: 'from-brand-500 to-brand-600'
    },
    {
      number: 500,
      suffix: '+',
      label: 'Projects Completed',
      icon: 'ri-building-line',
      color: 'from-green-500 to-green-600'
    },
    {
      number: 1000,
      suffix: '+',
      label: 'Happy Families',
      icon: 'ri-home-heart-line',
      color: 'from-purple-500 to-purple-600'
    },
    {
      number: 50,
      suffix: '+',
      label: 'Expert Team',
      icon: 'ri-team-line',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-900 via-brand-900 to-gray-900 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 border border-white/20 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-r from-brand-500/20 to-purple-500/20 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 border border-white/10 rounded-full animate-ping" style={{ animationDuration: '4s' }}></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 relative">
            <span className="bg-gradient-to-r from-white via-brand-200 to-white bg-clip-text text-transparent">
              Our Experience
            </span>
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-brand-400 to-purple-400 transition-all duration-1000 delay-500" style={{ width: isVisible ? '120px' : '0' }}></span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Building dreams and creating lasting legacies for over three decades
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'} hover:scale-105 border border-white/10 hover:border-white/20`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Animated Border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Icon */}
              <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-2xl`}>
                <i className={`${stat.icon} text-2xl text-white group-hover:animate-pulse`}></i>
              </div>

              {/* Number */}
              <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                <AnimatedCounter 
                  end={stat.number} 
                  suffix={stat.suffix}
                  duration={2000}
                />
              </div>

              {/* Label */}
              <p className="text-gray-300 font-medium group-hover:text-white transition-colors duration-300">
                {stat.label}
              </p>

              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`}></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <button className="group bg-gradient-to-r from-brand-600 to-purple-600 text-white px-10 py-4 rounded-full hover:from-brand-700 hover:to-purple-700 transition-all duration-300 font-semibold text-lg cursor-pointer transform hover:scale-105 shadow-2xl hover:shadow-brand-500/25">
            <span className="relative">
              Start Your Dream Project
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></span>
            </span>
            <i className="ri-arrow-right-line ml-2 group-hover:translate-x-2 transition-transform duration-300"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
