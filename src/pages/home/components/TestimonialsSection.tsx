
import { useState } from 'react';

const TestimonialsSection = () => {
  const [currentVideo, setCurrentVideo] = useState(0);

  const testimonials = [
    {
      id: 1,
      video: "https://www.youtube.com/embed/MTgBTtG5RvA?si=Y8s5-_-QucP98d5r",
      title: "Customer Experience 1"
    },
    {
      id: 2,
      video: "https://www.youtube.com/embed/MTgBTtG5RvA?si=Y8s5-_-QucP98d5r",
      title: "Customer Experience 2"
    }
  ];

  const nextVideo = () => {
    setCurrentVideo((prev) => (prev + 1) % testimonials.length);
  };

  const prevVideo = () => {
    setCurrentVideo((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Experiences at Royal garden</h2>
          <h3 className="text-xl text-gray-600">Customer Testimonials for Aviyukt Infra's Pinnacle Project</h3>
          <div className="w-20 h-1 bg-brand-600 mx-auto mt-4"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* YouTube Embed */}
            <div className="bg-black rounded-lg overflow-hidden shadow-xl">
              <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                <iframe
                  key={testimonials[currentVideo].id}
                  className="absolute inset-0 w-full h-full"
                  src={testimonials[currentVideo].video}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Navigation Buttons */}
            <button 
              onClick={prevVideo}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-colors cursor-pointer"
            >
              <i className="ri-arrow-left-line text-xl text-gray-700"></i>
            </button>
            
            <button 
              onClick={nextVideo}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-colors cursor-pointer"
            >
              <i className="ri-arrow-right-line text-xl text-gray-700"></i>
            </button>
          </div>

          {/* Video Indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentVideo(index)}
                className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${
                  currentVideo === index ? 'bg-brand-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          {/* Video Title */}
          <div className="text-center mt-6">
            <h4 className="text-xl font-semibold text-gray-900">
              {testimonials[currentVideo].title}
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
