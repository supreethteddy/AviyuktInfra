
const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="mb-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                WE SERVE THE BEST FOR YOU
              </h2>
              <div className="w-20 h-1 bg-brand-600"></div>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Aviyukt Infra is a professional real estate developer with a strong presence in Patna and
              beyond, delivering residential and commercial projects with quality and trust.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              It is managed by highly qualified professionals who are fully engrossed to ensure that the 
              company maintains its high standards in quality construction, timely delivery, and customer satisfaction.
            </p>
            <a 
              href="/about" 
              className="inline-flex items-center text-brand-600 hover:text-brand-700 font-semibold text-lg transition-colors cursor-pointer"
            >
              Read More
              <i className="ri-arrow-right-line ml-2"></i>
            </a>
          </div>

          {/* Right Content */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <img 
                  src="https://nutanconstruction.com/public/assets/assets_web/images/about-img.jpg" 
                  alt="Aviyukt Infra Building" 
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
                <div className="bg-brand-600 text-white p-6 rounded-lg">
                  <h3 className="text-2xl font-bold mb-2">30+</h3>
                  <p className="text-brand-100">Years of Excellence</p>
                </div>
              </div>
              <div className="space-y-6 mt-12">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">100+</h3>
                  <p className="text-gray-600">Completed Projects</p>
                </div>
                <img 
                  src="https://readdy.ai/api/search-image?query=Modern%20residential%20apartment%20building%20construction%20site%20with%20workers%20and%20equipment%2C%20professional%20architecture%2C%20clean%20background%2C%20realistic%20photography%20style&width=400&height=300&seq=about2&orientation=landscape" 
                  alt="Construction Excellence" 
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
