
import { useState } from 'react';

const ProjectInquirySection = () => {
  const [selectedProject, setSelectedProject] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const projects = [
    { value: 'lotus-elegance', label: 'LOTUS ELEGANCE' },
    { value: 'lotus-plaza', label: 'LOTUS PLAZA' },
    { value: 'lotus-garden', label: 'LOTUS GARDEN' },
    { value: 'crescent', label: 'CRESCENT' }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedProject) {
      setSubmitMessage('Please select a project');
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const formData = new FormData();
      formData.append('project', selectedProject);

      const response = await fetch('https://readdy.ai/api/form/submit/project_inquiry', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        setSubmitMessage('Thank you! Your inquiry has been submitted successfully.');
        setSelectedProject('');
      } else {
        setSubmitMessage('Something went wrong. Please try again.');
      }
    } catch (error) {
      setSubmitMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-brand-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Interested in Our Projects?
            </h2>
            <p className="text-gray-600 mb-8">
              Select a running project to get more information and book your dream home
            </p>

            <form id="project-inquiry-form" data-readdy-form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <select
                  name="project"
                  value={selectedProject}
                  onChange={(e) => setSelectedProject(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent text-lg pr-8"
                  required
                >
                  <option value="">Select Running Project</option>
                  {projects.map((project) => (
                    <option key={project.value} value={project.value}>
                      {project.label}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-brand-600 text-white px-8 py-3 rounded-lg hover:bg-brand-700 transition-colors font-semibold text-lg whitespace-nowrap cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
                <i className="ri-arrow-right-line ml-2"></i>
              </button>
            </form>

            {submitMessage && (
              <div className={`mt-4 p-4 rounded-lg ${
                submitMessage.includes('successfully') 
                  ? 'bg-green-100 text-green-700' 
                  : 'bg-red-100 text-red-700'
              }`}>
                {submitMessage}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectInquirySection;
