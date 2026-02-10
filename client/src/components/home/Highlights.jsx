import { Trophy, Users, BookOpen, Award } from 'lucide-react';

const Highlights = () => {
  const stats = [
    {
      icon: Trophy,
      value: '95%',
      label: 'Placement Rate',
      description: 'Students placed in top companies',
      color: 'bg-blue-500'
    },
    {
      icon: Users,
      value: '100+',
      label: 'Expert Faculty',
      description: 'Experienced & qualified professors',
      color: 'bg-purple-500'
    },
    {
      icon: BookOpen,
      value: '50+',
      label: 'Research Papers',
      description: 'Published annually',
      color: 'bg-green-500'
    },
    {
      icon: Award,
      value: 'A+',
      label: 'NAAC Grade',
      description: 'Accredited institution',
      color: 'bg-orange-500'
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary-600 to-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Why Choose AJCE?
          </h2>
          <p className="text-lg text-gray-100 max-w-2xl mx-auto">
            Our commitment to excellence is reflected in our achievements and the success of our students.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300 hover:transform hover:-translate-y-2"
            >
              <div className={`${stat.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-xl font-semibold mb-1">{stat.label}</div>
              <div className="text-sm text-gray-200">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Additional Highlights */}
        <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
          <div className="p-4 border-l-4 border-secondary-400">
            <div className="text-2xl font-bold mb-1">200+</div>
            <div className="text-gray-200">Industry Partnerships</div>
          </div>
          <div className="p-4 border-l-4 border-secondary-400">
            <div className="text-2xl font-bold mb-1">₹8.5 LPA</div>
            <div className="text-gray-200">Average Package</div>
          </div>
          <div className="p-4 border-l-4 border-secondary-400">
            <div className="text-2xl font-bold mb-1">4000+</div>
            <div className="text-gray-200">Alumni Worldwide</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
