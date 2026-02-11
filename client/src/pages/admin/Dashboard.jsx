import DashboardCard from '../../components/admin/DashboardCard';
import { Users, BookOpen, Calendar, Newspaper } from 'lucide-react';

const Dashboard = () => {
    const stats = [
        {
            title: 'Total Students',
            value: '2,543',
            icon: <Users size={24} />,
            change: '12',
            changeType: 'increase',
            color: 'bg-blue-500',
        },
        {
            title: 'Total Faculty',
            value: '145',
            icon: <BookOpen size={24} />,
            change: '4',
            changeType: 'increase',
            color: 'bg-green-500',
        },
        {
            title: 'Upcoming Events',
            value: '8',
            icon: <Calendar size={24} />,
            change: '2',
            changeType: 'decrease',
            color: 'bg-purple-500',
        },
        {
            title: 'News Articles',
            value: '24',
            icon: <Newspaper size={24} />,
            change: '5',
            changeType: 'increase',
            color: 'bg-orange-500',
        },
    ];

    return (
        <div>
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Dashboard Overview</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <DashboardCard key={index} {...stat} />
                ))}
            </div>

            <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h3 className="text-lg font-bold text-gray-800 mb-4">Recent Activities</h3>
                    <p className="text-gray-500 text-sm">No recent activities to show.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h3 className="text-lg font-bold text-gray-800 mb-4">Quick Actions</h3>
                    <div className="grid grid-cols-2 gap-4">
                        <button className="p-3 bg-blue-50 text-blue-600 rounded-lg text-sm font-medium hover:bg-blue-100 transition-colors">
                            Add New Student
                        </button>
                        <button className="p-3 bg-green-50 text-green-600 rounded-lg text-sm font-medium hover:bg-green-100 transition-colors">
                            Create Event
                        </button>
                        <button className="p-3 bg-purple-50 text-purple-600 rounded-lg text-sm font-medium hover:bg-purple-100 transition-colors">
                            Post News
                        </button>
                        <button className="p-3 bg-orange-50 text-orange-600 rounded-lg text-sm font-medium hover:bg-orange-100 transition-colors">
                            Add Faculty
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
