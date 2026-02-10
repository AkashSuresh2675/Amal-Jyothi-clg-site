import { FileText, Calendar, Users, Target, Award, BookOpen } from 'lucide-react';
import Button from '../components/common/Button';
import Card from '../components/common/Card';

const Admissions = () => {
  const programsafe = [
    { name: 'Computer Science & Engineering', seats: 60, duration: '4 Years' },
    { name: 'Electronics & Communication Engineering', seats: 60, duration: '4 Years' },
    { name: 'Mechanical Engineering', seats: 30, duration: '4 Years' },
    { name: 'Civil Engineering', seats: 30, duration: '4 Years' },
  ];

  const admissionProcess = [
    { step: '1', title: 'Application', desc: 'Fill the online application form with required details' },
    { step: '2', title: 'Entrance Exam', desc: 'Qualify in KEAM or other approved entrance exams' },
    { step: '3', title: 'Counseling', desc: 'Attend counseling sessions as per merit rank' },
    { step: '4', title: 'Document Verification', desc: 'Submit original documents for verification' },
    { step: '5', title: 'Fee Payment', desc: 'Pay admission fees and confirm your seat' },
    { step: '6', title: 'Enrollment', desc: 'Complete enrollment formalities and join' },
  ];

  const eligibility = [
    'Passed 10+2 or equivalent with Physics, Chemistry, and Mathematics',
    'Minimum 50% aggregate marks (45% for SC/ST candidates)',
    'Valid score in KEAM / JEE Main / any other approved entrance exam',
    'Age limit as per university norms',
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-600 to-primary-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Admissions</h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-100 mb-8">
            Begin your journey towards a successful engineering career
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-primary-600 hover:bg-gray-100">
            Apply Now
          </Button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Programs Offered */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Programs Offered</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {programsafe.map((program, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{program.name}</h3>
                    <div className="flex items-center text-gray-600 space-x-4 text-sm">
                      <span className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {program.seats} Seats
                      </span>
                      <span className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {program.duration}
                      </span>
                    </div>
                  </div>
                  <Award className="h-8 w-8 text-primary-600" />
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Eligibility Criteria */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Eligibility Criteria</h2>
          <Card className="p-8 bg-gradient-to-br from-primary-50 to-white">
            <div className="grid md:grid-cols-2 gap-6">
              {eligibility.map((criteria, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center mr-3">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 mt-1">{criteria}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Admission Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Admission Process</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {admissionProcess.map((process, index) => (
              <div key={index} className="relative">
                <Card className="p-6 text-center h-full">
                  <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                    {process.step}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{process.title}</h3>
                  <p className="text-sm text-gray-600">{process.desc}</p>
                </Card>
                {index < admissionProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-2 transform translate-x-1/2 -translate-y-1/2 text-primary-400">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Important Dates */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Important Dates</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center bg-blue-50">
              <Calendar className="h-10 w-10 text-blue-600 mx-auto mb-3" />
              <h3 className="font-bold text-gray-900 mb-1">Application Opens</h3>
              <p className="text-2xl font-bold text-blue-600">May 1, 2024</p>
            </Card>
            <Card className="p-6 text-center bg-purple-50">
              <Calendar className="h-10 w-10 text-purple-600 mx-auto mb-3" />
              <h3 className="font-bold text-gray-900 mb-1">Last Date to Apply</h3>
              <p className="text-2xl font-bold text-purple-600">June 30, 2024</p>
            </Card>
            <Card className="p-6 text-center bg-green-50">
              <Calendar className="h-10 w-10 text-green-600 mx-auto mb-3" />
              <h3 className="font-bold text-gray-900 mb-1">Entrance Exam</h3>
              <p className="text-2xl font-bold text-green-600">July 15, 2024</p>
            </Card>
            <Card className="p-6 text-center bg-orange-50">
              <Calendar className="h-10 w-10 text-orange-600 mx-auto mb-3" />
              <h3 className="font-bold text-gray-900 mb-1">Classes Begin</h3>
              <p className="text-2xl font-bold text-orange-600">Aug 1, 2024</p>
            </Card>
          </div>
        </div>

        {/* Documents Required */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Documents Required</h2>
          <Card className="p-8">
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'KEAM / JEE Main Admit Card & Score Card',
                '10th & 12th Mark Sheets',
                'Transfer Certificate',
                'Migration Certificate (if applicable)',
                'Conduct Certificate',
                'Community Certificate (if applicable)',
                'Income Certificate (for scholarship)',
                'Passport size photographs',
              ].map((doc, index) => (
                <div key={index} className="flex items-center">
                  <FileText className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{doc}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-primary-600 to-primary-900 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Apply?</h2>
          <p className="text-xl mb-8 text-gray-100">
            Start your application today and join our community of future engineers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary-600 hover:bg-gray-100">
              Apply Online
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Download Prospectus
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admissions;
