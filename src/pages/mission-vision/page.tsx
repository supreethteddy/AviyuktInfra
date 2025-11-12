const MissionVisionPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Mission & Vision</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 rounded-xl border border-gray-200">
            <h2 className="text-2xl font-semibold mb-3 text-gray-900">Our Mission</h2>
            <p className="text-gray-600">
              Build homes and spaces that elevate everyday living through thoughtful design,
              quality construction, and timely delivery.
            </p>
          </div>
          <div className="p-6 rounded-xl border border-gray-200">
            <h2 className="text-2xl font-semibold mb-3 text-gray-900">Our Vision</h2>
            <p className="text-gray-600">
              Be a trusted name in real estate, known for integrity, transparency, and
              long-term customer relationships.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVisionPage;

