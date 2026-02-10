import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Shape Your Future at
              <span className="block text-secondary-400">Amal Jyothi College</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-100 mb-8 leading-relaxed">
              Empowering students with world-class engineering education, cutting-edge research facilities, and industry-ready skills since 2001.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/admissions">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto bg-white text-primary-600 hover:bg-gray-100">
                  Apply Now <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white/10">
                  Learn More
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/20">
              <div>
                <div className="text-3xl font-bold">20+</div>
                <div className="text-sm text-gray-200">Years Excellence</div>
              </div>
              <div>
                <div className="text-3xl font-bold">95%</div>
                <div className="text-sm text-gray-200">Placement Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold">4000+</div>
                <div className="text-sm text-gray-200">Alumni Network</div>
              </div>
            </div>
          </div>

          {/* Image/Illustration */}
          <div className="hidden lg:block animate-slide-up">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary-400 to-primary-500 rounded-lg transform rotate-3"></div>
              <div className="relative bg-white/10 backdrop-blur-sm rounded-lg p-8 transform -rotate-1">
                <img 
                  src="/assets/images/campus-hero.jpg" 
                  alt="AJCE Campus" 
                  className="rounded-lg shadow-2xl"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1562774053-701939374585?w=800';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-12 sm:h-20">
          <path fill="#ffffff" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
