
const AdvantagesSection = () => {
  const advantages = [
    {
      id: 1,
      icon: "ri-building-line",
      title: "High-Quality Construction",
      description: "Premium materials and expert craftsmanship ensure lasting quality"
    },
    {
      id: 2,
      icon: "ri-line-chart-line",
      title: "Above Average Asset Appreciation",
      description: "Strategic locations ensuring excellent investment returns"
    },
    {
      id: 3,
      icon: "ri-time-line",
      title: "On-time Delivery",
      description: "Committed to delivering projects within promised timelines"
    },
    {
      id: 4,
      icon: "ri-money-rupee-circle-line",
      title: "Value For Money",
      description: "Competitive pricing with premium features and amenities"
    },
    {
      id: 5,
      icon: "ri-file-text-line",
      title: "Clear Hassle-Free Documents",
      description: "Transparent documentation process with legal compliance"
    },
    {
      id: 6,
      icon: "ri-customer-service-line",
      title: "Continuous Customer Support",
      description: "Dedicated support team for all your queries and concerns"
    }
  ];

  return (
    <section 
      className="py-20 relative"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1920&q=60')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-brand-900/85"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">AVIYUKT 6X ADVANTAGES</h2>
          <div className="w-20 h-1 bg-white mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div 
              key={advantage.id} 
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-8 text-center hover:bg-white/20 transition-all duration-300 group"
            >
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-brand-500 rounded-full flex items-center justify-center mx-auto group-hover:bg-brand-400 transition-colors">
                  <i className={`${advantage.icon} text-2xl text-white`}></i>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{advantage.title}</h3>
              <p className="text-gray-200 leading-relaxed">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
