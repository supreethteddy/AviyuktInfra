
const VideoTestimonialsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Video Section */}
        <div className="text-center mb-16">
          <div className="relative mb-8">
            <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto flex items-center justify-center">
              <button className="w-20 h-20 bg-brand-600 rounded-full flex items-center justify-center hover:bg-brand-700 transition-colors cursor-pointer">
                <i className="ri-play-fill text-white text-3xl ml-1"></i>
              </button>
            </div>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            WE HAVE GREAT IDEAS<br />WITH DREAMS
          </h2>
          <div className="w-20 h-1 bg-brand-600 mx-auto"></div>
        </div>

        {/* Brand Partners */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-60 hover:opacity-100 transition-opacity">
          <div className="flex justify-center">
            <img 
              src="https://nutanconstruction.com/public/assets/assets_web/images/b1.png" 
              alt="Partner Brand"
              className="h-12 object-contain filter grayscale hover:grayscale-0 transition-all"
            />
          </div>
          <div className="flex justify-center">
            <img 
              src="https://nutanconstruction.com/public/assets/assets_web/images/b2.png" 
              alt="Partner Brand"
              className="h-12 object-contain filter grayscale hover:grayscale-0 transition-all"
            />
          </div>
          <div className="flex justify-center">
            <img 
              src="https://nutanconstruction.com/public/assets/assets_web/images/b3.png" 
              alt="Partner Brand"
              className="h-12 object-contain filter grayscale hover:grayscale-0 transition-all"
            />
          </div>
          <div className="flex justify-center">
            <img 
              src="https://nutanconstruction.com/public/assets/assets_web/images/b4.png" 
              alt="Partner Brand"
              className="h-12 object-contain filter grayscale hover:grayscale-0 transition-all"
            />
          </div>
          <div className="flex justify-center">
            <img 
              src="https://nutanconstruction.com/public/assets/assets_web/images/b5.png" 
              alt="Partner Brand"
              className="h-12 object-contain filter grayscale hover:grayscale-0 transition-all"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonialsSection;
