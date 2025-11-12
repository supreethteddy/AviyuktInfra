
const LifestyleSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="mb-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Make Living Great. Foster Joy & Prosperity.
              </h2>
              <div className="w-20 h-1 bg-brand-600"></div>
            </div>
            
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                We use world-class materials, the latest design principles and expert architects and 
                contractors to develop prime real estate for residential and commercial purposes. We're 
                building communities where prime real estate isn't just within reach, it's convenient.
              </p>
              
              <p>
                The best things in life are experiences. And we're working hard to provide them for you. 
                We're investing in the future. Our many happy customers are our future.
              </p>
              
              <p>
                We strive to facilitate an amazing lifestyle that you deserve, ensuring all your desires 
                are fulfilled. Our commitment to architectural excellence offers unmatched value for you 
                and yours. For more information on investment opportunities in prime real estate, get in 
                touch with the best builders in Bihar.
              </p>
            </div>
          </div>

          {/* Right Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src="https://nutanconstruction.com/public/assets/assets_web/images/pic22.jpg" 
                  alt="Lifestyle Image 1"
                  className="w-full h-48 object-cover rounded-lg shadow-lg"
                />
                <img 
                  src="https://nutanconstruction.com/public/assets/assets_web/images/pic111.jpg" 
                  alt="Lifestyle Image 2"
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="mt-8">
                <img 
                  src="https://nutanconstruction.com/public/assets/assets_web/images/pic333.jpg" 
                  alt="Lifestyle Image 3"
                  className="w-full h-80 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifestyleSection;
