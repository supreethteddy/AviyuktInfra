const CoreValuesPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Core Values</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          <div className="p-6 rounded-xl border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-2">Integrity</h3>
            <p className="text-gray-600">We do what we say and act with honesty.</p>
          </div>
          <div className="p-6 rounded-xl border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-2">Quality</h3>
            <p className="text-gray-600">We obsess over craftsmanship and details.</p>
          </div>
          <div className="p-6 rounded-xl border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-2">Transparency</h3>
            <p className="text-gray-600">Clear communication and fair processes.</p>
          </div>
          <div className="p-6 rounded-xl border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-2">Customer Focus</h3>
            <p className="text-gray-600">We build lasting relationships with support.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreValuesPage;

