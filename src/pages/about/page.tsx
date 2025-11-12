const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-brand-50 to-white">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Aviyukt Infra</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Aviyukt Infra is a professional real estate developer delivering quality residential and commercial
            projects with integrity and customer-first execution. We believe in thoughtful design, transparent
            processes and long-term trust.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-xl border border-gray-200">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Our Mission</h3>
            <p className="text-gray-600">
              Build spaces that elevate everyday living through quality, value and timely delivery.
            </p>
          </div>
          <div className="p-6 rounded-xl border border-gray-200">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Our Vision</h3>
            <p className="text-gray-600">
              Become a trusted brand in real estate by consistently exceeding expectations.
            </p>
          </div>
          <div className="p-6 rounded-xl border border-gray-200">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Core Values</h3>
            <p className="text-gray-600">
              Integrity, quality, transparency, and customer delight.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

