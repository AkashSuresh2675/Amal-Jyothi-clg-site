import { Outlet } from 'react-router-dom';
import Sidebar from '../components/admin/Sidebar';
import useAuth from '../hooks/useAuth';

const AdminLayout = () => {
    const { user } = useAuth();

    return (
        <div className="flex min-h-screen bg-gray-100">
            <Sidebar />
            <div className="flex-1 ml-64">
                <header className="bg-white shadow-sm h-16 flex items-center justify-between px-8">
                    <h2 className="text-xl font-semibold text-gray-800">
                        Welcome, {user?.name}
                    </h2>
                    <div className="flex items-center gap-4">
                        {/* Add profile dropdown or additional header items here */}
                        <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                            {user?.name?.charAt(0).toUpperCase()}
                        </div>
                    </div>
                </header>
                <main className="p-8">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;
