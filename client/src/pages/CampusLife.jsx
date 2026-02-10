import { Heart, Users, BookOpen, Music, Trophy, Camera, Dumbbell, TreePine } from 'lucide-react';
import Card from '../components/common/Card';

const CampusLife = () => {
  const facilities = [
    {
      icon: BookOpen,
      title: 'Central Library',
      description: 'Vast collection of 50,000+ books, journals, and digital resources.',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400',
    },
    {
      icon: Dumbbell,
      title: 'Sports Complex',
      description: 'State-of-the-art facilities for cricket, football, basketball, and indoor games.',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400',
    },
    {
      icon: Users,
      title: 'Hostels',
      description: 'Separate hostel facilities for boys and girls with modern amenities.',
      image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=400',
    },
    {
      icon: Heart,
      title: 'Medical Center',
      description: '24/7 medical facilities with qualified doctors and nurses.',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400',
    },
  ];

  const clubs = [
    { icon: Music, name: 'Music Club', members: '50+' },
    { icon: Camera, name: 'Photography Club', members: '40+' },
    { icon: Trophy, name: 'Sports Club', members: '100+' },
    { icon: BookOpen, name: 'Literary Club', members: '60+' },
    { icon: Users, name: 'Drama Club', members: '35+' },
    { icon: TreePine, name: 'Nature Club', members: '45+' },
  ];

  const events = [
    {
      name: 'Techfest',
      description: 'Annual technical festival with competitions, workshops, and guest lectures.',
      month: 'March',
    },
    {
      name: 'Cultural Fest',
      description: 'Celebrating diversity through music, dance, drama, and art.',
      month: 'January',
    },
    {
      name: 'Sports Meet',
      description: 'Inter-department sports competitions and athletic events.',
      month: 'November',
    },
    {
      name: 'Hackathon',
      description: '24-hour coding marathon with industry mentors and prizes.',
      month: 'September',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-600 to-primary-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Campus Life</h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-100">
            Experience a vibrant community where learning meets living
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Facilities */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Campus Facilities</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {facilities.map((facility, index) => (
              <Card key={index} hover>
                <div className="relative h-48 overflow-hidden">
                  <img src={facility.image} alt={facility.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <facility.icon className="h-8 w-8 mb-2" />
                    <h3 className="text-xl font-bold">{facility.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600">{facility.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Clubs & Activities */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Clubs & Activities</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Join our vibrant student clubs and explore your passions beyond academics
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {clubs.map((club, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <club.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{club.name}</h3>
                <p className="text-gray-600">{club.members} Active Members</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Annual Events */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Annual Events</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {events.map((event, index) => (
              <Card key={index} className="p-6 bg-gradient-to-br from-primary-50 to-white">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{event.name}</h3>
                  <span className="px-3 py-1 bg-primary-600 text-white text-sm rounded-full">
                    {event.month}
                  </span>
                </div>
                <p className="text-gray-700">{event.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Campus Gallery */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Campus Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'https://images.unsplash.com/photo-1562774053-701939374585?w=400',
              'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400',
              'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400',
              'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400',
              'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400',
              'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=400',
              'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400',
              'https://images.unsplash.com/photo-1529390079861-591de354faf5?w=400',
            ].map((image, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-lg">
                <img
                  src={image}
                  alt={`Campus ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampusLife;
