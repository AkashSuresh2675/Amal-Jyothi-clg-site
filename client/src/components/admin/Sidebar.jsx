import { Link, useLocation } from 'react-router-dom';
import {
    LayoutDashboard,
    Newspaper,
    Calendar,
    Building2,
    Users,
    LogOut,
} from 'lucide-react';
import useAuth from '../../hooks/useAuth';

const Sidebar = () => {
    const { pathname } = useLocation();
    const { logout } = useAuth();

    const links = [
        {
            name: 'Dashboard',
            path: '/admin/dashboard',
            icon: <LayoutDashboard size={20} />,
        },
        {
            name: 'Manage News',
            path: '/admin/news',
            icon: <Newspaper size={20} />,
        },
        {
            name: 'Manage Events',
            path: '/admin/events',
            icon: <Calendar size={20} />,
        },
        {
            name: 'Manage Departments',
            path: '/admin/departments',
            icon: <Building2 size={20} />,
        },
        {
            name: 'Manage Faculty',
            path: '/admin/faculty',
            icon: <Users size={20} />,
        },
    ];

    return (
        <div className="h-screen w-64 bg-gray-900 text-white fixed left-0 top-0 flex flex-col">
            <div className="p-6 border-b border-gray-800">
                <h1 className="text-xl font-bold">Admin Panel</h1>
            </div>

            <nav className="flex-1 p-4 space-y-2">
                {links.map((link) => (
                    <Link
                        key={link.path}
                        to={link.path}
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${pathname === link.path
                                ? 'bg-blue-600 text-white'
                                : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                            }`}
                    >
                        {link.icon}
                        <span>{link.name}</span>
                    </Link>
                ))}
            </nav>

            <div className="p-4 border-t border-gray-800">
                <button
                    onClick={logout}
                    className="flex items-center gap-3 px-4 py-3 w-full text-left text-red-400 hover:bg-gray-800 rounded-lg transition-colors"
                >
                    <LogOut size={20} />
                    <span>Logout</span>
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
