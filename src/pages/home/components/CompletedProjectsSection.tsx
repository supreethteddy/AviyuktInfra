
import { useEffect, useState } from 'react';

const CompletedProjectsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [completedProjects, setCompletedProjects] = useState<Array<{
    id: number;
    name: string;
    location: string;
    image: string;
  }>>([
    {
      id: 1,
      name: "Aviyukt Residency",
      location: "Rajendra Nagar, Patna",
      image: "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&w=1600&q=60"
    },
    {
      id: 2,
      name: "Aviyukt Greens",
      location: "Bailey Road, Patna",
      image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=1600&q=60"
    },
    {
      id: 3,
      name: "Aviyukt Plaza",
      location: "Boring Road, Patna",
      image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1600&q=60"
    },
    {
      id: 4,
      name: "Aviyukt Enclave",
      location: "Kankarbagh, Patna",
      image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1600&q=60"
    },
    {
      id: 5,
      name: "Aviyukt Heights",
      location: "Fraser Road, Patna",
      image: "https://images.unsplash.com/photo-1472224371017-08207f84aaae?auto=format&fit=crop&w=1600&q=60"
    },
    {
      id: 6,
      name: "Aviyukt Square",
      location: "Ashok Rajpath, Patna",
      image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1600&q=60"
    }
  ]);

  useEffect(() => {
    const controller = new AbortController();
    fetch('/data/completed-projects.json', { signal: controller.signal })
      .then((res) => res.ok ? res.json() : Promise.reject(res.statusText))
      .then((data) => {
        if (Array.isArray(data) && data.length) {
          setCompletedProjects(data);
        }
      })
      .catch(() => {
        // keep fallback data
      });
    return () => controller.abort();
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(completedProjects.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(completedProjects.length / 3)) % Math.ceil(completedProjects.length / 3));
  };

  const getVisibleProjects = () => {
    const startIndex = currentSlide * 3;
    return completedProjects.slice(startIndex, startIndex + 3);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h4 className="text-brand-600 font-semibold mb-2">Successful Journey Of Aviyukt Infra</h4>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            PROJECT COMPLETED (YEAR-1990 TO 2025)
          </h2>
          <div className="w-20 h-1 bg-brand-600 mx-auto"></div>
        </div>

        <div className="relative">
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {getVisibleProjects().map((project) => (
              <div key={project.id} className="group">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{project.name}</h3>
                    <p className="text-gray-600">{project.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center space-x-4">
            <button 
              onClick={prevSlide}
              className="w-12 h-12 bg-brand-600 text-white rounded-full flex items-center justify-center hover:bg-brand-700 transition-colors cursor-pointer"
            >
              <i className="ri-arrow-left-line text-xl"></i>
            </button>
            <button 
              onClick={nextSlide}
              className="w-12 h-12 bg-brand-600 text-white rounded-full flex items-center justify-center hover:bg-brand-700 transition-colors cursor-pointer"
            >
              <i className="ri-arrow-right-line text-xl"></i>
            </button>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {Array.from({ length: Math.ceil(completedProjects.length / 3) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${
                  currentSlide === index ? 'bg-brand-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <a 
            href="/completed-projects" 
            className="inline-flex items-center bg-brand-600 text-white px-8 py-3 rounded-lg hover:bg-brand-700 transition-colors font-semibold cursor-pointer"
          >
            View All Completed Projects
            <i className="ri-arrow-right-line ml-2"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CompletedProjectsSection;
