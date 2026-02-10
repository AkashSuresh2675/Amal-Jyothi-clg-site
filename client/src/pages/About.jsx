import { CheckCircle, Target, Eye, Award, Users, BookOpen } from 'lucide-react';
import Button from '../components/common/Button';

const About = () => {
  const values = [
    { icon: Target, title: 'Excellence', desc: 'Striving for the highest standards in education and research' },
    { icon: Users, title: 'Innovation', desc: 'Fostering creativity and entrepreneurial thinking' },
    { icon: Award, title: 'Integrity', desc: 'Upholding ethical values and transparency' },
    { icon: BookOpen, title: 'Inclusivity', desc: 'Creating an environment of diversity and respect' },
  ];

  const milestones = [
    { year: '2001', event: 'College Established' },
    { year: '2005', event: 'First Batch Graduated' },
    { year: '2010', event: 'NAAC Accreditation' },
    { year: '2015', event: 'Research Center Opened' },
    { year: '2020', event: 'NAAC A+ Grade' },
    { year: '2024', event: '4000+ Alumni Network' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-600 to-primary-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">About AJCE</h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-100">
            A legacy of excellence in engineering education since 2001
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Who We Are</h2>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              Amal Jyothi College of Engineering (AJCE) is a premier engineering institution located in Kottayam, Kerala. Established in 2001, we have been at the forefront of technical education, producing skilled engineers who excel globally.
            </p>
            <p className="text-gray-600 mb-6">
              Our college is affiliated with APJ Abdul Kalam Technological University and approved by AICTE. With NAAC A+ accreditation, we maintain the highest standards of academic excellence and infrastructure.
            </p>
            <div className="space-y-3">
              {['Industry-aligned curriculum', 'State-of-the-art laboratories', 'Experienced faculty', 'Strong industry partnerships'].map((item, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-primary-600 mr-3" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1562774053-701939374585?w=800"
              alt="AJCE Campus"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>

        {/* Vision & Mission */}
        <div id="vision" className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-primary-50 rounded-lg p-8">
            <Eye className="h-12 w-12 text-primary-600 mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              To be a center of excellence in engineering education and research, nurturing technically competent, innovative, and socially responsible engineers who contribute to nation-building and global development.
            </p>
          </div>
          <div className="bg-secondary-50 rounded-lg p-8">
            <Target className="h-12 w-12 text-secondary-600 mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Provide quality engineering education</li>
              <li>• Foster research and innovation</li>
              <li>• Develop industry-ready professionals</li>
              <li>• Promote ethical and social values</li>
              <li>• Encourage entrepreneurship</li>
            </ul>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Core Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <value.icon className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Journey</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {milestones.map((milestone, index) => (
              <div key={index} className="bg-gradient-to-br from-primary-50 to-white p-6 rounded-lg border-l-4 border-primary-600">
                <div className="text-3xl font-bold text-primary-600 mb-2">{milestone.year}</div>
                <div className="text-gray-700">{milestone.event}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-br from-primary-600 to-primary-900 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Join Our Legacy</h2>
          <p className="text-xl mb-8 text-gray-100">
            Be part of a community that shapes the future of engineering
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-primary-600 hover:bg-gray-100">
            Apply for Admissions
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;
