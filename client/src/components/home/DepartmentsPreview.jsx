import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, Zap, Cog, Building } from 'lucide-react';
import Card from '../common/Card';

const DepartmentsPreview = () => {
  const departments = [
    {
      icon: Cpu,
      name: 'Computer Science',
      code: 'CSE',
      description: 'Explore AI, ML, Cloud Computing and cutting-edge software development.',
      color: 'bg-blue-500',
      students: '240+',
      slug: 'computer-science'
    },
    {
      icon: Zap,
      name: 'Electronics & Communication',
      code: 'ECE',
      description: 'Master embedded systems, VLSI, IoT and wireless communications.',
      color: 'bg-purple-500',
      students: '180+',
      slug: 'electronics-communication'
    },
    {
      icon: Cog,
      name: 'Mechanical Engineering',
      code: 'ME',
      description: 'Learn robotics, manufacturing, thermal systems and automotive tech.',
      color: 'bg-orange-500',
      students: '120+',
      slug: 'mechanical'
    },
    {
      icon: Building,
      name: 'Civil Engineering',
      code: 'CE',
      description: 'Design sustainable infrastructure, smart cities and green buildings.',
      color: 'bg-green-500',
      students: '120+',
      slug: 'civil'
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm font-medium mb-4">
            Our Programs
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Academic Departments
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from our industry-aligned programs designed to prepare you for the challenges of tomorrow.
          </p>
        </div>

        {/* Departments Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {departments.map((dept, index) => (
            <Card key={index} hover className="group">
              <div className="p-6">
                <div className={`${dept.color} w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <dept.icon className="h-7 w-7 text-white" />
                </div>
                <div className="text-xs font-semibold text-gray-500 mb-1">{dept.code}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{dept.name}</h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">{dept.description}</p>
                <div className="flex items-center justify-between pt-4 border-t">
                  <span className="text-sm text-gray-500">{dept.students} Students</span>
                  <Link 
                    to={`/departments/${dept.slug}`}
                    className="text-primary-600 hover:text-primary-700 text-sm font-medium flex items-center"
                  >
                    Explore <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center">
          <Link 
            to="/departments"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-lg"
          >
            View All Departments
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DepartmentsPreview;
