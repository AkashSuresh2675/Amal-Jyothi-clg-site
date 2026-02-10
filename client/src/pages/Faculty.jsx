import { useState, useEffect } from 'react';
import { Search, Mail, Phone, Linkedin, Award } from 'lucide-react';
import Card from '../components/common/Card';
import Loader from '../components/common/Loader';
import useFetch from '../hooks/useFetch';
import facultyService from '../services/facultyService';
import departmentService from '../services/departmentService';

const Faculty = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch departments
  const { data: departmentsData } = useFetch(() => departmentService.getAll());
  
  // Fetch faculty
  const { data: facultyData, loading } = useFetch(() => facultyService.getAll());

  const departments = departmentsData?.data || [];
  const faculty = facultyData?.data || [];

  // Filter faculty based on department and search
  const filteredFaculty = faculty.filter((member) => {
    const matchesDept = selectedDepartment === 'all' || member.department?._id === selectedDepartment;
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          member.designation.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesDept && matchesSearch;
  });

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-600 to-primary-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Our Faculty</h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-100">
            Meet our team of experienced and dedicated educators
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Filters */}
        <div className="mb-12 space-y-4 md:space-y-0 md:flex md:items-center md:justify-between">
          {/* Department Filter */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedDepartment('all')}
              className={`px-4 py-2 rounded-md font-medium transition-colors ${
                selectedDepartment === 'all'
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              All Departments
            </button>
            {departments.map((dept) => (
              <button
                key={dept._id}
                onClick={() => setSelectedDepartment(dept._id)}
                className={`px-4 py-2 rounded-md font-medium transition-colors ${
                  selectedDepartment === dept._id
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {dept.code}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search faculty..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent w-full md:w-64"
            />
          </div>
        </div>

        {/* Faculty Grid */}
        {loading ? (
          <Loader />
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFaculty.map((member) => (
              <Card key={member._id} hover>
                <div className="p-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-20 h-20 bg-gray-200 rounded-full flex-shrink-0 overflow-hidden">
                      {member.image ? (
                        <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-2xl font-bold text-gray-400">
                          {member.name.charAt(0)}
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                      <p className="text-sm text-primary-600 font-medium">{member.designation}</p>
                      <p className="text-sm text-gray-600">{member.department?.name}</p>
                    </div>
                  </div>

                  {member.specialization && member.specialization.length > 0 && (
                    <div className="mb-4">
                      <div className="text-xs font-semibold text-gray-500 mb-2">Specialization</div>
                      <div className="flex flex-wrap gap-1">
                        {member.specialization.slice(0, 3).map((spec, index) => (
                          <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {member.qualifications && member.qualifications.length > 0 && (
                    <div className="mb-4">
                      <div className="text-xs font-semibold text-gray-500 mb-1">Qualifications</div>
                      <div className="flex items-center text-sm text-gray-700">
                        <Award className="h-4 w-4 mr-1 text-primary-600" />
                        {member.qualifications.join(', ')}
                      </div>
                    </div>
                  )}

                  <div className="pt-4 border-t space-y-2">
                    {member.email && (
                      <div className="flex items-center text-sm text-gray-600">
                        <Mail className="h-4 w-4 mr-2 text-gray-400" />
                        <a href={`mailto:${member.email}`} className="hover:text-primary-600">
                          {member.email}
                        </a>
                      </div>
                    )}
                    {member.phone && (
                      <div className="flex items-center text-sm text-gray-600">
                        <Phone className="h-4 w-4 mr-2 text-gray-400" />
                        {member.phone}
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {!loading && filteredFaculty.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No faculty members found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Faculty;
