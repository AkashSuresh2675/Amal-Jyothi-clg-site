import { Link } from 'react-router-dom';
import { Cpu, Zap, Cog, Building, ArrowRight, Users, Award, BookOpen } from 'lucide-react';
import Card from '../components/common/Card';

const Departments = () => {
  const departments = [
    {
      icon: Cpu,
      name: 'Computer Science & Engineering',
      code: 'CSE',
      description: 'Dive into the world of software development, AI, machine learning, cloud computing, and cutting-edge technologies. Our CSE program equips students with skills in programming, algorithms, data structures, and modern software architectures.',
      color: 'bg-blue-500',
      students: '240+',
      faculty: '18',
      labs: '8',
      slug: 'computer-science',
      highlights: [
        'AI & Machine Learning Lab',
        'Cloud Computing Center',
        'Software Development Studio',
        'Cybersecurity Lab'
      ]
    },
    {
      icon: Zap,
      name: 'Electronics & Communication Engineering',
      code: 'ECE',
      description: 'Master the fundamentals of electronics, embedded systems, VLSI design, signal processing, and wireless communications. Our ECE program focuses on both theoretical concepts and hands-on experience with modern electronic systems.',
      color: 'bg-purple-500',
      students: '180+',
      faculty: '15',
      labs: '7',
      slug: 'electronics-communication',
      highlights: [
        'VLSI Design Lab',
        'Embedded Systems Lab',
        'Communication Systems Lab',
        'IoT Research Center'
      ]
    },
    {
      icon: Cog,
      name: 'Mechanical Engineering',
      code: 'ME',
      description: 'Explore the principles of mechanics, thermodynamics, manufacturing, robotics, and automotive engineering. Our ME program combines traditional mechanical engineering with modern technologies like CAD/CAM and automation.',
      color: 'bg-orange-500',
      students: '120+',
      faculty: '12',
      labs: '6',
      slug: 'mechanical',
      highlights: [
        'CAD/CAM Lab',
        'Robotics Workshop',
        'Thermal Engineering Lab',
        'Manufacturing Lab'
      ]
    },
    {
      icon: Building,
      name: 'Civil Engineering',
      code: 'CE',
      description: 'Learn to design and build sustainable infrastructure, smart cities, green buildings, and transportation systems. Our CE program emphasizes environmental sustainability and modern construction techniques.',
      color: 'bg-green-500',
      students: '120+',
      faculty: '12',
      labs: '5',
      slug: 'civil',
      highlights: [
        'Structural Engineering Lab',
        'Geotechnical Lab',
        'Environmental Engineering Lab',
        'Survey Camp'
      ]
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-600 to-primary-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Academic Departments</h1>
            <p className="text-xl max-w-3xl mx-auto text-gray-100">
              Choose from our industry-aligned engineering programs designed to prepare you for the future
            </p>
          </div>
        </div>
      </div>

      {/* Departments List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-12">
          {departments.map((dept, index) => (
            <Card key={index} hover className="overflow-hidden">
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Left Column - Icon & Basic Info */}
                <div className={`${dept.color} p-8 text-white`}>
                  <dept.icon className="h-16 w-16 mb-4" />
                  <div className="text-sm font-semibold opacity-90 mb-2">{dept.code}</div>
                  <h2 className="text-2xl font-bold mb-6">{dept.name}</h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Users className="h-5 w-5 mr-3" />
                      <div>
                        <div className="text-sm opacity-90">Students</div>
                        <div className="font-bold">{dept.students}</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Award className="h-5 w-5 mr-3" />
                      <div>
                        <div className="text-sm opacity-90">Faculty</div>
                        <div className="font-bold">{dept.faculty} Members</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <BookOpen className="h-5 w-5 mr-3" />
                      <div>
                        <div className="text-sm opacity-90">Labs</div>
                        <div className="font-bold">{dept.labs} Facilities</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Middle & Right Columns - Description & Details */}
                <div className="lg:col-span-2 p-8">
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    {dept.description}
                  </p>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Facilities</h3>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {dept.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-center text-gray-700">
                          <ArrowRight className="h-4 w-4 text-primary-600 mr-2" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link 
                    to={`/departments/${dept.slug}`}
                    className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
                  >
                    Learn More About {dept.code}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-lg text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">660+</div>
            <div className="text-gray-700 font-medium">Total Students</div>
          </div>
          <div className="bg-gradient-to-br from-secondary-50 to-white p-8 rounded-lg text-center">
            <div className="text-4xl font-bold text-secondary-600 mb-2">57</div>
            <div className="text-gray-700 font-medium">Faculty Members</div>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-lg text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">26</div>
            <div className="text-gray-700 font-medium">Laboratories</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Departments;
