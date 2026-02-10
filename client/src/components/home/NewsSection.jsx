import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import Card from '../common/Card';
import Button from '../common/Button';

const NewsSection = () => {
  // Sample news data - will be replaced with API data
  const newsItems = [
    {
      id: 1,
      title: 'AJCE Students Win National Hackathon',
      excerpt: 'Team from Computer Science department secures first place in CodeSprint 2024 with innovative AI solution.',
      category: 'Achievement',
      date: '2024-01-15',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400',
    },
    {
      id: 2,
      title: 'New Research Center Inaugurated',
      excerpt: 'State-of-the-art AI & ML Research Center opens, equipped with latest technology and computing facilities.',
      category: 'Infrastructure',
      date: '2024-01-12',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400',
    },
    {
      id: 3,
      title: 'MoU Signed with Tech Giants',
      excerpt: 'College partners with leading tech companies for student internships, training, and placement opportunities.',
      category: 'Collaboration',
      date: '2024-01-10',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400',
    },
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <div className="inline-block px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm font-medium mb-4">
              Latest Updates
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              News & Events
            </h2>
            <p className="text-lg text-gray-600">
              Stay updated with the latest happenings at AJCE
            </p>
          </div>
          <Link to="/news" className="mt-4 md:mt-0">
            <Button variant="outline">
              View All News
            </Button>
          </Link>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((news) => (
            <Card key={news.id} hover>
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={news.image} 
                  alt={news.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary-600 text-white text-xs font-medium rounded-full">
                    {news.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  {formatDate(news.date)}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                  {news.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {news.excerpt}
                </p>
                <Link 
                  to={`/news/${news.id}`}
                  className="text-primary-600 hover:text-primary-700 font-medium flex items-center"
                >
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
