import { Link } from 'react-router-dom';
import { CheckCircle, Award, Users, Globe } from 'lucide-react';
import Button from '../common/Button';

const AboutPreview = () => {
  const features = [
    { icon: Award, title: 'NAAC A+ Accredited', desc: 'Recognized for academic excellence' },
    { icon: Users, title: 'Expert Faculty', desc: '100+ experienced professors' },
    { icon: Globe, title: 'Global Opportunities', desc: 'International collaborations' },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="/assets/images/about-college.jpg" 
                alt="About AJCE" 
                className="w-full h-[400px] object-cover"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800';
                }}
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary-600 text-white p-6 rounded-lg shadow-xl">
              <div className="text-3xl font-bold">20+</div>
              <div className="text-sm">Years of Excellence</div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="inline-block px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm font-medium mb-4">
              About Us
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Building Tomorrow's Engineers Today
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Amal Jyothi College of Engineering, established in 2001, is a premier engineering institution dedicated to nurturing innovative minds and shaping future leaders in technology and engineering.
            </p>
            <p className="text-gray-600 mb-8">
              Our state-of-the-art infrastructure, industry-aligned curriculum, and commitment to holistic development make us one of Kerala's most sought-after engineering colleges.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center p-4 rounded-lg bg-gray-50 hover:bg-primary-50 transition-colors">
                  <feature.icon className="h-8 w-8 text-primary-600 mx-auto mb-2" />
                  <div className="font-semibold text-gray-900 text-sm mb-1">{feature.title}</div>
                  <div className="text-xs text-gray-600">{feature.desc}</div>
                </div>
              ))}
            </div>

            <Link to="/about">
              <Button size="lg">
                Discover More About Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
