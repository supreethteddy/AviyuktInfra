
const ProcessSection = () => {
  const processes = [
    {
      id: 1,
      title: "Planning and Designing",
      description: "This initial step involves conceptualizing the project, creating plans, and obtaining necessary permits.",
      icon: "ri-draft-line"
    },
    {
      id: 2,
      title: "Site Preparation and Foundation",
      description: "Once the plans are finalized and permits are obtained, the site preparation begins. This may involve clearing land, grading, and excavation.",
      icon: "ri-hammer-line"
    },
    {
      id: 3,
      title: "Construction",
      description: "With the foundation in place, the actual construction of the building begins. This includes erecting walls, installing roofing, plumbing, electrical systems.",
      icon: "ri-building-2-line"
    },
    {
      id: 4,
      title: "Finishing Touches and Inspection",
      description: "After the major construction work is completed, the finishing touches are added.",
      icon: "ri-check-double-line"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Video/Image */}
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://nutanconstruction.com/public/assets/assets_web/images/why1.jpg" 
                alt="Construction Process"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <button className="w-20 h-20 bg-brand-600 rounded-full flex items-center justify-center hover:bg-brand-700 transition-colors cursor-pointer">
                  <i className="ri-play-fill text-white text-3xl ml-1"></i>
                </button>
              </div>
            </div>
          </div>

          {/* Right - Process Steps */}
          <div>
            <div className="mb-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                WATCH US HOW WE <span className="text-brand-600">CREATE YOUR DREAM</span>
              </h2>
              <div className="w-20 h-1 bg-brand-600"></div>
            </div>

            <div className="space-y-8">
              {processes.map((process) => (
                <div key={process.id} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-brand-600 text-white rounded-lg flex items-center justify-center font-bold text-lg">
                      {process.id}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{process.title}</h3>
                    <div className="w-16 h-0.5 bg-brand-600 mb-3"></div>
                    <p className="text-gray-600 leading-relaxed">{process.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
