
const BankingPartnersSection = () => {
  const bankingPartners = [
    {
      id: 1,
      name: "Banking Partner 1",
      logo: "https://nutanconstruction.com/public/assets/assets_web/images/bp1.png"
    },
    {
      id: 2,
      name: "Banking Partner 2",
      logo: "https://nutanconstruction.com/public/assets/assets_web/images/bp2.png"
    },
    {
      id: 3,
      name: "Banking Partner 3",
      logo: "https://nutanconstruction.com/public/assets/assets_web/images/bp3.png"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">OUR BANKING PARTNERS</h2>
          <div className="w-20 h-1 bg-brand-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {bankingPartners.map((partner) => (
            <div key={partner.id} className="flex justify-center">
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-full max-w-xs">
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="w-full h-20 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 text-lg">
            Trusted by leading financial institutions for home loan approvals
          </p>
        </div>
      </div>
    </section>
  );
};

export default BankingPartnersSection;
