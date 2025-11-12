import { useState } from 'react';

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);
    try {
      // No backend provided yet; simulate successful submission
      await new Promise((r) => setTimeout(r, 800));
      setMessage('Thanks! We have received your message and will get back to you soon.');
      (e.target as HTMLFormElement).reset();
    } catch {
      setMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-brand-50 to-white">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">Contact Us</h1>
          <p className="text-gray-600 max-w-2xl">
            Have a question about a project or want to schedule a site visit? Send us a message and our team will reach out.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-gray-200 p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Send a message</h2>
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full name</label>
                  <input name="name" required className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500" placeholder="Your name" />
                </div>
                <div className="col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input name="phone" required className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500" placeholder="+91 XXXXX XXXXX" />
                </div>
                <div className="col-span-1 md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" name="email" className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500" placeholder="you@example.com" />
                </div>
                <div className="col-span-1 md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea name="message" rows={5} className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500" placeholder="Tell us how we can help"></textarea>
                </div>
                <div className="col-span-1 md:col-span-2">
                  <button type="submit" disabled={isSubmitting} className="bg-brand-600 text-white px-6 py-3 rounded-lg hover:bg-brand-700 transition-colors disabled:opacity-50">
                    {isSubmitting ? 'Sending…' : 'Submit'}
                  </button>
                </div>
                {message && (
                  <div className="col-span-1 md:col-span-2">
                    <div className="mt-2 rounded-lg px-4 py-3 bg-green-50 text-green-800 border border-green-200">{message}</div>
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <div className="rounded-2xl border border-gray-200 p-6 md:p-8 shadow-sm space-y-6">
              <h2 className="text-2xl font-semibold text-gray-900">Reach us</h2>
              <div className="flex items-start space-x-3">
                <i className="ri-map-pin-line text-brand-600 mt-1"></i>
                <p className="text-gray-700">
                  Aviyukt infra developers, rps more, Patna, India 801503
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <i className="ri-phone-line text-brand-600"></i>
                <a className="text-gray-700 hover:text-brand-700" href="#">+91 9999910771</a>
              </div>
              <div className="flex items-center space-x-3">
                <i className="ri-mail-line text-brand-600"></i>
                <a className="text-gray-700 hover:text-brand-700" href="mailto:info@aviyuktinfra.com">info@aviyuktinfra.com</a>
              </div>
              <a
                className="inline-flex items-center text-brand-600 hover:text-brand-700"
                href="https://www.google.com/maps/place/Aviyukt+infra+developer/@25.6165459,85.0470498,17z/data=!3m1!4b1!4m6!3m5!1s0x39ed57bad9b738c3:0xff847cf0d6293cea!8m2!3d25.6165411!4d85.0496247!16s%2Fg%2F11srrwklc9?hl=en-US&entry=ttu&g_ep=EgoyMDI1MTEwOS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noreferrer"
              >
                View on Google Maps
                <i className="ri-arrow-right-line ml-2"></i>
              </a>
            </div>
            <div className="rounded-2xl overflow-hidden border border-gray-200 mt-8">
              <iframe
                title="Aviyukt Infra Map"
                src="https://www.google.com/maps?q=Aviyukt%20infra%20developer&output=embed"
                className="w-full"
                style={{ height: 300 }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;

